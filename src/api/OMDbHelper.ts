const IMDB_IDS = [
    'tt4154756', // Avengers: Infinity War
    'tt4154796', // Avengers: Endgame
    'tt0111161', // The Shawshank Redemption
    'tt0120737', // The Lord of the Rings: The Fellowship of the Ring
    'tt0372784', // Batman Begins
    'tt0097757', // The Little Mermaid
    'tt0190641', // Pokemon: The First Movie
    'tt0109830', // Forrest Gump
    'tt1375666', // Inception
    'tt0133093', // The Matrix
];

const fetchData = async (IMDB_id: string) => {
    const response = await fetch(`https://www.omdbapi.com/?i=${IMDB_id}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`);
    const data = await response.json();

    return data;
};

const getRandomMovie = async () => {
    // Call fetchData with a random IMDB ID
    // const movie = await fetchData(IMDB_IDS[Math.floor(Math.random() * IMDB_IDS.length)]);

    const movie = jsonData[Math.floor(Math.random() * jsonData.length)]; // TODO: Change back when done testing

    return movie;
}

const fetchMovies = async () => {
    const movies = await Promise.all(IMDB_IDS.map(async (id) => {
        const data = await fetchData(id);
        return data;
    }));

    return jsonData;
    return movies;
};

export default {
    fetchData: fetchData,
    fetchMovies: fetchMovies,
    getRandomMovie: getRandomMovie,
};

const jsonData = [
    {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "Rated": "PG-13",
        "Released": "27 Apr 2018",
        "Runtime": "149 min",
        "Genre": "Action, Adventure, Sci-Fi",
        "Director": "Anthony Russo, Joe Russo",
        "Writer": "Christopher Markus, Stephen McFeely, Stan Lee",
        "Actors": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo",
        "Plot": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 1 Oscar. 46 wins & 79 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "85%"
            },
            {
                "Source": "Metacritic",
                "Value": "68/100"
            }
        ],
        "Metascore": "68",
        "imdbRating": "8.4",
        "imdbVotes": "1,049,132",
        "imdbID": "tt4154756",
        "Type": "movie",
        "DVD": "14 Aug 2018",
        "BoxOffice": "$678,815,482",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Avengers: Endgame",
        "Year": "2019",
        "Rated": "PG-13",
        "Released": "26 Apr 2019",
        "Runtime": "181 min",
        "Genre": "Action, Adventure, Drama",
        "Director": "Anthony Russo, Joe Russo",
        "Writer": "Christopher Markus, Stephen McFeely, Stan Lee",
        "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo",
        "Plot": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        "Language": "English, Japanese, Xhosa, German",
        "Country": "United States",
        "Awards": "Nominated for 1 Oscar. 70 wins & 132 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "78/100"
            }
        ],
        "Metascore": "78",
        "imdbRating": "8.4",
        "imdbVotes": "1,093,492",
        "imdbID": "tt4154796",
        "Type": "movie",
        "DVD": "30 Jul 2019",
        "BoxOffice": "$858,373,000",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "The Shawshank Redemption",
        "Year": "1994",
        "Rated": "R",
        "Released": "14 Oct 1994",
        "Runtime": "142 min",
        "Genre": "Drama",
        "Director": "Frank Darabont",
        "Writer": "Stephen King, Frank Darabont",
        "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton",
        "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 7 Oscars. 21 wins & 43 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "9.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "91%"
            },
            {
                "Source": "Metacritic",
                "Value": "81/100"
            }
        ],
        "Metascore": "81",
        "imdbRating": "9.3",
        "imdbVotes": "2,627,451",
        "imdbID": "tt0111161",
        "Type": "movie",
        "DVD": "21 Dec 1999",
        "BoxOffice": "$28,767,189",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "The Lord of the Rings: The Fellowship of the Ring",
        "Year": "2001",
        "Rated": "PG-13",
        "Released": "19 Dec 2001",
        "Runtime": "178 min",
        "Genre": "Action, Adventure, Drama",
        "Director": "Peter Jackson",
        "Writer": "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
        "Actors": "Elijah Wood, Ian McKellen, Orlando Bloom",
        "Plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        "Language": "English, Sindarin",
        "Country": "New Zealand, United States",
        "Awards": "Won 4 Oscars. 121 wins & 126 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.8/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "91%"
            },
            {
                "Source": "Metacritic",
                "Value": "92/100"
            }
        ],
        "Metascore": "92",
        "imdbRating": "8.8",
        "imdbVotes": "1,827,055",
        "imdbID": "tt0120737",
        "Type": "movie",
        "DVD": "06 Aug 2002",
        "BoxOffice": "$316,115,420",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Crime, Drama",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane, David S. Goyer, Christopher Nolan",
        "Actors": "Christian Bale, Michael Caine, Ken Watanabe",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
        "Language": "English, Mandarin",
        "Country": "United States, United Kingdom",
        "Awards": "Nominated for 1 Oscar. 13 wins & 79 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "84%"
            },
            {
                "Source": "Metacritic",
                "Value": "70/100"
            }
        ],
        "Metascore": "70",
        "imdbRating": "8.2",
        "imdbVotes": "1,446,233",
        "imdbID": "tt0372784",
        "Type": "movie",
        "DVD": "18 Oct 2005",
        "BoxOffice": "$206,863,479",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "The Little Mermaid",
        "Year": "1989",
        "Rated": "G",
        "Released": "17 Nov 1989",
        "Runtime": "83 min",
        "Genre": "Animation, Adventure, Comedy",
        "Director": "Ron Clements, John Musker",
        "Writer": "John Musker, Ron Clements, Hans Christian Andersen",
        "Actors": "Jodi Benson, Samuel E. Wright, Rene Auberjonois",
        "Plot": "A mermaid princess makes a Faustian bargain in an attempt to become human and win a prince's love.",
        "Language": "English, French",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 14 wins & 8 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BN2JlZTBhYTEtZDE3OC00NTA3LTk5NTQtNjg5M2RjODllM2M0XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "88/100"
            }
        ],
        "Metascore": "88",
        "imdbRating": "7.6",
        "imdbVotes": "260,234",
        "imdbID": "tt0097757",
        "Type": "movie",
        "DVD": "01 Oct 2013",
        "BoxOffice": "$111,543,479",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Pokémon: The First Movie - Mewtwo Strikes Back",
        "Year": "1998",
        "Rated": "G",
        "Released": "10 Nov 1999",
        "Runtime": "96 min",
        "Genre": "Animation, Action, Adventure",
        "Director": "Kunihiko Yuyama, Michael Haigney",
        "Writer": "Satoshi Tajiri, Takeshi Shudo, Norman J. Grossfeld",
        "Actors": "Veronica Taylor, Rachael Lillis, Eric Stuart",
        "Plot": "Scientists genetically create a new Pokémon, Mewtwo, but the results are horrific and disastrous.",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "3 wins & 6 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMWYyNTBkNzAtZDg1YS00ZDhhLTg4MjAtOTg2NDY4ZjA2NzcyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "6.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "16%"
            },
            {
                "Source": "Metacritic",
                "Value": "35/100"
            }
        ],
        "Metascore": "35",
        "imdbRating": "6.2",
        "imdbVotes": "43,136",
        "imdbID": "tt0190641",
        "Type": "movie",
        "DVD": "21 Mar 2000",
        "BoxOffice": "$85,744,662",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Forrest Gump",
        "Year": "1994",
        "Rated": "PG-13",
        "Released": "06 Jul 1994",
        "Runtime": "142 min",
        "Genre": "Drama, Romance",
        "Director": "Robert Zemeckis",
        "Writer": "Winston Groom, Eric Roth",
        "Actors": "Tom Hanks, Robin Wright, Gary Sinise",
        "Plot": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood swe...",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 6 Oscars. 50 wins & 75 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.8/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "71%"
            },
            {
                "Source": "Metacritic",
                "Value": "82/100"
            }
        ],
        "Metascore": "82",
        "imdbRating": "8.8",
        "imdbVotes": "2,038,306",
        "imdbID": "tt0109830",
        "Type": "movie",
        "DVD": "28 Aug 2001",
        "BoxOffice": "$330,455,270",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
        "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
        "Language": "English, Japanese, French",
        "Country": "United States, United Kingdom",
        "Awards": "Won 4 Oscars. 157 wins & 220 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.8/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "87%"
            },
            {
                "Source": "Metacritic",
                "Value": "74/100"
            }
        ],
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "2,308,375",
        "imdbID": "tt1375666",
        "Type": "movie",
        "DVD": "07 Dec 2010",
        "BoxOffice": "$292,587,330",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "The Matrix",
        "Year": "1999",
        "Rated": "R",
        "Released": "31 Mar 1999",
        "Runtime": "136 min",
        "Genre": "Action, Sci-Fi",
        "Director": "Lana Wachowski, Lilly Wachowski",
        "Writer": "Lilly Wachowski, Lana Wachowski",
        "Actors": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
        "Plot": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        "Language": "English",
        "Country": "United States, Australia",
        "Awards": "Won 4 Oscars. 42 wins & 51 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.7/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "88%"
            },
            {
                "Source": "Metacritic",
                "Value": "73/100"
            }
        ],
        "Metascore": "73",
        "imdbRating": "8.7",
        "imdbVotes": "1,881,749",
        "imdbID": "tt0133093",
        "Type": "movie",
        "DVD": "15 May 2007",
        "BoxOffice": "$172,076,928",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    }
];