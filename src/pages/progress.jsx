import React, { useState } from "react";
import "./progress.css";
import TopProgressBar from "../component/topBar/topProgressBar";
import ColumnProgessBox from "../component/columnProgessBox/columnProgessBox.jsx";
import MemberListBox from "../component/memberListBox/memberListBox";
import { Topbar } from "../component/navBar/topbar";
const ProgressPage = () => {
  const [contentInfo, changeContentInfo] = useState([
    {
      title: "BackLog",
      id: 1,
      label: "Research",
      projectTitle:
        "    Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      projectSubTitle:
        "Duis sit amet urna sed ante sodales commodo eu quis odio.",
      date: "YYYY-MM-DD",
    },
    {
      title: "BackLog",
      id: 2,
      label: "Research",
      projectTitle:
        "Aenean iaculis nibh sed neque scelerisque, vel consequat risus ornare.",
      projectSubTitle:
        "Praesent sit amet sem eget justo lacinia vehicula eget et purus.",
      date: "1994-11-28",
    },
    {
      title: "BackLog",
      id: 3,
      label: "Research",
      projectTitle: "Etiam ultricies diam eget rutrum vestibulum.",
      projectSubTitle: "Etiam gravida quam id lacus pellentesque ultrices.",
      date: "1987-08-09, ",
    },
    {
      title: "BackLog",
      id: 4,
      label: "Research",
      projectTitle: "Etiam ultricies diam eget rutrum vestibulum.",
      projectSubTitle: "Etiam gravida quam id lacus pellentesque ultrices.",
      date: "1987-08-09, ",
    },

    {
      title: "To Do",
      id: 11,
      label: "Research",
      projectTitle:
        "    Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      projectSubTitle:
        "Duis sit amet urna sed ante sodales commodo eu quis odio.",
      date: "YYYY-MM-DD",
    },
    {
      title: "To Do",

      id: 12,
      label: "Research",
      projectTitle:
        "Aenean iaculis nibh sed neque scelerisque, vel consequat risus ornare.",
      projectSubTitle:
        "Praesent sit amet sem eget justo lacinia vehicula eget et purus.",
      date: "1994-11-28",
    },
    {
      title: "To Do",

      id: 13,
      label: "Research",
      projectTitle: "Etiam ultricies diam eget rutrum vestibulum.",
      projectSubTitle: "Etiam gravida quam id lacus pellentesque ultrices.",
      date: "1987-08-09, ",
    },
    {
      title: "To Do",

      id: 14,
      label: "Research",
      projectTitle: "Etiam ultricies diam eget rutrum vestibulum.",
      projectSubTitle: "Etiam gravida quam id lacus pellentesque ultrices.",
      date: "1987-08-09, ",
    },

    {
      title: "In Progress",

      id: 21,
      label: "Research",
      projectTitle:
        "    Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      projectSubTitle:
        "Duis sit amet urna sed ante sodales commodo eu quis odio.",
      date: "YYYY-MM-DD",
    },
    {
      title: "In Progress",

      id: 22,
      label: "Research",
      projectTitle:
        "Aenean iaculis nibh sed neque scelerisque, vel consequat risus ornare.",
      projectSubTitle:
        "Praesent sit amet sem eget justo lacinia vehicula eget et purus.",
      date: "1994-11-28",
    },
    {
      title: "In Progress",

      id: 23,
      label: "Research",
      projectTitle: "Etiam ultricies diam eget rutrum vestibulum.",
      projectSubTitle: "Etiam gravida quam id lacus pellentesque ultrices.",
      date: "1987-08-09, ",
    },
    {
      title: "In Progress",
      id: 24,
      label: "Research",
      projectTitle: "Etiam ultricies diam eget rutrum vestibulum.",
      projectSubTitle: "Etiam gravida quam id lacus pellentesque ultrices.",
      date: "1987-08-09, ",
    },

    {
      title: "Review",
      id: 31,
      label: "Research",
      projectTitle:
        "    Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      projectSubTitle:
        "Duis sit amet urna sed ante sodales commodo eu quis odio.",
      date: "YYYY-MM-DD",
    },
    {
      title: "Review",
      id: 32,
      label: "Research",
      projectTitle:
        "Aenean iaculis nibh sed neque scelerisque, vel consequat risus ornare.",
      projectSubTitle:
        "Praesent sit amet sem eget justo lacinia vehicula eget et purus.",
      date: "1994-11-28",
    },
    {
      title: "Review",
      id: 33,
      label: "Research",
      projectTitle: "Etiam ultricies diam eget rutrum vestibulum.",
      projectSubTitle: "Etiam gravida quam id lacus pellentesque ultrices.",
      date: "1987-08-09, ",
    },
    {
      title: "Review",
      id: 34,
      label: "Research",
      projectTitle: "Etiam ultricies diam eget rutrum vestibulum.",
      projectSubTitle: "Etiam gravida quam id lacus pellentesque ultrices.",
      date: "1987-08-09, ",
    },
  ]);
  return (
    <div>
      <Topbar />
      <div className="progressContainer">
        <div className="leftCointainer">
          <TopProgressBar />
          <div className="columns">
            <ColumnProgessBox
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

export default ProgressPage;
