const fetchWithWord = async (word: string) => {
    const response = await fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${word}&image_type=illustration`);
    const data = await response.json();

    if (data.hits.length < 1) {
        console.log(word);
    }

    data.word = word;

    return data;
};

const fetchWithArray = async (wordArray: string[]) => {
    const imageResults = await Promise.all(wordArray.map(async (word) => {
        const data = await fetchWithWord(word);
        return data;
    }));

    return imageResults;
};

export default {
    fetchWithWord: fetchWithWord,
    fetchWithArray: fetchWithArray,
}
