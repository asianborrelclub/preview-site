import React, { Component } from "react";
import Footer from "../components/Footer";
import PartnersContent from "../components/PartnersContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import ctBanner from "../img/partners/chatime/ct_2.jpg";
import ctLogo from "../img/partners/chatime/ct_logo.png";

export default class PartnerChatime extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Partner: Chatime</title>
        </Helmet>
        <Navbar />
        <PartnersContent
          banner={ctBanner}
          logo={ctLogo}
          title="Chatime"
          about="Enjoy authentic bubble tea with a modern twist. Visit Chatime in de heart of Amsterdam and have a look on the making of your fresh drinks and amazing interior."
          about2="Chatime is a Taiwanese global franchised teahouse chain, based in Zhubei. It is the largest teahouse franchise in the world, operating in 2500+ outlets in 38 countries all over the world."
          deal="Exclusive 15% discount, 7 days a week when showing your ABC membership card before checkout!"
          website="https://www.facebook.com/chatime.nl/menu/"
          loc_link="https://www.google.com/maps/place/Chatime+Amsterdam/@52.3689096,4.8889946,17z/data=!3m1!4b1!4m5!3m4!1s0x47c609267ea1d9b5:0xc025b0cdd5a961df!8m2!3d52.3689096!4d4.8911833"
          loc="Kalverstraat 139, 1012 XE Amsterdam"
          phone=""
          phone2=""
        />
        <Footer />
      </>
    );
  }
}
