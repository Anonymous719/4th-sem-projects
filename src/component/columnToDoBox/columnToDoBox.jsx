import React, { useState, useRef, useEffect } from "react";
import "./columnToDoBox.css";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import PopUpToDo from "../popUp/LandingPopUp";
import Popup from "reactjs-popup";
import { useLocation } from 'react-router-dom';
const ColumnProgessBox = ({
  title,
  contentInfo,changeContentInfo,
  onAddPressed,
  
}) => {
  const isHead=true;
  const [toWhere, changeToWhere] = useState("");

  const onClickChange = (id, toWhere) => {
    const updatedContentInfo = contentInfo.map((element) =>
      element.id === id ? { ...element, title: toWhere } : element
    );
    changeContentInfo(updatedContentInfo);
  };
  return (
    <div className="columnProgessBox">
      <Title isHead={isHead} title={title} contentInfo={contentInfo} changeContentInfo={changeContentInfo} />
      {contentInfo.map((content) =>
        content.title === title ? (
          <Content isHead={isHead}
            key={content.id}
            {...content}
            changeToWhere={changeToWhere}
            onClick={() => {
              onClickChange(content.id, toWhere);
            }}
          />
        ) : (
          ""
        )
      )}
    </div>
  );
};

const Title = ({ title,contentInfo,changeContentInfo, isHead}) => {
  const [open, setOpen] = useState(false);
 
  const closeModal = () => setOpen(false);

  const location = useLocation();
  const [id, setId] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    setId(id);
  //   console.log(id)
  }, [location.search])
  return (
    <div>
      <div className="title">
        <h5>{title}</h5>
        {isHead ? <AddIcon onClick={() => setOpen((o) => !o)} className="addIcon" /> :""}
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <PopUpToDo id={id} contentInfo={contentInfo} changeContentInfo={changeContentInfo} onClose={closeModal} />
        </Popup>
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
  changeToWhere,
  isHead,
}) => {
  const[isSelf,changeIsSelf] = useState(false)
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div style={{backgroundColor:`${isSelf?"white":"#ccc"}`,}} className="content" onDrag={onDoubleClick}>
      <div className="date_DropDown">
        <div className="label">{label}</div>
        
          {isSelf||isHead?<div className="menu-container" ref={menuRef}>
          <div
            className="menu-trigger"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </div> <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
            <ul>
              <DropdownItem
                changeToWhere={changeToWhere}
                onClick={onClick}
                text={"BackLog"}
              />
              <DropdownItem
                changeToWhere={changeToWhere}
                onClick={onClick}
                text={"To Do"}
              />
              <DropdownItem
                changeToWhere={changeToWhere}
                onClick={onClick}
                text={"In Progress"}
              /><DropdownItem
                changeToWhere={changeToWhere}
                onClick={onClick}
                text={"Review"}
              />
              {
                isHead?<DropdownItem
                changeToWhere={changeToWhere}
                onClick={onClick}
                text={"Completed"}
              />:""
              }
              
            </ul>
          </div></div>:""}
         
        
      </div>

      <div className="projectTitle">{projectTitle}</div>
      <div className="projectSubTitle">{projectSubTitle}</div>
      <div className="datebox">{date}</div>
    </div>
  );
};
function DropdownItem({ changeToWhere, onClick, text }) {
  const [d, cd] = useState(false);
  async function handleClicked() {
    changeToWhere(text);
    cd(true);

    console.log(d);
    console.log("dfvsdfdsfsdfsdfdsf");
  }
  useEffect(() => {
    if (d) {
      console.log("34");
      onClick();
    }
    // eslint-disable-next-line
  }, [d]);
  return (
    // eslint-disable-next-line
    <li className="dropdownItem" onClick={handleClicked}>
      <div> {text} </div>
    </li>
  );
}

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

// import React from "react";
// import "./columnProgessBox.css";
// import AddIcon from "@mui/icons-material/Add";
// const ColumnProgessBox = ({
//   title,
//   contentInfo,
//   onClick,
//   changeContentInfo,
// }) => {

//   const onClickChange = (id) => {
//     var changeable_data = {
//       title: "",
//       id: 0,
//       label: "",
//       projectTitle: "",
//       projectSubTitle: "",
//       date: " ",
//     };
//     console.log("dss");
//     changeable_data = contentInfo.filter((element) => element.id === id);
//     console.log(changeable_data);
//     changeable_data[0].title="To Do";
//     console.log(changeable_data);
//     changeContentInfo((current) => current.filter((element) => element.id !== id));
//     console.log(contentInfo);
//     changeContentInfo([...contentInfo, changeable_data]);
//     console.log(contentInfo);
//   };
//   return (
//     <div className="columnProgessBox">
//       <Title
//         title={title}
//         onPressed={() => {
//           console.log("BackLog add button is pressed");
//         }}
//       />
//       {contentInfo.map((content) =>
//         content.title === title ? (
//           <Content
//             key={content.id}
//             {...content}
//             onClick={() => onClickChange(content.id)}
//           />
//         ) : (
//           ""
//         )
//       )}
//     </div>
//   );
// };
// const Title = ({ title, onPressed }) => {
//   return (
//     <div>
//       <div className="title">
//         <h5>{title}</h5>
//         <AddIcon onClick={onPressed} className="addIcon" />
//       </div>
//     </div>
//   );
// };
// const Content = ({
//   label,
//   projectTitle,
//   projectSubTitle,
//   date,
//   onClick,
//   onDoubleClick,
// }) => {
//   return (
//     <div className="content" onClick={onClick} onDrag={onDoubleClick}>
//       <div className="label">{label}</div>
//       <div className="projectTitle">{projectTitle}</div>
//       <div className="projectSubTitle">{projectSubTitle}</div>
//       <div className="datebox">{date}</div>
//     </div>
//   );
// };

// export default ColumnProgessBox;

// // const [contentInfo1,changeContentInfo1] = useState([
//   //   {
//   //     id: 1,
//   //     label: "Research",
//   //     projectTitle:
//   //       "    Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   //     projectSubTitle:
//   //       "Duis sit amet urna sed ante sodales commodo eu quis odio.",
//   //     date: "YYYY-MM-DD",
//   //   },
//   //   {
//   //     id: 2,
//   //     label: "Research",
//   //     projectTitle:
//   //       "Aenean iaculis nibh sed neque scelerisque, vel consequat risus ornare.",
//   //     projectSubTitle:
//   //       "Praesent sit amet sem eget justo lacinia vehicula eget et purus.",
//   //     date: "1994-11-28",
//   //   },
//   //   {
//   //     id: 3,
//   //     label: "Research",
//   //     projectTitle: "Etiam ultricies diam eget rutrum vestibulum.",
//   //     projectSubTitle: "Etiam gravida quam id lacus pellentesque ultrices.",
//   //     date: "1987-08-09, ",
//   //   },
//   //   {
//   //     id:4,
//   //     label: "Research",
//   //     projectTitle: "Etiam ultricies diam eget rutrum vestibulum.",
//   //     projectSubTitle: "Etiam gravida quam id lacus pellentesque ultrices.",
//   //     date: "1987-08-09, ",
//   //   },
//   // ])

//   //  const onClick1 =(e)=>
//   //   {
//   //     console.log("dss");
//   //     const item = e;
//   //     console.log(item);
//   //     changeContentInfo([...contentInfo, item]);
//   //   }

//   // eslint-disable-next-line
//   // const onClickRemove = (e) => {
//   //   console.log("dss");
//   //   changeContentInfo((current) => current.filter((fruit) => fruit.id !== e));
//   // };
