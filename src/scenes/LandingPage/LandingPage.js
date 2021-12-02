// Dependencies
import React, { useState, useContext } from "react";
import { ImHeart, ImBooks, ImBriefcase } from "react-icons/im";
import { LanguageContext } from "../../context/LanguageContext";

// Styling
import "./LandingPage.css";

// Components
import InfoComponent from "../../components/InfoComponent/InfoComponent";

import Formation from "../../components/Formation/Formation";
import Accomplishments from "../../components/Accomplishments/Accomplishments";
import Skills from "../../components/Skills/Skills";

import Experience from "../Experience/Experience";

import Music from "../../components/Music/Music";
import OtherInterests from "../../components/OtherInterests/OtherInterests";

export function LandingPage() {
  // language state
  const { language, setLanguage } = useContext(LanguageContext);

  const [renderPage, setRenderPage] = useState("home");

  const setRenderPageAux = (page) => {
    setRenderPage(page);
  };

  const handleLanguage = () => {
    if (language === "EN") {
      setLanguage("PT");
    } else {
      setLanguage("EN");
    }
  };

  const renderLanguageButton = () => {
    return language === "PT" ? (
      <span className="language-button" role="img">
        {" "}
        🇵🇹{" "}
      </span>
    ) : (
      <span className="language-button" role="img">
        {" "}
        🇬🇧{" "}
      </span>
    );
  };

  const renderComponent = () => {
    switch (renderPage) {
      case "home":
        return (
          <>
            <InfoComponent />
          </>
        );
      case "education":
        return (
          <>
            <Formation />
            <br></br>
            <hr></hr>
            <Accomplishments />
            <br></br>
            <hr></hr>
            <Skills />
            <br></br>
          </>
        );
      case "experience":
        return (
          <>
            <Experience />
          </>
        );
      case "interests":
        return (
          <>
            <Music />
            <OtherInterests />
          </>
        );
      default:
        return (
          <>
            <InfoComponent />
          </>
        );
    }
  };

  return (
    <>
      <div className="landing-page-container">
        <div className="landing-page-header">
          <li
            className="header-element header-element-top"
            onClick={() => setRenderPageAux("home")}
          >
            <div className="picture">
              <img
                className="rounded"
                src="https://i.imgur.com/t8yHQyL.jpeg"
                alt="This is myself."
              ></img>
            </div>
            <div className="popper-boi">
              <h4 className="popper-text">Home</h4>
            </div>
          </li>
          <li
            className="header-element"
            onClick={() => setRenderPageAux("education")}
          >
            <ImBooks size={45} />
            <div className="popper-boi">
              <h4 className="popper-text">Education</h4>
            </div>
          </li>
          <li
            className="header-element"
            onClick={() => setRenderPageAux("experience")}
          >
            <ImBriefcase size={45} />
            <div className="popper-boi">
              <h4 className="popper-text">Experience</h4>
            </div>
          </li>
          <li
            className="header-element"
            onClick={() => setRenderPageAux("interests")}
          >
            <ImHeart size={45} />
            <div className="popper-boi">
              <h4 className="popper-text">Interests</h4>
            </div>
          </li>
          <li
            className="header-element header-element-bottom header-element-special"
            onClick={() => handleLanguage()}
          >
            {renderLanguageButton()}
            <div className="popper-boi">
              <h4 className="popper-text">Language</h4>
            </div>
          </li>
        </div>
        <div className="landing-page-section">{renderComponent()}</div>
      </div>
    </>
  );
}

export default LandingPage;
