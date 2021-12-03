// Styling
import "./App.scss";

// Components
import LandingPage from "./scenes/LandingPage/LandingPage";
import SvgBackground from "./components/SvgBackground/SvgBackground";

// Dependencies
import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { LanguageContext } from "./context/LanguageContext";

function App() {
  // default language
  const [language, setLanguage] = useState("EN");

  // this file serves as router
  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <>
                <LandingPage />
                <SvgBackground />
              </>
            </Route>
          </Switch>
        </Router>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
