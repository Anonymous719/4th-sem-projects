import React, { useState, useEffect, useRef } from "react";
import "./dashboard.css";
import Topbar from "../component/navBar/topbar";
import { Cards } from "../component/dashboardCards/dashboardCards";
import DashBoardSlideBar from "../component/SlideBar/dashBoardSlidebar";
import { Avatar } from "@material-ui/core";
import Avatar1 from "./../Images/avatar.png";
import profilePic_1 from "../Images/CardProfilePic_1.png";
import profilePic_2 from "../Images/CardProfilePic_2.png";
import profilePic_3 from "../Images/CardProfilePic_3.png";
import profilePic_4 from "../Images/CardProfilePic_4.png";
import profilePic_5 from "../Images/CardProfilePic_5.png";
import profilePic_6 from "../Images/CardProfilePic_6.png";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PopUpDashboard from "../component/popUp/dashboardPopUP";
import Popup from "reactjs-popup";
import { apiAddress } from "../component/API/api";
import { GetToken } from "../GlobalVariable";
import ErrorpopUp, { PositivepopUp } from "../component/popUp/ErrorpopUp";
import {ThreeCircles as Loading} from 'react-loader-spinner';

const Dashboard = () => {

  // const projectDetails1 = [
  //   { id: 0, title: "", createdby: "", deadline: "", ImgSrc: profilePic_1 },
  // ];
  // window.onload = async function () {
  //   setIsLoading(true);

  //   const token = GetToken();
  //   console.log(token);
  //   try {
  //     const response = await fetch(`${apiAddress}project/getall`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     const result = await response.json();
  //     console.log(result);
  //     console.log(
  //       result[0].title,
  //       result[0].deadline,
  //       result[0].createdby.name,
  //       result[0].createdby._id
  //     );
  //     for (let i = 0; i < result.length; i++) {
  //       projectDetails1[i] = {
  //         id: result[i].createdby._id,
  //         title: result[i].title,
  //         createdby:  result[i].createdby.name,
  //         deadline:  result[i].deadline,
  //         ImgSrc: profilePic_1,
  //       };
  //     }
  //     console.log(projectDetails1)
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  let run=true;
  useEffect(() => {
    if(run==true){
    const token = GetToken();
    setIsLoading(true);
     fetch(`${apiAddress}user/getname`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          setResponseNameCode(response.status);
          return response.json();
        })
        .then((data) => {
          setUsername(data.name)
          setIsLoading(false);
        });
    fetch(`${apiAddress}project/getall`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setResponsedataCode(response.status);
        return response.json();
      })
      .then((data) => {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
          
          const newData = {
            id: data[i].createdby._id,
            title: data[i].title,
            createdby: data[i].createdby.name,
            deadline:data[i].deadline.toString().slice(0,10),
          
            ImgSrc: profilePic_1,
          };
          setData((prevData) => 
            [...prevData, newData]
          );
        }
        // setTimeout(() => {
        //   setData('Some data');
        //   setIsLoading(false);
        // }, 2000);
        // console.log(projectDetails1);
        setIsLoading(false);
      });
     
      run=false;
    }
  }, []);

  const projectDetails = [
    {
      id: 1,
      title: "Green City",
      createdby: "Emma",
      deadline: "2023-11-01",
      ImgSrc: profilePic_1,
    },
    {
      id: 2,
      title: "TechConnect",
      createdby: "Noah",
      deadline: "2024-07-08",
      ImgSrc: profilePic_2,
    },
    {
      id: 3,
      title: "HealthFirst",
      createdby: "Sophia",
      deadline: "2024-09-15",
      ImgSrc: profilePic_3,
    },
    {
      id: 4,
      title: "YouthEmpower",
      createdby: "William",
      deadline: "2024-11-27",
      ImgSrc: profilePic_4,
    },
    {
      id: 5,
      title: "ArtVentures",
      createdby: "Ava",
      deadline: "2025-02-19",
      ImgSrc: profilePic_3,
    },
    {
      id: 6,
      title: "Green City",
      createdby: "Emma",
      deadline: "2023-11-01",
      ImgSrc: profilePic_4,
    },
    {
      id: 7,
      title: "TechConnect",
      createdby: "Noah",
      deadline: "2024-07-08",
      ImgSrc: profilePic_5,
    },
    {
      id: 8,
      title: "HealthFirst",
      createdby: "Sophia",
      deadline: "2024-09-15",
      ImgSrc: profilePic_6,
    },
    {
      id: 9,
      title: "YouthEmpower",
      createdby: "William",
      deadline: "2024-11-27",
      ImgSrc: profilePic_1,
    },
    {
      id: 10,
      title: "ArtVentures",
      createdby: "Ava",
      deadline: "2025-02-19",
      ImgSrc: profilePic_2,
    },
  ];

  const [responseNameCode, setResponseNameCode] = useState(null);
  const [responseDataCode, setResponsedataCode] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [openResponse, setOpenResponse] = useState(false);
  const [openError, setOpenError] = useState(false);
  const closeModalError = () => setOpenError(false);
  const [isCompleted, changeCompleted] = useState(false);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const [isLoading, setIsLoading] = useState(false);
  const [projectDetails1, setData] = useState([]);
  const [userName,setUsername] = useState("Loading");
  function CardGenerator({ data }) {
    return (
      <div class="dashboardBlocks">
        {/* {console.log("dfgdfgdfgfg")}
        {console.log(projectDetails1)} */}
        {projectDetails1.map((projects) => (
          <Cards isCompleted={isCompleted} key={projects.id} {...projects} />
        ))}
      </div>
    );
  }
 

  return (
    <div className="DashBoard">
   { responseNameCode ||responseDataCode!==200? <Popup open={openError} closeOnDocumentClick onClose={closeModalError}>
        <ErrorpopUp Errormsg={"Error has Occured"} onClose={closeModalError} />
      </Popup>:""}
   
      <Topbar />
      <div class="greetings">
        <div className="greetingsUser">
          <Avatar className="avatarItems" src={Avatar1} />
          <div>Welcome, {userName}</div>
        </div>

        <div>
          <DashBoardSlideBar
            isCompleted={isCompleted}
            changeCompleted={changeCompleted}
          />
        </div>
      </div>
      <hr />
      {/* {isLoading && ( */}
        <Loading className="Spinnner" type="Puff" color="#00BFFF" height={300} width={window.innerWidth} />
      {/* )} */}
      {/* {!isLoading && projectDetails1 && (
        <CardGenerator data={projectDetails1} />
      )} */}
      {/* <div class="dashboardBlocks">
      {console.log("dfgdfgdfgfg")}{console.log(projectDetails1)}
        {projectDetails1.map((projects) => (
          <Cards isCompleted={isCompleted} key={projects.id} {...projects} />
        ))}
      </div> */}
      {/* { console.log(responseCode)} */}

      <Fab
        onClick={() => setOpen((o) => !o)}
        color="primary"
        aria-label="add"
        style={{ position: "fixed", bottom: 32, right: 32, zIndex: 999 }}
      >
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <PopUpDashboard onClose={closeModal} />
        </Popup>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Dashboard;
