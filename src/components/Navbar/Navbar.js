import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import './Navbar.css';
import { FaTimes, FaBars } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

// class Navbar extends React.Component {
export function Navbar(){

  const {language, setLanguage} = useContext(LanguageContext);

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  const handleLanguage = () => {
    if(language === "EN") {
      setLanguage("PT")
    }
    else {
      setLanguage("EN");
    }
  }

    return (
      <nav className="NavbarItems">
        <h1><Link className="navbar-logo" to="/"> CurriculumVitae </Link></h1>
        <div className="menu-icon" onClick={handleClick}>
          <i className="icon"> {clicked ? <FaTimes /> : <FaBars />} </i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link className="nav-links" to="/competences">Competences</Link>
            <Link className="nav-links" to="/experience">Experience</Link>
            <Link className="nav-links" to="/interests">Interests</Link>
            <button className="language-button" onClick={handleLanguage}> {language} </button>
          </li>
        </ul>
      </nav>
    );

}

export default Navbar;
