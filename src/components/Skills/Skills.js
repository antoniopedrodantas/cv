import React from "react";

import "./Skills.css";

class Skills extends React.Component {
  render() {
    return (
      <>
        <div className="content-left">
          <h1 className="card-title">Skills</h1>
          <div className="card-info">
            <p>
              Having a masters degree in Informatics and Computing Engineering
              means I got in contact with a lot of programming languages. Some
              of them were very outdated and only served as a small entrance
              into the world of coding. Nonetheless, almost all of them shared
              the same thought process and approach, only the syntax changed.
              Here, I'll list the ones I find to be most useful and enjoyable,
              as well as the level of experience I have with them.
            </p>
            <div className="skill-container">
              <div>
                <p className="html">HTML</p>
                <hr className="skill-html"></hr>
              </div>
              <div>
                <p className="css">CSS</p>
                <hr className="skill-css"></hr>
              </div>
              <div>
                <p className="javascript">JavaScript</p>
                <hr className="skill-javascript"></hr>
              </div>
              <div>
                <p className="python">Python</p>
                <hr className="skill-python"></hr>
              </div>
              <div>
                <p className="cpp">C++</p>
                <hr className="skill-cpp"></hr>
              </div>
              <div>
                <p className="java">Java</p>
                <hr className="skill-java"></hr>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Skills;
