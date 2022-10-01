const getWordImageArray = async (pixabayData:any) => {
    return pixabayData.map((data: any) => {
        const word = data.word;

        if (!data.hits || data.hits.length < 1) {
            return {
                word: word,
                image: null
            };
        }

        const image = data.hits[0].previewURL;

        return {word: word, image: image};
    });
};

export default {
    getWordImageArray: getWordImageArray,
}
