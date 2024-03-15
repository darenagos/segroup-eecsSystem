import "./App.css";
import "./reset.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login/login";
import StudentHomepage from "./Components/StudentHomepage/studentHomepage";
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
        <Route exact path="serviceStatus" Component={ServiceStatus} />
        <Route exact path="FAQs" Component={Faqs} />
      </Routes>
    </Router>
  );
}

export default App;
