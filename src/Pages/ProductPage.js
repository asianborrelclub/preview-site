import React, { Component } from "react";
import Footer from "../components/Footer";
import ProductPageContent from "../components/ProductPageContent";

import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

class Committee extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Hoodie</title>
        </Helmet>
        <Navbar />
        <ProductPageContent />
        <Footer />
      </>
    );
  }
}

export default Committee;
