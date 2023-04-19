import React, { useState } from "react";
import "./popUp.css";
import AssignmentIcon from "@mui/icons-material/Assignment";
import InputField from "../InputField/InputField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectorDropDown from "../SelectorDropDown/SelectorDropDown";
//
const PopUpToDo = ({ onClose }) => {
  const [projectLabel, setProjectLabel] = useState("");
  const [projectName, setProjectName] = useState("");
  // const [projectId, setProjectId] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectSubDescription, setProjectSubDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [projectCategory, setProjectCategory] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      projectLabel,
      projectName,
      projectCategory,
      projectDescription,
      selectedDate,
      projectSubDescription,
    });

    // Close the popup form
    onClose();
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  // ${onClose?"closed":"opened"}
  return (
    <div className="modal">
      <div className="popUpDiv " style={{ background: "transparent" }}>
        <form className="popup-form" onSubmit={handleSubmit}>
          <div className="iconDiv">
            <AssignmentIcon fontSize="large" className="assignmentIcon" />
          </div>
<SelectorDropDown />
          <InputField
            label={""}
            type={"text"}
            placeholder={"Project Label"}
            onChange={(event) => setProjectLabel(event.target.value)}
            value={projectLabel}
          />
          <InputField
            label={""}
            type={"text"}
            placeholder={"Project Category"}
            onChange={(event) => setProjectCategory(event.target.value)}
            value={projectCategory}
          />
          <InputField
            label={""}
            type={"text"}
            placeholder={"Project Name"}
            onChange={(event) => setProjectName(event.target.value)}
            value={projectName}
          />
          <InputField
            label={""}
            type={"text"}
            placeholder={"Project Description"}
            onChange={(event) => setProjectDescription(event.target.value)}
            value={projectDescription}
          />
          <InputField
            label={""}
            type={"text"}
            placeholder={"Project Sub-Description"}
            onChange={(event) => setProjectSubDescription(event.target.value)}
            value={projectSubDescription}
          />

          <DatePicker
            className="DateBox"
            selected={selectedDate}
            onChange={handleDateChange}
          />

          <br />
          <button className="assignbutton " type="submit">
            Assign
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopUpToDo;
