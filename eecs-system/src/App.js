import "./App.css";
import "./reset.css";
import React, { useState } from "react";
import Login from "./Components/Login/login";
import StudentHomepage from "./Components/StudentHomepage/studentHomepage";
import AdminHomepage from "./Components/AdminHomePage/adminHomePage";
import ServiceStatus from "./Components/ServiceStatus/serviceStatus";
import Faqs from "./Components/FAQs/Faqs";
import Navbar from "./Components/Navbar/Navbar";
import TechnicianHomepage from "./Components/TechnicianHomePage/technicianHomePage";


function App() {
  const [currentPage, setCurrentPage] = useState("login");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div id="app-container" className="App">
      <div>
        <div id="top">
          <Navbar />
        </div>
        <div id="content">
          {currentPage === "login" && <Login onPageChange={handlePageChange} />}
          {currentPage === "student" && <StudentHomepage />}
          {currentPage === "admin" && <AdminHomepage />}
          {currentPage === "technician" && <TechnicianHomepage />}
        </div>
      </div>
    </div>
  );
}

export default App;
