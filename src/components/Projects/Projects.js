// Dependecies
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import {
  SiJavascript,
  SiPhp,
  SiHtml5,
  SiCsswizardry,
  SiPython,
  SiJava,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";

// Styling
import "./Project.css";

export function Projects() {
  // language displayed
  const { language } = useContext(LanguageContext);

  return language === "EN" ? (
    <>
      <div className="project-wrapper">
        <div className="img-wrapper">
          <div className="img-wrapper-meddigital"></div>
        </div>
        <div className="info-wrapper">
          <h3 className="project-title"> Air MedDigital*</h3>
          <br></br>
          <p>
            {" "}
            MedDigital was our project for the <mark>
              Software Development
            </mark>{" "}
            course. The goal was to create a platform that held{" "}
            <mark>medical records</mark> of all kinds of aircraft workers.
            Pilots could log in and check if they are fit for the job. Doctors
            could upload various kinds of medical exams and the major entities
            could browse all of its workers. We used the <mark>MERN</mark> stack
            to develop this project (<mark>MongoDB</mark>, <mark>Express</mark>,{" "}
            <mark>React</mark> & <mark>Node</mark>).
          </p>
          <br></br>
          <div className="content-right">
            <SiHtml5 size={30} className="icon-projects" />
            <SiCsswizardry size={30} className="icon-projects" />
            <SiMongodb size={30} className="icon-projects" />
            <SiJavascript size={30} className="icon-projects" />
          </div>
        </div>
      </div>
      <div className="project-wrapper">
        <div className="img-wrapper">
          <div className="img-wrapper-lift"></div>
        </div>
        <div className="info-wrapper">
          <a
            className="project-title"
            href="https://github.com/antoniopedrodantas/aiad-feup"
          >
            <h3 className="project-title"> Lift Management System</h3>
          </a>
          <br></br>
          <p>
            {" "}
            In the <mark>Distributed Systems</mark> class we developed a
            software that was capable of <mark>simulating a skyscraper</mark>{" "}
            environment that contained lifts. The idea was to be able to
            introduce certain independent variables (ex: number of floors,
            number of lifts, each lift's max weight) and analyzing data to
            understand what would be the most efficient building configuration.
            This project was developed in <mark>Java</mark> using Jade and
            Repast libraries.
          </p>
          <br></br>
          <div className="content-right">
            <SiJava size={30} className="icon-projects" />
          </div>
        </div>
      </div>
      <div className="project-wrapper">
        <div className="img-wrapper">
          <div className="img-wrapper-tempura"></div>
        </div>
        <div className="info-wrapper">
          <a
            className="project-title"
            href="https://github.com/antoniopedrodantas/sinf-feup"
          >
            <h3 className="project-title">Tempura</h3>
          </a>
          <br></br>
          <p>
            Tempura was a fictional company we created for the{" "}
            <mark>Information Systems</mark> course. The goal of the project was
            to develop a web application for the <mark>data analysis</mark> of
            said company. The website would have to be able to import SAFT files
            and display the enterprise's stats on a user-friendly manner. We
            used <mark>TypeScript</mark> and <mark>React</mark> for its
            development.
          </p>
          <br></br>
          <div className="content-right">
            <SiHtml5 size={30} className="icon-projects" />
            <SiCsswizardry size={30} className="icon-projects" />
            <SiTypescript size={30} className="icon-projects" />
          </div>
        </div>
      </div>
      <div className="project-wrapper">
        <div className="img-wrapper">
          <div className="img-wrapper-box"></div>
        </div>
        <div className="info-wrapper">
          <a
            className="project-title"
            href="https://github.com/antoniopedrodantas/iart-feup"
          >
            <h3 className="project-title">Box World</h3>
          </a>
          <br></br>
          <p>
            For the <mark>Artificial Intelligence</mark> class we had to develop
            an agent that could <mark>beat a puzzle game</mark>. We chose to
            recreate Box World. The rules are simple, the red square needs to
            get to the blue square. In order to do so it will have to solve the
            level's layout by pushing some boxes and ice cubes. This project was
            made using <mark>Pyhton</mark>.
          </p>
          <br></br>
          <div className="content-right">
            <SiPython size={30} className="icon-projects" />
          </div>
        </div>
      </div>
      <div className="project-wrapper">
        <div className="img-wrapper">
          <div className="img-wrapper-answerly"></div>
        </div>
        <div className="info-wrapper">
          <h3 className="project-title"> Answerly*</h3>
          <br></br>
          <p>
            {" "}
            Answerly was our project for the <mark>Web Development</mark>{" "}
            course. The goal was to create an interactive{" "}
            <mark>Q&A Website</mark> where people could log in, make intersting
            questions or reply to them. We used <mark>Laravel</mark> as a
            framework for this project.
          </p>
          <br></br>
          <div className="content-right">
            <SiHtml5 size={30} className="icon-projects" />
            <SiCsswizardry size={30} className="icon-projects" />
            <SiPhp size={30} className="icon-projects" />
            <SiJavascript size={30} className="icon-projects" />
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="project-wrapper">
        <div className="img-wrapper">
          <div className="img-wrapper-meddigital"></div>
        </div>
        <div className="info-wrapper">
          <h3 className="project-title"> Air MedDigital*</h3>
          <br></br>
          <p>
            {" "}
            MedDigital foi o nosso projeto para a cadeira de{" "}
            <mark>Desenvolvimento de Software</mark>. O objetivo era criar uma
            plataforma que detivesse <mark>registos médicos</mark> de todos os
            tipos de profissionais de aviação. Os pilotos poderiam entrar para
            ver se estão aptos para o voar. Os médicos poderiam fazer upload de
            todos os tipos de exames e as grandes entidades poderiam pesquisar e
            acompanhar todos os seus profissionais. Utilizamos a{" "}
            <mark>MERN</mark> stack para o desenvolvimento (<mark>MongoDB</mark>
            , <mark>Express</mark>, <mark>React</mark> & <mark>Node</mark>).
          </p>
          <br></br>
          <div className="content-right">
            <SiHtml5 size={30} className="icon-projects" />
            <SiCsswizardry size={30} className="icon-projects" />
            <SiMongodb size={30} className="icon-projects" />
            <SiJavascript size={30} className="icon-projects" />
          </div>
        </div>
      </div>

      <div className="project-wrapper">
        <div className="img-wrapper">
          <div className="img-wrapper-lift"></div>
        </div>
        <div className="info-wrapper">
          <a
            className="project-title"
            href="https://github.com/antoniopedrodantas/aiad-feup"
          >
            <h3 className="project-title"> Sistema de Gestão de Elevadores</h3>
          </a>
          <br></br>
          <p>
            {" "}
            Na cadeira de <mark>Sistemas Distribuidos</mark> desenvolvemos um
            software capaz de <mark>simular um ambiente de arranha-céus</mark>
            que continha vários elevadores. A ideia é introduzir um conjunto de
            variáveis independentes (ex: número de andares, número de
            elevadores, peso máximo de cada elevador) e analizar a informação
            dada para perceber qual seria a configuração mais eficiente do
            edifício. Este projeto foi desenvolvido com <mark>Java</mark> e as
            bibliotecas Jade e Repast.
          </p>
          <br></br>
          <div className="content-right">
            <SiJava size={30} className="icon-projects" />
          </div>
        </div>
      </div>
      <div className="project-wrapper">
        <div className="img-wrapper">
          <div className="img-wrapper-tempura"></div>
        </div>
        <div className="info-wrapper">
          <a
            className="project-title"
            href="https://github.com/antoniopedrodantas/sinf-feup"
          >
            <h3 className="project-title">Tempura</h3>
          </a>
          <br></br>
          <p>
            Tempura foi uma empresa fictícia que criamos para a cadeira de{" "}
            <mark>Sistemas de Informação</mark>. O objetivo era desenvolver uma
            aplicação web para <mark>análisa de dados</mark> dessa empresa. O
            site era capaz de importar ficheiros SAFT e mostrar essa informação
            de uma maneira user-friendly. Utilizamos <mark>TypeScript</mark> e{" "}
            <mark>React</mark> para o seu desenvolvimento.
          </p>
          <br></br>
          <div className="content-right">
            <SiHtml5 size={30} className="icon-projects" />
            <SiCsswizardry size={30} className="icon-projects" />
            <SiTypescript size={30} className="icon-projects" />
          </div>
        </div>
      </div>
      <div className="project-wrapper">
        <div className="img-wrapper">
          <div className="img-wrapper-box"></div>
        </div>
        <div className="info-wrapper">
          <a
            className="project-title"
            href="https://github.com/antoniopedrodantas/iart-feup"
          >
            <h3 className="project-title">Box World</h3>
          </a>
          <br></br>
          <p>
            Para a cadeira de <mark>Inteligência Artificial</mark> tivemos de
            desenvolver um agente capaz de{" "}
            <mark>resolver um jogo de puzzle</mark>. Escolhemos recriar o Box
            World. As regras são simples, o quadrado vermelho tem de chegar ao
            quadrado azul. Para o fazer vai ter de resolver o enigma do nível ao
            mover-se e empurrar caixas e blocos de gelo. Este projeto foi feito
            com <mark>Python</mark>.
          </p>
          <br></br>
          <div className="content-right">
            <SiPython size={30} className="icon-projects" />
          </div>
        </div>
      </div>
      <div className="project-wrapper">
        <div className="img-wrapper">
          <div className="img-wrapper-answerly"></div>
        </div>
        <div className="info-wrapper">
          <h3 className="project-title"> Answerly*</h3>
          <br></br>
          <p>
            {" "}
            Answerly foi o nosso projeto para a cadeira de{" "}
            <mark>Desenvolvimento Web</mark> . O objetivo era criar um site de{" "}
            <mark>Q&A</mark> interativo, onde as pessoas se pudessem registar,
            fazer perguntas e receber respostas pertinentes. Utilizamos a
            framework <mark>Laravel</mark> para este projeto.
          </p>
          <br></br>
          <div className="content-right">
            <SiHtml5 size={30} className="icon-projects" />
            <SiCsswizardry size={30} className="icon-projects" />
            <SiPhp size={30} className="icon-projects" />
            <SiJavascript size={30} className="icon-projects" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
