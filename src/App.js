import React from "react";
import "./App.scss";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import Committee from "./Pages/Committee";
import FormConfirmation from "./Pages/FormConfirmation";
import PurchaseConfirmation from "./Pages/PurchaseConfirmation";
import ContactPage from "./Pages/ContactPage";
import RefundPolicy from "./Pages/RefundPolicy";
import MembershipRegister from "./Pages/MembershipRegister";
import MembershipPage from "./Pages/MembershipPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ToS from "./Pages/ToS";
import EventToS from "./Pages/EventToS";
import ShippingPolicy from "./Pages/ShippingPolicy";
import PartnerFullmoon from "./Pages/PartnerFullmoon";
import PartnerTeaGuys from "./Pages/PartnerTeaGuys";
import PartnerWagamama from "./Pages/PartnerWagamama";
import PartnerFoodmarket from "./Pages/PartnerFoodmarket";
import PartnerYuansHotPot from "./Pages/PartnerYuansHotPot";
import PartnerBarB from "./Pages/PartnerBarB";
import PartnerHoiTin from "./Pages/PartnerHoiTin";
import PartnerChatime from "./Pages/PartnerChatime";
import PartnerGoldenGarden from "./Pages/PartnerGoldenGarden";
import PartnerJensBing from "./Pages/PartnerJensBing";
import PartnerJCHairfashion from "./Pages/PartnerJCHair";
import PartnerTakeichi from "./Pages/PartnerTakeichi";
import PartnerKaraokebar24k from "./Pages/Partner24Karaoke";
import BoardInfo from "./Pages/BoardApplication/BoardInformation";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/committees" exact component={Committee} />
      <Route path="/success-page" exact component={FormConfirmation} />
      <Route path="/purchase-success" exact component={PurchaseConfirmation} />
      <Route path="/contact" exact component={ContactPage} />
      <Route path="/refund-policy" exact component={RefundPolicy} />
      <Route path="/membership/register" exact component={MembershipRegister} />
      <Route path="/membership" exact component={MembershipPage} />
      <Route path="/privacy-policy" exact component={PrivacyPolicy} />
      <Route path="/terms-and-conditions" exact component={ToS} />
      <Route path="/events-terms-and-conditions" exact component={EventToS} />
      <Route path="/shipping-policy" exact component={ShippingPolicy} />
      <Route
        path="/partners/fullmoon-garden"
        exact
        component={PartnerFullmoon}
      />
      <Route path="/partners/tea-guys" exact component={PartnerTeaGuys} />
      <Route path="/partners/wagamama" exact component={PartnerWagamama} />
      <Route
        path="/partners/the-foodmarket"
        exact
        component={PartnerFoodmarket}
      />
      <Route
        path="/partners/yuans-hot-pot"
        exact
        component={PartnerYuansHotPot}
      />
      <Route path="/partners/bar-b" exact component={PartnerBarB} />
      <Route path="/partners/hoi-tin" exact component={PartnerHoiTin} />
      <Route path="/partners/chatime" exact component={PartnerChatime} />
      <Route
        path="/partners/golden-garden"
        exact
        component={PartnerGoldenGarden}
      />
      <Route path="/partners/jens-bing" exact component={PartnerJensBing} />
      <Route
        path="/partners/jc-hairfashion"
        exact
        component={PartnerJCHairfashion}
      />
      <Route
        path="/partners/takeichi-ramen"
        exact
        component={PartnerTakeichi}
      />
      <Route
        path="/partners/karaokebar-24k"
        exact
        component={PartnerKaraokebar24k}
      />
      <Route path="/board" exact component={BoardInfo} />
      <Route path="/board/apply" exact component={BoardInfo} />
    </Router>
  );
}

export default App;
