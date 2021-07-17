import React, { Component } from "react";
import Footer from "../components/Footer";
import PartnersContent from "../components/PartnersContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import tfmBanner from "../img/partners/the-foodmarket/tfm_2.jpg";
import tfmLogo from "../img/partners/the-foodmarket/tfm_logo.svg";

class PartnerTeaGuys extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Partner: The Foodmarket</title>
        </Helmet>
        <Navbar />
        <PartnersContent
          banner={tfmBanner}
          logo={tfmLogo}
          title="The Foodmarket"
          about="The Foodmarket is a tasty world trip at a high level. The extensive selection of world cuisines offers something for everyone: from the juiciest fresh prawns daily to the most tasteful sushi from Ninja, and from crispy wok dishes composed by you to the finest Argentine steaks."
          about2="Every visit to The Foodmarket Amsterdam is unique, because every few weeks we put a different world cuisine in the spotlight."
          deal="With your ABC Membership Card you can enjoy a free cocktail/mocktail!"
          website="https://thefoodmarket.nl/"
          loc_link="https://g.page/thefoodmarketams"
          loc="Zuidermolenweg 36, 1069 CG Amsterdam"
          phone="+31208914588"
          phone2="+31 20 8914588"
        />
        <Footer />
      </>
    );
  }
}

export default PartnerTeaGuys;
