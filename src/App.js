import React, { useState }from "react";
import TitlesAndIcons from "./sections/TitlesAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Navbar from "./sections/Navbar";
import "./App.css";
import Snowfall from "react-snowfall";







function App() {
  // const [theme, setTheme] = useState('light');
  // const handle = () =>{
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  // };
  
  return (
    <div className="App">
     
      {/* <button onClick={handle}>change</button> */}
    
      <div className="navigation">
        <Navbar />
      </div>
      
      <TitlesAndIcons />
      <AboutSection />
      <SkillSection />
     
    </div>
  );
}

export default App;
