import React, { Component } from "react";
import Footer from "../components/Footer";
import EventToSContent from "../components/EventToSContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

export default class ToS extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC Events - Terms and Conditions</title>
        </Helmet>
        <Navbar />
        <EventToSContent />
        <Footer />
      </>
    );
  }
}
