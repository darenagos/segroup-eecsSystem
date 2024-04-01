import React, { useState } from "react";
import "../../../reset.css";
import "./createEC.css";
import "./raiseTicket.css";
//import EC from "../../../Managers/ECRegistry"

import ecRegistry from "../../../Managers/ECRegistry"
import currentUserManager from"../../../Managers/CurrentUserManager"

class EC {
  constructor(user, module, title, date, details, selfCertified){
    this.user = user;
    this.module = module;
    this.date = date;
    this.title = title;
    this.details = details;
    this.selfCertified = selfCertified;
  }
}

function CreateEC() {
  const pressSubmit = async (event) => {
    if (title !== "" & module !== "" & (details !== "" | selfCertified)){
      event.preventDefault();
      await ecRegistry.addEC(new EC(currentUserManager.getCurrent(),module ,title, Date(), details, selfCertified));
      //await console.log(ecRegistry.getEC(-1).details)
      // await setSelfCertified(false)
      
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
      setModule("")
      setTitle("")
      setDetails("")
      setSelfCertified(false)
    }
  }

  const [module, setModule] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [selfCertified, setSelfCertified] = useState(false);



  
  return (
    <div>
      <h2 class="ticketh2"><br></br>Log a New Claim</h2>
      <form class="ticketform">
      <label>
          <input
            class="ticketinput"
            type="text"
            name="module"
            placeholder="Module"
            required
            value={module}
            onChange={(e) => setModule(e.target.value)}
          />
        </label>
        <label>
          <input
            class="ticketinput"
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
            class="ticketinput"
            type="text"
            name="details"
            placeholder="Description"
            {...selfCertified ? null : { required: true }}
            value={details}
            onChange={(e)=>setDetails(e.target.value)}
          />
        </label>
        <br />
        <label>Self Certified?
          <input
            class = "self"
            type = "checkbox"
            name = "selfCertified"
            value = {selfCertified}
            checked={selfCertified}
            onChange={(e)=>setSelfCertified(!selfCertified)}
          />
        </label>
        <input type="submit" class="ticketsubmit" value="Submit" onClick={pressSubmit} />
      </form>
    </div>
  );
}

export default CreateEC;
