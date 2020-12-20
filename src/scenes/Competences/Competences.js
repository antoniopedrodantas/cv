import React from "react";

import "./Competences.css"

import Navbar from "../../components/Navbar/Navbar";
import Formation from "../../components/Formation/Formation";
import Accomplishments from "../../components/Accomplishments/Accomplishments";
import Skills from "../../components/Skills/Skills";

class Competences extends React.Component {
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
            <br></br>
        </div>
      </>
    );
  }
}

export default Competences;