import "./App.css";
import { Box } from "@mui/material";
// eslint-disable-next-line
import { BrowserRouter, Routes, Route } from "react-router-dom"; // eslint-disable-next-line
import LogIn from "./pages/loginSignup"; // eslint-disable-next-line
import ToDoPage from "./pages/toDo"; // eslint-disable-next-line
import Dashboard from "./pages/dashboard";// eslint-disable-next-line
import DeadlineList from "./pages/deadline"// eslint-disable-next-line
import ProjectPage from "./pages/projectpage";
import SelectorDropDown from "./component/SelectorDropDown/SelectorDropDown.js"
import ProfilePage from "./pages/profilePage";
function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#fff" }}>
      {/* <SelectorDropDown /> */}
      {/* <ProjectPage></ProjectPage> */}
      {/* <DeadlineList /> */}
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/todo" element={<ToDoPage />} />
          <Route path="/projectPage" element={<ProjectPage />} />
          <Route path="/deadline" element={<DeadlineList />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
  }

export default App;
