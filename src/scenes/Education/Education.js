// Dependencies
import React from "react";

// Styling
import "./Education.css"

// Components
import Formation from "../../components/Formation/Formation";
import Accomplishments from "../../components/Accomplishments/Accomplishments";
import Skills from "../../components/Skills/Skills";

class Education extends React.Component {
  render() {
    return (
      <>
        <div className="education-wrapper">
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
        </div>
        <br></br>
      </>
    );
  }
}

export default Education;
