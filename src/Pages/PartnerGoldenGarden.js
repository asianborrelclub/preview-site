import React, { Component } from "react";
import Footer from "../components/Footer";
import PartnersContent from "../components/PartnersContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import ggBanner from "../img/partners/golden-garden/gg_2.jpeg";
import ggLogo from "../img/partners/golden-garden/gg_logo.png";

export default class PartnerGoldenGarden extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Partner: Golden Garden</title>
        </Helmet>
        <Navbar />
        <PartnersContent
          banner={ggBanner}
          logo={ggLogo}
          title="Golden Garden"
          about="Want to eat Chinese food in Amsterdam? Look no further!"
          about2="At Golden Garden, you can enjoy traditional Chinese cuisine. Golden Garden has been around for more than 45 years and is well-known among tourists from South-East Asia. Choose between their delicious dim sum or all of their other authentic meals!"
          deal="Show your ABC Membership Card at the restaurant and enjoy an exclusive discount of 20% on the bill."
          takeaway={true}
          website="https://www.goldengarden.nu/"
          loc_link="https://www.google.com/maps/place/Golden+Garden/@52.349861,4.8376413,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5e21f991bb147:0x5e13e8ccf1849928!8m2!3d52.349861!4d4.83983"
          loc="Delflandplein 24-28, 1062 HR Amsterdam"
          phone="+31206174342"
          phone2="+31 20 6174342"
        />
        <Footer />
      </>
    );
  }
}
