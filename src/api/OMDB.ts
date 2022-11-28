import type IMDBMovie from "../types/IMDBMovie";

const MOVIES : IMDBMovie[] = [
	{ id: "tt4154756", name: "Avengers: Infinity War"},
	{ id: "tt4154796", name: "Avengers: Endgame"},
	{ id: "tt0111161", name: "The Shawshank Redemption"},
	{ id: "tt0120737", name: "The Lord of the Rings: The Fellowship of the Ring"},
	{ id: "tt0372784", name: "Batman Begins"},
	{ id: "tt0097757", name: "The Little Mermaid"},
	{ id: "tt0190641", name: "Pokemon: The First Movie"},
	{ id: "tt0109830", name: "Forrest Gump"},
	{ id: "tt1375666", name: "Inception"},
	{ id: "tt0133093", name: "The Matrix"},
];

async function fetchData(IMDBMovie : IMDBMovie) : Promise<any> {
	try {
		const response = await fetch(`https://www.omdbapi.com/?i=${IMDBMovie.id}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`);

		return await response.json();
	} catch (error) {
		console.log(error);
	}

	return false;
}

const getRandomMovie = async () => {
	console.log("here");
	return await fetchData(MOVIES[Math.floor(Math.random() * MOVIES.length)]);
};

const fetchMovies = async () => {
	return await Promise.all(MOVIES.map(async (movie : IMDBMovie) => {
		return await fetchData(movie);
	}));
};

const movieNameList = MOVIES.map(({ name }) =>  name);

export default {
	fetchMovies: fetchMovies,
	getRandomMovie: getRandomMovie,
	movieNameList: movieNameList,
	movies: MOVIES
};
