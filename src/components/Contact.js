import React, { Component } from "react";
import TeamCard from "./TeamCard";
import "./Contact.scss";
import tmUnnamed from "../img/unnamed.png";
import tmDaniel from "../img/tmdaniel.png";
import tmSofia from "../img/tmsofia.png";
import tmKenneth from "../img/tmkenneth.png";
import tmChristine from "../img/tmchristine.png";
import tmLian from "../img/tmlian.png";

class Contact extends Component {
  render() {
    return (
      <div id="contact-page">
        <h1>Our Team</h1>
        <div className="card-teams">
          <TeamCard
            image={tmDaniel}
            name="Daniel Li"
            title="President"
            instagram="https://www.instagram.com/danielief/"
          />

          <TeamCard
            image={tmSofia}
            name="Sofia Chong"
            title="Vice-President"
            instagram="https://www.instagram.com/sofiaaa.24/"
          />

          <TeamCard
            image={tmChristine}
            name="Christine Li"
            title="Head of Events"
            instagram="https://www.instagram.com/christilief/"
          />

          <TeamCard
            image={tmKenneth}
            name="Kenneth Chin"
            title="Head of Marketing"
            instagram="https://www.instagram.com/kenny.chinny/"
          />

          <TeamCard
            image={tmLian}
            name="Lian Su"
            title="Head of Design"
            instagram="https://www.instagram.com/l.ixn/"
          />

          <TeamCard
            image={tmUnnamed}
            name="???"
            title="Treasurer"
            instagram=""
          />

          <TeamCard
            image={tmUnnamed}
            name="???"
            title="Head of External Affairs"
            instagram=""
          />

          <TeamCard
            image={tmUnnamed}
            name="???"
            title="Head of IT"
            instagram=""
          />
        </div>
      </div>
    );
  }
}

export default Contact;
