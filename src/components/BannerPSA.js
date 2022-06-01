import React, { Component } from "react";
import "./BannerPSA.scss";

export default class BannerPSA extends Component {
  render() {
    return (
      <>
        <a className="banner-anchor" href="/board">
          <div className="scrolling-banner-PSA dt">
            <div>Board applications for 2022/2023 are now closed.</div>
            <div>Thank you for applying!</div>
          </div>
          <div className="scrolling-banner-PSA tablet">
            <div>Board applications for 2022/2023 are now closed.</div>
            <div>Thank you for applying!</div>
          </div>
          <div className="scrolling-banner-PSA mobile">
            Board applications for 2022/2023 are now closed. Thank you for
            applying!
          </div>
        </a>
      </>
    );
  }
}
