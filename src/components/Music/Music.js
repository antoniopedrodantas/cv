import React from "react";

import "./Music.css";

class Music extends React.Component {
  render() {
    return (
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
              platforms. We are heavily influenced by The Strokes, Arctic
              Monkeys and all those bands from the early 2000s rock n' roll
              revival. Our songs got played on some national radios like{" "}
              <mark>Antena 3</mark> and <mark>Super Bock Super Rock FM</mark>,
              we were part of the 2019's{" "}
              <mark>FNAC's "CD - Novos Talentos"</mark> compilation and we got
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
    );
  }
}

export default Music;
