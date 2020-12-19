// Styling
import "./App.css";

// Components
import Home from "./scenes/Home/Home";
import Competences from "./scenes/Competences/Competences";
import Experiece from "./scenes/Experience/Experience";
import Interests from "./scenes/Interests/Interests";

// Dependencies
import {  BrowserRouter as Router, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <>
        <Route path='/' exact component={Home} />
        <Route path="/competences" exact component={Competences} />
        <Route path="/experience" exact component={Experiece} />
        <Route path="/interests" exact component={Interests} />
      </>
    </Router>
  );
}

export default App;
