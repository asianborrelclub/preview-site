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
          <CalendarItem date="28-05-2022" title="Throw slime at Nick Chen!" />
          <CalendarItem date="31-05-2022" title="Last day Board Application" />
          <CalendarItem date="09-06-2022" title="Cocktail Workshop" />
          <CalendarItem date="25-06-2022" title="ABC Lasertag" />
          <CalendarItem date="30-06-2022" title="GAM, Dinner & Borrel" />
        </div>
        <div>Follow our socials to get updates!</div>
      </div>
    );
  }
}

export default Calendar;
