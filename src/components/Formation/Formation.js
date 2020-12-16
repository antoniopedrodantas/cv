import React from "react";

import "./Formation.css";

class Formation extends React.Component {
  render() {
    return (
      <>
        <div className="content-left">
          <h1 className="card-title">Formation</h1>
          <div className="card-info">
            <p><mark>[2010-2012]</mark> Studied Classical Music @ Academia de Música José Atalaya.</p>
            <br></br>
            <p><mark>[2010-2014]</mark> Middle School @ Escola EB2,3 Prof. Carlos Teixeira.</p>
            <br></br>
            <p><mark>[2012-2017]</mark> Studied Enlish @ FafSchool.</p>
            <br></br>
            <p><mark>[2014-2017]</mark> High School @ Escola Secundária de Fafe.</p>
            <br></br>
            <p><mark>[2017-2022] </mark> Studied Informatics and Computing Engineering @ FEUP.</p>
            <br></br>
          </div>
        </div>
      </>
    );
  }
}

export default Formation;
