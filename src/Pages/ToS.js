import React, { Component } from "react";
import Footer from "../components/Footer";
import ToSContent from "../components/ToSContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

class ToS extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Terms and Conditions</title>
        </Helmet>
        <Navbar />
        <ToSContent />
        <Footer />
      </>
    );
  }
}

export default ToS;
