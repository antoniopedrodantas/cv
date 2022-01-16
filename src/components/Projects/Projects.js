// Dependecies
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import {
  SiPython,
  SiJava,
  SiTypescript,
  SiMongodb,
  SiReact,
  SiLaravel,
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
          <div className="img-wrapper-musician-buddy"></div>
        </div>
        <div className="info-wrapper">
          <a
            className="project-title"
            href="https://musician-buddy.netlify.app/"
          >
            <h3 className="project-title"> Musician Buddy</h3>
          </a>
          <br></br>
          <p>
            <mark>Musician Buddy</mark> was a side project that I've created.
            The idea for this came up when I struggled to find a way to tell in
            which BPMs I was in when tapping into a beat. Soon I discovered that
            I could make those calculations with maths and the help of
            programming. I decided to put this into a web application since it
            is easier to access and to have a better UX/UI experience. The
            project is ever changing and now has also the possibility to play a
            note in order for you to tune your instruments accordingly. It was
            developed using the <mark>React</mark> library.
          </p>
          <br></br>
          <div className="content-right">
            <SiReact size={30} className="icon-projects" />
          </div>
        </div>
      </div>
      <div className="project-wrapper">
        <div className="img-wrapper">
          <div className="img-wrapper-aml"></div>
        </div>
        <div className="info-wrapper">
          <a
            className="project-title"
            href="https://github.com/antoniopedrodantas/aml-umons"
          >
            <h3 className="project-title"> Stock Market Analysis</h3>
          </a>
          <br></br>
          <p>
            For the <mark>Advanced Machine Learning</mark> course, we had to
            implement the Exp3 algorithm to analyse and predict stock market
            activity in order to choose the best company to invest in. The goal
            was to extract data from 6 of the top 500 companies listed on the
            public stock market to serve as data for our A.I. algorithm. This
            project was developed during my Erasmus exchanege program at the
            University of Mons. <mark>Python</mark> was the chosen programming
            language.
          </p>
          <br></br>
          <div className="content-right">
            <SiPython size={30} className="icon-projects" />
          </div>
        </div>
      </div>
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
            <SiMongodb size={30} className="icon-projects" />
            <SiReact size={30} className="icon-projects" />
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
            <SiReact size={30} className="icon-projects" />
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
            <SiLaravel size={30} className="icon-projects" />
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="project-wrapper">
        <div className="img-wrapper">
          <div className="img-wrapper-musician-buddy"></div>
        </div>
        <div className="info-wrapper">
          <a
            className="project-title"
            href="https://musician-buddy.netlify.app/"
          >
            <h3 className="project-title"> Musician Buddy</h3>
          </a>
          <br></br>
          <p>
            O <mark>Musician Buddy</mark> é um projeto paralelo que eu criei. A
            ideia para isto surgiu quando eu não conseguia encontrar uma maneira
            de contar em quais BPMs estava ao tocar num certo tempo. Aí,
            apercebi-me que poderia fazer esses cálculos com matemática e a
            ajuda de programação. Eu decidi desenvolver uma aplicação web,
            já que é mais fácil de ter acesso e ter uma melhor experiência de
            UX/UI. O projeto está sempre a evoluir e agora tem também a
            possibilidade de tocar uma nota para que o utilizador possa afinar
            os seus instrumentos. Foi desenvolvido usando a biblioteca{" "}
            <mark>React</mark>.
          </p>
          <br></br>
          <div className="content-right">
            <SiReact size={30} className="icon-projects" />
          </div>
        </div>
      </div>
      <div className="project-wrapper">
        <div className="img-wrapper">
          <div className="img-wrapper-aml"></div>
        </div>
        <div className="info-wrapper">
          <a
            className="project-title"
            href="https://github.com/antoniopedrodantas/aml-umons"
          >
            <h3 className="project-title"> Stock Market Analysis</h3>
          </a>
          <br></br>
          <p>
            Para o curso de <mark>Advanced Machine Learning</mark>, tivemos que
            implementar o algoritmo Exp3 para analisar e prever o mercado de
            ações para escolher a melhor empresa para se investir. O objetivo
            foi extrair dados de 6 das 500 maiores empresas listadas no mercado
            de ações público para servir como dados para o nosso A.I. Este
            projeto foi desenvolvido durante o meu programa de Erasmus na
            Universidade de Mons. <mark>Python</mark> foi a linguagem de
            programação escolhida.
          </p>
          <br></br>
          <div className="content-right">
            <SiPython size={30} className="icon-projects" />
          </div>
        </div>
      </div>
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
            ver se estão aptos para voar. Os médicos poderiam fazer upload de
            todos os tipos de exames e as grandes entidades poderiam pesquisar e
            acompanhar todos os seus profissionais. Utilizamos a{" "}
            <mark>MERN</mark> stack para o desenvolvimento (<mark>MongoDB</mark>
            , <mark>Express</mark>, <mark>React</mark> & <mark>Node</mark>).
          </p>
          <br></br>
          <div className="content-right">
            <SiMongodb size={30} className="icon-projects" />
            <SiReact size={30} className="icon-projects" />
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
            software capaz de <mark>simular um ambiente de arranha-céus </mark>
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
            <SiReact size={30} className="icon-projects" />
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
            <SiLaravel size={30} className="icon-projects" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
