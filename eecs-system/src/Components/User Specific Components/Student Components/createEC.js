import React, { useState } from "react";
import "../../../reset.css";
import "./createEC.css";
//import EC from "../../../Managers/ECRegistry"

const ecRegistry = require("../../../Managers/ECRegistry")
const currentUserManager = require("../../../Managers/CurrentUserManager")

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
    event.preventDefault();
    await ecRegistry.addEC(new EC(currentUserManager.getCurrent(),module ,title, Date(), details, selfCertified));
    //await console.log(ecRegistry.getEC(-1).details)
    await setSelfCertified(false)
    
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  }

  const [module, setModule] = useState("");
  const handleNameInputChange = (e) => {
    setModule(e.target.value);
  };

  const [title, setTitle] = useState("");
  const handleTitleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const [details, setDetails] = useState("");
  const handleDetailsInputChange = (e) => { // If 
    setDetails(e.target.value);
  };

  const [selfCertified, setSelfCertified] = useState(false);
  const handleSelfCertifiedInputChange = (e) => { // If 
    setSelfCertified(!selfCertified);
  };


  
  return (
    <div>
      <h2>Log a New Claim</h2>
      <form>
        <label>
          <input
            type="text"
            name="module"
            placeholder="Module"
            required
            value={module}
            onChange={(e) => setModule(e.target.value)}
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
        <label>Self Certified?
          <input
            type = "checkbox"
            name = "selfCertified"
            value = {selfCertified}
            checked={selfCertified}
            onChange={handleSelfCertifiedInputChange}
          />
        </label>
        <input type="submit" value="Submit" onClick={pressSubmit} />
      </form>
    </div>
  );
}

export default CreateEC;
