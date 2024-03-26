import React, {useState} from 'react'
import "./admin.css"

const ecRegistry = require('../../../Managers/ECRegistry');

function ManageECs() {

  function updateContent(ec){
    setTitle(ec.name + " : " + ec.module);
    setInfo(ec.title + " - "+ ec.date);
    setDetails(ec.details)
    console.log(ecRegistry.getEC(0))
  }

  function getAllEC(){
    let ecs = []
    for (let i=0; i< ecRegistry.getLength(); i++){
      ecs.push(ecRegistry.getEC(i))
    }
    return ecs
  }


  const [title,  setTitle] = useState("Select an EC");
  const [info,  setInfo] = useState("");
  const [details, setDetails] = useState();
  const ecs = getAllEC();
  
  return (
    <div>
      <div id = "side">
        {ecs.map((ec) =>( <button onClick={()=>updateContent(ec)}>{ec.name} - {ec.title}</button>))} </div>
      <div id = "title">
        {title}</div>
      <div id = "bottom">
        {info}<br></br>{details}<button>Close EC</button></div>
    </div>
  )
}



export default ManageECs