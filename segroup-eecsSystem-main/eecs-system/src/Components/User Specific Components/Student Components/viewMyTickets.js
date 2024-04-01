import React, { useState } from "react";
import "../../../reset.css";
import "./viewMyTickets.css";
import ticketRegistry from "../../../Managers/TicketRegistry"
import currentUserManager from"../../../Managers/CurrentUserManager"

function ViewMyTickets() {
  
  function GetMyTickets() {
    const allTickets = ticketRegistry.getAllTickets();
    let myTickets = [];
    for (let i = 0; i < allTickets.length; i++) {
      if (allTickets[i].user.id === currentUserManager.getCurrent().id) {
          myTickets.push(allTickets[i]);}
      else {
        console.log(allTickets[i].userID);
      }
    }
    return myTickets;
  }

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [details, setDetails] = useState("");
  const myTickets = GetMyTickets();

  function UpdateContent(ticket) { 
    setType(ticket.type)
    setTitle(ticket.title)
    setDetails(ticket.details)    
  }

  return (
    <div>
      <div className="padding-grid">
        <div className="grid-container">
          <div className="grid-row-span-2">
            <div className="box">
              <a>List of Tickets:</a>
              <br></br>
              {myTickets.map((ticket) => (
                <button
                  className="ticket-title-button-side"
                  onClick={() => UpdateContent(ticket)}
                >
                  {ticket.title} - {ticket.type}
                </button>
              ))}{" "}
            </div>
          </div>

          <div className="ticket-title grid-col-span-2 box">{title}</div>
          <div className="ticket-content grid-col-span-2 box">
            {type}
            <br></br>
            {details}
            <button className="close-ticket-button grid-col-span-2">
              Close Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewMyTickets
