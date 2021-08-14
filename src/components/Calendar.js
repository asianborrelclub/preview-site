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
          <CalendarItem date="14-08-2021" title="Speeddating" />
          <CalendarItem date="23-08-2021" title="ABC Beach Day" />
          <CalendarItem date="11-09-2021" title="AMS Foodcrawl" />
          <CalendarItem date="23-09-2021" title="Mid-Autumn Festival" />
          <CalendarItem date="21-09-2021" title="Coming soon..." />
        </div>
        <div>Follow our socials to get updates!</div>
      </div>
    );
  }
}

export default Calendar;
