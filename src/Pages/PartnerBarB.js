import React, { Component } from "react";
import Footer from "../components/Footer";
import PartnersContent from "../components/PartnersContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import bbBanner from "../img/partners/bar-b/bb_1.jpg";
import bbLogo from "../img/partners/bar-b/bb_logo.png";

class PartnerBarB extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Partner: Bar-B</title>
        </Helmet>
        <Navbar />
        <PartnersContent
          banner={bbBanner}
          logo={bbLogo}
          title="Bar-B"
          about="Bar B has, since 2014, distinguished themselves by using fresh ingredients to create the burger of your dreams! Their uniqueness lies in their preparation, by pressing their own burgers and making their own sauces to provide you with the best experience."
          about2="You can even create your own burger! You can create something simple to your liking, or challenge the kitchen with the craziest burger you can think of. And with over 40 different kinds of beers, you will have enough choice to accompany your meal."
          deal="Show your ABC Membership Card in advance and enjoy an exclusive discount of 15% off your total restaurant bill! DEAL AVAILABLE ON TAKEAWAY!"
          website="https://bar-b.nl/"
          loc_link="https://www.google.com/maps/place/Bar-B+Burgers+%E2%80%98N%E2%80%99+Beer/@52.3642761,4.8799177,16z/data=!3m1!5s0x47c609e9aac484ff:0x3dffa8ffa0e96b4a!4m9!1m2!2m1!1sbar+b!3m5!1s0x47c609e901bf8287:0x3f4332d487068f95!8m2!3d52.3642761!4d4.8842951!15sCgViYXIgYloHIgViYXIgYpIBFGhhbWJ1cmdlcl9yZXN0YXVyYW50"
          loc="Lange leidsedwarsstraat 29, 1017 NG Amsterdam"
          phone="+31207059631"
          phone2="+31 20 7059631"
        />
        <Footer />
      </>
    );
  }
}

export default PartnerBarB;
