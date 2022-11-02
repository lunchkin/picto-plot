const getWordImageArray = async (pixabayData:any) => {
    return pixabayData.map((data: any) => {
        if (!data.hits || data.hits.length < 1) {
            return {
                word: data.word,
                image: null
            };
        }

        return {
            word: data.word,
            image: data.hits[0].previewURL
        };
    });
};

export default {
    getWordImageArray: getWordImageArray,
}
