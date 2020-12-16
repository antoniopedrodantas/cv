import React from "react";

import "./ProfileComponent.css";
import { FaMapMarkerAlt, FaGithub, FaInstagram } from "react-icons/fa";
import { BiBookBookmark } from "react-icons/bi";

class ProfileComponent extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <div className="info">
          <div className="picture">
            <img className="rounded" src="/me.jpg" alt="This is myself."></img>
          </div>
          <div className="profile-info">
            <div className="name">
              <h1>António Pedro Dantas</h1>
            </div>
            <div className="description">
              <h2>Informatics and Computing Engineering [4th Year]</h2>
            </div>
            <div className="little-links">
              <div className="little-info-left-up">
                <p className="little-paragraph">
                    <FaMapMarkerAlt /> Portugal
                </p>
              </div>
              <div className="little-info-right-up">
                <p className="little-paragraph">
                    <BiBookBookmark /> F.E.U.P.
                </p>
              </div>
              <div className="little-info-left-down">
                <p className="little-paragraph">
                    <FaGithub /> GitHub
                </p>
              </div>
              <div className="little-info-right-down">
                <p className="little-paragraph">
                    <FaInstagram /> Instagram
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileComponent;
