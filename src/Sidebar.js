import { Avatar } from "@material-ui/core";
import React from "react";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";
function Sidebar() {
  const user = userSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="Sidebar">
      <div className="sidebar__top">
        <img src="" alt="" />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who Viewed you</p>
          <p className="sidebar__statNumber">9,999</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">6,666</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
