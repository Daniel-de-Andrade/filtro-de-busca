import React, { useState, useEffect } from "react";
import "./App.css";
import SearchInput from "./SearchInput";

function App() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState("");

  useEffect(() => {
    if (text) {
      setInfo({});
      console.log(text);
      fetch(
        `https://kitsu.io/api/edge/anime?filter[text]=${text}&page[limit]=5`
      )
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
          console.log(response);
        });
    }
  }, [text]);

  return (
    <div className="App">
      <h1>Animes</h1>
      <SearchInput values={text} onChange={(search) => setText(search)} />
      {text && !info.data && <span>Carregando...</span>}
      {info.data && (
        <ul className="animes-list">
          {info.data.map((anime) => (
            <li key={anime.id}>
              <img
                src={anime.attributes.posterImage.small}
                alt={anime.attributes.canonicalTitle}
              />
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
