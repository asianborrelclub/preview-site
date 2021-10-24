import React, { Component } from "react";
import "./PartnersContent.scss";

class PartnersContent extends Component {
  render() {
    const divStyle = {
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(" +
        this.props.banner +
        ")",
    };
    return (
      <div>
        <div className="partners-template">
          <div className="partners-banner">
            <div style={divStyle} className="partners-image">
              <img
                src={this.props.logo}
                alt="partner"
                className="partners-logo"
              />
            </div>
          </div>
          <div className="partners-info">
            <div className="partners-title">
              <h1>{this.props.title}</h1>
            </div>
            <div className="partners-about">
              <div>{this.props.about}</div>
              <div>{this.props.about2}</div>
            </div>
            <div className="partners-deal">
              <h2>ABC Deal:</h2>
              {this.props.deal}
              <h2 className="partners-policy-box">ABC Policy:</h2>
              <ul>
                <li>Show your membership card BEFORE ordering and/or mention that you want to make use of the ABC deal/discount when making a reservation. If not, the Partner is allowed to not give the discount.</li>
                <li>Not valid in combination with other active deals.</li>
                <li>Not valid at official public holidays.</li>
              </ul>
            </div>
            <div className="partners-contact">
              <h1>Contact</h1>
              <div>
                <i className="fas fa-utensils" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={this.props.website}
                >
                  {this.props.website}
                </a>
              </div>
              <div>
                <i className="fas fa-map-marker-alt"></i>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={this.props.loc_link}
                >
                  {this.props.loc}
                </a>
              </div>
              <div>
                <i className="fas fa-phone-alt"></i>
                <a href={"tel:" + this.props.phone}>{this.props.phone2}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PartnersContent;
