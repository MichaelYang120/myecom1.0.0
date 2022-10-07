import React, { Component } from "react";
// import { ReactDOM } from "react-dom";

export default class Header extends Component {
  render() {
    return (
      <>
        <div
          style={{
            position: "relative",
            width: "100%",
            top: 0,
            backgroundColor: "#1111",
          }}
        >
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "70px",
              alignItems: "center",
            }}
          >
            <div className="mystore-logo">LOGO</div>
            <nav>
              <a href="#">Learn More</a>
              <a href="#">Terms and Conditions</a>
              <a href="#">About Us</a>
              <a href="#">Contact</a>
            </nav>
          </header>
        </div>
      </>
    );
  }
}
