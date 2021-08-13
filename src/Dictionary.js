import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function wordSearch(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}!`);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={wordSearch}>
        <input
          type="search"
          autoFocus="true"
          placeholder="Enter a word to search..."
          onChange={handleKeyword}
        />
        <button>Search</button>
      </form>
    </div>
  );
}
