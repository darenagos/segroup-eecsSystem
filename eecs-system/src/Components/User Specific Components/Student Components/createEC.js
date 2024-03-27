import React, { useState } from "react";
import "../../../reset.css";
import "./createEC.css";
//import EC from "../../../Managers/ECRegistry"

const ecRegistry = require("../../../Managers/ECRegistry")
const currentUserManager = require("../../../Managers/CurrentUserManager")

class EC {
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

function CreateEC() {
  const pressSubmit = async (event) => {
    event.preventDefault();

    await ecRegistry.addEC(new EC(name,  currentUserManager.getCurrent(), "module",title, Date(),   details, "Other"));
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    
    
  }

  const [name, setName] = useState("");
  const handleNameInputChange = (e) => {
    setName(e.target.value);
  };

  const [title, setTitle] = useState("");
  const handleTitleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const [details, setDetails] = useState("");
  const handleDetailsInputChange = (e) => { // If 
    setDetails(e.target.value);
  };

  
  return (
    <div>
      <h2>Log a New Claim</h2>
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
            onChange={handleTitleInputChange}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="details"
            placeholder="Description"
            value={details}
            onChange={handleDetailsInputChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" onClick={pressSubmit} />
      </form>
    </div>
  );
}

export default CreateEC;
