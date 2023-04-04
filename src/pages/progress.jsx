import React from "react";
import "./progress.css";
import TopProgressBar from "../component/topBar/topProgressBar";
import ColumnProgessBox from "../component/columnProgessBox/columnProgessBox.jsx";
import MemberListBox from "../component/memberListBox/memberListBox";
const ProgressPage = () => {
  return (
    <div className="progressContainer">
      <div className="leftCointainer">
        <TopProgressBar />
        <div className="columns" >
          <ColumnProgessBox title={"BackLog"} />
          <ColumnProgessBox title={"To Do"} />
          <ColumnProgessBox title={"In Progress"} />
          <ColumnProgessBox title={"Review"} />
        </div>
      </div>
      <div className="rightCointainer">
    <MemberListBox />
      </div>
    </div>
  );
};

export default ProgressPage;
