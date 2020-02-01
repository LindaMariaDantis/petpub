import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "115px",
          backgroundColor: "red",
          display: "flex"
        }}
      >
        <div style={{ width: "40%" }}>
          <img
            src="petpublogo.png"
            style={{ width: "210px" }}
            alt="Pet Pub Logo"
          />
        </div>
        <div style={{ width: "50%", display: "flex" }}>
          <div style={{ width: "10%" }}>
            <img src="dogicon.png" style={{ width: "40px" }} alt="Dogs" />
          </div>
          <div style={{ width: "10%" }}>
            <img src="caticon.png" style={{ width: "50px" }} alt="Cats" />
          </div>
          <div style={{ width: "10%" }}>
            <img src="birdicon.png" style={{ width: "54px" }} alt="Birds" />
          </div>
          <div style={{ width: "10%" }}>
            <img src="rabbiticon.png" style={{ width: "48px" }} alt="Rabbits" />
          </div>
          <div style={{ width: "10%" }}>
            <img src="fishicon.png" style={{ width: "55px" }} alt="Fishes" />
          </div>
        </div>
        <div style={{ width: "10%" }}>
          <img src="menuicon.png" style={{ width: "50px" }} alt="Menu" />
        </div>
      </div>
    );
  }
}
export default Header;
