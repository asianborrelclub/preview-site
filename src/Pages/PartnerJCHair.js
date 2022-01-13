import React, { Component } from "react";
import Footer from "../components/Footer";
import PartnersContent from "../components/PartnersContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import Banner from "../img/partners/jchairfashion/jchf_1.JPG";
import Logo from "../img/partners/jchairfashion/jchf_logo.svg";

class PartnerTeaGuys extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Partner: JC Hairfasion</title>
        </Helmet>
        <Navbar />
        <PartnersContent
          banner={Banner}
          logo={Logo}
          title="JC Hairfashion"
          about="Jackie Chang is a hairstylist and a barber. He can create your perfect hair in no time. So whether you are looking for a fade or some styling, you are at the right place!"
          about2="Make sure to show your ABC membership card beforehand."
          deal="Are you looking for a new haircut? JC Hairfashion gives all ABC members 10% off on the wash and blow dry haircuts. "
          website="https://jchairfashion.setmore.com/"
          loc_link="https://www.google.com/maps/place/Geldersekade+113F,+1011+EN+Amsterdam/@52.373171,4.9011542,3a,70.8y,123.41h,89.35t/data=!3m6!1e1!3m4!1sZcOArogxSA9Z2bIUKn4v_w!2e0!7i16384!8i8192!4m5!3m4!1s0x47c609b9682c5489:0xdce6e481a38062ec!8m2!3d52.3731172!4d4.9012967"
          loc="Geldersekade 113F, 1011 EN Amsterdam"
          phone="+31639828882"
          phone2="+31 6 39828882"
        />
        <Footer />
      </>
    );
  }
}

export default PartnerTeaGuys;
