import React, { useState } from "react";
import "./admin.css";

import ticketRegistry from "../../../Managers/TicketRegistry";
import closedRegistry from "../../../Managers/closedTicketsRegistry"

function ManageTickets() {
  function updateContent(ticket, index) {
    setTitle(ticket.user.name + " (" + ticket.user.id + ") : " + ticket.type);
    setInfo(ticket.title + " - " + ticket.date);
    setDetails(ticket.details);
    setCurrentTicket(index);
  }

  function getAllTickets() {
    let tickets = [];
    for (let i = 0; i < ticketRegistry.getLength(); i++) {
      tickets.push(ticketRegistry.getTicket(i));
    }
    return tickets;
  }

  function handleDelete() {
    if (currentTicket !== "") {
      closedRegistry.addTicket(ticketRegistry.getTicket(currentTicket), feedback);
      setFeedback("");
      ticketRegistry.deleteEc(currentTicket);
      setCurrentTicket("");
    }
  }


  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [details, setDetails] = useState("");
  const [currentTicket, setCurrentTicket] = useState("");
  const [feedback, setFeedback] = useState("");
  const allTickets = getAllTickets();


  return (
    <div>
      <div className="padding-grid">
        <div className="grid-container">
          <div className="grid-row-span-2">
            <div className="box">
              <a>List of Tickets: </a>
              <br></br>
              {allTickets.map((ticket, index) => (
                <button
                  className="ec-title-button-side"
                  onClick={() => updateContent(ticket, index)}
                  key={index}
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
            <form>
              <input type="text" onChange={(e) => setFeedback(e.target.value)}></input>
              <button  className="deleteButton"
                onClick= {handleDelete}
              >Close Ticket</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageTickets;
