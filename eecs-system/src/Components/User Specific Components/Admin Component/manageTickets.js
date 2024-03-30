import React, { useState } from "react";
import "./admin.css";

import ticketRegistry from "../../../Managers/TicketRegistry"

function ManageTickets() {
  function updateContent(ticket) {
    setTitle(ticket.user.name + " : " + ticket.title);
    setInfo(ticket.type + " - " + ticket.date);
    setDetails(ticket.details);
  }

  function getAllTickets() {
    let tickets = [];
    for (let i = 0; i < ticketRegistry.getLength(); i++) {
      tickets.push(ticketRegistry.getTicket(i));
    }
    return tickets;
  }

  const [title, setTitle] = useState("Select an EC");
  const [info, setInfo] = useState("");
  const [details, setDetails] = useState();
  const tickets = getAllTickets();

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
            {details}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageTickets;
