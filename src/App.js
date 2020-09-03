import React from "react";
import instagram from "./img/instagram.svg";
import facebook from "./img/facebook.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="soon">
          <i>
            Coming soon
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </i>
        </div>
        <div className="abc">Asian Borrel Club</div>
        <div className="socials">
          Follow us for updates:
          <a
            className="insta"
            href="https://www.instagram.com/asianborrelclub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="instagram.com" />
            @asianborrelclub
          </a>
          <a
            className="fb"
            href="https://www.facebook.com/asianborrelclub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="facebook.com" />
            /asianborrelclub
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
