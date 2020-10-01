import React from "react";
import instagram from "./img/instagram.svg";
import facebook from "./img/facebook.svg";
import logoHori from "./img/dark-h-logo-abc-full.svg";
import logoSqua from "./img/dark-logo-abc-full.svg";
import "./App.scss";

function App() {
  return (
    <div className="home">
      <header className="header">
        <div className="soon">
          <i>
            Coming soon
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </i>
        </div>
        <div className="logo-horizontal">
          <img src={logoHori} alt="logo" />
        </div>
        <div className="logo-square">
          <img src={logoSqua} alt="logo" />
        </div>

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
