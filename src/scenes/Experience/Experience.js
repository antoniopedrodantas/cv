// Dependencies
import React from "react";

// Styling
import "./Experience.css";

// Components
import Projects from "../../components/Projects/Projects";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import Disclaimer from "../../components/Disclaimer/Disclaimer";

class Experience extends React.Component {
  render() {
    return (
      <>
        <div className="experience-wrapper">
          <div className="info">
            <WorkExperience />
          </div>
          <div className="projects-wrapper">
            <Projects />
          </div>
          <Disclaimer />
        </div>
        <br></br>
      </>
    );
  }
}

export default Experience;
