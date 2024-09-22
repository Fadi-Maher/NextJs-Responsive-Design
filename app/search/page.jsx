"use client";  

import { useState } from "react";

function Search({ onResults }) {
  const [query, setQuery] = useState(""); // State for the search query
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Function to handle the search
const handleSearch = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError(null);

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=1549e92d47be72d14413d096b261b8c6&query=${query}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch results");
    }

    const data = await res.json();
    console.log("Response data:", data.results); // Log the full response data
          onResults(data.results); 
    if (data.results && data.results.length > 0) {
      onResults(data.results);  
    } else {
      setError("No results found.");
    }
  } catch (err) {
    setError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="search-container mb-4">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update the input value
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>} {/* Show loading text */}
      {error && <p className="text-red-500">{error}</p>} {/* Show error text */}
    </div>
  );
}

export default Search;
