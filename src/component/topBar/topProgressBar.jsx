import React from "react";
import "./topProgressBar.css";
import { Avatar } from "@material-ui/core";
import Avatar1 from "./../../avatar.png";
import Avatar2 from "./../../avatar2.png";
const TopProgressBar = () => {
  const avatarList = [
    { id: 1, alt: "Remy Sharp", src: Avatar1 },
    { id: 2, alt: "Remy Sharp", src: Avatar2 },
    { id: 3, alt: "Remy Sharp", src: Avatar1 },
    { id: 4, alt: "Remy Sharp", src: Avatar2 },
  ];
  return (
    <div className="topProgessBar">
      <h2>Progress</h2>
      <div class="avatars">
        {avatarList.map((avatar) => (
          <Avatar key={avatar.id} className="avatarItems" {...avatar} />
        ))}
        <Avatar className="avatarItems">+6</Avatar>
      </div>
    </div>
  );
};

export default TopProgressBar;
