// Styling
import "./App.css";

// Components
import Home from "./scenes/Home/Home";
import Competences from "./scenes/Competences/Competences";
import Experiece from "./scenes/Experience/Experience";
import Interests from "./scenes/Interests/Interests";
import Navbar from "./components/Navbar/Navbar";

// Dependencies
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LanguageContext } from "./context/LanguageContext";

function App() {

  const [language, setLanguage] = useState("EN");

  return (
    <Router>
      <>
        <LanguageContext.Provider value={{language, setLanguage}}>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/competences" exact component={Competences} />
          <Route path="/experience" exact component={Experiece} />
          <Route path="/interests" exact component={Interests} />
        </LanguageContext.Provider>
      </>
    </Router>
  );
}

export default App;
