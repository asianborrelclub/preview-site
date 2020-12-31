import React, { Component } from "react";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import Calendar from "../components/Calendar";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <LandingPage />
        <Calendar />
        <AboutUs />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default Home;
