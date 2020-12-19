import React from "react";

import "./Interests.css"

import Navbar from "../../components/Navbar/Navbar";
import Cinema from "../../components/Cinema/Cinema";
import Comedy from "../../components/Comedy/Comedy";
import Music from "../../components/Music/Music";

class Interests extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="info">
            <Cinema />
            <br></br>
            <hr></hr>
            <Comedy />
            <br></br>
            <hr></hr>
            <Music />
        </div>
      </>
    );
  }
}

export default Interests;