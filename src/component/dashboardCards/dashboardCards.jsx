import React from "react";
import "./dashboardCards.css";
import DeadlineBox from "../deadlineBox/deadlineBox";
import CompleteDateBox from "../deadlineBox/completedDateBox";
import { useNavigate } from "react-router-dom";

const Cards = ({ ProjectsName, ProjectHead, Date, ImgSrc, isCompleted }) => {
  const navigateToProjectPage=()=>
{
   navigate("/projectPage");
}
const navigate=useNavigate();

  return (
    <div onClick={navigateToProjectPage} class="dashboardCardsBox">
      <img
        className="projectProfilePic"
        src={ImgSrc}
        alt="profile  for project"
      ></img>
      <h5>{ProjectsName}</h5>
      <p>{ProjectHead}</p>
      {isCompleted ? (
        <CompleteDateBox date={Date} />
      ) : (
        <DeadlineBox date={Date} />
      )}
    </div>
  );
};

export { Cards };
