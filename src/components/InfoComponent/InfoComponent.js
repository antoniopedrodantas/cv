// Dependencies
import React, { useState, useEffect, useContext } from "react";
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

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

export function InfoComponent() {
  // language displayed
  const { language } = useContext(LanguageContext);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderWhatIDo = () => {
    if (windowDimensions > 1200) {
      return language === "EN" ? (
        <>
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
        </>
      ) : (
        <>
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
              <p className="what-i-do-text">Sistemas de Informação</p>
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
        </>
      );
    } else if (windowDimensions > 770) {
      return language === "EN" ? (
        <>
          <h1 className="card-title">What I Do</h1>
          <div className="what-i-do-grid">
            <div className="what-i-do-elem">
              <div className="what-i-do-icon">
                <AiOutlineLineChart size={45} />
              </div>
              <p className="what-i-do-text">A. I.</p>
            </div>
            <div className="what-i-do-elem">
              <div className="what-i-do-icon">
                <HiOutlineDesktopComputer size={45} />
              </div>
              <p className="what-i-do-text">Web Apps</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="card-title">O Que Faço</h1>
          <div className="what-i-do-grid">
            <div className="what-i-do-elem">
              <div className="what-i-do-icon">
                <AiOutlineLineChart size={45} />
              </div>
              <p className="what-i-do-text">A. I.</p>
            </div>
            <div className="what-i-do-elem">
              <div className="what-i-do-icon">
                <HiOutlineDesktopComputer size={45} />
              </div>
              <p className="what-i-do-text">Web Apps</p>
            </div>
          </div>
        </>
      );
    } else {
      return <></>;
    }
  };

  return language === "EN" ? (
    <>
      <div className="info">
        <div className="info-grid">
          <div>
            <h1 className="card-title">Let me introduce myself...</h1>
            <div className="card-info">
              {" "}
              Hello! My name is António Pedro Dantas, I'm 22 years old and I'm
              taking my masters degree in Informatics and Computing Engineering
              at FEUP (Faculdade de Engenharia da Universidade do Porto). My
              master's thesis is about infering user preferences in social
              networking platforms using Reverse Reinforcement Learning. My main
              fields of interest are Web Development, Artificial Intelligence
              and Information Systems, but I'm always up for a challenge.{" "}
              <div className="idented">
                <p className="idented-paragraph">
                  {" "}
                  <FaMapMarkerAlt className="icon-text" /> Fafe, Braga
                </p>
                <p className="idented-paragraph">
                  {" "}
                  <FaMailBulk className="icon-text" /> dantasantoniopedro@gmail.com
                </p>
              </div>{" "}
              This is my online Curriculum Vitae! Here, I'll try to give you an
              insight about my professional skills, my formation and experience.
              I'll talk a little bit about myself and my personal
              accomplishments. Let's dive in!{" "}
            </div>
            <br></br>
            {renderWhatIDo()}
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
              Olá! O meu nome é António Pedro Dantas, tenho 22 anos e estou no
              mestrado de Engenharia Informática e Computação na FEUP (Faculdade
              de Engenharia da Universidade do Porto). A minha tese de mestrado
              é sobre inferência de preferências de utilzador em redes sociais
              utilizando Aprendizagem por Reforço Inverso. As minhas áreas de
              eleição são Desenvolvimento Web, Inteligência Artificial e
              sistemas de Informação, mas estou sempre pronto para um desafio.{" "}
              <div className="idented">
                <p className="idented-paragraph">
                  {" "}
                  <FaMapMarkerAlt className="icon-text" /> Fafe, Braga
                </p>
                <p className="idented-paragraph">
                  {" "}
                  <FaMailBulk className="icon-text" /> dantasantoniopedro@gmail.com
                </p>
              </div>{" "}
              Este é o meu Curriculum Vitae online! Aqui vou tentar dar algum
              conhecimento sobre as minhas capacidades profissionais, a minha
              formação e experiência. Vou falar um pouco sobre mim e as minhas
              conquistas pessoais. Vamos a isso!{" "}
            </div>
            <br></br>
            {renderWhatIDo()}
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
