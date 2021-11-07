import React, { Component } from "react";
import Footer from "../components/Footer";
import PartnersContent from "../components/PartnersContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import htBanner from "../img/partners/hoi-tin/ht_2.jpg";
import htLogo from "../img/partners/hoi-tin/ht_logo.png";

class PartnerHoiTin extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Partner: Hoi Tin</title>
        </Helmet>
        <Navbar />
        <PartnersContent
          banner={htBanner}
          logo={htLogo}
          title="Hoi Tin"
          about="Hoi Tin – literally between “heaven and sea” – represents not only one of the most delicious and authentic Cantonese restaurants in Amsterdam, but it also represents a long and rich history of the Chinese community in Chinatown Amsterdam where it is located."
          about2="Since 1975, this family-owned restaurant has done so much for the Chinese community and the elderly in the neighbourhood that Grandfather Man was bestowed a Knighthood of the Order of Orange-Nassau."
          deal="With your ABC Membership Card you can enjoy an exclusive discount of 20% on the bill at the restaurant. Not valid on the bakery of Hoi Tin."
          website="https://www.hoitin.nl/"
          loc_link="https://www.google.com/maps/place/Hoi+Tin/@52.3734419,4.8979367,17z/data=!3m1!5s0x47c609b916d4349b:0xfb9487d4b09bdd3c!4m12!1m6!3m5!1s0x47c609b916d07845:0x627257930ab9158b!2sHoi+Tin!8m2!3d52.3734419!4d4.9001254!3m4!1s0x47c609b916d07845:0x627257930ab9158b!8m2!3d52.3734419!4d4.9001254"
          loc="Zeedijk 122, 1012 BB Amsterdam"
          phone="+31206256451"
          phone2="+31 20 6256451"
        />
        <Footer />
      </>
    );
  }
}

export default PartnerHoiTin;
