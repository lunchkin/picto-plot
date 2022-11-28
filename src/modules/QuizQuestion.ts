import OMDB from "@/api/OMDB";
import Pixabay from "@/api/Pixabay";
import pixabayHelper from "@/modules/Pixabay";
import utils from "./Utilities";

const getQuestionData = async () : Promise<any> => {
	const randomMovie = await OMDB.getRandomMovie();
	const plotArray = makePlotArray(randomMovie.Plot);
	const pixabayData = await Pixabay.fetchWithArray(plotArray);
	const plotImageArray = pixabayHelper.getWordImageArray(pixabayData);

	return {
		question: "Using the images below, can you guess the movie title?",
		hint: "Hovering over the image will reveal the associated word.",
		plotImageArray: plotImageArray,
		guessArray: OMDB.movies,
		chosenMovie: randomMovie,
	};
};

const makePlotArray = (plot: string) : string[] => {
	plot = plot.replace(/[^a-zA-Z ]/g, "");
	const plotArray = plot.split(" ");
	const cleansedPlotArray = utils.removeCommonWordsFromArray(plotArray);
	const indexesToRemoveArray = utils.getIndexesToRemoveFromArray(cleansedPlotArray);

	return cleansedPlotArray.filter((word, index) => !indexesToRemoveArray.includes(index));
};

export default {
	getQuestionData: getQuestionData,
};
