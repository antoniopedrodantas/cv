import React from "react";

import "./Cinema.css";

class Cinema extends React.Component {
  render() {
    return (
      <>
        <div className="content-left">
          <h1 className="card-title">Cinema</h1>
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
            <div className="movie-wrapper">
              <div className="movie-div">
                <img src="/trainspotting.jpg" className="movie" alt="Trainspotting"></img>
              </div>
              <div className="movie-div">
                <img src="/clockwork-orange.jpg" className="movie" alt="Trainspotting"></img>
              </div>
              <div className="movie-div">
                <img src="/taxi-driver.jpg" className="movie" alt="Trainspotting"></img>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cinema;
