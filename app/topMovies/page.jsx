import React from "react";

export const TopMovies = async () => {
  
  const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=1549e92d47be72d14413d096b261b8c6", {
    // next: { revalidate: 10 },
    // cache: "force-cache"
  });
  const data = await res.json();
  const movies = data.results;

  
  const topThreeMovies = movies.slice(0, 6);

  return (
    <div>
      <h1 className="text-7xl text-center p-4 "> Top Movies</h1>

      <div className="flex flex-wrap gap-4 justify-center">
        {topThreeMovies.map((movie) => (
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

export default  TopMovies ;
