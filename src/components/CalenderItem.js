import React, { Component } from "react";
import "./CalendarItem.scss";

class CalendarItem extends Component {
  render() {
    return (
      <div className="event-item">
        <div className="event-date">{this.props.date}</div>
        <div className="event-title">{this.props.title}</div>
      </div>
    );
  }
}

export default CalendarItem;
