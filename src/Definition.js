import React from "react";
import Synonyms from "./Synonyms";
import "./Definition.css";

export default function Definition(props) {
  return (
    <div className="Definition">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (definition.example) {
          return (
            <div key={index}>
              <span>
                {definition.definition}
                <br />
                <span className="example">e.g. {definition.example}</span>
                <Synonyms synonyms={definition.synonyms} />
              </span>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <p>
                {definition.definition}
                <br />
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}
