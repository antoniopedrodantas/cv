// Styling
import "./App.css";

// Components
import Home from "./scenes/Home/Home";
import Education from "./scenes/Education/Education";
import Experiece from "./scenes/Experience/Experience";
import Interests from "./scenes/Interests/Interests";
import Navbar from "./components/Navbar/Navbar";

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
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/education">
              {" "}
              <Education />
            </Route>
            <Route exact path="/experience">
              {" "}
              <Experiece />
            </Route>
            <Route exact path="/interests">
              {" "}
              <Interests />
            </Route>
          </Switch>
        </Router>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
