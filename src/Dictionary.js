import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.default);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function searchResponse(response) {
    setResult(response.data[0]);
  }

  function pexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function wordSearch(event) {
    event.preventDefault();
    defaultSearch();
  }

  function defaultSearch() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(searchResponse);

    const pexelsApiKey =
      "563492ad6f91700001000001f028b4eb4f4745dda0654ef120004881";
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(pexelsResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    loadPage();
    return "Loading...";
  }
}
