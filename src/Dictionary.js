import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);

  function searchResponse(response) {
    setResult(response.data[0]);
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
      <Results object={result} />
    </div>
  );
}
