import React, { useState } from "react";
import "./dashboardCards.css";
import DeadlineBox from "../deadlineBox/deadlineBox";
import CompleteDateBox from "../deadlineBox/completedDateBox";
import { useNavigate } from "react-router-dom";

const Cards = ({ title, createdby, deadline, ImgSrc, isCompleted }) => {
  const navigateToProjectPage = () => {
    navigate("/projectPage");
  };
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((prevState) => !prevState);
  }
  return (
    <div class="dashboardCardsBox">
      <div onClick={navigateToProjectPage} >
        <img
          className="projectProfilePic"
          src={ImgSrc}
          alt="profile  for project"
        ></img>
        <h5>{title}</h5>
        <p>{createdby}</p>
        {isCompleted ? (
          <CompleteDateBox date={deadline} />
        ) : (
          <DeadlineBox date={deadline} />
        )}
      </div>

      <div className="completed_togglebutton">
        Set as completed
       <button
      className={`toggle-button ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      <div className="toggle-button__inner" />
    </button>
      </div>
    </div>
  );
};


export default Cards
export { Cards };
