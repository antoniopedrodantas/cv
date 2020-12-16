// Styling
import "./App.css";

// Components
import Home from "./scenes/Home/Home";

// Dependencies
import {  BrowserRouter as Router, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <>
        <Route path='/' exact component={Home} />
      </>
    </Router>
  );
}

export default App;
