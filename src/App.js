import "./App.css";
import { Box } from "@mui/material";
// eslint-disable-next-line
import { BrowserRouter, Routes, Route } from "react-router-dom"; // eslint-disable-next-line
import LogIn from "./pages/loginSignup"; // eslint-disable-next-line
import ToDoPage from "./pages/toDo"; // eslint-disable-next-line
import Dashboard from "./pages/dashboard";// eslint-disable-next-line
import DeadlineList from "./pages/deadline"// eslint-disable-next-line
import ProjectPage from "./pages/projectpage";// eslint-disable-next-line
import SelectorDropDown from "./component/SelectorDropDown/SelectorDropDown.js"// eslint-disable-next-line
import ProfilePage from "./pages/profilepage"; // eslint-disable-next-line
import PopUpToDo from "./component/popUp/LandingPopUp";// eslint-disable-next-line
import PopUpDashboard from "./component/popUp/dashboardPopUP";
import ResourcesPage from "./pages/resourcespage";
import Chatpage from "./pages/chatpage";
import Tryyy from "./component/API/api";
import  ErrorpopUp from "./component/popUp/ErrorpopUp"
function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#fff" }}>
      {/* <PopUpDashboard/> */}
      {/* <SelectorDropDown /> */}
      {/* <ProjectPage></ProjectPage> */}
      {/* <PopUpToDo/> */}
      {/* <DeadlineList /> */}
      {/* <ResourcesPage /> */}
      {/* <Chatpage /> */}
      {/* <ProfilePage/> */}

      
       {/* hr assignednpm not added sir snga discuss */}
       {/* dashborad ko radio button click garda ,front end bata backend ma change requews for status compted
        */}
        {/* create /join project ko sucess msg */}
        {/* dashboard maa completed attribute add garera loop chalaunu paryo */}
        {/* self more color other dim  */}
        {/* self drop down foe only head  */}
        {/* todo completed to tag/aattribute */}



        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/todo" element={<ToDoPage />} />
          <Route path="/projectPage" element={<ProjectPage />} />
          <Route path="/deadline" element={<DeadlineList />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/chat" element={<Chatpage/>} />
          <Route path="/progress" element={<Chatpage/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
  }

export default App;
