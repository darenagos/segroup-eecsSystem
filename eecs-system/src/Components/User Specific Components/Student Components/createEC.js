import React, {useState} from 'react'
//import EC from "../../../Managers/ECRegistry"

const ecRegistry = require("../../../Managers/ECRegistry")

class EC {
  constructor(name, module, title, date, selfCertified, details){
    this.name = name;
    this.module = module;
    this.date = date;
    this.title = title;
    this.details = details;
    this.selfCertified = selfCertified;
  }
}

function CreateEC() {

  const pressSubmit = async (event) => {
    event.preventDefault()
   
    await ecRegistry.addEC(new EC(name,new Date(),title,details,"Other"))
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    
  }

  
  const [name, setName] = useState("");
  const handleNameInputChange = (e) => {
    setName(e.target.value);
  }

  const [title, setTitle] = useState("");
  const handleTitleInputChange = (e) => {
    setTitle(e.target.value);
  }

  const [details, setDetails] = useState("");
  const handleDetailsInputChange = (e) => {
    setDetails(e.target.value);
  }




  
  return (
    <div>
      <form >
        <label>Name:
        <input type="text" name="name" value={name} onChange={handleNameInputChange}/></label><br/>
        <label>Title:
        <input type="text" name="title" value={title} onChange={handleTitleInputChange} /></label><br/>
        <label>Details:
        <input type="text" name="details" value={details} onChange={handleDetailsInputChange}/></label><br/>
        <input type="submit" value="Submit" onClick={pressSubmit} />
      

      </form>
    </div>
  )
}

export default CreateEC