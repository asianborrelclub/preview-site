import React, { Component } from "react";
import Footer from "../components/Footer";
import PartnersContent from "../components/PartnersContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import tgBanner from "../img/partners/tea-guys/tg_2.jpg";
import tgLogo from "../img/partners/tea-guys/tg_logo.png";

class PartnerTeaGuys extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Partner: Tea Guys</title>
        </Helmet>
        <Navbar />
        <PartnersContent
          banner={tgBanner}
          logo={tgLogo}
          title="Tea Guys"
          about="Tea Guys is nationally known for their fresh bubble tea, cream cheese tea and matcha drinks. 
          Every drink is unique in its own way."
          about2="Try one of their signature drinks and you will be amazed by their fresh and unique taste. There is something for everyone from the classics to cream cheese and fruity drinks."
          deal="Show your ABC Membership Card in advance and enjoy an exclusive discount of 15% on the drinks. Only valid with physical ordering."
          website="https://www.teaguys.nl/"
          loc_link="https://g.page/tea-guys-bubbletea"
          loc="Albert Cuypstraat 61-H, 1072 CM Amsterdam"
          phone="+31202332622"
          phone2="+31 20 2332622"
        />
        <Footer />
      </>
    );
  }
}

export default PartnerTeaGuys;
