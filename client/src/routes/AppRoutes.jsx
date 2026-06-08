import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ResumePage from "../pages/ResumePage";


function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        
    </Routes>
  )
}

export default AppRoutes