import React from "react";
import "./App.scss";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Form from "./Pages/Form";
import Home from "./Pages/Home";
import Committee from "./Pages/Committee";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/committee-form" exact component={Form} />
      <Route path="/committees" exact component={Committee} />
    </Router>
  );
}

export default App;
