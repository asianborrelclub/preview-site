import React, { Component } from "react";
import CalendarItem from "./CalenderItem";
import backImg from "../img/undraw_pizza_sharing_wxop.svg";
import "./Calendar.scss";

class Calendar extends Component {
  render() {
    return (
      <div id="calendar">
        <img
          src={backImg}
          className="event-image"
          alt="friends eating pizza"
        ></img>
        <h1>Calendar</h1>
        <div className="event">
          <CalendarItem
            date="10-02-2022"
            title="Valentine's Speed Dating & Friending"
          />
          <CalendarItem date="17-02-2022" title="ABC CNY Borrel" />
          <CalendarItem date="10-03-2022" title="Full Moon Party" />
          <CalendarItem
            date="17-03-2022"
            title="Ping Pong & Beer Pong Borrel"
          />
        </div>
        <div>Follow our socials to get updates!</div>
      </div>
    );
  }
}

export default Calendar;
