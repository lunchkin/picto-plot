import OMDB from "@/api/OMDB";
import Pixabay from "@/api/Pixabay";
import pixabayHelper from "@/modules/Pixabay";
import utils from "./Utilities";

const getQuestionData = async () => {
    const randomMovie = await OMDB.getRandomMovie();
    const plotArray = makePlotArray(randomMovie.Plot);
    const pixabayData = await Pixabay.fetchWithArray(plotArray);
    const wordImageArray = await pixabayHelper.getWordImageArray(pixabayData);
    const movieList = await OMDB.movies;

    // imdbID:
    return {
        question: "Using the images below, can you guess the movie title?",
        hint: "Hovering over the image will reveal the associated word.",
        answer: randomMovie.Title,
        plotImageArray: wordImageArray,
        guessArray: movieList,
        chosenMovie: randomMovie,
    };
};

const makePlotArray = (plot: string) => {
    plot = utils.removeSpecialCharsFromString(plot);
    const plotArray = plot.split(" ");
    const cleansedPlotArray = utils.removeCommonWordsFromArray(plotArray);
    const indexesToRemoveArray = utils.getIndexesToRemoveFromArray(cleansedPlotArray);

    return cleansedPlotArray.filter((word, index) => !indexesToRemoveArray.includes(index));
};

export default {
    getQuestionData: getQuestionData,
}
