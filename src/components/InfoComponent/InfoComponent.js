import React from "react";

import "./InfoComponent.css";

import { FaMapMarkerAlt, FaGithub, FaPhone, FaMailBulk } from "react-icons/fa";
import { BiBookBookmark } from "react-icons/bi";
import { GiSportMedal } from "react-icons/gi";
import { IoLanguage } from "react-icons/io5";

class InfoComponent extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <div className="info">
          <h1 className="card-title">Let me introduce myself...</h1>
          <div className="card-info">
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
            <div className="idented">
              <p className="idented-paragraph"> <FaMapMarkerAlt /> Fafe, Braga</p>
              <p className="idented-paragraph"> <FaPhone /> +351 918 597 308</p>
              <p className="idented-paragraph"> <FaMailBulk /> pedro.dantascv@gmail.com</p>
            </div>
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
          </div>
          <br></br>
          <hr className="separator"></hr>
          <br></br>
          <h1 className="card-title">Skills</h1>
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
          <br></br>
          <br></br>
        </div>
      </>
    );
  }
}

export default InfoComponent;
