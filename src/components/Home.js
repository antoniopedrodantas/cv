import React from 'react';

import Navbar from "./Navbar/Navbar";
import InfoComponent from "./InfoComponent/InfoComponent";

class Home extends React.Component {
    
    render() {
      return (
        <>
        <Navbar />
        <InfoComponent />
        </>
      );
    }

}

export default Home;