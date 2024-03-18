import React from "react";
import "./navbar.css";

// ive called this student navbar because im not sure if admins and technicians will have the same
// links when they click the nav bar options.

function Navbar() {
  return (
    <nav id="main">
      <div id="home">
        EECSHelp
      </div>
      <div id="service">
        Service Status
      </div>
      <div id="faq">
        FAQs
      </div>
    </nav>
  );
}

export default Navbar;
