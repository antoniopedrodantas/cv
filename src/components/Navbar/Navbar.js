// Dependencies
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

// Styling
import "./Navbar.css";

export function Navbar() {
  // language state
  const { language, setLanguage } = useContext(LanguageContext);

  // clicked state
  const [clicked, setClicked] = useState(false);

  // handles click from hamburguer menu
  const handleClick = () => {
    setClicked(!clicked);
  };

  // handles click for language change
  const handleLanguage = () => {
    if (language === "EN") {
      setLanguage("PT");
    } else {
      setLanguage("EN");
    }
  };

  return language === "EN" ? (
    <nav className="NavbarItems">
      <h1>
        <Link className="navbar-logo" to="/">
          {" "}
          CurriculumVitae{" "}
        </Link>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className="icon"> {clicked ? <FaTimes /> : <FaBars />} </i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link className="nav-links" to="/education">
            Education
          </Link>
          <Link className="nav-links" to="/experience">
            Experience
          </Link>
          <Link className="nav-links" to="/interests">
            Interests
          </Link>
          <span className="language-button" role="img" onClick={handleLanguage}>
            {" "}
            🇬🇧 {language}{" "}
          </span>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className="NavbarItems">
      <h1>
        <Link className="navbar-logo" to="/">
          {" "}
          CurriculumVitae{" "}
        </Link>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className="icon"> {clicked ? <FaTimes /> : <FaBars />} </i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link className="nav-links" to="/education">
            Educação
          </Link>
          <Link className="nav-links" to="/experience">
            Experiência
          </Link>
          <Link className="nav-links" to="/interests">
            Interesses
          </Link>
          <span className="language-button" role="img" onClick={handleLanguage}>
            {" "}
            🇵🇹 {language}{" "}
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
