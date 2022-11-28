import type ImageData from "../types/ImageData";

const getWordImageArray = (pixabayData : any) : ImageData[] => {
	return pixabayData.map((data: any) => {
		const imageData : ImageData = {
			word: data.word,
			url: ""
		};

		if (data.hits && data.hits.length) {
			imageData.url = data.hits[0].previewURL;
		}

		return imageData;
	});
};

export default {
	getWordImageArray: getWordImageArray,
};
