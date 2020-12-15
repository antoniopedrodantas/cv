import React from "react";

import './Navbar.css';
import { FaTimes, FaBars, FaGithub } from "react-icons/fa";

class Navbar extends React.Component {

  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo"> CurriculumVitae </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className="icon"> {this.state.clicked ? <FaTimes /> : <FaBars />} </i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <a className="nav-links" href="#projects">Projects</a>
            <a className="nav-links" href="#interests">Interests</a>
            <a className="nav-links" href="https://github.com/antoniopedrodantas"><FaGithub /></a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
