// Dependencies
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Styling
import "./Footer.css";

export function Footer() {
  // language displayed
  const { language } = useContext(LanguageContext);

  return language === "EN" ? (
    <>
      <div className="card-disclaimer">
        <div className="footer-separator">
          <a href="https://github.com/antoniopedrodantas">
            <FaGithub size={20} className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com/in/antoniopedrodantas/">
            <FaLinkedin size={20} className="footer-icon" />
          </a>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="card-disclaimer">
        <div className="footer-separator">
          <a href="https://github.com/antoniopedrodantas">
            <FaGithub size={20} className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com/in/antoniopedrodantas/">
            <FaLinkedin size={20} className="footer-icon" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
