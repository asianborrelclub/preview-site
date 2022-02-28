import React, { Component } from "react";

import tmDaniel from "../img/tmdaniel.jpg";
import tmSofia from "../img/tmsofia.jpg";
import tmChristine from "../img/tmchristine.jpg";
import tmRyan from "../img/tmryan.jpg";
import tmKevin from "../img/tmkevin.jpg";
import tmJacky from "../img/tmjacky.jpg";
import tmYenly from "../img/tmyenly.jpg";
import tmMatthijs from "../img/tmmatthijs.jpg";

import "./CommitteeContent.scss";
import "./BoardInfoContent.scss";

export default class BoardInfoContent extends Component {
  render() {
    return (
      <div id="committee-page">
        <div className="committee-landing board">
          <h1 className="board-title">ABC Board Application</h1>
          <h2>Core Board Principles</h2>
          <ul>
            <li>
              Taking ABC to greater heights while ensuring a safe, fun and
              unbiased environment
            </li>
            <li>
              Showing professional working conduct while ensuring transparency
              and integrity
            </li>
            <li>
              Leading and motivating committee members to fulfil ABC's vision,
              missions, goals and objectives
            </li>
            <li>
              Dedicating adequate time to fulfil ABC tasks and being flexible
              for unexpected work
            </li>
            <li>
              Being open for feedback and processing it for the growth of ABC
            </li>
          </ul>
        </div>
        <div className="committee-info board">
          <h2>Board positions</h2>
          <div className="committee-item">
            <div className="board-img-left">
              <img src={tmDaniel} alt="abc president" />
            </div>
            <div className="committee-context">
              <h1 className="committee-name">President</h1>
              <div className="committee-text">
                <h3>Responsibilities:</h3>
                <ul>
                  <li>
                    Head of Internal Affairs (internal events, regulating
                    internal environment, alumni events)
                  </li>
                  <li>
                    Guiding and making sure Board Members are on the same page
                  </li>
                  <li>
                    Preserving ABC’s goals & identity Keeping the association a
                    pleasant & safe place
                  </li>
                  <li>Creating annual reports organising GAM’s</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="committee-item">
            <div className="board-img-left">
              <img src={tmMatthijs} alt="abc secretery" />
            </div>
            <div className="committee-context">
              <h1 className="committee-name">Secretery</h1>
              <div className="committee-text">
                <h3>Responsibilities:</h3>
                <ul>
                  <li>Assisting in annual reports & organising GAM’s</li>
                  <li>Keeping the administrative tasks up to date</li>
                  <li>Recording minutes at board meetings</li>
                  <li>Managing the newsletter</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="committee-item">
            <div className="board-img-left">
              <img src={tmKevin} alt="abc treasurer" />
            </div>
            <div className="committee-context">
              <h1 className="committee-name">Treasurer</h1>
              <div className="committee-text">
                <h3>Responsibilities:</h3>
                <ul>
                  <li>
                    Analytically determine maximum financial risk of events,
                    while increasing quality
                  </li>
                  <li>Disclose monthly & annual financial reports for GAM’s</li>
                  <li>
                    Determine financial strategy with annual- & committee
                    budgets
                  </li>
                  <li>Co-devise on investments in equipment & systems</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="committee-item">
            <div className="board-img-left">
              <img src={tmChristine} alt="abc head of events" />
            </div>
            <div className="committee-context">
              <h1 className="committee-name">Head of Events</h1>
              <div className="committee-text">
                <h3>Responsibilities:</h3>
                <ul>
                  <li>Organising events both physical and online</li>
                  <li>
                    Create opportunities for students to hang out and create new
                    bonds
                  </li>
                  <li>Scout for potential locations for upcoming events</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="committee-item">
            <div className="board-img-left">
              <img src={tmSofia} alt="abc head of introductions" />
            </div>
            <div className="committee-context">
              <h1 className="committee-name">Head of Introductions</h1>
              <div className="committee-text">
                <h3>Responsibilities:</h3>
                <ul>
                  <li>
                    Introducing new people to ABC and make them feel welcome
                  </li>
                  <li>
                    Representing ABC at the introduction weeks of UvA, VU and
                    HvA
                  </li>
                  <li>Organising Intro Groups & Sport Buddy System</li>
                  <li>Organising the ABC Borrels</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="committee-item">
            <div className="board-img-left">
              <img src={tmYenly} alt="abc head of marketing" />
            </div>
            <div className="committee-context">
              <h1 className="committee-name">Head of Marketing</h1>
              <div className="committee-text">
                <h3>Responsibilities:</h3>
                <ul>
                  <li>
                    Guiding the four subdivisions of marketing
                    <ul>
                      <li>Social media management</li>
                      <li>Digital design</li>
                      <li>Video content</li>
                      <li>Merchandise</li>
                    </ul>
                  </li>
                  <li>Communicating with all committees</li>
                  <li>Creating and launching ABC merchandise</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="committee-item">
            <div className="board-img-left">
              <img src={tmJacky} alt="abc head of external affairs" />
            </div>
            <div className="committee-context">
              <h1 className="committee-name">Head of External Affairs</h1>
              <div className="committee-text">
                <h3>Responsibilities:</h3>
                <ul>
                  <li>Communication with all external parties</li>
                  <li>
                    Recruiting new partners and writing partnership agreements
                  </li>
                  <li>
                    Maintaining relations with all partners and make sure both
                    sides abide the agreement
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="committee-item">
            <div className="board-img-left">
              <img src={tmRyan} alt="abc head of it" />
            </div>
            <div className="committee-context">
              <h1 className="committee-name">Head of IT</h1>
              <div className="committee-text">
                <h3>Responsibilities:</h3>
                <ul>
                  <li>Maintaining good IT infrastructure</li>
                  <li>Maintaining the website and webshop</li>
                  <li>Offering technical support</li>
                  <li>Optimising IT systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="join-cta board">
          <span>Interested in a board position?</span>
          <a href="/board/apply">
            <button>Apply here!</button>
          </a>
        </div>
      </div>
    );
  }
}
