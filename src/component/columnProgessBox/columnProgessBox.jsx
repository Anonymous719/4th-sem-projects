import React from "react";
import "./columnProgessBox.css";
import AddIcon from "@mui/icons-material/Add";
const ColumnProgessBox = ({ title }) => {
  const contentInfo = [
    {
      id: 1,
      label: "Research",
      projectTitle:
        "    Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      projectSubTitle:
        "Duis sit amet urna sed ante sodales commodo eu quis odio.",
      date: "YYYY-MM-DD",
    },
    {
      id: 2,
      label: "Research",
      projectTitle:
        "Aenean iaculis nibh sed neque scelerisque, vel consequat risus ornare.",
      projectSubTitle:
        "Praesent sit amet sem eget justo lacinia vehicula eget et purus.",
      date: "1994-11-28",
    },
    {
      id: 3,
      label: "Research",
      projectTitle: "Etiam ultricies diam eget rutrum vestibulum.",
      projectSubTitle: "Etiam gravida quam id lacus pellentesque ultrices.",
      date: "1987-08-09, ",
    },
  ];
  return (
    <div className="columnProgessBox">
      <Title
        title={title}
        onPressed={() => {
          console.log("BackLog add button is pressed");
        }}
      />
      {contentInfo.map((content) => (
        <Content key={content.id} {...content} />
      ))}
    </div>
  );
};
const Title = ({ title, onPressed }) => {
  return (
    <div>
      <div className="title">
        <h5>{title}</h5>
        <AddIcon onClick={onPressed} className="addIcon" />
      </div>
    </div>
  );
};
const Content = ({ label, projectTitle, projectSubTitle, date }) => {
  return (
    <div className="content">
      <div className="label">{label}</div>
      <div className="projectTitle">{projectTitle}</div>
      <div className="projectSubTitle">{projectSubTitle}</div>
      <div className="datebox">{date}</div>
    </div>
  );
};

export default ColumnProgessBox;
