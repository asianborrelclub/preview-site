import React, { Component } from "react";
import "./LandingPage.scss";
import SocialButton from "./SocialButton";

class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="landing-page">
          <div className="landing-content">
            <div className="landing-announcement">
              <h1 className="landing-official">
                <span role="img" aria-label="Party Face">
                  WE ARE OFFICIAL!!&nbsp;🥳
                </span>
              </h1>
              <h1 className="landing-official-mobile">
                <span role="img" aria-label="Party Face">
                  WE ARE OFFICIAL!! 🥳&nbsp;🥳&nbsp;🥳
                </span>
              </h1>
              <h2>
                We are delighted to announce to you the
                Asian&nbsp;Borrel&nbsp;Club.
              </h2>
              <div className="landing-cta">
                <a href="#about-us">
                  <div className="cta vision-cta">About Us</div>
                </a>
                <a
                  href="https://docs.google.com/forms/d/1y0BpGWZA2d8IKTOqrYGGHWD_9QzXTXVZRL3siw4v_KA/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="cta register-cta">Join the club</div>
                </a>
              </div>
            </div>
            <div className="landing-image">
              <div className="video-container">
                <iframe
                  title="abc promo video"
                  className="video"
                  src="https://www.youtube.com/embed/L8vg8wihuns"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <SocialButton />
        </div>
      </>
    );
  }
}
export default LandingPage;
