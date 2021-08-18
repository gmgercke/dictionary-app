import React from "react";
import Definiton from "./Definition";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.object) {
    return (
      <div className="Results">
        <h2>{props.object.word}</h2>
        {props.object.phonetics.map(function (phonetics, index) {
          return (
            <div key={index}>
              <Phonetics phonetics={phonetics} />
            </div>
          );
        })}
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
