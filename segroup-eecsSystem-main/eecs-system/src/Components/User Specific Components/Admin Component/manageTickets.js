import React, { useState } from "react";
import "./admin.css";

import ticketRegistry from "../../../Managers/TicketRegistry";

function ManageTickets() {
  function updateContent(ticket) {
    setTitle(ticket.user.name + " (" + ticket.user.id + ") : " + ticket.type);
    setInfo(ticket.title + " - " + ticket.date);
    setDetails(ticket.details);
  }

  function getAllTickets() {
    let tickets = [];
    for (let i = 0; i < ticketRegistry.getLength(); i++) {
      tickets.push(ticketRegistry.getTicket(i));
    }
    return tickets;
  }

  function handleDelete(){
    
    let newCurrent
    const currentIndex = ticketRegistry.getIndex(currentTicket)
    console.log(currentIndex, " - ", ticketRegistry.getLength())
    if (currentIndex == 0 && ticketRegistry.getLength()>1){
      console.log("1")
      newCurrent = ticketRegistry.getTicket(currentIndex+1)
      
    }
    else if(currentIndex === ticketRegistry.getLength()-1){
      console.log("delete final")
      newCurrent = ticketRegistry.getTicket(currentIndex-1)
    }
    else{
      console.log("other")
      newCurrent = ticketRegistry.getTicket(ticketRegistry.getIndex(currentTicket) +1)
    }
    ticketRegistry.deleteEc(currentTicket)
    updateContent(newCurrent)
  }


  const ticket0 = ticketRegistry.getTicket(1)
  const [title, setTitle] = useState(ticket0.user.name + " (" + ticket0.user.id + ") : " + ticket0.module);
  const [info, setInfo] = useState(ticket0.title + " - " + ticket0.date);
  const [details, setDetails] = useState(ticket0.details);
  const [currentTicket, setCurrentTicket] = useState(ticket0);
  const tickets = getAllTickets();
  console.log(tickets)


  return (
    <div>
      <div className="padding-grid">
        <div className="grid-container">
          <div className="grid-row-span-2">
            <div className="box">
              <a>List of Tickets: </a>
              <br></br>
              {tickets.map((ticket) => (
                <button
                  className="ec-title-button-side"
                  onClick={() => updateContent(ticket)}
                >
                  {ticket.name} - {ticket.title}
                </button>
              ))}
            </div>
          </div>

          <div className="ec-title grid-col-span-2 box">{title}</div>
          <div className="ec-content grid-col-span-2 box">
            {info}
            <br></br>
            Ticket Request Details: <br></br>
            {details}
            <input type="text" ></input>
            <button  className="deleteButton"
              onClick= {handleDelete}
            >Delete Ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageTickets;
