import React from "react";

import "./InfoComponent.css";
import { FaMapMarkerAlt, FaPhone, FaMailBulk } from "react-icons/fa";

import Skills from "../Skills/Skills";

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
            Hello! My name is António Pedro Dantas, I'm 21 years old and I'm
            taking my masters degree in Informatics and Computing Engineering at
            FEUP (Faculdade de Engenharia da Universidade do Porto). I'm in love
            with music, cinema, comedy, art and travelling.{" "}
            <div className="idented">
              <p className="idented-paragraph">
                {" "}
                <FaMapMarkerAlt /> Fafe, Braga
              </p>
              <p className="idented-paragraph">
                {" "}
                <FaPhone /> +351 918 597 308
              </p>
              <p className="idented-paragraph">
                {" "}
                <FaMailBulk /> pedro.dantascv@gmail.com
              </p>
            </div>{" "}
            This is my online Curriculum Vitae! Here, I'll try to give you an
            insight about my professional skills, my formation and experience.
            I'll talk a little bit about myself and my personal accomplishments.
            Let's dive in!{" "}
          </div>
          <br></br>
          <hr className="separator"></hr>
          <br></br>
          <Skills />
          <br></br>
          <br></br>
        </div>
      </>
    );
  }
}

export default InfoComponent;
