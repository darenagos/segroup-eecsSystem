import "./App.css";
import "./reset.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login/login";
import StudentHomepage from "./Components/Homepages/studentHomepage";
import AdminHomepage from "./Components/Homepages/adminHomepage";
import TechnicianHomepage from "./Components/Homepages/technicianHomepage";
import ServiceStatus from "./Components/ServiceStatus/serviceStatus";

import Faqs from "./Components/FAQs/Faqs";


function App() {
  
  return (
    // this is how you can navigate through a react app >>>

    <Router>
      <Routes>
        {/* default page is login */}
        <Route exact path="/" Component={Login} />
        <Route exact path="/student-Homepage" Component={StudentHomepage} />
        <Route exact path="/admin-Homepage" Component={AdminHomepage} />
        <Route exact path="/technician-Homepage" Component={TechnicianHomepage} />
        <Route exact path="serviceStatus" Component={ServiceStatus} />
        
        <Route exact path="FAQs" Component={Faqs} />
      </Routes>
    </Router>
  );
}

export default App;
