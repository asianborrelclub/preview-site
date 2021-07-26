import React, { Component } from "react";
import Footer from "../components/Footer";
import MembershipInfo from "../components/MembershipInfo";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

class MembershipPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Membership</title>
        </Helmet>
        <Navbar />
        <MembershipInfo />
        <Footer />
      </>
    );
  }
}

export default MembershipPage;
