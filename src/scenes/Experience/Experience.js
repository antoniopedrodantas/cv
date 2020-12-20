// Dependencies
import React from "react";

// Components
import Projects from "../../components/Projects/Projects";
import WorkExperience from "../../components/WorkExperience/WorkExperience";

class Experience extends React.Component {
  render() {
    return (
      <>
        <div className="info">
            <Projects />
            <br></br>
            <hr></hr>
            <WorkExperience />
        </div>
      </>
    );
  }
}

export default Experience;