const fetchWithWord = async (word: string) => {
	const response = await fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${word}&image_type=illustration`);
	const data = await response.json();

	data.word = word;

	return data;
};

const fetchWithArray = async (wordArray: string[]) : Promise<any> => {
	try {
		return await Promise.all(wordArray.map(async (word) => {
			return await fetchWithWord(word);
		}));
	} catch (error) {
		console.log(error);
	}

	return false;
};

export default {
	fetchWithWord: fetchWithWord,
	fetchWithArray: fetchWithArray,
};
