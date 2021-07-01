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
                Welcome to the Asian Borrel Club!
              </h1>
              <h2>
                Let's borrel!
              </h2>
              <div className="landing-cta">
                <a href="#about-us">
                  <div className="cta vision-cta">About ABC</div>
                </a>
                <div className="cta register-cta">Coming soon...</div>
              </div>
            </div>
            <div className="landing-image">
              <div className="video-container">
                <iframe
                  title="abc promo video"
                  className="video"
                  src="https://www.youtube.com/embed/tdjZiohr4PM"
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
