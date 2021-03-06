import React, { Component } from "react";
import Footer from "../components/Footer";
import MembershipContent from "../components/MembershipContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

class MembershipRegister extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Member Registration</title>
        </Helmet>
        <Navbar />
        <MembershipContent />
        <Footer />
      </>
    );
  }
}

export default MembershipRegister;
