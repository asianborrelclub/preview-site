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
          <CalendarItem date="04-07-2021" title="Extreme Sunday 2" />
          <CalendarItem date="10-07-2021" title="Hoodie Meetup" />
          <CalendarItem date="22-07-2021" title="Gartic Phone" />
          <CalendarItem date="01-08-2021" title="Extreme Sunday 3" />
          <CalendarItem date="14-08-2021" title="Speeddating" />
        </div>
        <div>Follow our socials to get updates!</div>
      </div>
    );
  }
}

export default Calendar;
