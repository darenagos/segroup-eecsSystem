import React, { useState } from "react";
import "./admin.css";

import ticketRegistry from "../../../Managers/TicketRegistry";
import closedRegistry from "../../../Managers/closedTicketsRegistry"

function ManageTickets() {
  function updateContent(ticket) {
    setTitle(ticket.user.name + " (" + ticket.user.id + ") : " + ticket.type);
    setInfo(ticket.title + " - " + ticket.date);
    setDetails(ticket.details);
    setCurrentTicket(ticket);
  }

  function getAllTickets() {
    let tickets = [];
    for (let i = 0; i < ticketRegistry.getLength(); i++) {
      tickets.push(ticketRegistry.getTicket(i));
    }
    return tickets;
  }

  function handleDelete() {
    closedRegistry.addTicket(currentTicket, feedback);
    setFeedback("");
  
    let prevIndex = -1;
    let nextIndex = -1;
    const currentIndex = ticketRegistry.getIndex(currentTicket);
  
    if (currentIndex > 0) {
      prevIndex = currentIndex - 1;
    }
  
    if (currentIndex < ticketRegistry.getLength() - 1) {
      nextIndex = currentIndex + 1;
    }
  
    ticketRegistry.deleteEc(currentTicket);
  
    let newCurrent;
    if (nextIndex !== -1) {
      newCurrent = ticketRegistry.getTicket(nextIndex);
    } else if (prevIndex !== -1) {
      newCurrent = ticketRegistry.getTicket(prevIndex);
    } else {
      // No tickets remaining
      newCurrent = null;
    }
  
    updateContent(newCurrent);
  }


  const SelectedTicket = ticketRegistry.getTicket(1)
  const [title, setTitle] = useState(SelectedTicket.user.name + " (" + SelectedTicket.user.id + ") : " + SelectedTicket.module);
  const [info, setInfo] = useState(SelectedTicket.title + " - " + SelectedTicket.date);
  const [details, setDetails] = useState(SelectedTicket.details);
  const [currentTicket, setCurrentTicket] = useState(SelectedTicket);
  const [feedback, setFeedback] = useState("");
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
                  {ticket.user.name} - {ticket.title}
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
            <input type="text" onChange={(e) => setFeedback(e.target.value)}></input>
            <button  className="deleteButton"
              onClick= {handleDelete}
            >Close Ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageTickets;
