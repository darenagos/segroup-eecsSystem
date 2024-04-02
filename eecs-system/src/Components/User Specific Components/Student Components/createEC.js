import React, { useState } from "react";
import "../../../reset.css";
import "./raiseTicket.css";
import "./createEC.css";

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
      await ecRegistry.addEC(new EC(currentUserManager.getCurrent(),(otherModule!==""?otherModule:module) ,title, Date(), details, selfCertified));
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
  const [otherModule, setOtherModule] = useState("")
  const modules = [
    "Algorithms and Data Structures",
    "Databse Systems",
    "Graphical User Interfaces",
    "Internet Protocol and Applications",
    "Operating Systems",
    "Probability and Matricies",
    "Software Engineering",
    "Software Engineering Project",
    "Other"
];


  
  return (
    <div>
      <h2 class="ticketh2"><br></br>Log a New Claim</h2>
      <form class="ticketform">
      <label>
          Module:
          <select
            className="ticketlist"
            value={module}
            onChange={(e) => {setModule(e.target.value); setOtherModule("")}}
            required>
            <option value="">Select a module</option>
            {modules.map((module) => (
              <option key={module} value={module}>{module}</option>
            ))}
          </select>
        </label>
        {module === "Other" && (
          <label>
            <input
              className="ticketinput"
              type="text"
              name="otherModule"
              placeholder="Enter other module"
              value={otherModule}
              onChange={(e) => {setOtherModule(e.target.value)}}
            />
          </label>
        )}
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
