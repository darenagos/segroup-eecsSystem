import React, { useState } from "react";
import "../../../reset.css";
import "./raiseTicket.css";
//import EC from "../../../Managers/ECRegistry"

const ticketRegistry = require("../../../Managers/TicketRegistry")
const currentUserManager = require("../../../Managers/CurrentUserManager")

// class Ticket {
//   constructor(name,userID, module, title, date, details, selfCertified){
//     this.name = name;
//     this.userID = userID
//     this.module = module;
//     this.date = date;
//     this.title = title;
//     this.details = details;
//     this.selfCertified = selfCertified;
//   }
// }
class Ticket {
  constructor(name, date, title, type, details){
    this.name = name;
    this.date = date;
    this.title = title
    this.type = type
    this.details = details
  }
}

function RaiseTicket() {
  const pressSubmit = async (event) => {
    if (title != "" & details != "" & type != ""){
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
      <h2>Raise a New Ticket</h2>
      <form>
        <label>
        <input type="text" name="title" placeholder="Title" required value={title} onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <br />
        <label>
        <input type="text" name="type" placeholder="Type" required value={type} onChange={(e) => setType(e.target.value)}/>
        </label>
        <br />
        <label>
          <input type="text" name="details" placeholder="Details" required value={details} onChange={(e) => setDetails(e.target.value)}/>
        </label>
        <br />
        <input type="submit" value="Submit" onClick={pressSubmit} />
      </form>
    </div>
  );
}

export default RaiseTicket;
