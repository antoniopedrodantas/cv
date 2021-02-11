// Dependencies
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { FaMapMarkerAlt, FaGithub, FaInstagram } from "react-icons/fa";
import { BiBookBookmark } from "react-icons/bi";

// Styling
import "./ProfileComponent.css";

export function ProfileComponent() {
  // language displayed
  const { language } = useContext(LanguageContext);

  return language === "EN" ? (
    <>
      <div className="info">
        <div className="picture">
          <img className="rounded" src="/me.jpg" alt="This is myself."></img>
        </div>
        <div className="profile-info">
          <div className="name">
            <h1>António Pedro Dantas</h1>
          </div>
          <div className="description">
            <h2>Informatics and Computing Engineering [4th Year]</h2>
          </div>
          <div className="little-links">
            <div className="little-info-left-up">
              <a
                className="little-paragraph-start"
                href="https://www.google.com/search?q=portugal"
              >
                <FaMapMarkerAlt size={25} className="icon-text" /> Portugal
              </a>
            </div>
            <div className="little-info-right-up">
              <a
                className="little-paragraph-end"
                href="https://sigarra.up.pt/feup/pt/web_page.inicial"
              >
                <BiBookBookmark size={25} className="icon-text" /> F.E.U.P.
              </a>
            </div>
            <div className="little-info-left-down">
              <a
                className="little-paragraph-start"
                href="https://github.com/antoniopedrodantas"
              >
                <FaGithub size={25} className="icon-text" /> GitHub
              </a>
            </div>
            <div className="little-info-right-down">
              <a
                className="little-paragraph-end"
                href="https://www.instagram.com/pedrodantaspedro/"
              >
                <FaInstagram size={25} className="icon-text" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="info">
        <div className="picture">
          <img className="rounded" src="/me.jpg" alt="This is myself."></img>
        </div>
        <div className="profile-info">
          <div className="name">
            <h1>António Pedro Dantas</h1>
          </div>
          <div className="description">
            <h2>Engenharia Informática e Computação [4º Ano]</h2>
          </div>
          <div className="little-links">
            <div className="little-info-left-up">
              <a
                className="little-paragraph-start"
                href="https://www.google.com/search?q=portugal"
              >
                <FaMapMarkerAlt size={25} className="icon-text" /> Portugal
              </a>
            </div>
            <div className="little-info-right-up">
              <a
                className="little-paragraph-end"
                href="https://sigarra.up.pt/feup/pt/web_page.inicial"
              >
                <BiBookBookmark size={25} className="icon-text" /> F.E.U.P.
              </a>
            </div>
            <div className="little-info-left-down">
              <a
                className="little-paragraph-start"
                href="https://github.com/antoniopedrodantas"
              >
                <FaGithub size={25} className="icon-text" /> GitHub
              </a>
            </div>
            <div className="little-info-right-down">
              <a
                className="little-paragraph-end"
                href="https://www.instagram.com/pedrodantaspedro/"
              >
                <FaInstagram size={25} className="icon-text" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileComponent;
