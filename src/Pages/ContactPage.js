import React, { Component } from "react";
import Footer from "../components/Footer";
import ContactContent from "../components/ContactContent";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

class ContactPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Contact</title>
        </Helmet>
        <Navbar />
        <ContactContent />
        <Footer />
      </>
    );
  }
}

export default ContactPage;
