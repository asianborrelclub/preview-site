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
          <CalendarItem date="10-02-2022" title="Speeddating & Friending" />
          <CalendarItem date="17-02-2022" title="ABC Borrel" />
          <CalendarItem date="20-02-2022" title="Volleybal Tournament" />
          <CalendarItem date="10-03-2022" title="Neon Party" />
        </div>
        <div>Follow our socials to get updates!</div>
      </div>
    );
  }
}

export default Calendar;
