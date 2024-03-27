import React, { useState } from "react";
import "../../../reset.css";
import "./createTicket.css";
//import EC from "../../../Managers/ECRegistry"

const ticketRegistry = require("../../../Managers/TicketRegistry")
const currentUserManager = require("../../../Managers/CurrentUserManager")

class Ticket {
  constructor(name,userID, module, title, date, selfCertified, details){
    this.name = name;
    this.userID = userID
    this.module = module;
    this.date = date;
    this.title = title;
    this.details = details;
    this.selfCertified = selfCertified;
  }
}

function RaiseTicket() {
  const pressSubmit = async (event) => {
    event.preventDefault();

    await ticketRegistry.addTicket(new Ticket(name,  currentUserManager.getCurrent(), "module",title, Date(),   details, "Other"));
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    
    
  }

  const [name, setName] = useState(null);
  const [title, setTitle] = useState(null);
  const [details, setDetails] = useState(null);
  // const handleNameInputChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleTitleInputChange = (e) => {
  //   setTitle(e.target.value);
  // };

  // const handleDetailsInputChange = (e) => {
  //   setDetails(e.target.value);
  // };

  
  return (
    <div>
      <h2>Raise a New Ticket</h2>
      <form>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="details"
            placeholder="Description"
            required
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Submit" onClick={pressSubmit} />
      </form>
    </div>
  );
}

export default RaiseTicket;
