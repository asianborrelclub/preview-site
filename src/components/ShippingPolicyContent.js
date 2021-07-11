import React, { Component } from "react";
import "./Policy.scss";

class ShippingPolicyContent extends Component {
  render() {
    return (
      <div className="refund-policy">
        <div className="policy-text">
          <h1>Shipping policy</h1>
          <p>
            Shipping is FREE in the Netherlands. If in stock, we aim to dispatch
            orders within the next three business days. Estimated delivery time
            is 1-2 business days. We do our best to deliver to you as fast as
            possible. If your delivery is delayed, we will be informing you. As
            soon as we ship your order, you will receive an email with a Track &
            Trace code.
          </p>

          <h2>Local Pickup</h2>
          <p>
            If you live in or around Amsterdam, local pickup is available. Just
            contact us through our socials or message us on Discord to see what
            is avaiable for you!
          </p>

          <h2>Merchandise Meetup</h2>
          <p>
            It is possible that Asian Borrel Club organizes a special meetup
            (probably food at one of our partners) in Amsterdam where you can
            pick up your merch. If this option is available, you will be able to
            choose between Shipping or Meetup when filling in the order form.
          </p>

          <h2>Refunds</h2>
          <p>
            Please visit our <a href="/refund-policy">Refund Policy</a>.
          </p>
        </div>
      </div>
    );
  }
}

export default ShippingPolicyContent;
