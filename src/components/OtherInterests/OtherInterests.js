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
              <GiCommercialAirplane className="icon-text" /> Travelling
            </p>
            <p className="idented-paragraph">
              {" "}
              <BiCameraMovie className="icon-text" /> Cinema
            </p>
            <p className="idented-paragraph">
              {" "}
              <FaTheaterMasks className="icon-text" /> Comedy
            </p>
            <p className="idented-paragraph">
              {" "}
              <BiDrink className="icon-text" /> Social Life
            </p>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="content-left">
        <h1 className="card-title">Outros Interesses</h1>
        <div className="card-info">
          <p>
            Sendo eu um estudante nos meus 20 e poucos anos, existem muitas
            coisas pelas quais me interesso para além da música. Cinema, humor,
            viajar e divertir-me com os meus amigos seriam algumas delas.
          </p>
          <div className="idented">
            <p className="idented-paragraph">
              {" "}
              <GiCommercialAirplane className="icon-text" /> Viajar
            </p>
            <p className="idented-paragraph">
              {" "}
              <BiCameraMovie className="icon-text" /> Cinema
            </p>
            <p className="idented-paragraph">
              {" "}
              <FaTheaterMasks className="icon-text" /> Humor
            </p>
            <p className="idented-paragraph">
              {" "}
              <BiDrink className="icon-text" /> Vida Social
            </p>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
}

export default OtherInterests;
