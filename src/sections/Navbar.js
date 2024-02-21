import React, { Component } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import data from "../data.json";
import "./Navbar.css";
import ChangColorPage from "../components/ChangeColorPage";




const Navbar = () => {
 
  return (
    <div>
      <nav className="navbar">
      
        <div>
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={600}
            duration={1000}
          >
            <div className="Navbar">
              <ul>
                <li onClick={() => console.log("About")}>About</li>
              </ul>
            </div>
          </Link>
          <Element name="About" />
        </div>

        <div>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={1200}
            duration={1000}
          >
            <div className="Navbar1">
              <ul>
                <li onClick={() => console.log("skills")}>
                  {data.section[1].title}
                </li>
              </ul>
            </div>
          </Link>
          <Element name="skills" />
        </div>
        
        <ChangColorPage />
      
        
      </nav>
    </div>
  );
};
export default Navbar;
