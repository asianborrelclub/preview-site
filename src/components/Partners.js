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
import yhpBanner from "../img/partners/yuans-hotpot/yhp_1.jpg";
import yhpLogo from "../img/partners/yuans-hotpot/yhp_logo.png";
import bbBanner from "../img/partners/bar-b/bb_2.jpg";
import bbLogo from "../img/partners/bar-b/bb_logo.png";
import htBanner from "../img/partners/hoi-tin/ht_1.jpg";
import htLogo from "../img/partners/hoi-tin/ht_logo.png";
import ctBanner from "../img/partners/chatime/ct_1.png";
import ctLogo from "../img/partners/chatime/ct_logo.png";
import ggBanner from "../img/partners/golden-garden/gg_1.jpeg";
import ggLogo from "../img/partners/golden-garden/gg_logo.png";
import jbBanner from "../img/partners/jens-bing/jb_1.png";
import jbLogo from "../img/partners/jens-bing/jb_logo.png";
import jchfLogo from "../img/partners/jchairfashion/jchf_logo.svg";
import jchfBanner from "../img/partners/jchairfashion/jchf_1.JPG";
import takeichiLogo from "../img/partners/takeichi/takeichi_logo.png";
import takeichiBanner from "../img/partners/takeichi/takeichi_1.jpeg";

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
          <PartnerCard
            link="/partners/yuans-hot-pot"
            banner={yhpBanner}
            logo={yhpLogo}
          />
          <PartnerCard link="/partners/bar-b" banner={bbBanner} logo={bbLogo} />
          <PartnerCard
            link="/partners/hoi-tin"
            banner={htBanner}
            logo={htLogo}
          />
          <PartnerCard
            link="/partners/chatime"
            banner={ctBanner}
            logo={ctLogo}
          />
          <PartnerCard
            link="/partners/golden-garden"
            banner={ggBanner}
            logo={ggLogo}
          />
          <PartnerCard
            link="/partners/jens-bing"
            banner={jbBanner}
            logo={jbLogo}
          />
          <PartnerCard
            link="/partners/jc-hairfashion"
            banner={jchfBanner}
            logo={jchfLogo}
          />
          <PartnerCard
            link="/partners/takeichi-ramen"
            banner={takeichiBanner}
            logo={takeichiLogo}
          />
          <div className="partner-card-contact">...and more to come!</div>
        </div>
        <div className="partners-contactus">
          Interested in becoming an ABC Partner?{" "}
          <a href="/contact">Contact us</a>.
        </div>
      </div>
    );
  }
}

export default Partners;
