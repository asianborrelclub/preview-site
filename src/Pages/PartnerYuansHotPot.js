import React, { Component } from "react";
import Footer from "../components/Footer";
import PartnersContent from "../components/PartnersContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import yhpBanner from "../img/partners/yuans-hotpot/yhp_2.jpg";
import yhpLogo from "../img/partners/yuans-hotpot/yhp_logo.png";

class PartnerYuansHotPot extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Partner: Yuan's Hot Pot</title>
        </Helmet>
        <Navbar />
        <PartnersContent
          banner={yhpBanner}
          logo={yhpLogo}
          title="Yuan's Hot Pot"
          about="What started back in the days as a simple but popular street food soon became one of the most popular dishes of the east.
          For over 20 years Yuan’s have remained the leader in the industry and opened their first European restaurant in Amsterdam back in June 2018 🎋🐼🇳🇱
          "
          about2="Come and try a little bit of Chengdu and a little bit of Amsterdam in one pot 🍲"
          deal="Get 2 vouchers worth €10,00 each. These can be collected at one of our physical events. (Vouchers valid until 31-08-2022, 
            max. one voucher per table.)"
          website="https://yuanhotpot.com/"
          loc_link="https://www.google.com/maps/search/Yuan's+Hot+Pot/@52.3530363,4.8982841,14.08z"
          loc="Ferdinand Bolstraat 18, 1072 LJ Amsterdam"
          phone="+31623988988"
          phone2="+31 6 23988988"
        />
        <Footer />
      </>
    );
  }
}

export default PartnerYuansHotPot;
