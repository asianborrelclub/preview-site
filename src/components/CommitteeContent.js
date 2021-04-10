import React, { Component } from "react";

import CommitteeItems from "./CommitteeItems";
import "./CommitteeContent.scss";
import marketing from "../img/undraw_marketing.svg";
import events from "../img/undraw_events.svg";
import external from "../img/undraw_external.svg";
import intro from "../img/undraw_intro.svg";
import IT from "../img/undraw_IT.svg";

class CommitteeContent extends Component {
  render() {
    return (
      <div id="committee-page">
        <div className="committee-landing">
          <h1>ABC Committees</h1>
          <div className="landing-image">
            <div className="video-container">
              <iframe
                title="abc promo video"
                className="video"
                src="https://www.youtube.com/embed/AgTzzpPMi-I"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div className="landing-footer">Check out our committees below!</div>
        <div className="committee-info">
          <CommitteeItems
            image={marketing}
            name="Marketing"
            text="The Committee of Marketing has the responsibility to promote the Asian Borrel Club. We show our creativity by making our own designs for posters and stories on Instagram and Facebook, write texts for posts, take part of the video crew, create scripts for videos or design and set up our merchandise shop. We are also responsible for the communication through Social Media."
          />
          <CommitteeItems
            image={IT}
            name="IT"
            text="The Committee of IT has the responsibility to support all technical aspects of the Asian Borrel Club. For example: maintaining our website, moderating the technical platforms of online events and structuring our Discord server. When we are doing in-person events, we will be responsible for the technical sides; setting up music, speakers, microphones, lights, or any special effects."
          />
          <CommitteeItems
            image={events}
            name="Events"
            text="The Committee of Events has the responsibility to organize all events. Our goal is to create opportunities for students to hang out, meet new people and build friendships in a fun way. For now, the Asian Borrel Club has online events every two weeks, but in the near future we hope to hosts events in real life."
          />
          <CommitteeItems
            image={external}
            name="External Affairs"
            text="The Committee of External Affairs has the responsibility to contact third parties. Our main focus is expanding the network of Asian Borrel Club, concluding partnership deals with business partners with an affinity for the Asian culture and managing these contacts. Furthermore, we also facilitate and organise the interviews for the committee applications."
          />
          <CommitteeItems
            image={intro}
            name="Introduction"
            text="The Committee of Introduction has the responsibility to introduce new people to the association and make them feel comfortable. Together we find ways to promote our association to freshmen. We also help the members bond together throughout the year by organizing fun bonding events such as: the introduction week(s) and the drinks (borrels)."
          />
        </div>
        <div className="join-cta">
          <span>Interested in joining one of our committees?</span>
          <a href="/committee-form">
            <button>Apply here!</button>
          </a>
        </div>
      </div>
    );
  }
}

export default CommitteeContent;