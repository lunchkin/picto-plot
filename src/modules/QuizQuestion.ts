import OMDbHelper from "@/api/OMDbHelper";
import PixabayHelper from "@/api/PixabayHelper";
import utils from "./Utilities";

const getQuestionData = async () => {
    const randomMovie = await OMDbHelper.getRandomMovie();
    const plotArray = makePlotArray(randomMovie.Plot);

    console.log(plotArray);

    return randomMovie;
};

const makePlotArray = (plot: string) => {
    plot = utils.removeSpecialCharsFromString(plot);
    const plotArray = plot.split(" ");
    const cleansedPlotArray = utils.removeCommonWordsFromArray(plotArray);
    const indexesToRemoveArray = utils.getIndexesToRemoveFromArray(cleansedPlotArray);
    const trimmedArray = cleansedPlotArray.filter((word, index) => !indexesToRemoveArray.includes(index));

    return trimmedArray;
};

export default {
    getQuestionData: getQuestionData,
}
