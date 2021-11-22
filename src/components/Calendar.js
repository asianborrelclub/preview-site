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
            date="15-12-2021"
            title="ABC Gaming Valorant Tournament"
          />
          <CalendarItem date="17-12-2021" title="Christmas Dinner" />
          <CalendarItem date="13-01-2022" title="New Year's Bingo Borrel" />
          <CalendarItem date="20-01-2022" title="Dumpling Day Workshop" />
        </div>
        <div>Follow our socials to get updates!</div>
      </div>
    );
  }
}

export default Calendar;
