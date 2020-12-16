import React from "react";

import "./CompetencesComponent.css"

import Formation from "../Formation/Formation";
import Accomplishments from "../Accomplishments/Accomplishments";
import Skills from "../Skills/Skills";

class CompetencesComponent extends React.Component {
  render() {
    return (
      <>
        <div className="info">
            <Formation />
            <br></br>
            <hr></hr>
            <Accomplishments />
            <br></br>
            <hr></hr>
            <Skills />
        </div>
      </>
    );
  }
}

export default CompetencesComponent;