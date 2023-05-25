import React, { useState } from "react";
import "./Form_Main_box.css";
import SlideBar from "../../SlideBar/slideBar.jsx"
import SubFormBox from "../subFormBox/subFormBox.jsx"

const FormBox = () => {
    const [isSignup, changeSignup] = useState(false);
    return (
      <div className="Formbox" >
      <SlideBar isSignup={isSignup} changeSignup={changeSignup} />
        <SubFormBox isSignup={isSignup} changeSignup={changeSignup} /> 
      </div>
    );
  };
  export default FormBox;