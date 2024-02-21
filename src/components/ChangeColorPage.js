import React, { Component } from "react";
import "./ChangeColorPage.css";

class ChangeColorPage extends Component {
  state = {
    color:"yellow"
  };
  changeTheme = () => {
    this.setState({
      color: this.state.color === "red" ? document.body.style.color="yellow" 
      : this.state.color === "yellow"  ? document.body.style.color="white" 
      : this.state.color === "white" ? document.body.style.color="red"
      : this.state.color
      
    });
    console.log ("changeTheme");
  };
    
    
  
  

  render() {
    return (
      <div>
        <ul>
          <li id="color" onClick={() => {
              this. changeTheme();
            }}>
            color me
          </li>
        </ul>
        <div>
          <img
            src="images/color.png"
            id="colorImage" onMouseOver={() => {
              this. changeTheme();}}
            
          />
        </div>
      </div>
    );
  }
}
export default ChangeColorPage;
