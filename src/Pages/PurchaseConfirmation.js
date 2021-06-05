import React, { Component } from "react";
import Footer from "../components/Footer";
import PurchaseConfirmationContent from "../components/PurchaseConfirmationContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

class PurchaseConfirmation extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Purchase Confirmation</title>
          <meta http-equiv="refresh" content="8;url=/" />
        </Helmet>
        <Navbar />
        <PurchaseConfirmationContent />
        <Footer />
      </>
    );
  }
}

export default PurchaseConfirmation;
