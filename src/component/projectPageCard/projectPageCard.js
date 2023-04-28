import React, { useState, useEffect } from "react";
import "./projectPageCard.css";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { apiAddress } from "../API/api";
import { GetToken } from "../../GlobalVariable";
import { ThreeCircles as Loading } from "react-loader-spinner";
import { useLocation } from "react-router-dom";

const ProjectPageCard = ({ type, projectid }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [responseNameCode, setResponseNameCode] = useState(null);
  const [responseCode, setResponseCode] = useState(null);
  const [openError, setOpenError] = useState(false);
  const closeModalError = () => setOpenError(false);
  const [landingpageProgressDataSet, setLandingPageProgressDataSet] = useState([]);
const [projectCode,setProjectCode]=useState(null)
  const [isCompleted, changeCompleted] = useState(false);

  const [projectDetails1, setData] = useState([]);
  const navigate = useNavigate();
  const navigateToToDoPage = () => {
    navigate(`/projectPage/todo?id=${projectid}`);
    //  history.push(`/details?id=${id}`);
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
  // const tryy=.percentage
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
          console.log("dashboard" + response.status);
          setResponseNameCode(response.status);
          return response.json();
        })
        .then((data) => {
        });
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
          //   console.log(data[0].completedPoints);
          for (let data of datas) {
            // console.log(i);
            const newData = {
              completedPoints: data.completedPoints,
              totalPoints: data.totalPoints,
              _id: data._id,
              percentage: data.completedPoints / data.totalPoints,
            };
            // console.log(typeof(newData.percentage))
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
            console.log(datas.code)
          })
          .catch((error) => {
            // handle errors
            console.error(error);
          });
      
      run = false;
    }
  }, []);
  async function GetName(sid) {
        try {
          const data={sid}
          console.log(sid);
          const response = await fetch(`${apiAddress}/user/getname/${sid}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${GetToken()}`,
            },
          });
          const result = await response.json();
          console.log(result);
          console.log(response.status);
          if (response.status === 200) {
            console.log(result)
          } else {
            console.log(result.error);
            // setErrorMsg(result.error);
            // setOpenError((o) => !o);
          }
        } catch (error) {
          console.error(error);
        }
      }
  switch (type) {
    case "Progress":
      return (
        <div class="projectCardsBox">
          <div class="progress_title">
            <h1>{type}</h1>
            <h1>Members 04</h1>
          </div>
          {landingpageProgressDataSet.length !== 0 &&
            landingpageProgressDataSet.map((data) => (
              <div>
                <div onClick={navigateToProgressPage}>
                  <hr />
                  <div class="progress_members">
                    <div class="progress_scores">
                      <div class="progress_namebar">
                        <p>
                        {console.log(data._id)}
                          {/* {console.log(GetName(data._id)) } */}
                        </p>
                        <hr />
                      </div>
                      <p>{data.percentage} %</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
          <div class="todo_list">
            <div class="todo_task">
              <p>Task 1 </p>
              <p>YY:MM:DD</p>
            </div>
            <div class="todo_task">
              <p>Task 2 </p>
              <p>YY:MM:DD</p>
            </div>
            <div class="todo_task">
              <p>Task 3 </p>
              <p>YY:MM:DD</p>
            </div>
            <div class="todo_task">
              <p>Task 4 </p>
              <p>YY:MM:DD</p>
            </div>
          </div>
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
    default:
      return <div></div>;
  }
};

export default ProjectPageCard;

// function ProjectPageCard({type}) {

//   // if(type === "Progress"){
//   //     return (
//   //         <div class = 'projectCardsBox'>
//   //             <div class = 'progress_title'>
//   //             <h1>{type}</h1>
//   //             <h1>Members  04</h1>
//   //             </div>
//   //             <hr />
//   //             <div class = 'progress_members'>
//   //                 <div class = 'progress_scores'>
//   //                     <div class = 'progress_namebar'><p><pre>Name 1  </pre></p>
//   //                     <hr /></div>
//   //                     <p>60%</p>
//   //                 </div>
//   //                 <div class = 'progress_scores'>
//   //                     <div class = 'progress_namebar'><p><pre>Name 2  </pre></p>
//   //                     <hr /></div>
//   //                     <p>30%</p>
//   //                 </div>
//   //                 <div class = 'progress_scores'>
//   //                     <div class = 'progress_namebar'><p><pre>Name 3  </pre></p>
//   //                     <hr /></div>
//   //                     <p>80%</p>
//   //                 </div>
//   //                 <div class = 'progress_scores'>
//   //                     <div class = 'progress_namebar'><p><pre>Name 4  </pre></p>
//   //                     <hr /></div>
//   //                     <p>45%</p>
//   //                 </div>
//   //             </div>
//   //         </div>

//   //     );
//   // }
//   // else if(type === "ToDo"){
//   //     return (
//   //         <div class = 'projectCardsBox'>
//   //             <div class = 'todo_title'>
//   //                 <h1>{type}</h1>
//   //                 <h1>YY:MM:DD</h1>
//   //             </div>
//   //             <hr />
//   //             <div class = 'todo_list'>
//   //                 <div class = 'todo_task'>
//   //                     <p>Task 1 </p>
//   //                     <p>YY:MM:DD</p>
//   //                 </div>
//   //                 <div class = 'todo_task'>
//   //                     <p>Task 2 </p>
//   //                     <p>YY:MM:DD</p>
//   //                 </div>
//   //                 <div class = 'todo_task'>
//   //                     <p>Task 3 </p>
//   //                     <p>YY:MM:DD</p>
//   //                 </div>
//   //                 <div class = 'todo_task'>
//   //                     <p>Task 4 </p>
//   //                     <p>YY:MM:DD</p>
//   //                 </div>
//   //             </div>
//   //         </div>

//   //     );
//   // }else if(type === "Resources"){
//   //     return (
//   //         <div class = 'projectCardsBox'>
//   //             <h1>{type}</h1>
//   //             <hr />
//   //         </div>

//   //     );
//   // }else if(type === "Discussion"){
//   //     return (
//   //         <div class = 'cardsBox'>
//   //             <h1>{type}</h1>
//   //             <hr />
//   //             <div class='discussion_message'>

//   //             </div>
//   //         </div>

//   //     );
//   // }else{
//   //     return (
//   //         <div></div>
//   //     )
//   // }
// }

// export { ProjectPageCard };
