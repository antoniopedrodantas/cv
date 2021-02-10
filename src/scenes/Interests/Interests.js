// Dependencies
import React from "react";

// Styling
import "./Interests.css";

// Components
import Music from "../../components/Music/Music";

class Interests extends React.Component {
  render() {
    return (
      <>
        <div className="interests-wrapper">
          <div className="info">
            <Music />
          </div>
          <div className="spotify-wrapper">
            <div className="spotify-playlist">
              <iframe
                src="https://open.spotify.com/embed/album/3I1J9qKYILlkefjq57izYY"
                width="300"
                height="250"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
            <div className="concert-photo">
              <div className="concert"></div>
            </div>
            <div className="spotify-artist">
              <iframe
                src="https://open.spotify.com/follow/1/?uri=spotify:artist:24bD87DnmxOzUG4DrAYsO2?si=3o07y77US-G_PXVTQ4p8Zw&size=detail&theme=light"
                width="300"
                height="56"
                scrolling="no"
                frameBorder="0"
                style={{ border: "none", overflow: "hidden" }}
                allowtransparency="true"
              ></iframe>
            </div>
          </div>

          <div className="friends-wrapper">
            <div className="friends-photo-1">
              <div className="friends-1"></div>
            </div>
            <div className="friends-photo-2">
              <div className="friends-2"></div>
            </div>
            <div className="friends-photo-3">
              <div className="friends-3"></div>
            </div>
          </div>
          <div className="info">
            <Music />
          </div>
        </div>
      </>
    );
  }
}

export default Interests;
