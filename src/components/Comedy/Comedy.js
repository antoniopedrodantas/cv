import React from "react";

import "./Comedy.css";

class Comedy extends React.Component {
  render() {
    return (
      <>
        <div className="content-right">
          <h1 className="card-title">Comedy</h1>
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
            <div className="comedy-wrapper">
              <div className="comedy-div">
                <img src="/dave-chappele.jpg" className="comedy" alt="Dave Chappele"></img>
              </div>
              <div className="comedy-div">
                <img src="/guilerme-duarte.jpg" className="comedy" alt="Guilherme Duarte"></img>
              </div>
              <div className="comedy-div">
                <img src="/bill-hicks.jpg" className="comedy" alt="Bill Hicks"></img>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Comedy;