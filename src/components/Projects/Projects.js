import React from "react";

import "./Project.css";

class Projects extends React.Component {
  render() {
    return (
      <>
        <div className="content-left">
          <h1 className="card-title">Projects</h1>
          <div className="card-info">
            <div className="wrapper-project">
              <div className="div1">
                <h3 className="project-title"> Answerly</h3>
                <br></br>
                <p>
                  {" "}
                  Answerly was our project for the Web Development course. The
                  goal was to create an interactive <mark>
                    Q&A Website
                  </mark>{" "}
                  where people could log in, make intersting questions or reply
                  to them. We used <mark>Laravel</mark> as a framework for this
                  project.
                </p>
                <br></br>
                <img src="/answerly.PNG" alt="Q&A Project"></img>
              </div>
              <div className="div2">
                <h3 className="project-title"> Lift Management System</h3>
                <br></br>
                <p>
                  {" "}
                  In Distributed Systems and Artificial Intelligence class we
                  developed a software that was capable of{" "}
                  <mark>simulating an skyscraper</mark> environment that
                  contained lifts. The idea was to be able to introduce certain
                  independent variables (ex: number of floors, number of lifts,
                  each lift's max weight) a analyzing data to understand what
                  would be the most efficient building configuration. This
                  project was developed in <mark>Java</mark> using Jade and
                  Repast libraries.
                </p>
                <br></br>
                <img src="/lift-management-system.png" alt="Lift Management System Project"></img>
              </div>
              <div className="div3">
                <h3 className="project-title"> Tempura</h3>
                <br></br>
                <p>
                  Tempura was a fictional company we created for the Information
                  Systems course. The goal of the project was to develop a web
                  application for <mark>data analysis</mark> of said company.
                  The website would have to be able to import SAFT files and
                  display the enterprise's stats on user-friendly manner. We
                  used <mark>TypeScript</mark> and <mark>React</mark> fir its
                  development.
                </p>
                <br></br>
                <img src="/tempura.png" alt="Data Analysis project"></img>
              </div>
              <div className="div4"> Div 4</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
