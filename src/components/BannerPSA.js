import React, { Component } from "react";
import "./BannerPSA.scss";

class BannerPSA extends Component {
  render() {
    return (
      <>
        <a className="banner-anchor" href="/board">
          <div className="scrolling-banner-PSA dt">
            <div>Board recruitement for 2022/2023 is now in progress!</div>
            <div>Click here for more info.</div>
          </div>
          <div className="scrolling-banner-PSA tablet">
            <div>Board recruitement for year 22/23 now in progress!</div>
            <div>Tap here for more info.</div>
          </div>
          <div className="scrolling-banner-PSA mobile">
            22/23 Board recruitement now in progress. Tap here for more info.
          </div>
        </a>
      </>
    );
  }
}

export default BannerPSA;
