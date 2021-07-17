import React, { Component } from "react";
import Footer from "../components/Footer";
import PartnersContent from "../components/PartnersContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import wgmmBanner from "../img/partners/wagamama/wgmm_2.jpg";
import wgmmLogo from "../img/partners/wagamama/wgmm_logo.svg";

class PartnerTeaGuys extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Partner: Wagamama</title>
        </Helmet>
        <Navbar />
        <PartnersContent
          banner={wgmmBanner}
          logo={wgmmLogo}
          title="Wagamama"
          about="Wagamama is japanese for 'naughty child' or 'one who is stubborn and determined'. Their story is based on ‘kaizen’, meaning ‘good change’ and is the philosophy that sits right at their heart. It shapes every dish they create, and pushes them to find better ways in all that they do. They’re restless spirits."
          about2="Forever creating and making things better, and that can be tasted in every single dish they serve. Wagamama has been practising kaizen since 1992, when they opened their first doors in London's Bloomsbury. Nowadays they have countless restaurants in various countries around the world!"
          deal="With your ABC Membership Card you can enjoy an exclusive discount of 20% on the bill in ALL RESTAURANTS of Wagamama NL!"
          website="https://www.wagamama.nl/"
          loc_link="https://goo.gl/maps/qSB8xZorzRMxy8pW7"
          loc="Amstelstraat 8, 1017 DA Amsterdam"
          phone="+31203200310"
          phone2="+31 20 3200310"
        />
        <Footer />
      </>
    );
  }
}

export default PartnerTeaGuys;
