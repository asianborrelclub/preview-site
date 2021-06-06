import React, { Component } from "react";
import "./LandingPage.scss";
import SocialButton from "./SocialButton";
import BannerPSA from "./BannerPSA";

class LandingPage extends Component {
  render() {
    return (
      <>
        <BannerPSA />
        <div className="landing-page">
          <div className="landing-content">
            <div className="landing-announcement">
              <h1 className="landing-official">
                <span role="img" aria-label="Party Face">
                  WE ARE OFFICIAL!!
                </span>
              </h1>
              <h2>
                We are excited to introduce you to the
                Asian&nbsp;Borrel&nbsp;Club.
              </h2>
              <div className="landing-cta">
                <a href="#about-us">
                  <div className="cta vision-cta">About ABC</div>
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
