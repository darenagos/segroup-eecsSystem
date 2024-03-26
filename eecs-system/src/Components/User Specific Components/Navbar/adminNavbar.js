import React from "react";
import "./nav.css"
import { Link, Outlet } from "react-router-dom";


// ive called this student navbar because im not sure if admins and technicians will have the same
// links when they click the nav bar options.

function AdminNavbar() {
  return (
    <div>
      <div id="left">
        <nav>
          <ul>
            <li><Link to="manage-ECs"><button>Manage ECs</button> </Link></li>
            <li><Link to="manage-tickets"><button>Manage Tickets</button></Link></li>    
          </ul>
        </nav>
      </div>

      <div  id="center">
        <Outlet/>
      </div>
    </div>
    )
}

export default AdminNavbar;
