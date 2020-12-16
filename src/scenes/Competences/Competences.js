import React from "react";

import "./Competences.css"

import Navbar from "../../components/Navbar/Navbar";
import CompetencesComponent from "../../components/CompetencesComponent/CompetencesComponent";

class Competences extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <CompetencesComponent />
      </>
    );
  }
}

export default Competences;