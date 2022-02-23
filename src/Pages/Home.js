import React, { Component } from "react";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import Calendar from "../components/Calendar";
import Partners from "../components/Partners";
import AboutUs from "../components/AboutUs";
import HomepageGallery from "../components/HomepageGallery";
import Footer from "../components/Footer";
import BannerPSA from "../components/BannerPSA";

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <BannerPSA />
        <LandingPage />
        <Calendar />
        <Partners />
        <AboutUs />
        <HomepageGallery />
        <Footer />
      </>
    );
  }
}

export default Home;
