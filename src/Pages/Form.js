import React, { Component } from "react";
import Footer from "../components/Footer";
import FormContent from "../components/FormContent";
import Navbar from "../components/Navbar";

class Form extends Component {
  render() {
    return (
      <>
        <Navbar />
        <FormContent />
        <Footer />
      </>
    );
  }
}

export default Form;
