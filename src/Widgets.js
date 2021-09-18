import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
  const newsAtricle = (heading, subtitle) => (
    <div className="widegts__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="Widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsAtricle("react is back", "top news ")}
      {newsAtricle("Covid 19", "top news ")}
      {newsAtricle("react is back", "top news ")}
      {newsAtricle("react is back", "top news ")}
      {newsAtricle("react is back", "top news ")}
    </div>
  );
}

export default Widgets;
