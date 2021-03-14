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
          <CalendarItem date="25-03-2021" title="Casino Night Party" />
          <CalendarItem date="08-04-2021" title="Trivia Night" />
          <CalendarItem date="24-04-2021" title="Cocktail Party" />
          <CalendarItem date="06-05-2021" title="Asian Board Games" />
        </div>
        ...and more to come!
      </div>
    );
  }
}

export default Calendar;
