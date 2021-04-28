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
          <CalendarItem date="06-05-2021" title="Asian Board Games" />
          <CalendarItem date="20-05-2021" title="Escape Room" />
          <CalendarItem date="03-06-2021" title="Asian Family Feud" />
          <CalendarItem date="17-06-2021" title="Guess the Picture" />
          <CalendarItem date="03-07-2021" title="ABC PubQuiz & Drinks" />
        </div>
        ...and more to come!
      </div>
    );
  }
}

export default Calendar;
