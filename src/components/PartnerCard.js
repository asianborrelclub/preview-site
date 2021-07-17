import React, { Component } from "react";
import "./Partners.scss";

class PartnerCard extends Component {
  render() {
    const divStyle = {
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(" +
        this.props.banner +
        ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
    return (
      <>
        <a href={this.props.link}>
          <div style={divStyle} className="partner-card">
            <img
              src={this.props.logo}
              alt="partner"
              className="partners-logo"
            />
          </div>
        </a>
      </>
    );
  }
}

export default PartnerCard;
