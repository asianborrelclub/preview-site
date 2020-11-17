import React, { Component } from "react";
import TeamCard from "./TeamCard";
import "./Contact.scss";
import tmUnnamed from "../img/unnamed.png";
import tmDaniel from "../img/tmdaniel.png"

class Contact extends Component {
  render() {
    return (
      <div id="contact-page">
        <h1>The Team</h1>
        <div className="card-teams">

          <TeamCard
            image={tmDaniel}
            name="Daniel Li"
            title="President"
            instagram="https://www.instagram.com/danielief/"
          />

          <TeamCard
            image={tmUnnamed}
            name="???"
            title="Vice-President"
            instagram=""
          />

          <TeamCard
            image={tmUnnamed}
            name="???"
            title="Head of Events"
            instagram=""
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
            title="Head of Merch"
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
