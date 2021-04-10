import React, { Component } from "react";

class CommitteeItems extends Component {
  render() {
    return (
      <div className="committee-item">
        <img
          src={this.props.image}
          alt="Committee"
          className="committee-image"
        />
        <div className="committee-context">
          <h1 className="committee-name">{this.props.name}</h1>
          <p className="committee-text">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default CommitteeItems;
