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
            date="16-03-2022"
            title="Ping Pong & Beer Pong Borrel"
          />
          <CalendarItem date="27-03-2022" title="Futsbal Tournament" />
          <CalendarItem date="07-04-2022" title="Masquerade Gala" />
          <CalendarItem date="14-04-2022" title="Karaoke Borrel" />
          <CalendarItem date="30-04-2022" title="Dodgeball Tournament" />
        </div>
        <div>Follow our socials to get updates!</div>
      </div>
    );
  }
}

export default Calendar;
