// Dependencies
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export function Formation() {
  // language displayed
  const { language } = useContext(LanguageContext);

  return language === "EN" ? (
    <>
      <div className="content-left">
        <h1 className="card-title">Formation</h1>
        <div className="card-info">
          <p>
            <mark>[2007-2014]</mark> Practiced Karate Shotokan @ Centro Budo de
            Fafe.
          </p>
          <br></br>
          <p>
            <mark>[2010-2012]</mark> Studied Classical Music @ Academia de
            Música José Atalaya.
          </p>
          <br></br>
          <p>
            <mark>[2012-2017]</mark> Studied Enlish @ FafSchool.
          </p>
          <br></br>
          <p>
            <mark>[2017-2020]</mark> Bachelor in Informatics and Computing
            Engineering @ FEUP.
          </p>
          <br></br>
          <p>
            <mark>[2020-2022] </mark> Masters in Informatics and Computing
            Engineering @ FEUP.
          </p>
          <br></br>
          <p>
            <mark>[2021-2022] </mark> Erasmus @ Faculte Polytechnique de
            Mons, Belgium.
          </p>
          <br></br>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="content-left">
        <h1 className="card-title">Formação</h1>
        <div className="card-info">
          <p>
            <mark>[2007-2014]</mark> Praticou Karate Shotokan @ Centro Budo de
            Fafe.
          </p>
          <br></br>
          <p>
            <mark>[2010-2012]</mark> Estudou Música Clássica @ Academia de
            Música José Atalaya.
          </p>
          <br></br>
          <p>
            <mark>[2012-2017]</mark> Estudou Inglês @ FafSchool.
          </p>
          <br></br>
          <p>
            <mark>[2017-2020]</mark> Licenciatura em Engenharia Informática e
            Computação @ FEUP.
          </p>
          <br></br>
          <p>
            <mark>[2020-2022] </mark> Mestrado em Engenharia Informática e
            Computação @ FEUP.
          </p>
          <br></br>
          <p>
            <mark>[2021-2022] </mark> Erasmus na Faculte Polytechnique de Mons,
            Bélgica.
          </p>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default Formation;
