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
          <title>ABC - Partner: Fullmoon Garden</title>
        </Helmet>
        <Navbar />
        <PartnersContent
          banner={fmgBanner}
          logo={fmgLogo}
          title="Fullmoon Garden"
          about="“Yum cha” in Cantonese means to drink tea. This commonly refers to eating “dim sum” which is an integral part of Cantonese eating culture."
          about2="At Full Moon Garden, all the dim sum is made in-house and they have over 80 types of dimsum on their menu for you to choose from."
          deal="An exclusive discount of 20% off your total restaurant bill. Full Moon Garden will appreciate it if you make a reservation beforehand."
          website="https://fullmoongarden.nl/"
          loc_link="https://www.google.com/maps/place/Full+Moon+Garden+(Dim+Sum+%26+Cantonese+cuisine)/@52.3646702,4.8816968,17z/data=!3m2!4b1!5s0x47c609e85489aa43:0x4c96ce7125a41fff!4m5!3m4!1s0x47c609a676725fa1:0x9e23dd1841008c78!8m2!3d52.3646669!4d4.8838855"
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
