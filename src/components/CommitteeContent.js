import React, { Component } from "react";

import CommitteeItems from "./CommitteeItems";
import "./CommitteeContent.scss";

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
            url="https://www.youtube.com/embed/Bd2kcyB2IFo"
            name="Introduction"
            text="The Committee of Introduction has the responsibility to introduce new people to the association and make them feel comfortable. Together we find ways to promote our association to new members. We also help the members bond together throughout the year by organizing fun bonding events such as: introduction events and social drinks (borrels)."
          />
          <CommitteeItems
            url="https://www.youtube.com/embed/_JHCzTXTNwI"
            name="Events"
            text="The Committee of Events has the responsibility to organize all events. Our goal is to create opportunities for students to hang out, meet new people and build friendships in a fun way. As physical events are possible again, we are transitioning from online to more physical events. Online gaming will be organized by our sub-organisation ABC Gaming."
          />
          <CommitteeItems
            url="https://www.youtube.com/embed/0ooBKbDTYzo"
            name="Marketing"
            text="The Committee of Marketing has the responsibility to promote the Asian Borrel Club. We show our creativity by making our own designs for posters and stories on Instagram and Facebook, write texts for posts, take part of the video crew, create scripts for videos or design and set up our merchandise shop. We are also responsible for the communication through Social Media."
          />
          <CommitteeItems
            url="https://www.youtube.com/embed/t77sKVXGgHU"
            name="External Affairs"
            text="The Committee of External Affairs has the responsibility to contact third parties. Our main focus is expanding the network of Asian Borrel Club, concluding partnership deals with business partners with an affinity for the Asian culture and managing these contacts. Furthermore, we also facilitate and organise the interviews for the committee applications."
          />
          <CommitteeItems
            url="https://www.youtube.com/embed/LORF3NyLCeo"
            name="IT"
            text="The Committee of IT has the responsibility to support all
            technical aspects of the Asian Borrel Club. For example:
            maintaining our website, moderating the technical platforms of
            online events and structuring our Discord server. When we are
            doing in-person events, we will be responsible for the technical
            sides; setting up music, speakers, microphones, lights, or any
            special effects."
          />
        </div>
        <div className="join-cta">
          <span>Year 21/22 committee applications closed.</span>
        </div>
      </div>
    );
  }
}

export default CommitteeContent;
