import React, { Component } from "react";
import Footer from "../components/Footer";
import PartnersContent from "../components/PartnersContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import jbBanner from "../img/partners/jens-bing/jb_2.JPG";
import jbLogo from "../img/partners/jens-bing/jb_logo.svg";

export default class PartnerJensBing extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Partner: Golden Garden</title>
        </Helmet>
        <Navbar />
        <PartnersContent
          banner={jbBanner}
          logo={jbLogo}
          title="Jen's Bing"
          about="Starting out as a small dream of wanting to introduce authentic Taiwanese foods and drinks to the Netherlands and a food trailer on the markets of Amsterdam, it slowly but surely grew bigger until it became a reality!"
          about2="With their own store in the middle of Amsterdam, Jen's Bing is the perfect place to enjoy food and a drink with your friends!"
          deal="Quench your thirst with the tastiest drinks! Get a 10% discount on all drinks with your ABC membership."
          website="https://www.jensbing.nl/"
          loc_link="https://www.google.com/maps/place/Jen's+Bing+-+Bubble+tea+%26+Taiwanese+food/@52.3680069,4.8638148,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5e34749c28b75:0x6f2c5a9c3892bef7!8m2!3d52.3680036!4d4.8660035"
          loc="Jan Hanzenstraat 21, 1053 SK Amsterdam"
          phone="+31634271355"
          phone2="+31 6 34271355"
        />
        <Footer />
      </>
    );
  }
}
