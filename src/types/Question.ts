import type Movie from "@/types/Movie";

type  Question = {
    question: string ;
    hint: string ;
    answer: string ;
    plotImageArray: Array <string>;
    guessArray: Array <Movie>;
    chosenMovie: Movie ;
};

export default Question;