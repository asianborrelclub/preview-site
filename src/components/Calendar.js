import React, { Component } from "react";
import CalendarItem from "./CalenderItem";
import backImg from "../img/undraw_pizza_sharing_wxop.svg";
import "./Calendar.scss";

class Calendar extends Component {
  render() {
    return (
      <div id="calendar">
        <img src={backImg} className="event-image" alt="friends eating pizza"></img>
        <h1>Calendar</h1>
        <div className="event">
          <CalendarItem date="15-01-2021" title="New Year's Bingo" />
          <CalendarItem date="28-01-2021" title="Origami Night" />
          <CalendarItem date="11-02-2021" title="Speed Dating" />
          <CalendarItem date="25-02-2021" title="Chinese NY Pubquiz" />
        </div>
        ...and more to come!
      </div>
    );
  }
}

export default Calendar;
