import React from "react";

import "./Project.css";

class Projects extends React.Component {
  render() {
    return (
      <>
        <div className="content-left">
          <h1 className="card-title">Projects</h1>
          <div className="card-info">
            <p>
              Throughout the years, I've had the oppurtunity to develop lots of
              different projects for almost every college course I had. It would
              be pointless to show them all here, so I'll just list the ones I
              am more proud of and think are the most useful.
            </p>
            <div className="wrapper-project">
              <div className="div1">
                <h3 className="project-title"> Answerly</h3>
                <br></br>
                <p>
                  {" "}
                  Answerly was our project for the <mark>
                    Web Development
                  </mark>{" "}
                  course. The goal was to create an interactive{" "}
                  <mark>Q&A Website</mark> where people could log in, make
                  intersting questions or reply to them. We used{" "}
                  <mark>Laravel</mark> as a framework for this project.
                </p>
                <br></br>
                <img
                  className="project-image"
                  src="/answerly.PNG"
                  alt="Q&A Project"
                ></img>
              </div>
              <div className="div2">
                <h3 className="project-title"> Lift Management System</h3>
                <br></br>
                <p>
                  {" "}
                  In the <mark>Distributed Systems</mark> class we developed a
                  software that was capable of{" "}
                  <mark>simulating a skyscraper</mark> environment that
                  contained lifts. The idea was to be able to introduce certain
                  independent variables (ex: number of floors, number of lifts,
                  each lift's max weight) and analyzing data to understand what
                  would be the most efficient building configuration. This
                  project was developed in <mark>Java</mark> using Jade and
                  Repast libraries.
                </p>
                <br></br>
                <img
                  className="project-image"
                  src="/lift-management-system.png"
                  alt="Lift Management System Project"
                ></img>
              </div>
              <div className="div3">
                <h3 className="project-title"> Tempura</h3>
                <br></br>
                <p>
                  Tempura was a fictional company we created for the{" "}
                  <mark>Information Systems</mark> course. The goal of the
                  project was to develop a web application for the{" "}
                  <mark>data analysis</mark> of said company. The website would
                  have to be able to import SAFT files and display the
                  enterprise's stats on a user-friendly manner. We used{" "}
                  <mark>TypeScript</mark> and <mark>React</mark> for its
                  development.
                </p>
                <br></br>
                <img
                  className="project-image"
                  src="/tempura.png"
                  alt="Data Analysis project"
                ></img>
              </div>
              <div className="div4">
                <h3 className="project-title"> Box World</h3>
                <br></br>
                <p>
                  For the <mark>Artificial Intelligence</mark> class we had to
                  develop an agent that could <mark>beat a puzzle game</mark>.
                  We chose to recreate Box World. The rules are simple, the red
                  square needs to get to the blue square. In order to do so it
                  will have to solve the level's layout by pushing some boxes
                  and ice cubes. This project was made using <mark>Pyhton</mark>
                  .
                </p>
                <br></br>
                <img
                  className="project-image"
                  src="/box-world.png"
                  alt="Artificial Intellience project"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
