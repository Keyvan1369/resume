import React, { Component } from "react";
import Navbar from "../sections/Navbar";
import Snowfall from "react-snowfall";

import "./Fullpage.css";

class Fullpage extends Component {
  render() {
    const { children } = this.props;
    return (
      <div
        className={`fullpage ${this.props.className || ""}`}
        
      >
        
        {children}
       
      </div>
    );
  }
}
export default Fullpage;
