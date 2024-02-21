import React, { Component } from "react";

const Downicon = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-center",
        justifyContent: " center",
        marginBottom: "-34px",
        transform: "translateY(-130%)",
      }}
    >
        <div style={{
             width: "30px",
             height:"auto"
        }}>
         <img src={props.icons} />
        </div>
    </div>
  )
}
export default Downicon;
