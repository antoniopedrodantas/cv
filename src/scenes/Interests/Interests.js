import React from "react";

import "./Interests.css"

import Navbar from "../../components/Navbar/Navbar";
import Cinema from "../../components/Cinema/Cinema";    

class Interests extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="info">
            <Cinema />
        </div>
      </>
    );
  }
}

export default Interests;