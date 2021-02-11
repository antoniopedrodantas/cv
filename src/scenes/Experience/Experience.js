// Dependencies
import React from "react";

// Styling
import "./Experience.css";

// Components
import Projects from "../../components/Projects/Projects";
import WorkExperience from "../../components/WorkExperience/WorkExperience";

class Experience extends React.Component {
  render() {
    return (
      <>
        <div className="info">
          <WorkExperience />
        </div>
        <div className="projects-wrapper">
          <Projects />
        </div>
        <br></br>
      </>
    );
  }
}

export default Experience;
