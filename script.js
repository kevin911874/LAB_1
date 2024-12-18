
const movies = [
    { title: "pushpa", genre: "ACTION", rating: 8.8, releaseYear: 2021},
    { title: "A Aa", genre: "ROMANTIC", rating: 8.0, releaseYear: 2016 },
    { title: "Mr. Majnu", genre: "ROMANTIC", rating: 9.0, releaseYear: 2021 },
    { title: "RRR", genre: "History", rating: 9.3, releaseYear: 2019 },
    { title: "Parmanu", genre: "sci-fi", rating: 9.2, releaseYear: 2021 }
];

const renderMovieList = (movieCollection) => {
    const movieListElement = document.getElementById("movie-list");
    movieListElement.innerHTML = ''; // 
    movieCollection.forEach(movie => {
        const li = document.createElement("li");
        li.textContent = `${movie.title} (${movie.releaseYear}) - ${movie.genre} - Rating: ${movie.rating}`;
        movieListElement.appendChild(li);
    });
};

const addMovie = (movie) => {
    movies.push(movie);
    renderMovieList(movies); 
};

document.getElementById("movie-form").addEventListener("submit", (event) => {
    event.preventDefault();
    
    const title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;
    const rating = parseFloat(document.getElementById("rating").value);
    const releaseYear = parseInt(document.getElementById("releaseYear").value);

    addMovie({ title, genre, rating, releaseYear });

    event.target.reset();
});


const filterMoviesByGenre = () => {
    const selectedGenre = document.getElementById("genre-filter").value;
    if (selectedGenre) {
        const filteredMovies = movies.filter(movie => movie.genre === selectedGenre);
        renderMovieList(filteredMovies);
    } else {
        renderMovieList(movies);
    }
};

const findHighestRatedMovie = () => {
    const highestRated = movies.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest, movies[0]);
    document.getElementById("result-output").textContent = `Highest Rated Movie: ${highestRated.title} with rating ${highestRated.rating}`;
};

const getMovieTitles = () => {
    const titles = movies.map(movie => movie.title).join(', ');
    document.getElementById("result-output").textContent = `Movie Titles: ${titles}`;
};

const moviesAfterYear = () => {
    const filteredMovies = movies.filter(movie => movie.releaseYear > 2010);
    renderMovieList(filteredMovies);
};

renderMovieList(movies);