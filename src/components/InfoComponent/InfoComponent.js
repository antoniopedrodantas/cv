// Dependencies
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { FaMapMarkerAlt, FaMailBulk } from "react-icons/fa";
import {
  AiOutlineLineChart,
  AiOutlinePieChart,
  AiOutlineFlag,
} from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";

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
        <div className="info-grid">
          <div>
            <h1 className="card-title">Let me introduce myself...</h1>
            <div className="card-info">
              {" "}
              Hello! My name is António Pedro Dantas, I'm 21 years old and I'm
              taking my masters degree in Informatics and Computing Engineering
              at FEUP (Faculdade de Engenharia da Universidade do Porto). I'm in
              love with music, cinema, comedy, art and travelling.{" "}
              <div className="idented">
                <p className="idented-paragraph">
                  {" "}
                  <FaMapMarkerAlt className="icon-text" /> Fafe, Braga
                </p>
                <p className="idented-paragraph">
                  {" "}
                  <FaMailBulk className="icon-text" /> pedro.dantascv@gmail.com
                </p>
              </div>{" "}
              This is my online Curriculum Vitae! Here, I'll try to give you an
              insight about my professional skills, my formation and experience.
              I'll talk a little bit about myself and my personal
              accomplishments. Let's dive in!{" "}
            </div>
            <br></br>
            <h1 className="card-title">What I Do</h1>
            <div className="what-i-do-grid">
              <div className="what-i-do-elem">
                <div className="what-i-do-icon">
                  <AiOutlineLineChart size={45} />
                </div>
                <p className="what-i-do-text">Artificiall Intelligence</p>
              </div>
              <div className="what-i-do-elem">
                <div className="what-i-do-icon">
                  <AiOutlinePieChart size={45} />
                </div>
                <p className="what-i-do-text">Information Systems</p>
              </div>
              <div className="what-i-do-elem">
                <div className="what-i-do-icon">
                  <HiOutlineDesktopComputer size={45} />
                </div>
                <p className="what-i-do-text">Web Applications</p>
              </div>
              <div className="what-i-do-elem">
                <div className="what-i-do-icon">
                  <AiOutlineFlag size={45} />
                </div>
                <p className="what-i-do-text">Management</p>
              </div>
            </div>
          </div>
          <div>
            <Skills />
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="info">
        <div className="info-grid">
          <div>
            <h1 className="card-title">Permitam-me que me apresente...</h1>
            <div className="card-info">
              {" "}
              Olá! O meu nome é António Pedro Dantas, tenho 21 anos e estou no
              mestrado de Engenharia Informática e Computação na FEUP (Faculdade
              de Engenharia da Universidade do Porto). Sou apaixonado por
              música, cinema, comédia, arte e viajar.{" "}
              <div className="idented">
                <p className="idented-paragraph">
                  {" "}
                  <FaMapMarkerAlt className="icon-text" /> Fafe, Braga
                </p>
                <p className="idented-paragraph">
                  {" "}
                  <FaMailBulk className="icon-text" /> pedro.dantascv@gmail.com
                </p>
              </div>{" "}
              Este é o meu Curriculum Vitae online! Aqui vou tentar dar algum
              conhecimento sobre as minhas capacidades profissionais, a minha
              formação e experiência. Vou falar um pouco sobre mim e as minhas
              conquistas pessoais. Vamos a isso!{" "}
            </div>
            <br></br>
            <h1 className="card-title">O Que Faço</h1>
            <div className="what-i-do-grid">
              <div className="what-i-do-elem">
                <div className="what-i-do-icon">
                  <AiOutlineLineChart size={45} />
                </div>
                <p className="what-i-do-text">Inteligência Artificial</p>
              </div>
              <div className="what-i-do-elem">
                <div className="what-i-do-icon">
                  <AiOutlinePieChart size={45} />
                </div>
                <p className="what-i-do-text">Sistemas de Informações</p>
              </div>
              <div className="what-i-do-elem">
                <div className="what-i-do-icon">
                  <HiOutlineDesktopComputer size={45} />
                </div>
                <p className="what-i-do-text">Aplicações Web</p>
              </div>
              <div className="what-i-do-elem">
                <div className="what-i-do-icon">
                  <AiOutlineFlag size={45} />
                </div>
                <p className="what-i-do-text">Gestão</p>
              </div>
            </div>
          </div>
          <div>
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoComponent;
