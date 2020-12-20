// Dependencies
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export function WorkExperience() {
  // language displayed
  const { language } = useContext(LanguageContext);

  return language === "EN" ? (
    <>
      <div className="content-right">
        <h1 className="card-title">Accomplishments</h1>
        <div className="card-info">
          <p>
            {" "}
            Reached <mark>1st Kyu</mark> in Karate Shotokan. National champion
            on <mark>2009</mark>, 2nd place on <mark>2012</mark>, 3rd place on{" "}
            <mark>2011</mark>, <mark>2013</mark>, <mark>2014</mark>.
          </p>
          <br></br>
          <p>
            Placed <mark>3rd</mark> on Iberic Classical Guitar contest,{" "}
            <mark>2011</mark>.
          </p>
          <br></br>
          <p>
            Design Manager of <mark>Potenza</mark>, F1 in Schools team. Placed
            3rd on regional championship, <mark>2014</mark>.
          </p>
          <br></br>
          <p>
            Advanced Degree in <mark>English</mark> by Cambridge University,{" "}
            <mark>C1</mark>.
          </p>
          <br></br>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="content-right">
        <h1 className="card-title">Conquistas</h1>
        <div className="card-info">
          <p>
            {" "}
            Chegou a <mark>1º Kyu</mark> em Karate Shotokan. Campeão Nacional em{" "}
            <mark>2009</mark>, 2º lugar em <mark>2012</mark>, 3º lugar em{" "}
            <mark>2011</mark>, <mark>2013</mark>, <mark>2014</mark>.
          </p>
          <br></br>
          <p>
            Conquistoy o <mark>3º</mark> lugar no concurso Ibérico de Guitarra
            Clássica em <mark>2011</mark>.
          </p>
          <br></br>
          <p>
            Design Manager dos <mark>Potenza</mark>, equipa de F1 in Schools.
            Chegaram ao 3º lugar no campeonato regional, <mark>2014</mark>.
          </p>
          <br></br>
          <p>
            Grau Advanced em <mark>Inglês</mark> pela Cambridge University,{" "}
            <mark>C1</mark>.
          </p>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default WorkExperience;
