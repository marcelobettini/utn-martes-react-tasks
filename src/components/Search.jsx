import React from "react";
import "./Search.css";

function Search({ onQuery }) {
  return (
    <form className="searchform">
      <input
        type="search"
        name="search"
        aria-label="Tarea a buscar"
        placeholder="Texto a buscar..."
        onChange={(e) => onQuery(e.target.value)}
      />
    </form>
  );
}

export default Search;
