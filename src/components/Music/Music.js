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
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className="music-wrapper">
              <div className="music-div">
                <img
                  src="/is-this-it.jpg"
                  className="music"
                  alt="The Strokes - Is This It"
                ></img>
              </div>
              <div className="music-div">
                <img
                  src="/whatever.jpg"
                  className="music"
                  alt="Arctic Monkeys - Whatever People Sat I Am, That's What I'm Not"
                ></img>
              </div>
              <div className="music-div">
                <img
                  src="/lonerism.jpg"
                  className="music"
                  alt="Tame Impala - Lonerism"
                ></img>
              </div>
              <div className="music-div-d">
                <img
                  src="/salad-days.jpg"
                  className="music"
                  alt="Mac DeMarco - Salad Days"
                ></img>
              </div>
              <div className="music-div-d">
                <img
                  src="/the-ooz.jpg"
                  className="music"
                  alt="King Krule - The Ooz"
                ></img>
              </div>
              <div className="music-div-d">
                <img
                  src="/wide-awake.jpg"
                  className="music"
                  alt="Parquet Courts - Wide Awake!"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <hr></hr>
        <div className="content-right">
          <h1 className="card-title">My Music</h1>
          <div className="card-info">
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
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
