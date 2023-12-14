import React from "react";
import "./DarkOverlay.css";

const DarkOverlay = ({ isActive }) => {
  return isActive ? <div className="dark-overlay"></div> : null;
};

export default DarkOverlay;
