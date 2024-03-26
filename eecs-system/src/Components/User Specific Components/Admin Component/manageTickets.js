import React, {useState} from 'react'
import "./admin.css"

const ticketRegistry = require("../../../Managers/TicketRegistry")

function ManageTickets() {

  function updateContent(ticket){
    setTitle(ticket.name + " : " + ticket.module);
    setInfo(ticket.title + " - " + ticket.date);
    setDetails(ticket.details)
  }

  function getAllTickets() {
    let tickets = []
    for (let i = 0; i < ticketRegistry.getLength(); i++) {
      tickets.push(ticketRegistry.getTicket(i))
    }
    return tickets
  }



  const [title, setTitle] = useState("Select an EC");
  const [info, setInfo] = useState("");
  const [details, setDetails] = useState();
  const tickets = getAllTickets();

  return (
    <div>
    <div id = "side">
        {tickets.map((ticket) => (<button onClick={() => updateContent(ticket)}>{ticket.name} - {ticket.title}</button>))}
      </div>
      <div id="title">
        {title}</div>
      <div id="bottom">
        {info}<br></br>{details}</div>
    </div>
  )
}

export default ManageTickets