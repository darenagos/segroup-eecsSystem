import React, { useState } from "react";
import "./admin.css";

import ecRegistry from "../../../Managers/ECRegistry";
import myOutcome from "../../../Managers/ecOutcomeRegistry";

function ManageECs() {
  function updateContent(ec, index) {
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
    setCurrentEc(index);

    //console.log(ecRegistry.getEcIndex(currentEc))
  }

  function getAllEC() {
    let ecs = [];
    for (let i = 0; i < ecRegistry.getLength(); i++) {
      ecs.push(ecRegistry.getEC(i));
    }
    return ecs;
  }

  function ApproveButton() {
    if (currentEc !== "") {
      myOutcome.addEC(ecRegistry.getEC(currentEc), "Accepted");
      ecRegistry.deleteEc(currentEc);
      setCurrentEc("");
      setInfo("");
      setDetails("");
      setTitle("");
    }
  }

  function RejectButton() {
    if (currentEc !== "") {
      myOutcome.addEC(ecRegistry.getEC(currentEc), "Rejected");
      ecRegistry.deleteEc(currentEc);
      setCurrentEc("");
      setInfo("");
      setDetails("");
      setTitle("");
    }
  }

  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [details, setDetails] = useState("");
  const [currentEc, setCurrentEc] = useState("");
  const ecs = getAllEC();

  return (
    <div>
      <div className="padding-grid">
        <div className="grid-container">
          <div className="grid-row-span-2">
            <div className="box" id="ecOrTicketList">
              <a>List of ECs:</a>
              <br></br>
              {ecs.map((ec, index) => (
                <div key={index}>
                  <button
                    className="ec-title-button-side-1"
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
            <div>
              <div className="ec-information"> {info}</div>
              <div className="ec-details">{details}</div>
            </div>

            <div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              {currentEc !== "" && ecRegistry.getEC(currentEc) && (
                <button className="deleteButton" onClick={ApproveButton}>
                  Accpet EC
                </button>
              )}
              <br></br>
              <br></br>
              {currentEc !== "" &&
                ecRegistry.getEC(currentEc) &&
                ecRegistry.getEC(currentEc).selfCertified === false && (
                  <button className="deleteButton" onClick={RejectButton}>
                    Reject EC
                  </button>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageECs;
