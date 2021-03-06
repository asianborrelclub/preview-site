import React, { Component } from "react";
import Footer from "../components/Footer";
import FormContent from "../components/FormContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

class Form extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Committee Application</title>
        </Helmet>
        <Navbar />
        <FormContent />
        <Footer />
      </>
    );
  }
}

export default Form;
