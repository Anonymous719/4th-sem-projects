import React, { useState, useEffect } from "react";
import "./logInPart.css";
import { Google, Facebook, GitHub } from "@mui/icons-material";
import { Button } from "@material-ui/core";
import InputField from "../InputField/InputField";
import Errormsg from "../ErrorMsgField/ErrorMsgField";
import PasswordField from "../PasswordField/passwordField";
import { useNavigate } from "react-router-dom";
import MainLogo from "./../../Images/MainLogo.png";
import { apiAddress } from "../API/api";
import axios from "axios";
const LogIn_Part = () => {
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate("/dashboard");
  };
  const [data, setData] = useState({});
  const [response, setResponse] = useState({});
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    
      // const data = { email, password };
      // axios.post(`${apiAddress}user/login`, {
      //  data
      // })
      // .then((response) => {
      //   console.log(response);
      // }, (error) => {
      //   console.log(error);
      // });}
    try {
      console.log(email, password);
      const data = { email, password };
      const response = await fetch(`${apiAddress}user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
    
        body: JSON.stringify(data),
      });
      const result = await response.json();console.log(result);
      console.log(response.status)
      if(response.status===200){
        navigateToDashboard();
      }
      
    } catch (error) {
      console.error("Error:", error);
      
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = { username, detail };
  //   const response = await fetch('/api/login', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(data)
  //   });
  //   const result = await response.json();
  //   console.log(result);
  //   console.log(`Submitted username: ${detail.username + detail.password}`);
  //   navigateToDashboard();
  // };

  useEffect(() => {
    console.log(myData);
  }, [myData]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    // setdetail((preValue) => {
    //   return { ...preValue, username: event.target.value };
    // });
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // setdetail((preValue) => {
    //   return { ...preValue, password: event.target.value };
    // });
  };

  useEffect(() => {
    console.log(data);
    // fetchData();
  }, [data]);
  useEffect(() => {
    console.log(isError);
    // fetchData();
  }, [isError]);
  async function fetchData() {
    const response = await fetch("http://172.17.1.58:8000/api/user/login");
    const json = await response.json();
    setData(json);
    await console.log(data);
  }

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <img class="Logo_image" src={MainLogo} alt="Alt text for logo" />
      <h1>Welcome back</h1>
      <div className="inputFieldBox">
        <InputField
          label={"Email Address"}
          type={"text"}
          placeholder={"Email Address"}
          onChange={handleUsernameChange}
          value={email}
        />
        <PasswordField
          label={"Password"}
          placeholder={"Password"}
          onChange={handlePasswordChange}
          value={password}
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
