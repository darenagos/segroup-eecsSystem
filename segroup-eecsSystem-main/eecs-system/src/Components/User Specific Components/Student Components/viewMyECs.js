import React, { useState } from "react";
import "../../../reset.css";
import "./viewMyECs.css";

import ecRegistry from "../../../Managers/ECRegistry"
import currentUserManager from "../../../Managers/CurrentUserManager"

function ViewMyECs() {
  function getMyEcs() {
    const allEcs = ecRegistry.getAllECs();
    let myEcs = [];
    for (let i = 0; i < allEcs.length; i++) {
      if (allEcs[i].user.id === currentUserManager.getCurrent().id) {
        myEcs.push(allEcs[i]);
      } else {
        console.log(allEcs[i].userID);
      }
    }
    return myEcs;
  }

  function updateContent(ec) {
    console.log("ec user:", ec.user);
    if (ec.selfCertified === false){
      setTitle(ec.user.name +" ("+ ec.user.id + ") : " + ec.module);}
      else{
        setTitle(ec.user.name +" ("+ ec.user.id + ") : " + ec.module + " - SELF CERTIFIED");
      }
    setInfo(ec.title + " - " + ec.date);
    setDetails(ec.details);
  }

  const [title, setTitle] = useState("Select an EC");
  const [info, setInfo] = useState("");
  const [details, setDetails] = useState();
  const myEcs = getMyEcs();

  return (
    <div>
      <div className="padding-grid">
        <div className="grid-container">
          <div className="grid-row-span-2">
            <div className="box">
              <a>List of ECs:</a>
              <br></br>
              {myEcs.map((ec) => (
                <button
                  className="ec-title-button-side"
                  onClick={() => updateContent(ec)}
                >
                  {ec.title} - {ec.module}
                </button>
              ))}{" "}
            </div>
          </div>

          <div className="ec-title grid-col-span-2 box">{title}</div>
          <div className="ec-content grid-col-span-2 box">
            {info}
            <br></br>
            {details}
            <button className="close-ec-button grid-col-span-2">
              Close EC
            </button>
          </div>
          {/* <div>fds</div> */}
        </div>
      </div>
    </div>
  );
}

export default ViewMyECs;
