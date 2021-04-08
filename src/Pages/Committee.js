import React, { Component } from "react";
import Footer from "../components/Footer";
import CommitteeContent from "../components/CommitteeContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

class Committee extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Committees</title>
        </Helmet>
        <Navbar />
        <CommitteeContent />
        <Footer />
      </>
    );
  }
}

export default Committee;
