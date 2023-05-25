import "./App.css";
import { Box } from "@mui/material";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./pages/loginSignup";
import ToDoPage from "./pages/toDo";
import Dashboard from "./pages/dashboard";
import DeadlineList from "./pages/deadline";
import ProjectPage from "./pages/projectpage";
import SelectorDropDown from "./component/SelectorDropDown/SelectorDropDown.js";
import ProfilePage from "./pages/profilepage";
import PopUpToDo from "./component/popUp/toDoPopUp";

import ResourcesPage from "./pages/resourcespage";
import Chatpage from "./pages/chatpage";
import Tryyy from "./component/API/api";
import ErrorpopUp from "./component/popUp/ErrorpopUp";
function App() {
  return (
    // k
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#fff" }}>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projectPage/todo" element={<ToDoPage />} />
          <Route path="/projectPage" element={<ProjectPage />} />
          <Route path="/projectPage/deadline" element={<DeadlineList />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/projectPage/resources" element={<ResourcesPage />} />
          <Route path="/projectPage/chat" element={<Chatpage />} />
          <Route path="/projectPage/progress" element={<Chatpage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
