import React, { Component } from "react";
import Footer from "../components/Footer";
import PrivacyPolicyContent from "../components/PrivacyPolicyContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

class PrivacyPolicy extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Privacy Policy</title>
        </Helmet>
        <Navbar />
        <PrivacyPolicyContent />
        <Footer />
      </>
    );
  }
}

export default PrivacyPolicy;
