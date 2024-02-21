import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import SkillCard from "../components/SkillCard";

class SkillSection extends Component {
  render() {
    return (
      <div>
        <Fullpage className="third">
          <h3>{data.section[1].title}</h3>
          <div className="cards-wrapper">
            {data.section[1].Items.map((eachskill) => {
              return (
                <div className="card">
                  <SkillCard skill={eachskill} />
                </div>
              );
            })}
          </div>
          <div style={{paddingRight:0,paddingLeft:0}}>
            <p>&copy; KeyvanHojabr</p>
          </div>
        </Fullpage>
      </div>
    );
  }
}
export default SkillSection;
