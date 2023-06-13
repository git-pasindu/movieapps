import { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import "./App.css";
import MovieCard from "./MovieCard";

function App() {
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
