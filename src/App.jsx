import { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import "./App.css";
import MovieCard from "./MovieCard";

const API_URL = import.meta.env.VITE_MOVIE_API_URL;

function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.error("An error occurred:", error.message);
      // Handle the error state or display an error message to the user
    }
  };
  useEffect(() => {
    searchMovies("batman");
  });

  return (
    <>
      <div className="app">
        <h1>Codimite movies</h1>
      </div>
      <div className="search">
        <input value="" onChange="" placeholder="Search for Movies" />
        <img src={SearchIcon} alt="search" onClick="" />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </>
  );
}

export default App;
