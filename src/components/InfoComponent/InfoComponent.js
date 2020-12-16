import React from "react";

import "./InfoComponent.css";

class InfoComponent extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <div className="info">
          <h1 className="card-title">António Pedro Dantas</h1>
          <h3 className="card-section">Let me introduce myself...</h3>
          <p className="card-info">
            {" "}
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).{" "}
          </p>
          <br></br>
          <hr className="separator"></hr>
          <h3 className="card-section">Skills</h3>
          <p className="card-info">
            {" "}
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. {" "}
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
              <p className="python">Python</p>
              <hr className="skill-python"></hr>
            </div>
            <div>
              <p className="cpp">C++</p>
              <hr className="skill-cpp"></hr>
            </div>
          </div>
          <br></br>
          <hr className="separator"></hr>
        </div>
      </>
    );
  }
}

export default InfoComponent;
