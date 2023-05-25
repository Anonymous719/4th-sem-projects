import React from "react";
// import { GestureDetector } from "react-onsenui";
import "././dashBoardSlidebar.css";

const DashBoardSlideBar = ({ isCompleted, changeCompleted }) => {

  return (
    <div className="dashboard_slidebar">
      <div
        onClick={() => changeCompleted(false)}
        className="dashboar_slidebar_content"
        style={{
          background: !isCompleted ? "black" : "#D9D9D9",
          color: !isCompleted ? "white" : "black",
        }}
      >
        Ongoing
      </div>
      <div
        onClick={() => changeCompleted(true)}
        className="dashboar_slidebar_content"
        style={{
          background: isCompleted ?"black"  : "#D9D9D9",
          color: isCompleted ? "white" : "black",
        }}
      >
        Completed
      </div>
    </div>
  );
};
export default DashBoardSlideBar;
