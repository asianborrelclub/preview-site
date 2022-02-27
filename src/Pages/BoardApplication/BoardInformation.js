import React, { Component } from "react";
import Footer from "../../components/Footer";
import BoardInfoContent from "../../components/BoardInfoContent";
import Navbar from "../../components/Navbar";
import { Helmet } from "react-helmet";

export default class BoardInformation extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Board Information</title>
        </Helmet>
        <Navbar />
        <BoardInfoContent />
        <Footer />
      </>
    );
  }
}
