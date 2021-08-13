import React from "react";
import "./Definition.css";

export default function Definition(props) {
  return (
    <div className="Definition">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (definition.example) {
          return (
            <div key={index}>
              <p>
                {definition.definition}
                <br />
                <em>e.g. {definition.example}</em>
              </p>
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
