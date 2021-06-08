import React, { Component } from "react";
import Footer from "../components/Footer";
import RefundPolicyContent from "../components/RefundPolicyContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

class RefundPolicy extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Refund Policy</title>
        </Helmet>
        <Navbar />
        <RefundPolicyContent />
        <Footer />
      </>
    );
  }
}

export default RefundPolicy;
