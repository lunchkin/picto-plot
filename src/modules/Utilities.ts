const removeCommonWordsFromArray = (arr: string[]) : string[] => {
	const commonWords : string[] = [
		"a", "all", "an", "and", "are", "as", "at", "be", "but", "by", "for",
		"if", "in", "middleearth", "into", "is", "it", "no", "not", "of", "on",
		"or", "such", "that", "the", "swe", "truththe", "their", "then", "they",
		"these", "there", "this", "to", "was", "will", "with", "whose", "must",
		"before", "his", "when", "he", "over", "", "once", "more", "out", "set",
		"from", "solace", "eventual", "faustian", "crimeridden", "mewtwo",
		"pokemon", "pikachu", "dreamsharing", "pokmon"
	];

	return arr.filter((word) => !commonWords.includes(word.toLowerCase()));
};

const getIndexesToRemoveFromArray = (arr: any[]) : number[] => {
	const ARRAY_LIMIT : number = 10;
	const randomNumberLimit : number = Math.max(0, arr.length - ARRAY_LIMIT);
	const indexArray = [] as number[];

	let randomNumber = 0;

	if (randomNumberLimit < 1) {
		return indexArray;
	}

	while (indexArray.length < randomNumberLimit) {
		randomNumber = Math.floor(Math.random() * arr.length);

		if (indexArray.includes(randomNumber)) {
			let endIndex = arr.length - 1;

			while (endIndex > -1) {
				if (!indexArray.includes(endIndex)) {
					indexArray.push(endIndex);
				}

				endIndex--;
			}

			continue;
		}

		indexArray.push(randomNumber);
	}

	return indexArray;
};

export default {
	removeCommonWordsFromArray: removeCommonWordsFromArray,
	getIndexesToRemoveFromArray: getIndexesToRemoveFromArray
};
