import React, { useState } from "react";
import "./admin.css";

import  ecRegistry  from "../../../Managers/ECRegistry";

function ManageECs() {
  function updateContent(ec) {

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
    setCurrentEc(ec)
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
    const currentIndex = ecRegistry.getEcIndex(currentEc)
    console.log(currentIndex, " - ", ecRegistry.getLength())
    if (currentIndex == 0 && ecRegistry.getLength()>1){
      console.log("1")
      newCurrent = ecRegistry.getEC(currentIndex+1)
      
    }
    else if(currentIndex === ecRegistry.getLength()-1){
      console.log("delete final")
      newCurrent = ecRegistry.getEC(currentIndex-1)
    }
    else{
      console.log("other")
      newCurrent = ecRegistry.getEC(ecRegistry.getEcIndex(currentEc) +1)
    }
    ecRegistry.deleteEc(currentEc)
    setCurrentEc(newCurrent)
    updateContent(newCurrent)
  }

  const ec0 = ecRegistry.getEC(1)
  const [title, setTitle] = useState(ec0.user.name + " (" + ec0.user.id + ") : " + ec0.module);
  const [info, setInfo] = useState(ec0.title + " - "  + ec0.date);
  const [details, setDetails] = useState(ec0.details);
  const [currentEc, setCurrentEc] = useState(ec0)
  const ecs = getAllEC();
  console.log(ecs)

  

  return (
    <div>
      <div className="padding-grid">
        <div className="grid-container">
          <div className="grid-row-span-2">
            <div className="box">
              <a>List of ECs:</a>
              <br></br>
              {ecs.map((ec) => (
                <button
                  className="ec-title-button-side"
                  onClick={() => updateContent(ec)}
                >
                  {ec.user.name} - {ec.title}
                </button>
              ))}{" "}
            </div>
          </div>

          <div className="ec-title grid-col-span-2 box">{title}</div>
          <div className="ec-content grid-col-span-2 box">
            {info}
            <br></br>
            Details<br></br>
            {details}
            <input type="text" ></input>
            <button
              onClick= {handleDelete}
            >Delete EC</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageECs;
