import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function searchResponse(response) {
    console.log(response);
  }

  function wordSearch(event) {
    event.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(searchResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={wordSearch}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Enter a word to search..."
          onChange={handleKeyword}
        />
        <button>Search</button>
      </form>
    </div>
  );
}
