import React, { Component } from "react";
import "./BannerPSA.scss";

class BannerPSA extends Component {
  render() {
    return (
      <>
        <a className="banner-anchor" href="/hoodie">
          <div className="scrolling-banner-PSA dt">
            <div>
              LIMITED: Pre-order the “ABC’s First Edition Panda Hoodie” from
              June 5th till June 19th.
            </div>
            <div>
              Price reduced from €40,00 to €34,99. Click here for more info.
            </div>
          </div>
          <div className="scrolling-banner-PSA tablet">
            <div>
              LIMITED: Pre-order the “ABC’s First Edition Panda Hoodie”.{" "}
            </div>
            <div>
              Price reduced from €40,00 to €34,99. Tap here for more info.
            </div>
          </div>
          <div className="scrolling-banner-PSA mobile">
            LIMITED: Pre-order the “ABC’s First Edition Panda Hoodie”. Tap here
            for more info.
          </div>
        </a>
      </>
    );
  }
}

export default BannerPSA;
