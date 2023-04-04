import React, { useState } from "react";
import "./logInPart.css";
import { Google, Facebook, GitHub } from "@mui/icons-material";
import { Button } from "@material-ui/core";
import InputField from "../InputField/InputField";
import Errormsg from "../ErrorMsgField/ErrorMsgField";
import PasswordField from "../PasswordField/passwordField";
import Apple from "./../../apple.png";
const LogIn_Part = () => {
  const [detail, setdetail] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitted username: ${detail.username + detail.password}`);
  };

  const handleUsernameChange = (event) => {
    setdetail((preValue) => {
      return { ...preValue, username: event.target.value };
    });
  };
  const handlePasswordChange = (event) => {
    setdetail((preValue) => {
      return { ...preValue, password: event.target.value };
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <img class="Logo_image" src={Apple} alt="Alt text for logo" />
      <h1>Welcome back</h1>
      <div className="inputFieldBox">
        <InputField
          label={"Email Address"}
          type={"text"}
          placeholder={"Email Address"}
          onChange={handleUsernameChange}
          value={detail.usernname}
        />
        <PasswordField
          label={"Password"}
          placeholder={"Password"}
          onChange={handlePasswordChange}
          value={detail.password}
          errorMsg={"sfgsdfgsg"}
            errorMsgHidden={false}
        />

        <p style={{ textAlign: "right" }}>Forgot password?</p>
        <Errormsg msg="errorr" hidden={true} />
        <button className="button " type="submit">
          Submit
        </button>

        <h4>LogIn With</h4>
        <div className="buttonList">
          <Button className="buttonlog" startIcon={<Google />}></Button>
          <Button className="buttonlog" startIcon={<Facebook />}></Button>
          <Button className="buttonlog" startIcon={<GitHub />}></Button>
        </div>
      </div>
    </form>
  );
};
export default LogIn_Part;
