import React, { useState } from "react";
import "./signUpPart.css";
import { Google, Facebook, GitHub } from "@mui/icons-material";
import { Button } from "@material-ui/core";
import InputField from "../InputField/InputField";
import Errormsg from "../ErrorMsgField/ErrorMsgField";
import PasswordField from "../PasswordField/passwordField";
import MainLogo from "./../../Images/MainLogo.png";
import DatePicker from "react-datepicker";
import GenderSelectorDropdown from "../SelectorDropDown/GenderSelectorDropdown";
import "react-datepicker/dist/react-datepicker.css";
const SignUp_Part = () => {
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const [forwardCreateProfile, createForwardCreateProfile] = useState(false);
  const [detail, setdetail] = useState({
    // email and pass and redirect to profile page

    username: "",
    password: "",
    confirmPassword: "",
  });
  const [profileDetails, setprofileDetails] = useState({
    name: "",
    phoneNumber: "",
    gitLinks: "",
    gender: "",
    DoB: new Date(),
  });
  const [hideError, setHideError] = useState(true);
  const handleDateChange = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Month is zero-indexed, so we add 1
    const day = date.getDate();
    const newDate = new Date(`${year}-${month}-${day}`);
    handleDateafterConvertChange(newDate);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (detail.password !== detail.confirmPassword) {
      setHideError(false);
    }
    if (detail.password === detail.confirmPassword) {
      setHideError(true);
      createForwardCreateProfile(true);
    }
    console.log(
      `Submitted username: ${detail.username} Submitted passowrd ${detail.password} Submitted passowrd ${detail.confirmPassword}`
    );
  };

  const handleCreateProfile = (event) => {
    event.preventDefault();
    console.log(
      ` Submitted name ${profileDetails.name} Submitted pphonme ${profileDetails.phoneNumber} git links ${profileDetails.gitLinks} DOB ${profileDetails.DoB}  Gender ${profileDetails.gender}`
    );
  };

  const handleUsernameChange = (event) => {
    setdetail((preValue) => {
      return { ...preValue, username: event.target.value };
    });
  };
  const handlePasswordChange = (event) => {
    if (setHideError === false) {
      setHideError(true);
    }
    setdetail((preValue) => {
      return { ...preValue, password: event.target.value };
    });
  };
  const handleNameChange = (event) => {
    setprofileDetails((preValue) => {
      return { ...preValue, name: event.target.value };
    });
  };
  const handlePhoneNumberChange = (event) => {
    setprofileDetails((preValue) => {
      return { ...preValue, phoneNumber: event.target.value };
    });
  };
  const handleConfirmPasswordChange = (event) => {
    if (setHideError === false) {
      setHideError(true);
    }
    setdetail((preValue) => {
      return { ...preValue, confirmPassword: event.target.value };
    });
  };
  const handleGitChange = (event) => {
    setprofileDetails((preValue) => {
      return { ...preValue, gitLinks: event.target.value };
    });
  };
  const handleDateafterConvertChange = (event) => {
    setprofileDetails((preValue) => {
      return { ...preValue, DoB: event.target.value };
    });
  };  
  const handleGenderChange = (event) => {
    setprofileDetails((preValue) => {
      return { ...preValue, gender: event };
    });
  };
 
  return (
    <div>
      {!forwardCreateProfile ? (
        <form className="signupForm" onSubmit={handleSubmit}>
          <img class="Logo_image" src={MainLogo} alt="Alt text for logo" />
          <h2>Welcome</h2>
          <div className="inputFieldBox">
            <InputField
              label={""}
              type={"email"}
              placeholder={"Email"}
              onChange={handleUsernameChange}
              value={detail.usernname}
              title={"Please enter your valid email address"}
            />
            <PasswordField
              label={""}
              placeholder={"Password"}
              onChange={handlePasswordChange}
              value={detail.password}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
            <PasswordField
              label={""}
              placeholder={"Confirm Password"}
              onChange={handleConfirmPasswordChange}
              value={detail.confirmPassword}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
            <Errormsg msg="Password doesnot match" hidden={hideError} />
            <button className="button " type="submit">
              Sign Up
            </button>

            <h4>SignUP With</h4>
            <div className="buttonList">
              <Button className="buttonlog" startIcon={<Google />}></Button>
              <Button className="buttonlog" startIcon={<Facebook />}></Button>
              <Button className="buttonlog" startIcon={<GitHub />}></Button>
            </div>
          </div>
        </form>
      ) : (
        <form className="signupForm" onSubmit={handleCreateProfile}>
          <img class="Logo_image" src={MainLogo} alt="Alt text for logo" />
          <h2>Welcome</h2>
          <div className="inputFieldBox">
            <div>
              <InputField
                label={""}
                type={"text"}
                placeholder={"Name"}
                onChange={handleNameChange}
                value={profileDetails.name}
              />
              <InputField
                label={""}
                type={"number"}
                placeholder={"Phone Number"}
                onChange={handlePhoneNumberChange}
                value={profileDetails.phoneNumber}
              />
              <InputField
                label={""}
                type={"text"}
                placeholder={"Git Link"}
                onChange={handleGitChange}
                value={profileDetails.gitLinks}
              />
              <GenderSelectorDropdown  setGender={handleGenderChange}/>
              <DatePicker
                className="DateBoxcreate_ProfileDateBox"
                selected={profileDetails.DoB}
                onChange={handleDateChange}
              />
               <button className="button " type="submit">
              Create Profile
            </button>
              <br />
              <br></br>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
export default SignUp_Part;
