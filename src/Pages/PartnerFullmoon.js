import React, { Component } from "react";
import Footer from "../components/Footer";
import PartnersContent from "../components/PartnersContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import fmgBanner from "../img/partners/fullmoon-garden/fmg_2.jpg";
import fmgLogo from "../img/partners/fullmoon-garden/fmg_logo.png";

class PartnerFullmoon extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Partner</title>
        </Helmet>
        <Navbar />
        <PartnersContent
          banner={fmgBanner}
          logo={fmgLogo}
          title="Fullmoon Garden"
          about="“Yum cha” in Cantonese means to drink tea. This commonly refers to eating “dim sum” which is an integral part of Cantonese eating culture."
          about2="At Full Moon Garden, all the dim sum is made in-house and they have over 80 types of dimsum on their menu for you to choose from."
          deal="Show your ABC Membership Card in advance and enjoy an exclusive discount of 20% off your total restaurant bill!"
          website="https://fullmoongarden.nl/en/menu"
          loc_link="https://g.page/fullmoongardenams"
          loc="Leidsestraat 95, 1017 NZ Amsterdam"
          phone="+31202382546"
          phone2="+31 20 2382546"
        />
        <Footer />
      </>
    );
  }
}

export default PartnerFullmoon;
