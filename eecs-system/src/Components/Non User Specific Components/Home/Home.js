import React from "react";
import "./home.css";

import currentUserManager from "../../../Managers/CurrentUserManager"

function DisplayHomePageInformation() {
  const currentUserType = currentUserManager.getCurrent().userType;
  if (currentUserType === "student") {
    return (
      <div>
        <div className="padding-grid-home">
          <div className="grid-container-home homeBox ">
            <div>
              <h2 className="home-ec-heading">EC</h2>
            </div>
            <div>
              <h2 className="home-ticket-heading">Ticket</h2>
            </div>
            <div>
              <p>
                If your concern directly impacts your ability to meet academic
                deadlines, such as unforeseen personal or medical emergencies,
                family crises, or other significant life events affecting your
                coursework, it likely falls under the EC category
              </p>
            </div>
            <div>
              <p>
                If you encounter difficulties with accessing course materials,
                submitting assignments, or experiencing technical problems
                within the institution's services or facilities, your concern
                falls under the purview of a Ticket.
              </p>
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
