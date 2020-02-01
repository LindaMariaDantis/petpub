import React, { Component } from "react";
import Header from "./Header";
import Slides from "./SlideShow";

class Display extends Component {
  render() {
    return (
      <div>
        Display
        <Header />
        <Slides />
      </div>
    );
  }
}

export default Display;
