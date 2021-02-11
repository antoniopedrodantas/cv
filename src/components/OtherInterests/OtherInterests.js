// Dependencies
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { GiCommercialAirplane } from "react-icons/gi";
import { BiCameraMovie, BiDrink } from "react-icons/bi";
import { FaTheaterMasks } from "react-icons/fa";

export function OtherInterests() {
  // language displayed
  const { language } = useContext(LanguageContext);

  return language === "EN" ? (
    <>
      <div className="content-left">
        <h1 className="card-title">Other Interests</h1>
        <div className="card-info">
          <p>
            Being a student in my early 20s there are a lot of things I'm
            interested in besides music. Travelling, cinema, humour and hanging
            out with my friends would be some of them.
          </p>
          <div className="idented">
            <p className="idented-paragraph">
              {" "}
              <GiCommercialAirplane /> Travelling
            </p>
            <p className="idented-paragraph">
              {" "}
              <BiCameraMovie /> Cinema
            </p>
            <p className="idented-paragraph">
              {" "}
              <FaTheaterMasks /> Comedy
            </p>
            <p className="idented-paragraph">
              {" "}
              <BiDrink /> Social Life
            </p>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="content-left">
        <h1 className="card-title">Outro Interesses</h1>
        <div className="card-info">
          <p>
            Sendo eu um estudante nos meus 20 e poucos anos, existem muitas
            coisas pelas quais me interesso para além da música. Cinema, humor,
            viajar e divertir-me com os meus amigos seriam algumas delas.
          </p>
          <div className="idented">
            <p className="idented-paragraph">
              {" "}
              <GiCommercialAirplane /> Viajar
            </p>
            <p className="idented-paragraph">
              {" "}
              <BiCameraMovie /> Cinema
            </p>
            <p className="idented-paragraph">
              {" "}
              <FaTheaterMasks /> Humor
            </p>
            <p className="idented-paragraph">
              {" "}
              <BiDrink /> Vida Social
            </p>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
}

export default OtherInterests;