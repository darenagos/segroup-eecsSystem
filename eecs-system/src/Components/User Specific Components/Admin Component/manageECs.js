import React, { useState } from "react";
import "./admin.css";

const ecRegistry = require("../../../Managers/ECRegistry");

function ManageECs() {
  function updateContent(ec) {
    console.log(ec.selfCertified);
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
    setInfo(ec.title + " - " + ec.date);
    setDetails(ec.details);
    console.log(ecRegistry.getEC(8));
  }

  function getAllEC() {
    let ecs = [];
    for (let i = 0; i < ecRegistry.getLength(); i++) {
      ecs.push(ecRegistry.getEC(i));
    }
    return ecs;
  }

  const [title, setTitle] = useState("Select an EC");
  const [info, setInfo] = useState("");
  const [details, setDetails] = useState();
  const ecs = getAllEC();

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
            {details}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageECs;
