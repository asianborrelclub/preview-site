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
          <CalendarItem date="16-09-2021" title="ABC's First Borrel" />
          <CalendarItem date="23-09-2021" title="Mid-Autumn Festival" />
          <CalendarItem date="14-10-2021" title="Intro Groups Borrel" />
          <CalendarItem date="21-10-2021" title="Escape The City" />
          <CalendarItem date="04-11-2021" title="Party... (TBA)" />
        </div>
        <div>Follow our socials to get updates!</div>
      </div>
    );
  }
}

export default Calendar;
