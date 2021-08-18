import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.default);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function searchResponse(response) {
    setResult(response.data[0]);
  }

  function wordSearch(event) {
    event.preventDefault();
    defaultSearch();
  }

  function defaultSearch() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(searchResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function loadPage() {
    setLoaded(true);
    defaultSearch();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={wordSearch}>
            <input
              type="search"
              autoFocus={true}
              placeholder="Enter a word to search..."
              onChange={handleKeyword}
            />
            <button>Search</button>
          </form>
        </section>
        <Results object={result} />
      </div>
    );
  } else {
    loadPage();
    return "Loading...";
  }
}
