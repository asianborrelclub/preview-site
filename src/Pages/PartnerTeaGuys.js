import React, { Component } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import tgBanner from "../img/partners/tea-guys/tg_2.jpg";
import tgLogo from "../img/partners/tea-guys/tg_logo.png";
import "../components/PartnersContent.scss";

export default class PartnerTeaGuys extends Component {
  render() {
    const divStyle = {
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(" +
        tgBanner +
        ")",
    };
    return (
      <>
        <Helmet>
          <title>ABC - Partner: Tea Guys</title>
        </Helmet>
        <Navbar />
        <div className="partners-template">
          <div className="partners-banner">
            <div style={divStyle} className="partners-image">
              <img src={tgLogo} alt="partner" className="partners-logo" />
            </div>
          </div>
          <div className="partners-info">
            <div className="partners-title">
              <h1>Tea Guys</h1>
            </div>
            <div className="partners-about">
              <div>
                Tea Guys is nationally known for their fresh bubble tea, cream
                cheese tea and matcha drinks. Every drink is unique in its own
                way.
              </div>
              <div>
                Try one of their signature drinks and you will be amazed by
                their fresh and unique taste. There is something for everyone
                from the classics to cream cheese and fruity drinks.
              </div>
            </div>
            <div className="partners-deal partners-deal-top">
              <h2>ABC x Tea Guys AMSTERDAM deal:</h2>
              <ul>
                <li>
                  Show your ABC Membership Card in advance and enjoy an
                  exclusive discount of <u>15%</u> on the drinks. Only valid
                  with physical ordering.
                </li>
              </ul>
            </div>
            <div className="partners-deal partners-deal-top">
              <h2>ABC x Tea Guys UTRECHT CS deal:</h2>
              <ul>
                <li>
                  Show your ABC Membership Card in advance and enjoy an
                  exclusive discount of <u>10%</u> on the drinks. Only valid
                  with physical ordering.
                </li>
              </ul>
            </div>
            <div className="partners-deal">
              <h2>ABC Policy:</h2>
              <ul>
                <li>
                  Show your membership card BEFORE ordering and/or mention that
                  you want to make use of the ABC deal/discount when making a
                  reservation. If not, the Partner is allowed to not give the
                  discount.
                </li>
                <li>Not valid in combination with other active deals.</li>
              </ul>
            </div>
            <div className="partners-contact">
              <h1>Contact</h1>
              <div>
                <i className="fas fa-utensils" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.teaguys.nl/"
                >
                  https://www.teaguys.nl/
                </a>
              </div>
              <div>
                <i className="fas fa-map-marker-alt"></i>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/place/Tea+Guys/@52.3549067,4.8871741,17z/data=!3m1!4b1!4m5!3m4!1s0x47c6097aa4613069:0x1da6f7b718430ef!8m2!3d52.3548952!4d4.8893669"
                >
                  Albert Cuypstraat 61-H, 1072 CM Amsterdam
                </a>
              </div>
              <div>
                <i className="fas fa-map-marker-alt"></i>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/place/Tea+Guys+Utrecht+Centraal/@52.0898899,5.1081009,17z/data=!3m1!4b1!4m5!3m4!1s0x47c66f460c19f7db:0x9b5a3b23e6fa034c!8m2!3d52.0898866!4d5.1102896"
                >
                  Stationshal 4 C, 3511 CB Utrecht
                </a>
              </div>
              <div>
                <i className="fas fa-phone-alt"></i>
                <a href="tel:+31202332622">+31 20 2332622</a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
