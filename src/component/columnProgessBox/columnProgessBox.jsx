import React from "react";
import "./columnProgessBox.css";
import AddIcon from "@mui/icons-material/Add";
const ColumnProgessBox = ({
  title,
  contentInfo,
  onClick,
  changeContentInfo,
}) => {
  
  const onClickChange = (id) => {
    var changeable_data = {
      title: "",
      id: 0,
      label: "",
      projectTitle: "",
      projectSubTitle: "",
      date: " ",
    };
    console.log("dss");
    changeable_data = contentInfo.filter((element) => element.id === id);
    console.log(changeable_data);
    changeable_data[0].title="To Do";
    console.log(changeable_data);
    changeContentInfo((current) => current.filter((element) => element.id !== id));
    changeContentInfo([...contentInfo, changeable_data[0]]);
  };
  return (
    <div className="columnProgessBox">
      <Title
        title={title}
        onPressed={() => {
          console.log("BackLog add button is pressed");
        }}
      />
      {contentInfo.map((content) =>
        content.title === title ? (
          <Content
            key={content.id}
            {...content}
            onClick={() => onClickChange(content.id)}
          />
        ) : (
          ""
        )
      )}
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
const Content = ({
  label,
  projectTitle,
  projectSubTitle,
  date,
  onClick,
  onDoubleClick,
}) => {
  return (
    <div className="content" onClick={onClick} onDrag={onDoubleClick}>
      <div className="label">{label}</div>
      <div className="projectTitle">{projectTitle}</div>
      <div className="projectSubTitle">{projectSubTitle}</div>
      <div className="datebox">{date}</div>
    </div>
  );
};

export default ColumnProgessBox;



















// const [contentInfo1,changeContentInfo1] = useState([
  //   {
  //     id: 1,
  //     label: "Research",
  //     projectTitle:
  //       "    Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     projectSubTitle:
  //       "Duis sit amet urna sed ante sodales commodo eu quis odio.",
  //     date: "YYYY-MM-DD",
  //   },
  //   {
  //     id: 2,
  //     label: "Research",
  //     projectTitle:
  //       "Aenean iaculis nibh sed neque scelerisque, vel consequat risus ornare.",
  //     projectSubTitle:
  //       "Praesent sit amet sem eget justo lacinia vehicula eget et purus.",
  //     date: "1994-11-28",
  //   },
  //   {
  //     id: 3,
  //     label: "Research",
  //     projectTitle: "Etiam ultricies diam eget rutrum vestibulum.",
  //     projectSubTitle: "Etiam gravida quam id lacus pellentesque ultrices.",
  //     date: "1987-08-09, ",
  //   },
  //   {
  //     id:4,
  //     label: "Research",
  //     projectTitle: "Etiam ultricies diam eget rutrum vestibulum.",
  //     projectSubTitle: "Etiam gravida quam id lacus pellentesque ultrices.",
  //     date: "1987-08-09, ",
  //   },
  // ])

  //  const onClick1 =(e)=>
  //   {
  //     console.log("dss");
  //     const item = e;
  //     console.log(item);
  //     changeContentInfo([...contentInfo, item]);
  //   }

  // eslint-disable-next-line
  // const onClickRemove = (e) => {
  //   console.log("dss");
  //   changeContentInfo((current) => current.filter((fruit) => fruit.id !== e));
  // };