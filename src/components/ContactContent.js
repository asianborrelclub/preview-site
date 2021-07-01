import React, { Component } from "react";
import "./ContactContent.scss";
import ContactCard from "./ContactCard";
import tmDaniel from "../img/tmdaniel.png";
import tmSofia from "../img/tmsofia.png";
import tmChristine from "../img/tmchristine.png";
import tmRyan from "../img/tmryan.jpg";
import tmKevin from "../img/tmkevin.jpg";
import tmJacky from "../img/tmjacky.jpg";

class ContactContent extends Component {
  render() {
    return (
      <>
        <div className="contact-page">
          <h1>Contact</h1>
          <div className="contact-info">
            <div>
              <h2>Asian Borrel Club</h2>
              <p>Chamber of Commerce</p>
              <p>12345678</p>
              <h2>Socials</h2>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/asianborrelclub/"
                >
                  instagram
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/asianborrelclub/"
                >
                  facebook
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/asian-borrel-club/"
                >
                  linkedin
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.tiktok.com/@asianborrelclub/"
                >
                  tiktok
                </a>
              </p>
            </div>
            <div>
              <h2>General Information</h2>
              <p>
                Questions about Asian Borrel Club, events, our borrel's,
                something else? Please send your question to{" "}
                <a href="mailto: info@asianborrelclub.nl">
                  <i>info@asianborrelclub.nl</i>
                </a>
                .
              </p>
              <h2>Partnerships</h2>
              <p>
                Interested in partnering up with Asian Borrel Club? Please
                contact us through e-mail:{" "}
                <a href="mailto: external@asianborrelclub.nl">
                  <i>external@asianborrelclub.nl</i>
                </a>{" "}
                or by phone:{" "}
                <a href="tel: +31613133397">
                  <i>+31 6 13133397</i>
                </a>
                .
              </p>
            </div>
          </div>
          <div className="questions">
            Do you have a specific question for one of our board members? Feel
            free to contact us!
          </div>
          <div className="contact-cards">
            <ContactCard
              image={tmDaniel}
              title="President"
              name="Daniel Li"
              description="beschrijving hier"
              instagram_link="https://www.instagram.com/danielief/"
              instagram="@danielief"
              linkedin_link=""
              linkedin=""
              email="president@asianborrelclub.nl"
            />
            <ContactCard
              image={tmKevin}
              title="Treasurer"
              name="Kevin Liu"
              description="beschrijving hier"
              instagram_link="https://www.instagram.com/kvnykliu/"
              instagram="@kvnykliu"
              linkedin_link=""
              linkedin=""
              email="treasurer@asianborrelclub.nl"
            />
            <ContactCard
              image={tmJacky}
              title="External Affairs"
              name="Jacky Cheng"
              description="beschrijving hier"
              instagram_link="https://www.instagram.com/j.hf.cheng/"
              instagram="@j.hf.cheng"
              linkedin_link=""
              linkedin=""
              email="external@asianborrelclub.nl"
            />
            <ContactCard
              image={tmChristine}
              title="Head of Events"
              name="Christine Li"
              description="beschrijving hier"
              instagram_link="https://www.instagram.com/christilief/"
              instagram="@christilief"
              linkedin_link=""
              linkedin=""
              email="events@asianborrelclub.nl"
            />
            <ContactCard
              image={tmRyan}
              title="Head of IT"
              name="Ryan Zhang"
              description="beschrijving hier"
              instagram_link="https://www.instagram.com/ryan.jrz/"
              instagram="@ryan.jrz"
              linkedin_link=""
              linkedin=""
              email="admin@asianborrelclub.nl"
            />
            <ContactCard
              image={tmSofia}
              title="Head of Introduction"
              name="Sofia Chong"
              description="beschrijving hier"
              instagram_link="https://www.instagram.com/sofiaaa.24/"
              instagram="@sofiaaa.24"
              linkedin_link=""
              linkedin=""
              email="introduction@asianborrelclub.nl"
            />
          </div>
        </div>
      </>
    );
  }
}

export default ContactContent;
