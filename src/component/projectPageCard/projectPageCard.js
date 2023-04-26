import React from "react";
import "./projectPageCard.css";
import { useNavigate } from "react-router-dom";
const  ProjectPageCard = ({type}) => {
  const navigate=useNavigate();
  const navigateToToDoPage=()=>
  {
     navigate("/todo");
  }
  
  const navigateToChatPage = () => {
    navigate("/chat");
  };
  
  const navigateToResourcesPage = () => {
    navigate("/resources");
  };  
  const navigateToProgressPage = () => {
    navigate("/progress");
  };
 switch (type) {
    case "Progress":
      return (
        <div class="projectCardsBox" onClick={navigateToProgressPage}>
          <div class="progress_title">
            <h1>{type}</h1>
            <h1>Members 04</h1>
          </div>
          <hr />
          <div class="progress_members">
            <div class="progress_scores">
              <div class="progress_namebar">
                <p>
                  <pre>Name 1 </pre>
                </p>
                <hr />
              </div>
              <p>60%</p>
            </div>
            <div class="progress_scores">
              <div class="progress_namebar">
                <p>
                  <pre>Name 2 </pre>
                </p>
                <hr />
              </div>
              <p>30%</p>
            </div>
            <div class="progress_scores">
              <div class="progress_namebar">
                <p>
                  <pre>Name 3 </pre>
                </p>
                <hr />
              </div>
              <p>80%</p>
            </div>
            <div class="progress_scores">
              <div class="progress_namebar">
                <p>
                  <pre>Name 4 </pre>
                </p>
                <hr />
              </div>
              <p>45%</p>
            </div>
          </div>
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
}

export default  ProjectPageCard

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
