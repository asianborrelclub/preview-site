import React, { Component } from "react";
import "./BannerPSA.scss";

export default class BannerPSA extends Component {
  render() {
    return (
      <>
        <a className="banner-anchor" href="/board">
          <div className="scrolling-banner-PSA dt">
            <div>Board recruitment for 2022/2023 is now in progress!</div>
            <div>Click here for more info.</div>
          </div>
          <div className="scrolling-banner-PSA tablet">
            <div>Board recruitment for year 22/23 now in progress!</div>
            <div>Tap here for more info.</div>
          </div>
          <div className="scrolling-banner-PSA mobile">
            22/23 Board recruitment now in progress. Tap here for more info.
          </div>
        </a>
      </>
    );
  }
}
