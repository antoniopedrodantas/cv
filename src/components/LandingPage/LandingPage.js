// Dependencies
import React from "react";

// Styling
import "./LandingPage.css";

// Components
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";

export function LandingPage() {
  return (
    <>
      <div className="landing-page-container">
        <ProfileComponent />
        <div className="landing-page-section">
          div1
        </div>
      </div>
    </>
  );
}

export default LandingPage;
