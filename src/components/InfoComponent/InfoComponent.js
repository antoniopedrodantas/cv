import React from "react";

import './InfoComponent.css';

class InfoComponent extends React.Component {

  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <>
      </>
    );
  }
}

export default InfoComponent;