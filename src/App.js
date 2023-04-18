import "./App.css";
import { Box } from "@mui/material";
// eslint-disable-next-line
import { BrowserRouter, Routes, Route } from "react-router-dom"; // eslint-disable-next-line
import LogIn from "./pages/loginSignup"; // eslint-disable-next-line
import ToDoPage from "./pages/toDo"; // eslint-disable-next-line
import Dashboard from "./pages/dashboard";// eslint-disable-next-line
import PopUpToDo from "./component/popUp/popUp";
import DeadlineList from "./pages/deadline"
function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#fff" }}>
      <DeadlineList />
      {/* <PopUpToDo /> */}
      {/* <ToDoPage/> */}
        {/* <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/progress" element={<ToDoPage />} />
        </Routes> */}
      </Box>
    </BrowserRouter>
  );
  }

export default App;
