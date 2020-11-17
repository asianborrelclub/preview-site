import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar/>
    <LandingPage/>
    <AboutUs/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
