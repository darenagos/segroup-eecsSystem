import "./App.css";
import "./reset.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createContext , useState} from "react";
import Login from "./Components/Non User Specific Components/Login/login.js";

import StudentHomepage from "./Components/User Specific Components/Homepages/studentHomepage";
import AdminHomepage from "./Components/User Specific Components/Homepages/adminHomepage";
import TechnicianHomepage from "./Components/User Specific Components/Homepages/technicianHomepage";

import ServiceStatus from "./Components/Non User Specific Components/ServiceStatus/serviceStatus";
import Faqs from "./Components/Non User Specific Components/FAQs/Faqs";

import createEC from "./Components/User Specific Components/Student Components/createEC";
import viewMyECs from "./Components/User Specific Components/Student Components/viewMyECs";
import raiseTicket from "./Components/User Specific Components/Student Components/raiseTicket";
import viewMyTickets from "./Components/User Specific Components/Student Components/viewMyTickets";

import updateFAQ from "./Components/User Specific Components/Technician Components/updateFAQ.js"
import updateServices from "./Components/User Specific Components/Technician Components/updateServices.js"

import manageTickets from "./Components/User Specific Components/Admin Component/manageTickets.js";
import manageECs from "./Components/User Specific Components/Admin Component/manageECs.js";



function App() {
  



  return (
    // this is how you can navigate through a react app >>>
    
    <Router>
      <Routes>
        {/* default page is login */}
        <Route exact path="/" element={<Login/>} />

        <Route exact path="/student-Homepage/" Component={StudentHomepage} >
          <Route path = "faq-page" Component={Faqs} />
          <Route path = "service-status" Component={ServiceStatus} />
          
          <Route path = "create-EC" Component={createEC} />
          <Route path = "view-my-ECs" Component={viewMyECs} />
          <Route path = "raise-ticket" Component={raiseTicket} />
          <Route path = "view-my-tickets" Component={viewMyTickets} />
        </Route>
       
        <Route exact path="/technician-Homepage" Component={TechnicianHomepage} >
          <Route path = "faq-page" Component={Faqs} />
          <Route path = "service-status" Component={ServiceStatus} />

          <Route path = "update-services" Component={updateServices} />
          <Route path = "update-faq" Component={updateFAQ} />
        </Route>

        <Route exact path="/admin-Homepage" Component={AdminHomepage} >
          <Route path = "faq-page" Component={Faqs} />
          <Route path = "service-status" Component={ServiceStatus} />
          
          <Route path = "manage-tickets" Component = {manageTickets}/>
          <Route path = "manage-ECs" Component = {manageECs}/>
        </Route>
        
      
      </Routes>
    </Router>
    
  );
}

export default App;
