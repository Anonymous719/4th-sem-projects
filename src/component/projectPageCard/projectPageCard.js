import React, { useState, useEffect } from "react";
import "./projectPageCard.css";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { apiAddress } from "../API/api";
import { GetToken } from "../../GlobalVariable";
import { ThreeCircles as Loading } from "react-loader-spinner";
import { useLocation } from "react-router-dom";

const ProjectPageCard = ({ type, projectid, isLoading, setIsLoading}) => {
  const [nameSet, setNameSet] = useState([]);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [responseNameCode, setResponseNameCode] = useState(null);
  const [responseCode, setResponseCode] = useState(null);
  const [openError, setOpenError] = useState(false);
  const closeModalError = () => setOpenError(false);
  const [landingpageProgressDataSet, setLandingPageProgressDataSet] = useState(
    []
  );
  const [projectCode, setProjectCode] = useState(null);
  const [isCompleted, changeCompleted] = useState(false);

  const [projectDetails1, setData] = useState([]);
  const navigate = useNavigate();
  const navigateToToDoPage = () => {
    navigate(`/projectPage/todo?id=${projectid}`);

  };

  const navigateToChatPage = () => {
    navigate(`/projectPage/chat?id=${projectid}`);
  };

  const navigateToResourcesPage = () => {
    navigate(`/projectPage/resources?id=${projectid}`);
  };
  const navigateToProgressPage = () => {
    navigate(`/projectPage/progress?id=${projectid}`);
  };
  const location = useLocation();

  let run = true;
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");

    if (run === true) {
      const token = GetToken();
      setIsLoading(true);

      fetch(`${apiAddress}user/getname`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          // console.log("dashboard" + response.status);
          setResponseNameCode(response.status);
          return response.json();
        })
        .then((data) => {});
      fetch(`${apiAddress}todo/projectprogress/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          setResponseCode(response.status);
          return response.json();
        })
        .then((datas) => {
         
          for (let data of datas) {

            const newData = {
              completedPoints: data.completedPoints,
              totalPoints: data.totalPoints,
              _id: data._id,
              percentage: ((data.completedPoints / data.totalPoints)*100).toFixed(2),
            };
           
            setLandingPageProgressDataSet((prevData) => [...prevData, newData]);
          }
          setIsLoading(false);
        })

        .catch((error) => {
          // handle errors
          console.error(error);
        });
      fetch(`${apiAddress}project/view/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          setResponseCode(response.status);
          return response.json();
        })
        .then((datas) => {
          setProjectCode(datas.code);
          console.log("code       "+datas.code);
        })
        .catch((error) => {
          // handle errors
          console.error(error);
        });

      run = false;
    }
  }, []);


  switch (type) {
    case "Progress":
      return (
        <div style={{width:"100%"}} class="projectCardsBox">
          <div class="progress_title">
            <h1>{type}</h1>
            {/* <h1>Members 04</h1> */}
          </div>
            {landingpageProgressDataSet.length !== 0 &&nameSet!==0 &&
            landingpageProgressDataSet.map((data) => (
              <div>
              {/* onClick={navigateToProgressPage} */}
                <div >
                  <hr />
                  <div class="progress_members">
                    <div class="progress_scores">
                      <div class="progress_namebar">
                        {data._id}
                                             
                      </div>
                      <div style={{width:"50%"}}>
                        <ProgressBar percentage={data.percentage} />
                      </div>
                      
                      
                      <p style={{width:"25%"}} >{data.percentage} %</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
             <hr />
        </div>
      );
    case "ToDo":
      return (
        <div class="projectCardsBox" onClick={navigateToToDoPage}>
          <div class="todo_title">
            <h1>{type}</h1>
            <h1>YY:MM:DD</h1>
          </div>
          <hr />
        </div>
      );
    case "Resources":
      return (
        <div class="projectCardsBox" onClick={navigateToResourcesPage}>
          <h1>{type}</h1>
          <hr />
        </div>
      );
    case "Discussion":
      return (
        <div class="projectCardsBox" onClick={navigateToChatPage}>
          <h1>{type}</h1>
          <hr />
          <div class="discussion_message"></div>
        </div>
      );
      case "Project Code":
        return (
          <div class="projectCardsBox" >
            <div class="todo_title">
              <h1>{type}</h1>
              <h1>{projectCode}</h1>
            </div>
            <hr />
          </div>
        );
    default:
      return <div></div>;
  }
};
function ProgressBar({percentage}) {


  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${percentage}%` }}
      >
        {percentage}%
      </div>
   
    </div>
  );
}

export default ProjectPageCard;

