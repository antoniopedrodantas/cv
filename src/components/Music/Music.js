// Dependencies
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

// Styling
import "./Music.css";

export function Music() {

  // language displayed
  const { language } = useContext(LanguageContext);

  return language === "EN" ? (
    <>
      <div className="content-left">
        <h1 className="card-title">Music</h1>
        <div className="card-info">
          <p>
            Being a student in my early 20s there are a lot of things I'm
            interested in. Travelling, cinema, humour and hanging out with my
            friends would be some of them. But without question that{" "}
            <mark>music</mark> is on top of that list.
          </p>
          <p>
            I take part of a high-school band called <mark>Jepards</mark>. Our
            EP, <mark>Okay, Alright!</mark>, is available on all streaming
            platforms. We are heavily influenced by The Strokes, Arctic Monkeys
            and all those bands from the early 2000s rock n' roll revival. Our
            songs got played on some national radios like <mark>Antena 3</mark>{" "}
            and <mark>Super Bock Super Rock FM</mark>, we were part of the{" "}
            <mark>Novos Talentos FNAC - 2019</mark> compilation and we got
            the chance to do some gigs in our country of <mark>Portugal </mark>
            and in <mark>Spain</mark>.
          </p>
          <div className="my-music-wrapper">
            <div className="my-music-div">
              <img
                src="/concert.JPG"
                className="my-music-me"
                alt="Me playing"
              ></img>
            </div>
            <div className="my-music-div">
              <img
                src="/antena-3.png"
                className="my-music-radio"
                alt="Antena 3"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </>
  ) : (
    <>
      <div className="content-left">
        <h1 className="card-title">Música</h1>
        <div className="card-info">
          <p>
            Sendo eu um estudante nos meus 20 e poucos anos, existem muitas
            coisas pelas quais me interesso. Cinema, humor, viajar e
            divertir-me com os meus amigos seriam algumas delas. Mas sem sombra de
            dúvida que a <mark>música</mark> estaria no topo da lista.
          </p>
          <p>
            Eu faço parte de uma banda de amigos de faculdade chamada{" "}
            <mark>Jepards</mark>. O nosso EP, <mark>Okay, Alright!</mark>, está
            disponível em todas as plataformas de straming. As nossas principais
            influências são The Strokes, Arctic Monkeys e todas essas bandas que
            apareceram no renascimento do rock n' roll dos anos 2000. As nossas
            músicas já passaram em várias rádios nacionais como a{" "}
            <mark>Antena 3</mark> e <mark>Super Bock Super Rock FM</mark>, fomos
            incluidos na compilação <mark>Novos Talentos FNAC - 2019</mark> e
            tivemos a oportunidade de dar alguns concertos tanto em{" "}
            <mark>Portugal</mark> como em <mark>Espanha</mark>.
          </p>
          <div className="my-music-wrapper">
            <div className="my-music-div">
              <img
                src="/concert.JPG"
                className="my-music-me"
                alt="Me playing"
              ></img>
            </div>
            <div className="my-music-div">
              <img
                src="/antena-3.png"
                className="my-music-radio"
                alt="Antena 3"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
}

export default Music;
