import React, { useState } from "react";
import "./toDo.css";
import TopToDoBar from "../component/topBar/topToDoBar";
import ColumnProgessBox from "../component/columnToDoBox/columnToDoBox.jsx";
import MemberListBox from "../component/memberListBox/memberListBox";
import Topbar  from "../component/navBar/topbar";
const ToDoPage = () => {
  const [contentInfo, changeContentInfo] = useState([
    {
      title: "BackLog",
      id: 1,
      label: "Research",
      projectTitle:
        " BackLog Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      projectSubTitle:
        "Duis sit amet urna sed ante sodales commodo eu quis odio.",
      date: "YYYY-MM-DD",
    },
    {
      title: "BackLog",
      id: 2,
      label: "Research",
      projectTitle:
        "BackLog Aenean iaculis nibh sed neque scelerisque, vel consequat risus ornare.",
      projectSubTitle:
        "Praesent sit amet sem eget justo lacinia vehicula eget et purus.",
      date: "1994-11-28",
    },
    {
      title: "BackLog",
      id: 3,
      label: "Research",
      projectTitle: "BackLog Etiam ultricies diam eget rutrum vestibulum.",
      projectSubTitle: "Etiam gravida quam id lacus pellentesque ultrices.",
      date: "1987-08-09, ",
    },
    {
      title: "BackLog",
      id: 4,
      label: "Research",
      projectTitle: "BackLog Etiam ultricies diam eget rutrum vestibulum.",
      projectSubTitle: "Etiam gravida quam id lacus pellentesque ultrices.",
      date: "1987-08-09, ",
    },

    {
      title: "To Do",
      id: 5,
      label: "Research",
      projectTitle:
        " To Do  Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      projectSubTitle:
        "Duis sit amet urna sed ante sodales commodo eu quis odio.",
      date: "YYYY-MM-DD",
    },
    {
      title: "To Do",

      id: 6,
      label: "Research",
      projectTitle:
        "To Do Aenean iaculis nibh sed neque scelerisque, vel consequat risus ornare.",
      projectSubTitle:
        "Praesent sit amet sem eget justo lacinia vehicula eget et purus.",
      date: "1994-11-28",
    },
    {
      title: "To Do",

      id: 7,
      label: "Research",
      projectTitle: "To Do Etiam ultricies diam eget rutrum vestibulum.",
      projectSubTitle: "Etiam gravida quam id lacus pellentesque ultrices.",
      date: "1987-08-09",
    },
    {
      title: "To Do",

      id: 8,
      label: "Research",
      projectTitle: "To Do Etiam ultricies diam eget rutrum vestibulum.",
      projectSubTitle: "Etiam gravida quam id lacus pellentesque ultrices.",
      date: "1987-08-09",
    },

    {
      title: "In Progress",

      id: 9,
      label: "Research",
      projectTitle:
        " In Progress   Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      projectSubTitle:
        "Duis sit amet urna sed ante sodales commodo eu quis odio.",
      date: "YYYY-MM-DD",
    },
    {
      title: "In Progress",

      id: 10,
      label: "Research",
      projectTitle:
        "In Progress Aenean iaculis nibh sed neque scelerisque, vel consequat risus ornare.",
      projectSubTitle:
        "Praesent sit amet sem eget justo lacinia vehicula eget et purus.",
      date: "1994-11-28",
    },
    {
      title: "In Progress",

      id: 11,
      label: "In ProgressResearch",
      projectTitle: "Etiam ultricies diam eget rutrum vestibulum.",
      projectSubTitle: "Etiam gravida quam id lacus pellentesque ultrices.",
      date: "1987-08-09",
    },
    {
      title: "In Progress",
      id: 12,
      label: "Research",
      projectTitle: "In Progress Etiam ultricies diam eget rutrum vestibulum.",
      projectSubTitle: "Etiam gravida quam id lacus pellentesque ultrices.",
      date: "1987-08-09",
    },

    {
      title: "Review",
      id: 13,
      label: "Research",
      projectTitle:
        " Review   Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      projectSubTitle:
        "Duis sit amet urna sed ante sodales commodo eu quis odio.",
      date: "YYYY-MM-DD",
    },
    {
      title: "Review",
      id:14,
      label: "Research",
      projectTitle:
        " Review Aenean iaculis nibh sed neque scelerisque, vel consequat risus ornare.",
      projectSubTitle:
        "Praesent sit amet sem eget justo lacinia vehicula eget et purus.",
      date: "1994-11-28",
    },
    {
      title: "Review",
      id: 15,
      label: "Research",
      projectTitle: " Review Etiam ultricies diam eget rutrum vestibulum.",
      projectSubTitle: "Etiam gravida quam id lacus pellentesque ultrices.",
      date: "1987-08-09",
    },
    {
      title: "Review",
      id: 16,
      label: "Research",
      projectTitle: " Review Etiam ultricies diam eget rutrum vestibulum.",
      projectSubTitle: "Etiam gravida quam id lacus pellentesque ultrices.",
      date: "1987-08-09",
    },
  ]);
  const [addPressed,ChangeAddPressed]=useState("False")
  return (
    <div>
      <Topbar />
      <div className="progressContainer">
        <div className="leftCointainer">
          <TopToDoBar />
          <div className="columns">
            <ColumnProgessBox
              onAddPressed={()=>{ChangeAddPressed(true);
              console.log(addPressed)}}
              title={"BackLog"}
              contentInfo={contentInfo}
              onClick={() => {
                console.log("prtessed");
              }}
              changeContentInfo={changeContentInfo}
            />
            <ColumnProgessBox
              title={"To Do"}
              contentInfo={contentInfo}
              onClick={{}}
              changeContentInfo={changeContentInfo}
            />
            <ColumnProgessBox
              title={"In Progress"}
              contentInfo={contentInfo}
              onClick={{}}
              changeContentInfo={changeContentInfo}
            />
            <ColumnProgessBox
              title={"Review"}
              contentInfo={contentInfo}
              onClick={{}}
              changeContentInfo={changeContentInfo}
            />
          </div>
        </div>
        <div className="rightCointainer">
          <MemberListBox />
        </div>
      </div>
    </div>
  );
};

export default ToDoPage;
