// Dependencies
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export function WorkExperience() {
  // language displayed
  const { language } = useContext(LanguageContext);

  return language === "EN" ? (
    <>
      <div className="content-right">
        <h1 className="card-title">Work Experience</h1>
        <div className="card-info">
          <p>
            Due to the fact of me still being relatively young, I do not have a
            lot of work experience. I did have, however, a small insight into
            the job market by taking a few part-time jobs in my home town. I
            plan still in doing some summer internships before I graduate.
          </p>
          <br></br>
          <p>
            <mark>[2015]</mark>: Worked part-time on a <mark>Pharmacy</mark> as
            stock replenisher.
          </p>
          <br></br>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="content-right">
        <h1 className="card-title">Experiência de Trabalho</h1>
        <div className="card-info">
          <p>
            Devido ao facto de ainda ser relativamente novo, ainda não tenho
            muita experiência de trabalho. Contudo, tive um pequeno vislumbre ao
            mercado de trabalho ao estar envolvido em alguns trabalhos part-time
            na minha cidade natal. Também planeio em fazer alguns estágios de
            verão antes de me licenciar.
          </p>
          <br></br>
          <p>
            <mark>[2015]</mark>: Trabalho part-time numa <mark>Farmácia</mark>{" "}
            como repositor de stock.
          </p>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default WorkExperience;
