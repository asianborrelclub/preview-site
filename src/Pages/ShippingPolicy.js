import React, { Component } from "react";
import Footer from "../components/Footer";
import ShippingPolicyContent from "../components/ShippingPolicyContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

class ShippingPolicy extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Shipping Policy</title>
        </Helmet>
        <Navbar />
        <ShippingPolicyContent />
        <Footer />
      </>
    );
  }
}

export default ShippingPolicy;
