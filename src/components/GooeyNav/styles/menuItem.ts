import * as React from "react";
import { logInfo } from "../../../utils/logging";
import ball from "./ball";

const pi = 3.14;
const openingAngle = pi * 2;
// const openingAngle = pi / 2;
const openDistance = 105; //"105px" HOW far from center
// const menu-items = 4 //number of items
const menuItems = 3 + 1   // FIXME: we assume here that we will have 3 bubbles around center (+1) !!!

export type Orientation = "right" | "left" | "top" | "bottom";
const orient = function (orientation: Orientation, index: number, amnt: number = 80) {
  let xOrient = 0;
  let yOrient = 0;
  const amount = amnt || 80;

  if (orientation === "right" || orientation === "left") {
    xOrient = amount * index;
    if (orientation === "left") xOrient = xOrient * -1;
  } else {
    yOrient = amount * index;
    if (orientation === "top") yOrient = yOrient * -1;
  }

  return {
    x: xOrient,
    y: yOrient
  };
};

const openAroundOrientation = (index: number): { x: number, y: number } => {
  //  $angle:(($pi - $opening-angle)/2)+(($opening-angle/($menu-items - 1))*($i - 1));
  const angle = ((pi - openingAngle) / 2 + ((openingAngle / (menuItems - 1) * (index - 1))));
  // const angle = (-pi/6 - (pi / 6) * (index - 1));
  logInfo("MenuItem", `Calculation in progress [Index:${index}, Angle:${angle}, openingAngle:${openingAngle}, menuItems:${menuItems}]`);
  const xOrient = Math.cos(angle) * openDistance;
  const yOrient = Math.sin(angle) * openDistance;
  logInfo("MenuItem", `Final : [xOrient:${xOrient}, yOrient:${yOrient}]`);
  return {
    x: xOrient,
    y: yOrient
  };
};

type Options = { index: number };
export const std = ({ index }: Options): React.CSSProperties => {
  let { x, y } = orient("left", index - 1);
  const margin = orient("left", index - 1, 8);
  // [x, y] = [x + margin.x, y + margin.y];
  // [x, y] = [x + margin.x, y + margin.y];
  [x, y] = [0, 0];
  // const { x, y } = openAroundOrientation( index - 1);


  return {
    ...ball,
    color: "white",
    background: "#e91e63",
    textDecoration: "none",
    // transform: `translate3d(${-x}px, ${-y}px, 0) rotate(-180deg)`
    transform: `translate3d(${-x}px, ${-y}px, 0) rotate(0deg)`
  };
}

export const hover = {
  color: "#e91e63",
  background: "white"
} as React.CSSProperties;

export const revealed = (opts: Options): React.CSSProperties => {
  const index = opts.index || 1;
  // const orientation = opts.orientation || "right";
  const { x, y } = openAroundOrientation(index);
  logInfo("MenuItem", `MenuItem with index ${index} has {x:${x},y:${y}}`);

  return {
    visibility: "visible",
    transitionTimingFunction: "cubic-bezier(0.935, 0.000, 0.340, 1.330)",
    transitionDuration: `${80 + 100 * index}ms`,
    transform: `translate3d(${x}px, ${y}px, 0) rotate(0)`
  };
};