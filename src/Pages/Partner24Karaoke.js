import React, { Component } from "react";
import Footer from "../components/Footer";
import PartnersContent from "../components/PartnersContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import Banner from "../img/partners/24karaoke/24k_2.jpeg";
import Logo from "../img/partners/24karaoke/24k_logo.svg";

export default class Partner24Karaoke extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Partner: Karaokebar 24k</title>
        </Helmet>
        <Navbar />
        <PartnersContent
          banner={Banner}
          logo={Logo}
          title="Karaokebar 24k"
          about="Thé karaoke hotspot located in the heart of Amsterdam! Visit them with your family, friends, or colleagues for a great night full of fun."
          about2="There are over 80.000 songs available in many languages like English, Dutch, Korean, Mandarin and Japanese. Enjoy drinks, cocktails, and much more from their brand new bar while singing all night long."
          deal="Show your ABC Membership and enjoy a 15% discount on the bill!"
          website="https://karaokebar24k.nl/"
          loc_link="https://www.google.com/maps/place/Karaokebar+24K/@52.3666973,4.895695,15z/data=!4m2!3m1!1s0x0:0x7e9844cbcd322937?sa=X&ved=2ahUKEwix77qYwdz2AhXHzqQKHYCvAAYQ_BJ6BAhQEAU"
          loc="Halvemaansteeg 8bg, 1017 CR Amsterdam"
          phone="+31647055022"
          phone2="+31 6 47055022"
        />
        <Footer />
      </>
    );
  }
}
