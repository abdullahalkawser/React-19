import React, { useState } from "react";

const Search = ({ setSearchMovies }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value); // Update local state
    setSearchMovies(e.target.value); // Update parent state in App.js
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
