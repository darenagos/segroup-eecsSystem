import React, { useState } from "react";
import "../../../reset.css";
import "./raiseTicket.css";
//import EC from "../../../Managers/ECRegistry"

import ticketRegistry from "../../../Managers/TicketRegistry"
import currentUserManager from "../../../Managers/CurrentUserManager"

class Ticket {
  constructor(user, date, title, type, details){
    this.user = user
    this.date = date;
    this.title = title
    this.type = type
    this.details = details
  }
}

function RaiseTicket() {
  const pressSubmit = async (event) => {
    if (title !== "" & details !== "" & type !== ""){
      event.preventDefault();

      await ticketRegistry.addTicket(new Ticket(currentUserManager.getCurrent(),  Date(), title, type, details));
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
      
      setTitle("")
      setDetails("")
      setType("")
    }
    else{
      console.log("Not all fields filled")
    }
  }

  // const [name, setName] = useState(null);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [type, setType] = useState("");


  
  return (
    <div>
      <h2 class="ticketh2">Raise a New Ticket</h2>
      <form class="ticketform">
      <label>
        <input class="ticketinput" type="text" name="title" placeholder="Title" required value={title} onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <br />
        <label>
        <input class="ticketinput" type="text" name="type" placeholder="Type" required value={type} onChange={(e) => setType(e.target.value)}/>
        </label>
        <br />
        <label>
          <input class="ticketinput" type="text" name="details" placeholder="Details" required value={details} onChange={(e) => setDetails(e.target.value)}/>
        </label>
        <br />
        <input class="ticketsubmit" type="submit" value="Submit" onClick={pressSubmit} />
      </form>
    </div>
  );
}

export default RaiseTicket;
