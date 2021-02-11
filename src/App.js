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
import { BrowserRouter as Router, Route } from "react-router-dom";
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
          <Route path="/" exact component={Home} />
          <Route path="/education" exact component={Education} />
          <Route path="/experience" exact component={Experiece} />
          <Route path="/interests" exact component={Interests} />
        </Router>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
