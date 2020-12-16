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
                <a className="little-paragraph" href="https://www.google.com/search?q=portugal">
                    <FaMapMarkerAlt /> Portugal
                </a>
              </div>
              <div className="little-info-right-up" href="https://sigarra.up.pt/feup/pt/web_page.inicial">
                <a className="little-paragraph">
                    <BiBookBookmark /> F.E.U.P.
                </a>
              </div>
              <div className="little-info-left-down" href="https://github.com/antoniopedrodantas">
                <a className="little-paragraph">
                    <FaGithub /> GitHub
                </a>
              </div>
              <div className="little-info-right-down" href="https://www.instagram.com/pedrodantaspedro/">
                <a className="little-paragraph">
                    <FaInstagram /> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileComponent;
