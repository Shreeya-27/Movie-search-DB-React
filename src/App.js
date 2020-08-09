import React, { useState, useEffect } from "react";
import Movies from "./components/Movies";
import "./App.css";

const App = () => {


  const [movie, setMovies] = useState([]);
  // state for search
  const [search, movieSearch] = useState("");
  // default serach item to show
  const [query, setQuery] = useState("Avengers");

  useEffect(() => {
    getMovies();
  }, [query]);

  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=1f6476037854ed2ca940c0c708c87d0e&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const data = await response.json();
    console.log(data.results);
    setMovies(data.results);
  };

  const searchMovies = e => {
    movieSearch(e.target.value);
    console.log(search);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    movieSearch('');
  };

  return (
    <div className="App">
      <h1 className="top">Hollywood Movie Search</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={searchMovies}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="movies">
        {movie.map(movies => (
          <Movies
            key={movies.id}
            title={movies.title}
            overview={movies.overview}
            image={movies.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
