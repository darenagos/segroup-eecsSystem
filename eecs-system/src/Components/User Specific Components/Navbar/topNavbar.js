import { Link } from "react-router-dom";
import React from "react";
import "./nav.css";

function TopNavbar() {
  return (
    <header id="header">
      <div id="topnav">
        <a className="move-left">EECSHelp</a>
        <Link to="service-status" className="topNavItem">
          <a>services </a>
        </Link>
        <Link to="faq-page" className="topNavItem">
          FAQs
        </Link>
        <Link to="/" className="topNavItem">
          Log Out
        </Link>
      </div>
    </header>
  );
}

export default TopNavbar;
