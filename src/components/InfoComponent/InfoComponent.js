// Dependencies
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { FaMapMarkerAlt, FaPhone, FaMailBulk } from "react-icons/fa";

// Styling
import "./InfoComponent.css";

// Components
import Skills from "../Skills/Skills";

export function InfoComponent() {
  // language displayed
  const { language } = useContext(LanguageContext);

  return language === "EN" ? (
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
  ) : (
    <>
      <div className="info">
        <h1 className="card-title">Permitam-me que me apresente...</h1>
        <div className="card-info">
          {" "}
          Olá! O meu nome é António Pedro Dantas, tenho 21 anos e estou no
          mestrado de Engenharia Informática e Computação na FEUP (Faculdade de
          Engenharia da Universidade do Porto). Sou apaixonado por música,
          cinema, comédia, arte e viajar.{" "}
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
          Este é o meu Curriculum Vitae online! Aqui vou tentar dar algum
          conhecimento sobre as minhas capacidades profissionais, a minha
          formação e experiência. Vou falar um pouco sobre mim e as minhas
          conquistas pessoais. Vamos a isso!{" "}
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

export default InfoComponent;
