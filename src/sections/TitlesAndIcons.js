import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import Downicon from "../components/Downicon";
import "../sections/TitlesAndIcons.css";
import "./TitlesAndIcons.css";
import Snowfall from "react-snowfall";


class TitlesAndIcons extends Component {
  state = {
    color: "white"
  };
  changeColor = () => {
    this.setState({
      color: this.state.color === "white" ? "yellow" : "white",
    });
  };

  render() {
    return (
      <div>
         
          {/* <Navbar /> */}
        <Fullpage className="first">
        
         
          {/* <div className="title1"> */}
          <h1
            className="title"
            style={{ color: this.state.color }}
            onMouseOver={() => {
              this.changeColor();
            }}
            onMouseLeave={() => {
              this.changeColor();
            }}
          >
            {data.title}
          </h1>
          {/* </div> */}
          <div>
            <h2 className="subtitle">{data.subtitle}</h2>
          </div>
          <div className="icons-wrapper">
            {Object.keys(data.Links).map((key) => {
              return (
                <div className="icons">
                  <SocialIcon url={data.Links[key]} />
                </div>
              );
            })}
          </div>
        </Fullpage>
        {/* <Downicon 
        icon={ data.icons.down}/> */}
        <Link
          activeClass="active"
          to="About1"
          spy={true}
          smooth={true}
          offset={30}
          duration={500}
        >
          <div className="down">
            <img src={data.icons.down} onClick={() => console.log("working")} />
          </div>
        </Link>
        <Element name="About1" className="element" />
      </div>
    );
  }
}
export default TitlesAndIcons;
