import React from "react";
import "./login_Signup.css";
import BackGroundImg from "../Images/ProjectHubBackGround.png"
import FormBox from "../component/Sign_Login_Component/From_Main_Box/form_Main_box";
const logIn = () => {
  return (
    <div 
      style={{backgroundImage:`url(${BackGroundImg})` ,
        textAlign: "center",
        height: "100vh",
      }}
    >
      <FormBox />
    </div>
  );
};

export default logIn;
