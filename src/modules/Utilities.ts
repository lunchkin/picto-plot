const removeSpecialCharsFromString = (str: string) => {
    return str.replace(/[^a-zA-Z ]/g, "");
}

const getArrayFromString = (str: string) => {
    return str.split(" ");
};

const removeCommonWordsFromArray = (arr: string[]) => {
    const commonWords = [
        "a", "all", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "Middleearth",
        "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "swe", "truththe",
        "their", "then", "there", "these", "they", "this", "to", "was", "will", "with", "whose",
        "must", "before", "his", "when", "he", "over", "", "once", "more", "from", "set", "out",
        "solace", "eventual", "faustian", "crimeridden", "mewtwo", "pokemon", "pikachu", "dreamsharing", "pokmon"
    ];

    return arr.filter((word) => !commonWords.includes(word.toLowerCase()));
};

const getIndexesToRemoveFromArray = (arr: any[]) => {
    const randomNumberLimit = Math.max(0, arr.length - 10);
    const indexArray = [] as number[];

    let randomNumber = 0;

    if (randomNumberLimit < 1) {
        return indexArray;
    }

    while (indexArray.length < randomNumberLimit) {
        randomNumber = Math.floor(Math.random() * arr.length);

        if (indexArray.includes(randomNumber)) {
            for (let endIndex = arr.length - 1; endIndex >= 0; endIndex--) {
                if (!indexArray.includes(endIndex)) {
                    indexArray.push(endIndex);
                }

                break;
            }

            continue;
        }

        indexArray.push(randomNumber);
    }

    return indexArray;
}

export default {
    removeSpecialCharsFromString: removeSpecialCharsFromString,
    getArrayFromString: getArrayFromString,
    removeCommonWordsFromArray: removeCommonWordsFromArray,
    getIndexesToRemoveFromArray: getIndexesToRemoveFromArray
};
