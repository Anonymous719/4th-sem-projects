import React, { useState } from "react";
import "./dashboard.css";
import { Topbar } from "../component/navBar/topbar";
import { Cards } from "../component/dashboardCards/cards";
import DashBoardSlideBar from "../component/SlideBar/dashBoardSlidebar";
import profilePic_1 from "../Images/CardProfilePic_1.png";
import profilePic_2 from "../Images/CardProfilePic_2.png";
import profilePic_3 from "../Images/CardProfilePic_3.png";
import profilePic_4 from "../Images/CardProfilePic_4.png";
import profilePic_5 from "../Images/CardProfilePic_5.png";
import profilePic_6 from "../Images/CardProfilePic_6.png";
const Dashboard=()=>{
const projectDetails = [
  {
    id: 1,
    ProjectsName:"Green City",
    ProjectHead:"Emma",
    Date:"2023-11-01",
    ImgSrc:profilePic_1
  },
  {
    id: 2,
    ProjectsName:"TechConnect",
    ProjectHead:"Noah",
    Date:"2024-07-08",
    ImgSrc:profilePic_2
  },
  {
    id: 3,
    ProjectsName:"HealthFirst",
    ProjectHead:"Sophia",
    Date:"2024-09-15",
    ImgSrc:profilePic_3
  },
  {
    id: 4,
    ProjectsName:"YouthEmpower",
    ProjectHead:"William",
    Date:"2024-11-27",
    ImgSrc:profilePic_4
  },
  {
    id: 5,
    ProjectsName:"ArtVentures",
    ProjectHead:"Ava",
    Date:"2025-02-19",
    ImgSrc:profilePic_3
  },
  {
      id: 6,
      ProjectsName:"Green City",
      ProjectHead:"Emma",
      Date:"2023-11-01",
      ImgSrc:profilePic_4
    },
    {
      id: 7,
      ProjectsName:"TechConnect",
      ProjectHead:"Noah",
      Date:"2024-07-08",
      ImgSrc:profilePic_5
    },
    {
      id: 8,
      ProjectsName:"HealthFirst",
      ProjectHead:"Sophia",
      Date:"2024-09-15",
      ImgSrc:profilePic_6
    },
    {
      id: 9,
      ProjectsName:"YouthEmpower",
      ProjectHead:"William",
      Date:"2024-11-27",
      ImgSrc:profilePic_1
    },
    {
      id: 10,
      ProjectsName:"ArtVentures",
      ProjectHead:"Ava",
      Date:"2025-02-19",
      ImgSrc:profilePic_2
    },
];
const [isCompleted, changeCompleted]=useState(false);


  return (
    <div className="DashBoard">
      <Topbar />
      <div class="greetings">
        <p>Welcome, Username</p>
        <div>
        <DashBoardSlideBar isCompleted={isCompleted} changeCompleted={changeCompleted}/>
        </div>
      </div>
      <hr />
      <div class="dashboardBlocks">
        {projectDetails.map((projects) => (
          <Cards  isCompleted={isCompleted} key={projects.id} {...projects} />
        ))}
      </div>
    </div>
  );

}

export default Dashboard;
