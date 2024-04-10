import React, { useState } from "react";
import "./admin.css";

import ticketRegistry from "../../../Managers/TicketRegistry";
import closedRegistry from "../../../Managers/closedTicketsRegistry";

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
      closedRegistry.addTicket(
        ticketRegistry.getTicket(currentTicket),
        feedback
      );
      setFeedback("");
      ticketRegistry.deleteEc(currentTicket);
      setCurrentTicket("");
      setInfo("");
      setDetails("");
      setTitle("Select a Ticket");
    }
  }

  const [title, setTitle] = useState("Select a Ticket");
  const [info, setInfo] = useState("");
  const [details, setDetails] = useState("");
  const [currentTicket, setCurrentTicket] = useState("");
  const [feedback, setFeedback] = useState("");
  const allTickets = getAllTickets();

  return (
    <div>
      <div className="padding-grid-admin">
        <div className="grid-container-admin">
          <div className="grid-row-span-2">
            <div className="box-admin">
              <div className="scrollable-admin">
                <a>List of Tickets: </a>
                <br></br>
                {allTickets.map((ticket, index) => (
                  <button
                    className="ec-title-button-side-1"
                    onClick={() => updateContent(ticket, index)}
                    key={index}
                  >
                    {ticket.user.name} - {ticket.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="ec-title grid-col-span-2 box-admin">{title}</div>
          <div className="ec-content grid-col-span-2 box-admin">
            <div>
              <div className="ec-information"> {info}</div>
              <div className="ec-details">{details}</div>
            </div>
            <div>
              <p>Enter ticket feedback for student:</p>
            </div>

            {currentTicket !== "" && (
              <textarea
                type="text"
                class="ticketFeedback"
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
            )}
            {currentTicket !== "" && (
              <button className="admin-ec-button" onClick={handleDelete}>
                Close Ticket
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageTickets;
