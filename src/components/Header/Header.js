// Dependencies
import React from "react";
import { ImHeart, ImBooks, ImBriefcase } from "react-icons/im";

// Styling
import "./Header.css";

export function Header() {
  return (
    <>
      <div className="landing-page-header">
        <li className="header-element header-element-top">
          <div className="picture">
            <img
              className="rounded"
              src="https://i.imgur.com/t8yHQyL.jpeg"
              alt="This is myself."
            ></img>
          </div>
        </li>
        <li className="header-element">
          <ImBooks size={65}/>
        </li>
        <li className="header-element">
          <ImBriefcase size={65} />
        </li>
        <li className="header-element header-element-bottom">
          <ImHeart size={65} />
        </li>
      </div>
    </>
  );
}

export default Header;
