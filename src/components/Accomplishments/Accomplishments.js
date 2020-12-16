import React from "react";

class WorkExperience extends React.Component {
  render() {
    return (
      <>
        <div className="content-right">
          <h1 className="card-title">Accomplishments</h1>
          <div className="card-info">
            <p>Placed 3rd on Iberic Classical Guitar contest, <mark>2011</mark>.</p>
            <br></br>
            <p> Practiced Karate Shotokan, reached <mark>1st Kyu</mark>. National champion on <mark>2009</mark>, 2nd place on <mark>2012</mark>, 3rd place on <mark>2011</mark>, <mark>2013</mark>, <mark>2014</mark>.</p>
            <br></br>
            <p>Design Manager of <mark>Potenza</mark>, F1 in Schools team. Placed 3rd on regional championship, <mark>2014</mark>.</p>
            <br></br>
            <p>Advanced Degree in <mark>English</mark> by Cambridge University, <mark>C1</mark>.</p>
            <br></br>
          </div>
        </div>
      </>
    );
  }
}

export default WorkExperience;