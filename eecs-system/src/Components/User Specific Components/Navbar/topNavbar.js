import { Link } from "react-router-dom";
import React from 'react';
import "./nav.css"

function TopNavbar() {
    return(
      <header id = "header">
        <div id ="topnav">
          <Link to="service-status" class="topNavItem"><a>services </a></Link> 
          <Link to="faq-page"class="topNavItem">FAQs</Link>
          <Link to="/"class="topNavItem">Log Out</Link>
        </div>
      </header>
    )
}

export default TopNavbar