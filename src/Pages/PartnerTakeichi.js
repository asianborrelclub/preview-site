import React, { Component } from "react";
import Footer from "../components/Footer";
import PartnersContent from "../components/PartnersContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import Banner from "../img/partners/takeichi/takeichi_2.jpeg";
import Logo from "../img/partners/takeichi/takeichi_logo.png";

class PartnerTeaGuys extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Partner: Tokyo Ramen Takeichi</title>
        </Helmet>
        <Navbar />
        <PartnersContent
          banner={Banner}
          logo={Logo}
          title="Tokyo Ramen Takeichi"
          about="Tokyo Ramen Takeichi has its Ramen restaurants in The Netherlands 🇳🇱 & Germany 🇩🇪 and is dedicated to bring a 100% authentic Japanese experience to its customers. Their Japanese cooks have worked relentlessly to find the best local ingredients to create & refine the original recipes."
          about2="Make sure to show your ABC membership card beforehand."
          deal="Visit one of their four restaurants in the Netherlands, show your ABC Membership and get 15% discount! (drinks excluded)"
          website="https://takeichi-ramen.eu/nl/"
          loc_link="https://www.google.com/search?q=takeichi&oq=takeichi&aqs=chrome..69i57j0i512j46i175i199i512j0i512j46i175i199i512j46i512j69i61l2.1680j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:3&tbm=lcl&sxsrf=APq-WBsaALpPdCqNLwKstRtomMxU33Af6g:1644781671965&rflfq=1&num=10&rldimm=4784220056049098557&lqi=Cgh0YWtlaWNoaUjS6qis9qyAgAhaDhAAGAAiCHRha2VpY2hpkgEQcmFtZW5fcmVzdGF1cmFudKoBEBABKgwiCHRha2VpY2hpKAA&ved=2ahUKEwiAlamauf31AhVSmqQKHYKGAEAQvS56BAgVEEk&rlst=f#rlfi=hd:;si:4784220056049098557,l,Cgh0YWtlaWNoaUjS6qis9qyAgAhaDhAAGAAiCHRha2VpY2hpkgEQcmFtZW5fcmVzdGF1cmFudA;mv:[[52.391771693155,4.958758628008599],[52.34859033711282,4.830012595293756],null,[52.37018629184474,4.8943856116511775],14]"
          loc="Vijzelstraat 135, 1017 HJ Amsterdam"
          phone="+31207520229"
          phone2="+31 20 7520229"
        />
        <Footer />
      </>
    );
  }
}

export default PartnerTeaGuys;
