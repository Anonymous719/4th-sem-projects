import React, { useState } from "react";
import axios from "axios";

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
import { apiAddress } from "../API/api";
const SignUp_Part = () => {
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const [forwardCreateProfile, createForwardCreateProfile] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [gitlink, setgitLinks] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDoB] = useState(new Date());
  const [phonenumber, setPhonenumber] = useState("");

  // const [detail, setdetail] = useState({
  //   // email and pass and redirect to profile page

  //   username: "",
  //   password: "",
  //   confirmPassword: "",
  // });
  // const [profileDetails, setprofileDetails] = useState({
  //   name: "",
  //   phoneNumber: "",
  //   gitLinks: "",
  //   gender: "",
  //   DoB: new Date(),
  // });

  const [hideError, setHideError] = useState(true);

  const handleDateChange = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Month is zero-indexed, so we add 1
    const day = date.getDate();
    const newDate = new Date(`${year}-${month}-${day}`);
    // handleDateafterConvertChange(newDate);
    setDoB(newDate);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (password !== confirmPassword) {
        setHideError(false);
      }
      if (password === confirmPassword) {
        setHideError(true);
        console.log(email, password);
        const data = { email, password };
        const response = await fetch(`${apiAddress}user/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log(result);
        console.log(response.status)
      }
      console.log(
        `Submitted username: ${email} Submitted passowrd ${password} Submitted passowrd ${confirmPassword}`
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // const handleSubmit= async(event)=>{
  //   event.preventDefault();
  //   try {

  //   try {
  //     const response = await axios.post(`${apiAddress}user/signup`, {
  //       email,password
  //     });
  //     console.log(response); // handle response from server
  //   } catch (error) {
  //     console.error(error); // handle error
  //   }
  // }
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //   if (password !== confirmPassword) {
  //     setHideError(false);
  //   }
  //   if (password === confirmPassword) {
  //     setHideError(true);
  //     // createForwardCreateProfile(true);
  //     event.preventDefault();
  //   console.log (email ,password)
  //   const data = {  email, password };
  //   const response = await fetch(`${apiAddress}user/signup`, {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json',
  //   },
  //     body: JSON.stringify(data)
  //   });
  //   const result = await response.json();
  //   setPassword(response);
  //   console.log(result);
  //   }
  //   console.log(
  //     `Submitted username: ${email} Submitted passowrd ${password} Submitted passowrd ${confirmPassword}`
  //   );
  // } catch (error) {
  //   console.error("Error:", error);
  //   // handle the error here
  // }
  // };

  const handleCreateProfile = async (event) => {
    event.preventDefault();
    try {
      const data = { name, phonenumber, gitlink, gender, dob };
      const response = await fetch(`${apiAddress}user/createprofile`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setPassword(response);
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
      // handle the error here
    }
    console.log(
      ` Submitted name ${name} Submitted pphonme ${phonenumber} git links ${gitlink} DOB ${dob}  Gender ${gender}`
    );
  };

  // const handleUsernameChange = (event) => {
  //   setdetail((preValue) => {
  //     return { ...preValue, username: event.target.value };
  //   });
  // };
  // const handlePasswordChange = (event) => {
  //   if (setHideError === false) {
  //     setHideError(true);
  //   }
  //   setdetail((preValue) => {
  //     return { ...preValue, password: event.target.value };
  //   });
  // };
  // const handleNameChange = (event) => {
  //   setprofileDetails((preValue) => {
  //     return { ...preValue, name: event.target.value };
  //   });
  // };
  // const handlePhoneNumberChange = (event) => {
  //   setprofileDetails((preValue) => {
  //     return { ...preValue, phoneNumber: event.target.value };
  //   });
  // };
  // const handleConfirmPasswordChange = (event) => {
  //   if (setHideError === false) {
  //     setHideError(true);
  //   }
  //   setdetail((preValue) => {
  //     return { ...preValue, confirmPassword: event.target.value };
  //   });
  // };
  // const handleGitChange = (event) => {
  //   setprofileDetails((preValue) => {
  //     return { ...preValue, gitLinks: event.target.value };
  //   });
  // };
  // const handleDateafterConvertChange = (event) => {
  //   setprofileDetails((preValue) => {
  //     return { ...preValue, DoB: event.target.value };
  //   });
  // };
  // const handleGenderChange = (event) => {
  //   setprofileDetails((preValue) => {
  //     return { ...preValue, gender: event };
  //   });
  // };

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
              onChange={
                (event) => {
                  setEmail(event.target.value);
                }
                // handleUsernameChange
              }
              value={email}
              title={"Please enter your valid email address"}
            />
            <PasswordField
              label={""}
              placeholder={"Password"}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              // {handlePasswordChange}
              value={password}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
            <PasswordField
              label={""}
              placeholder={"Confirm Password"}
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
              value={confirmPassword}
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
                onChange={(event) => {
                  setName(event.target.value);
                }}
                // {handleNameChange}
                value={name}
              />
              <InputField
                label={""}
                type={"number"}
                placeholder={"Phone Number"}
                onChange={(event) => {
                  setPhonenumber(event.target.value);
                }}
                // {handlePhoneNumberChange}
                value={phonenumber}
              />
              <InputField
                label={""}
                type={"text"}
                placeholder={"Git Link"}
                onChange={(event) => {
                  setgitLinks(event.target.value);
                }}
                // {handleGitChange}
                value={gitlink}
              />
              <GenderSelectorDropdown setGender={setGender} />
              <DatePicker
                className="DateBoxcreate_ProfileDateBox"
                selected={dob}
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
