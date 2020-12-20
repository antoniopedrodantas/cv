import React from "react";

import "./Interests.css"

import Music from "../../components/Music/Music";

class Interests extends React.Component {
  render() {
    return (
      <>
        <div className="info">
            <Music />
        </div>
      </>
    );
  }
}

export default Interests;