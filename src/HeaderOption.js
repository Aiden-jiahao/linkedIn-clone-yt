import React from "react";
import { selectUser } from "./features/userSlice";
import "./HeaderOption.css";
import { useSelector } from "react-redux";
function HeaderOption({ avatar /*头像*/, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {/* it has a few icons, and some texts udner the icon*/}
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}
export default HeaderOption;
