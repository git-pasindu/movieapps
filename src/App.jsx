import { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import "./App.css";
import MovieCard from "./MovieCard";

const API_URL = import.meta.env.VITE_MOVIE_API_URL;

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    searchMovies("superman");
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

      <div className="container">
        <MovieCard />
      </div>
    </>
  );
}

export default App;
