import React, { Component } from "react";
import "./ContactContent.scss";
import ContactCard from "./ContactCard";
import tmDaniel from "../img/tmdaniel.png";
import tmSofia from "../img/tmsofia.png";
import tmChristine from "../img/tmchristine.png";
import tmRyan from "../img/tmryan.jpg";
import tmKevin from "../img/tmkevin.jpg";
import tmJacky from "../img/tmjacky.jpg";
import tmYenly from "../img/tmyenly.png";
import tmMatthijs from "../img/tmmatthijs.jpeg";

class ContactContent extends Component {
  render() {
    return (
      <>
        <div className="contact-page">
          <h1>Contact</h1>
          <div className="contact-info">
            <div className="contact-left">
              <div>
                <h2>Asian Borrel Club</h2>
                <p>Chamber of Commerce</p>
                <p>81660200</p>
              </div>
              <div>
                <h2>General Information</h2>
                <p>
                  Questions about Asian Borrel Club, events, our borrels,
                  something else? Please send your question to{" "}
                  <a href="mailto: info@asianborrelclub.nl">
                    <i>info@asianborrelclub.nl</i>
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="contact-right">
              <div>
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
                <h2>Partnerships</h2>
                <p>
                  Interested in partnering up with Asian&nbsp;Borrel&nbsp;Club?
                  Please contact us through e-mail:{" "}
                  <a href="mailto: external@asianborrelclub.nl">
                    <i>external@asianborrelclub.nl</i>
                  </a>{" "}
                  or by phone:{" "}
                  <a href="tel: +31613133397">
                    <i>+31&nbsp;6&nbsp;13133397</i>
                  </a>
                  .
                </p>
              </div>
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
              description="overviews management and administrative operation"
              instagram_link="https://www.instagram.com/danielief/"
              instagram="@danielief"
              linkedin_link="https://www.linkedin.com/in/daniël-li-b3a62b216"
              linkedin="Daniël Li"
              email="president@asianborrelclub.nl"
            />
            <ContactCard
              image={tmMatthijs}
              title="Secretary"
              name="Matthijs Fok"
              description="maintaining project operations and structure"
              instagram_link="https://www.instagram.com/m.wkmf/"
              instagram="@m.wkmf"
              linkedin_link="https://www.linkedin.com/in/matthijs-fok-a0ab86181/"
              linkedin="Matthijs Fok"
              email="secretary@asianborrelclub.nl"
            />
            <ContactCard
              image={tmKevin}
              title="Treasurer"
              name="Kevin Liu"
              description="coördinates collection and disbursement of funds"
              instagram_link="https://www.instagram.com/kvnykliu/"
              instagram="@kvnykliu"
              linkedin_link="https://www.linkedin.com/in/kevin-liu-870a95188/"
              linkedin="Kevin Liu"
              email="treasurer@asianborrelclub.nl"
            />
            <ContactCard
              image={tmJacky}
              title="External Affairs"
              name="Jacky Cheng"
              description="external sponsors and partnerships"
              instagram_link="https://www.instagram.com/j.hf.cheng/"
              instagram="@j.hf.cheng"
              linkedin_link="https://www.linkedin.com/in/jacky-cheng-974896128/"
              linkedin="Jacky Cheng"
              email="external@asianborrelclub.nl"
            />
            <ContactCard
              image={tmChristine}
              title="Head of Events"
              name="Christine Li"
              description="events organiser and coördinator"
              instagram_link="https://www.instagram.com/christilief/"
              instagram="@christilief"
              linkedin_link="https://www.linkedin.com/in/Christine12345/"
              linkedin="Christine Li"
              email="events@asianborrelclub.nl"
            />
            <ContactCard
              image={tmRyan}
              title="Head of IT"
              name="Ryan Zhang"
              description="oversees online and offline systems and infrastructure"
              instagram_link="https://www.instagram.com/ryan.jrz/"
              instagram="@ryan.jrz"
              linkedin_link="https://www.linkedin.com/in/ryanjzhang/"
              linkedin="Ryan Zhang"
              email="it@asianborrelclub.nl"
            />
            <ContactCard
              image={tmSofia}
              title="Introduction"
              name="Sofia Chong"
              description="member recruiter and internal events"
              instagram_link="https://www.instagram.com/sofiaaa.24/"
              instagram="@sofiaaa.24"
              linkedin_link="https://www.linkedin.com/in/sofia-chong-602152216/"
              linkedin="Sofia Chong"
              email="introduction@asianborrelclub.nl"
            />
            <ContactCard
              image={tmYenly}
              title="Head of Marketing"
              name="Yenly He"
              description="marketing and communications"
              instagram_link="https://www.instagram.com/yenlyhe/"
              instagram="@yenlyhe"
              linkedin_link="https://www.linkedin.com/in/yenly-he-754ab0162/"
              linkedin="Yenly He"
              email="marketing@asianborrelclub.nl"
            />
          </div>
        </div>
      </>
    );
  }
}

export default ContactContent;
