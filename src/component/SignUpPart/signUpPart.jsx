import React, { useState } from "react";
import "./signUpPart.css";
import { Google, Facebook, GitHub } from "@mui/icons-material";
import { Button } from "@material-ui/core";
import InputField from "../InputField/InputField";
import Errormsg from "../ErrorMsgField/ErrorMsgField";
import PasswordField from "../PasswordField/passwordField";
import MainLogo from "./../../Images/MainLogo.png"
const SignUp_Part = () => {
  const [detail, setdetail] = useState({
    name: "",
    phoneNumber: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [hideError,setHideError] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(detail.password!==detail.confirmPassword)
    {
     setHideError(false);
    }
    if(detail.password===detail.confirmPassword)
    {
     setHideError(true);
    }
    console.log(
      `Submitted username: ${detail.username} Submitted passowrd ${detail.password} Submitted name ${detail.name} Submitted pphonme ${detail.phoneNumber} Submitted passowrd ${detail.confirmPassword}`
    );
  };

  const handleUsernameChange = (event) => {
    setdetail((preValue) => {
      return { ...preValue, username: event.target.value };
    });
  };
  const handlePasswordChange = (event) => {
    if(setHideError===false){
setHideError(true);
    }
    setdetail((preValue) => {
      return { ...preValue, password: event.target.value };
    });
  };
  const handleNameChange = (event) => {
    setdetail((preValue) => {
      return { ...preValue, name: event.target.value };
    });
  };
  const handlePhoneNumberChange = (event) => {
    setdetail((preValue) => {
      return { ...preValue, phoneNumber: event.target.value };
    });
  };
  const handleConfirmPasswordChange = (event) => {
    if(setHideError===false){
      setHideError(true);
          }
    setdetail((preValue) => {
      return { ...preValue, confirmPassword: event.target.value };
    });
  };
  return (
    <form className="signupForm" onSubmit={handleSubmit}>
    <img class="Logo_image" src={MainLogo} alt="Alt text for logo" />
      <h2>Welcome</h2>
      <div className="inputFieldBox">
        
          <InputField
            label={""}
            type={"text"}
            placeholder={"Name"}
            onChange={handleNameChange}
            value={detail.name}
          />
          <InputField
            label={""}
            type={"number"}
            placeholder={"Phone Number"}
            onChange={handlePhoneNumberChange}
            value={detail.phoneNumber}
          />
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
  );
};
export default SignUp_Part;
