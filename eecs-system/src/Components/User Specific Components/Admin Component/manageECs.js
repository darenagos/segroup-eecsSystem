import React, { useState } from "react";
import "./admin.css";

import  ecRegistry  from "../../../Managers/ECRegistry";

function ManageECs() {
  function updateContent(ec, index) {
    console.log(index)
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );

    if (ec.selfCertified === false) {
      setTitle(ec.user.name + " (" + ec.user.id + ") : " + ec.module);
    } else {
      setTitle(
        ec.user.name +
          " (" +
          ec.user.id +
          ") : " +
          ec.module +
          " - SELF CERTIFIED"
      );
    }
    setInfo(ec.title + " - "  + ec.date);
    setDetails(ec.details);
    setCurrentEc(index)

    //console.log(ecRegistry.getEcIndex(currentEc))
  }

  function getAllEC() {
    let ecs = [];
    for (let i = 0; i < ecRegistry.getLength(); i++) {
      ecs.push(ecRegistry.getEC(i));
    }
    return ecs;
  }

  function handleDelete(){
    
    let newCurrent
    //console.log(currentEc, " - ", ecRegistry.getLength())
    if (currentEc == 0 && ecRegistry.getLength()>1){
      console.log("1st in array")
      newCurrent = 1
      console.log("new", newCurrent, "old", currentEc)
      setCurrentEc(newCurrent)
      updateContent(ecRegistry.getEC(newCurrent), newCurrent)
      ecRegistry.deleteEc(currentEc)
    }
    else if(ecRegistry.getLength() === 1){
      alert("Can't delete final EC") 
    }
    else{
      console.log("other")
      newCurrent = currentEc -1
      setCurrentEc(newCurrent)
      updateContent(ecRegistry.getEC(newCurrent), newCurrent)
      ecRegistry.deleteEc(currentEc)
    }
  }

  const ec0 = ecRegistry.getEC(0)
  const [title, setTitle] = useState(ec0.user.name + " (" + ec0.user.id + ") : " + ec0.module);
  const [info, setInfo] = useState(ec0.title + " - "  + ec0.date);
  const [details, setDetails] = useState(ec0.details);
  const [currentEc, setCurrentEc] = useState(0)
  const ecs = getAllEC();
  //console.log(ecs)

  

  return (
    <div>
      <div className="padding-grid">
        <div className="grid-container">
          <div className="grid-row-span-2">
            <div className="box" id = "ecOrTicketList">
              <a>List of ECs:</a>
              <br></br>
              {ecs.map((ec, index) => (
                <div key = {index}>
                <button 
                  className="ec-title-button-side"
                  onClick={() => updateContent(ec, index)}
                >
                  {ec.user.name} - {ec.title}
                </button>
                </div>
              ))}{" "}
            </div>
          </div>

          <div className="ec-title grid-col-span-2 box">{title}</div>
          <div className="ec-content grid-col-span-2 box">
            {info}
            <br></br>
            Details<br></br>
            {details}
            
            <button className="deleteButton"
              onClick= {handleDelete}
            >Delete EC</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageECs;
