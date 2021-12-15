// Styling
import "./App.scss";

// Components
import LandingPage from "./scenes/LandingPage/LandingPage";
import SvgBackground from "./components/SvgBackground/SvgBackground";

// Dependencies
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { LanguageContext } from "./context/LanguageContext";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

function App() {
  // default language
  const [language, setLanguage] = useState("EN");

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderBackground = () => {
    if (windowDimensions > 1200) {
      return <SvgBackground />;
    }
    else {
      return <></>
    }
  }

  // this file serves as router
  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <>
                <LandingPage />
                {renderBackground()}
              </>
            </Route>
          </Switch>
        </Router>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
