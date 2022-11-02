import OMDB from "@/api/OMDB";
import Pixabay from "@/api/Pixabay";
import pixabayHelper from "@/modules/Pixabay";
import utils from "./Utilities";
import type Question from "@/types/Question";

const getQuestionData = async (): Promise<Question> => {
    const randomMovie = await OMDB.getRandomMovie();
    const plotArray = makePlotArray(randomMovie.Plot);
    const pixabayData = await Pixabay.fetchWithArray(plotArray);

    return {
        question: "Using the images below, can you guess the movie title?",
        hint: "Hovering over the image will reveal the associated word.",
        answer: randomMovie.Title,
        plotImageArray: await pixabayHelper.getWordImageArray(pixabayData),
        guessArray: OMDB.movies,
        chosenMovie: randomMovie,
    };
};

const makePlotArray = (plot: string) => {
    plot = plot.replace(/[^a-zA-Z ]/g, "");
    const plotArray = plot.split(" ");
    const cleansedPlotArray = utils.removeCommonWordsFromArray(plotArray);
    const indexesToRemoveArray = utils.getIndexesToRemoveFromArray(cleansedPlotArray);

    return cleansedPlotArray.filter((word, index) => !indexesToRemoveArray.includes(index));
};

export default {
    getQuestionData: getQuestionData,
}
