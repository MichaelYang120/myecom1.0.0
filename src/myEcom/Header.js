import React, { Component } from "react";
// import { ReactDOM } from "react-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="mystore-logo">LOGO</div>
        <nav>
          <a href="#">Learn More</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>
      </header>
    );
  }
}
