import React from 'react';

import Navbar from "../components/Navbar/Navbar";
import InfoComponent from "../components/InfoComponent/InfoComponent";

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