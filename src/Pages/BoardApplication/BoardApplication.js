import React, { Component } from "react";
import Footer from "../../components/Footer";
import BoardApplicationContent from "../../components/BoardApplicationContent";
import Navbar from "../../components/Navbar";
import { Helmet } from "react-helmet";

export default class BoardApplication extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>ABC - Board Application</title>
        </Helmet>
        <Navbar />
        <BoardApplicationContent />
        <Footer />
      </>
    );
  }
}
