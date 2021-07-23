import React, { Component } from "react";

import "./MembershipInfo.scss";
import MembershipCard from "../img/membership-card.svg";
import MembershipCardHold from "../img/membership-card-hold.svg";

class MembershipInfo extends Component {
  render() {
    return (
      <div className="membershipinfo-page">
        <h1>WHO ARE WE?</h1>
        <div className="membershipinfo-header">
          <p>
            ABC, which stands for Asian Borrel Club, is an Amsterdam based
            student association. "Borrel" is a Dutch term, mostly used by
            students, for "having a drink together".
          </p>

          <p>
            The main goal of our association is to bring students and young
            professionals with an interest in Asian culture together. In the
            past year, we have been hosting numerous successful events which led
            to a lot of new friendships. We are very grateful for the fast
            growth in our association -- with not only students from Amsterdam
            joining in, but also the rest of the Netherlands. We want to keep
            this community growing, of which you can be a part of!
          </p>
          <p>
            Already convinced? Join this amazing association, get your
            membership and enjoy various benefits within ABC and at our official
            partners through our membership card.
          </p>
        </div>

        <h1>ABC Membership Card</h1>
        <div className="membershipinfo-upper">
          <div className="membershipinfo-upper-left">
            <p>
              <b>Our long awaited ABC Membership cards are finally here!</b>
            </p>
            <p>
              The ABC Membership Card is not only there to identify yourself as
              an official ABC General Member, but also gives you exclusive deals
              at our partners, ABC Events and ABC Merchandise.
            </p>
            <p>Partners will be revealed in the coming weeks. STAY TUNED! </p>
            <p>
              To celebrate this, the one year membership will be offered with
              the special price of only €5,- (original price €10,-).
            </p>
            <a className="add-button" href="/membership/register">
              <button>Register here</button>
            </a>
            <p>What an ABC Membership has to offer:</p>
            <ul>
              <li>Enjoy various discounts and benefits at all</li>
              <li>Priority access and discount to our events;</li>
              <li>Special prices for ABC Merchandise</li>
              <li>Be the first one to get notified for events</li>
            </ul>
            <p>
              *The membership cards are valid from 16-07-2021 until 31-08-2022
            </p>
          </div>
          <div className="membershipinfo-upper-right">
            <img src={MembershipCard} alt="" />
          </div>
        </div>
        <div className="membershipinfo-lower">
          <div className="membershipinfo-lower-left">
            <img src={MembershipCardHold} alt="" />
          </div>
          <div className="membershipinfo-lower-right">
            <p>
              <b>RE-REGISTER YOUR MEMBERSHIP!</b>
            </p>
            <p>
              If you are registered as a ABC General member before 4th of July
              2021, we kindly ask you to re-register yourself, that way you can
              enjoy the full privileges of an ABC General Member.
            </p>
            <p>
              <b>Additional info</b>
            </p>
            <p>
              The Membership Cards (2021-2022 edition) are valid from 16-07-2021
              until 31-08-2022. And are not valid in combination with other
              active deals. Please show your membership card in advance before
              ordering, so our partners are aware of it.
            </p>
            <p>
              <b>Questions or remarks?</b>
            </p>
            <p>
              Feel free to contact us on our socials, or send an email to{" "}
              <a href="mailto:info@asianborrelclub.nl">
                info@asianborrelclub.nl
              </a>
              .
            </p>
            <p>We are more than happy to connect with you!</p>
          </div>
        </div>
        <a href="/membership/register">
          <button>Become an ABC Member now!</button>
        </a>
      </div>
    );
  }
}

export default MembershipInfo;
