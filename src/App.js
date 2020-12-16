// Styling
import "./App.css";

// Components
import Home from "./scenes/Home/Home";
import Competences from "./scenes/Competences/Competences";

// Dependencies
import {  BrowserRouter as Router, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <>
        <Route path='/' exact component={Home} />
        <Route path="/competences" exact component={Competences} />
      </>
    </Router>
  );
}

export default App;
