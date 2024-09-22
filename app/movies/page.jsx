"use client";  

import { useState, useEffect } from "react";
import Search from "../search/page";
 

const Movies = () => {
  const [movies, setMovies] = useState([]); // State for storing popular movies
  const [filteredMovies, setFilteredMovies] = useState([]); // State for search results
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch popular movies on component mount
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=1549e92d47be72d14413d096b261b8c6");
        if (!res.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await res.json();
        setMovies(data.results);
        setFilteredMovies(data.results); // Initialize filtered movies
      } catch (err) {
        setError("Something went wrong while fetching movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Update filtered movies based on search query
  const handleSearchResults = (results) => {
    setFilteredMovies(results);
  };

  return (
    <div>
      <Search onResults={handleSearchResults} />
      {loading && <p>Loading movies...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex flex-wrap gap-4 justify-center">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title m-auto">{movie.title}</h2>
              <div className="card-actions justify-end">
                <button className="btn btn-primary m-auto">Watch Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
