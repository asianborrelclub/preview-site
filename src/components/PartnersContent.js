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
            </div>
            <div className="partners-contact">
              <h1>Contact</h1>
              <div>
                <i className="fas fa-utensils" />
                <a href={this.props.website}>{this.props.website}</a>
              </div>
              <div>
                <i className="fas fa-map-marker-alt"></i>
                <a href={this.props.loc_link}>{this.props.loc}</a>
              </div>
              <div>
                <i className="fas fa-phone-alt"></i>
                <a href={"tel:" + this.props.phone2}>+31 20 2382546</a>
              </div>
            </div>

            <div className="partners-discountpolicy">
              Please click here to read our discount policy.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PartnersContent;
