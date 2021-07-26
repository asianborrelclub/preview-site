import React, { Component } from "react";
import PartnerCard from "./PartnerCard";
import "./Partners.scss";
import fmgBanner from "../img/partners/fullmoon-garden/fmg_1.jpg";
import fmgLogo from "../img/partners/fullmoon-garden/fmg_logo.png";
import tgBanner from "../img/partners/tea-guys/tg_1.jpeg";
import tgLogo from "../img/partners/tea-guys/tg_logo.png";
import wgmmBanner from "../img/partners/wagamama/wgmm_1.jpeg";
import wgmmLogo from "../img/partners/wagamama/wgmm_logo.svg";
import tfmBanner from "../img/partners/the-foodmarket/tfm_1.png";
import tfmLogo from "../img/partners/the-foodmarket/tfm_logo.svg";

class Partners extends Component {
  render() {
    return (
      <div id="partners" className="partners">
        <h1>Partners</h1>
        <div className="partner-cards">
          <PartnerCard
            link="/partners/fullmoon-garden"
            banner={fmgBanner}
            logo={fmgLogo}
          />
          <PartnerCard
            link="/partners/tea-guys"
            banner={tgBanner}
            logo={tgLogo}
          />
          <PartnerCard
            link="/partners/wagamama"
            banner={wgmmBanner}
            logo={wgmmLogo}
          />
          <PartnerCard
            link="/partners/the-foodmarket"
            banner={tfmBanner}
            logo={tfmLogo}
          />
          <div className="partner-card-contact">...and more to come!</div>
        </div>
        <div className="partners-contactus">Interested in becoming an ABC Partner? <a href="/contact">Contact us</a>.</div>
      </div>
    );
  }
}

export default Partners;
