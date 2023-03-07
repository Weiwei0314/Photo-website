import React, { useState } from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input className="input" onChange={inputHandler} type="text" />
      <button style={{ cursor: "pointer" }} onClick={search}>
        Search
      </button>
    </div>
  );
};

export default Search;
