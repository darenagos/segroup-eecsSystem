import React from "react";
import { Link, Outlet } from "react-router-dom";

// ive called this student navbar because im not sure if admins and technicians will have the same
// links when they click the nav bar options.

function StudentNavbar() {
 
  return (
    <div>
      <div id="left">
        <nav>
          <ul>
            <li><Link to="create-EC"><button>createEC</button> </Link></li>
            <li><Link to="view-my-ECs"><button>View My ECs</button></Link></li>
            <li><Link to="raise-ticket"><button>Raise a ticket</button> </Link></li>
            <li><Link to="view-my-tickets"><button>View My Tickets</button></Link></li>
          </ul>
        </nav>
      </div>
      
      <div>
        <Outlet/>
      </div>

    </div>
  );
}

export default StudentNavbar;
