import { Link } from "react-router-dom";
import React from 'react';

function TopNavbar() {
    return(
        <div id ="topnav">
        
          <Link to="service-status" class="topNavItem">services </Link> 
          <Link to="faq-page"class="topNavItem">FAQs</Link>
          <Link to="/"class="topNavItem">Log Out</Link>
        
        
        </div>
    )
}

export default TopNavbar