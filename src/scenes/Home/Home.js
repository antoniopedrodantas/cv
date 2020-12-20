import React from "react";

import "./Home.css"

import Navbar from "../../components/Navbar/Navbar";
import InfoComponent from "../../components/InfoComponent/InfoComponent";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <div>
            <ProfileComponent />
          </div>
          <div>
            <InfoComponent />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
