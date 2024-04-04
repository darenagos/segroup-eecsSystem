import React from "react";
import "./home.css";

import currentUserManager from "../../../Managers/CurrentUserManager";

function DisplayHomePageInformation() {
  const currentUserType = currentUserManager.getCurrent().userType;
  if (currentUserType === "student") {
    return (
      <div>
        <div className="padding-grid-home">
          <div className="grid-container-home home-box ">
            <div>
              <h2 className="home-heading">EC</h2>
              <div className="homep">
                <p>
                  {/* If your concern directly impacts your ability to meet academic
                  deadlines  */}
                  <br></br>
                  <li>Personal or Medical Emergencies</li>
                  <li>Family Crises</li>
                  <li>Other Significant Life Events</li>
                  <br></br>
                  If you're facing any of these circumstances, you can submit an
                  EC request. Provide relevant documentation and details to
                  support your request. EC requests are reviewed by academic
                  administration, who assess easch case and may grant
                  accommodations accordingly.
                </p>
              </div>
            </div>
            <div>
              <h2 className="home-heading">Ticket</h2>
              <div className="homep">
                <p>
                  <br></br>
                  <li>Course Material Access Issues</li>
                  <li>Assignment Submission Problems</li>
                  <li>Technical Service or Facility Issues</li>
                  <br></br>
                  If you're facing any of these circumstances, you can submit a
                  Ticket. Provide detailed information about the issue
                  encountered. Support staff will review your ticket and work to
                  resolve the problem promptly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (currentUserType === "admin") {
    return <a>admin info</a>;
  } else if (currentUserType === "technician") {
    return <a>technician info</a>;
  } else {
    return <a>no match</a>;
  }
}

function Home() {
  return (
    <div>
      <h2 className="welcome-heading">{`Hello, ${
        currentUserManager.getCurrent().name
      }! 👋`}</h2>
      {DisplayHomePageInformation()}
    </div>
  );
}

export default Home;
