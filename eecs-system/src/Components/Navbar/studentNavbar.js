import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

// ive called this student navbar because im not sure if admins and technicians will have the same
// links when they click the nav bar options.

function StudentNavbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/student-Homepage">Home</Link>
        </li>
        <li>
          <Link to="/serviceStatus">Service Status</Link>
        </li>
        <li>
          <Link to="/FAQs">FAQs</Link>
        </li>
      </ul>
    </nav>
  );
}

export default StudentNavbar;
