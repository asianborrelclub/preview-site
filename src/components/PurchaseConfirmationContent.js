import React, { Component } from "react";
import "./FormConfirmationContent.scss";

class PurchaseConfirmationContent extends Component {
  render() {
    return (
      <div className="form-confirmation">
        <h1>Thank you for your purchase!</h1>
        <h2>You will get a confirmation mail soon.</h2>
        <p>
          If you have questions about anything, please contact us at{" "}
          <a href="mailto:info@asianborrelclub.nl">info@asianborrelclub.nl</a>
        </p>
        <p>
          or contact one of the Board members on our{" "}
          <a href="https://discord.gg/Jz2rkRSrqE">discord server</a>
        </p>
        <a href="/">
          <button>Go back to homepage</button>
        </a>
      </div>
    );
  }
}

export default PurchaseConfirmationContent;
