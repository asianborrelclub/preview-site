import React, { Component } from "react";
import "./TeamCard.scss";

class TeamCard extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.image} alt="Person" className="card-image" />
        <h1 className="card-name">{this.props.name}</h1>
        <p className="card-title">{this.props.title}</p>
        <a
          href={this.props.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram" />
        </a>
      </div>
    );
  }
}

export default TeamCard;
