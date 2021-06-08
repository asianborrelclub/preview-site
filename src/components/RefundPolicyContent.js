import React, { Component } from "react";
import "./Policy.scss";

class RefundPolicyContent extends Component {
  render() {
    return (
      <div className="refund-policy">
        <div className="policy-text">
          <h1>Refund Policy</h1>
          <p>
            We have a 14 day return policy, which means you have 14 days after
            receiving your item to request a return.
          </p>
          <p>
            To be eligible for a return, your item must be in the same condition
            that you received it, unworn or unused, with tags, and in its
            original packaging. You’ll also need the receipt or proof of
            purchase.
          </p>
          <p>
            To start a return contact us at{" "}
            <a href="mailto:merchandise@asianborrelclub.nl">
              merchandise@asianborrelclub.nl
            </a>
            . If your return is accepted, we’ll send you a return shipping
            label, as well as instructions on how and where to send your
            package. Items sent back to us without first requesting a return
            will not be accepted.
          </p>
          <p>All return costs will be for the buyer. </p>
          <p>
            You can always contact us for any return question at{" "}
            <a href="mailto:merchandise@asianborrelclub.nl">
              merchandise@asianborrelclub.nl
            </a>
            .
          </p>
          <h2>Damages and issues</h2>
          <p>
            Please inspect your order upon reception and contact us immediately
            if the item is defective, damaged or if you receive the wrong item,
            so that we can evaluate the issue and make it right.
          </p>

          <h2>Exceptions / non-returnable items</h2>
          <p>We do not accept returns on items that are used/opened. </p>
          <p>
            Unfortunately, we cannot accept returns on sale items or gift cards.
          </p>
          <h2>Exchanges </h2>
          <p>
            The fastest way to ensure you get what you want is to return the
            item you have, and once the return is accepted, make a separate
            purchase for the new item.
          </p>
          <h2>Refunds </h2>
          <p>
            We will notify you once we’ve received and inspected your return,
            and let you know if the refund was approved or not. If approved,
            you’ll be automatically refunded on your original payment method.
            Please remember it can take some time for your bank or credit card
            company to process and post the refund too.
          </p>
        </div>
      </div>
    );
  }
}

export default RefundPolicyContent;
