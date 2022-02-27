import React, { Component } from "react";

export default class BoardItems extends Component {
  render() {
    return (
      <div className="committee-item">
        <div className="video-container">
          <iframe
            title="abc promo video"
            className="video"
            src={this.props.url}
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className="committee-context">
          <h1 className="committee-name">{this.props.name}</h1>
          <p className="committee-text">{this.props.text}</p>
        </div>
      </div>
    );
  }
}
