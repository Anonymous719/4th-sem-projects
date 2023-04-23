import React, { useState } from "react";
import "./LandingPopUp.css";
import InputField from "../InputField/InputField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import DashBoardPopUpSlidebar from "../SlideBar/dashBoardPopUpSlidebar";
const PopUpDashboard = ({ onClose }) => {
  const [isCreate, changeisCreate] = useState(true);
  const [projectCode, setProjectCode] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectTime, setProjectTime] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());


  const handleSubmit = (event) => {
    event.preventDefault();

    onClose();
  };

  const handleDateChange = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Month is zero-indexed, so we add 1
    const day = date.getDate();
    const newDate = new Date(`${year}-${month}-${day}`);
    setSelectedDate(newDate);
  };

  // ${onClose?"closed":"opened"}
  return (
    <div className="modal">
      <div className="LandingpopUpDiv " style={{ background: "transparent" }}>
        <form className="Landingpopup-form" onSubmit={handleSubmit}>
          <div className="iconDiv">
            <LibraryAddOutlinedIcon
              fontSize="large"
              className="assignmentIcon"
            />
          </div>
          <br></br>
          <DashBoardPopUpSlidebar
            isCreate={isCreate}
            changeisCreate={changeisCreate}
          />
          {isCreate ? (
            <div>
              <InputField
                label={"Project Name :"}
                type={"text"}
                placeholder={"Project Name"}
                onChange={(event) => setProjectName(event.target.value)}
                value={projectName}
              />

              <p style={{ margin: "10px 0 -5px 0" }}>DeadLine :</p>
              <DatePicker
                className="DateBox"
                selected={selectedDate}
                onChange={handleDateChange}
              />

              <br />
              <button className="assignbutton " type="submit">
                Create Project
              </button>
            </div>
          ) : (
            <div>
            <InputField
                label={"Project Code:"}
                type={"text"}
                placeholder={"Project code"}
                onChange={(event) => setProjectCode(event.target.value)}
                value={projectCode}
              />
            {/* <InputField
                label={"Time for this project per days (in Hours):"}
                type={"number"}
                placeholder={"Time for this project per days"}
                onChange={(event) => setProjectTime(event.target.value)}
                value={projectTime}
              /> */}
               <button className="assignbutton " type="submit">
                Join Project
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
export default PopUpDashboard;
