import React from "react";
import Definiton from "./Definition";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.object) {
    return (
      <div className="Results">
        <section>
          <h2>{props.object.word}</h2>
          {props.object.phonetics.map(function (phonetics, index) {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetics} />
              </div>
            );
          })}
        </section>
        {props.object.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Definiton meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
