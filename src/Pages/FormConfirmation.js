import React, { Component } from "react";
import Footer from "../components/Footer";
import FormConfirmationContent from "../components/FormConfirmationContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

class FormConfirmation extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Form Confirmation</title>
          <meta http-equiv="refresh" content="5;url=/" />
        </Helmet>
        <Navbar />
        <FormConfirmationContent />
        <Footer />
      </>
    );
  }
}

export default FormConfirmation;
