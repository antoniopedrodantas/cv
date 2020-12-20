import React from "react";

import "./Interests.css"

import Navbar from "../../components/Navbar/Navbar";
import Music from "../../components/Music/Music";

class Interests extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="info">
            <Music />
        </div>
      </>
    );
  }
}

export default Interests;