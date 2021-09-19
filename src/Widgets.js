import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
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
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Linkedin Project", "News Flash - 9999powers")}
      {newsArticle("Cup of Water", "News Flash - good for your health")}
      {newsArticle("Peanut Butter", "News Flash - Jelly")}
      {newsArticle("Do you like", "Coffee")}
      {newsArticle("Great news!", "News Flash - You found a secret")}
      {newsArticle("Random #1", "News Flash - super random")}
      {newsArticle("superman", "News Flash - 1power")}
    </div>
  );
}

export default Widgets;
