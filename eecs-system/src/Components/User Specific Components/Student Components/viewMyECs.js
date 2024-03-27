import React, { useState } from "react";
import "../../../reset.css";
import "./viewMyECs.css";

const ecRegistry = require("../../../Managers/ECRegistry");
const currentUserManager = require("../../../Managers/CurrentUserManager");

function ViewMyECs() {
  function getMyEcs() {
    const allEcs = ecRegistry.getAllECs();
    console.log("Current User id:", currentUserManager.getCurrent().id);
    console.log(allEcs);
    let myEcs = [];
    console.log("starting loop");
    for (let i = 0; i < allEcs.length; i++) {
      console.log(i);
      if (allEcs[i].userID === currentUserManager.getCurrent().id) {
        myEcs.push(allEcs[i]);
      } else {
        console.log(allEcs[i].userID);
      }
    }
    console.log("end loop");
    console.log(myEcs);
    return myEcs;
  }

  function updateContent(ec) {
    setTitle(ec.name + " : " + ec.module);
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
                  {ec.name} - {ec.title}
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
