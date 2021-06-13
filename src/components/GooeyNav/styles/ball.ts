import * as React from "react";

 const ball = {
  background: "#e91e63", //this.props.foregroundColor,
  borderRadius: "100%",
  width: "80px",
  height: "80px",
  marginLeft:"-40px",
  position:"absolute",
  top:"20px",
  color: "white",
  textAlign: "center",
  lineHeight: "80px",
  transform: "translate3d(0,0,0)",
  transition: "transform ease-out",
  transitionDuration: "200ms",
} as React.CSSProperties;

export default ball;