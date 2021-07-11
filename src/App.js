import React from "react";
import "./App.scss";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Form from "./Pages/Form";
import Home from "./Pages/Home";
import Committee from "./Pages/Committee";
import FormConfirmation from "./Pages/FormConfirmation";
import ProductPage from "./Pages/ProductPage";
import PurchaseConfirmation from "./Pages/PurchaseConfirmation";
import ContactPage from "./Pages/ContactPage";
import RefundPolicy from "./Pages/RefundPolicy";
import MembershipRegister from "./Pages/MembershipRegister";
import MembershipPage from "./Pages/MembershipPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ToS from "./Pages/ToS";
import ShippingPolicy from "./Pages/ShippingPolicy";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/committee-form" exact component={Form} />
      <Route path="/committees" exact component={Committee} />
      <Route path="/success-page" exact component={FormConfirmation} />
      <Route path="/hoodie" exact component={ProductPage} />
      <Route path="/purchase-success" exact component={PurchaseConfirmation} />
      <Route path="/contact" exact component={ContactPage} />
      <Route path="/refund-policy" exact component={RefundPolicy} />
      <Route path="/membership/register" exact component={MembershipRegister} />
      <Route path="/membership" exact component={MembershipPage} />
      <Route path="/privacy-policy" exact component={PrivacyPolicy} />
      <Route path="/terms-and-conditions" exact component={ToS} />
      <Route path="/shipping-policy" exact component={ShippingPolicy} />
    </Router>
  );
}

export default App;
