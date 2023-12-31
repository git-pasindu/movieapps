import { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import "./App.css";
import MovieCard from "./MovieCard";
import { titles } from "./constants";

const API_URL = import.meta.env.VITE_MOVIE_API_URL;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    searchMovies("batman");
  }, []);

  const searchMovies = async (title) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}&s=${title}`);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();
      setMovies(data.Search); //fectching data
    } catch (error) {
      console.error("An error occurred:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTitleClick = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="app">
        <h1 onClick={handleTitleClick}>{titles.pageTitle}</h1>

        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>{titles.nofound}</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
