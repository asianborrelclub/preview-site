import React, { Component } from "react";
import TeamCard from "./TeamCard";
import "./Contact.scss";
import tmUnnamed from "../img/unnamed.png";
import tmDaniel from "../img/tmdaniel.png";
import tmSofia from "../img/tmsofia.png";
import tmChristine from "../img/tmchristine.png";

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
            image={tmUnnamed}
            name="???"
            title="Head of Marketing"
            instagram=""
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
            title="Queen of Design"
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
