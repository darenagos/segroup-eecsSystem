import React, { useState } from "react";

import currentUserManager from "../../../Managers/CurrentUserManager"
import closedRegistry from "../../../Managers/closedTicketsRegistry"

function ClosedTickets() { 
    function GetMyTickets() {
        const allTickets = closedRegistry.getAllTickets();
        let myTickets = [];
        for (let i = 0; i < allTickets.length; i++) {
          const { ticket } = allTickets[i];
          if (ticket && ticket.user && ticket.user.id === currentUserManager.getCurrent().id) {
            myTickets.push(allTickets[i]);
          } else if (!ticket || !ticket.user) {
            console.log(`Ticket at index ${i} does not have a user property`);
          } else {
            console.log(`Ticket user ID: ${ticket.user.id}`);
          }
        }
        return myTickets;
      }
    
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [details, setDetails] = useState("");
    const [feedback, setFeedback] = useState("")
    const myTickets = GetMyTickets();
    
    function UpdateContent(item) {
      setType(item.ticket.type);
      setTitle(item.ticket.title);
      setDetails(item.ticket.details);
      setFeedback(item.feedback);
    }

    return (
        <div>
        <div className="padding-grid">
          <div className="grid-container">
            <div className="grid-row-span-2">
              <div className="box-view-tickets">
                <a>Closed Ticket:</a>
                <br></br>
                {myTickets.map((item) => (
                  <button
                    className="ticket-title-button-side"
                    onClick={() => UpdateContent(item)}
                  >
                    {item.ticket.title} - {item.ticket.type}
                  </button>
                ))}{" "}
              </div>
            </div>
  
            <div className="ticket-title grid-col-span-2 box">{title}</div>
            <div className="ticket-content grid-col-span-2 box">
              {type}
              <br></br>
              {details}
              <br />
              {feedback}
            </div>
          </div>
        </div>
      </div>
    );
}
  
export default ClosedTickets;