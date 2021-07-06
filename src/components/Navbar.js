import React, { Component } from "react";
import { NavbarItems } from "./NavbarItems";
import { Button } from "./Button";
import "./Navbar.scss";
import logo from "../img/h-logo-abc-full.svg";

class Navbar extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="navbar-items">
        <div className="navbar-logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {NavbarItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={item.cName}
                  href={item.url}
                  target={item.target}
                  rel={item.rel}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <a href="/membership">
          <Button className="btn-register">Join&nbsp;ABC</Button>
        </a>
      </nav>
    );
  }
}
export default Navbar;
