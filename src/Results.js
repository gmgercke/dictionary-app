import React from "react";
import Definiton from "./Definition";
import "./Results.css";

export default function Results(props) {
  if (props.object) {
    return (
      <div className="Results">
        <h2>{props.object.word}</h2>
        <hr />
        {props.object.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Definiton meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
