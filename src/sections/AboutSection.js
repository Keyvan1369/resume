import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import "./AboutSection.css";
import Snowfall from "react-snowfall";


class AboutSection extends Component {
  render() {
    return (
      <div>
       
        
        <Fullpage className="second">
          <h3> {data.section[0].title} </h3>
          <div className="paragraphs">
            {data.section[0].Items.map((p) => {
              return <p>{p.content}</p>;
            })}
          </div>
        </Fullpage>
        
      </div>
    );
  }
}
export default AboutSection;
