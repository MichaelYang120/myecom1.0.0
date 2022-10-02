import React, { Component } from "react";

export default function Footer() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "#1111",
        }}
      >
        <footer style={{
            display: "flex",
            justifyContent: "space-between",
            height: "70px",
            alignItems: "center"
        }}>
          <div className="footer-logo">LOGO</div>
          <nav className="footer-nav">
            <a href="#">Learn More</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </nav>
        </footer>
      </div>
    </>
  );
}