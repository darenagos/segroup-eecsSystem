import React, {useState} from 'react'


const ecRegistry = require("../../../Managers/ECRegistry")
const currentUserManager = require("../../../Managers/CurrentUserManager")

function ViewMyECs() {
  

  function getMyEcs(){
    const allEcs = ecRegistry.getAllECs();
    console.log("Current User id:", currentUserManager.getCurrent().id)
    console.log(allEcs)
    let myEcs = []
    console.log("starting loop")
    for (let i=0; i<allEcs.length; i++){
      console.log(i)
      if (allEcs[i].user.id === currentUserManager.getCurrent().id){
        myEcs.push(allEcs[i])
      }
      else
      {
        console.log(allEcs[i].userID)
      }
    }
    console.log("end loop")
    console.log(myEcs)
    return myEcs; 
  }

  function updateContent(ec) {
    console.log("ec user:" , ec.user)
    setTitle(ec.user.id + " : " + ec.module);
    setInfo(ec.title + " - " + ec.date);
    setDetails(ec.details)  
  }

  const [title, setTitle] = useState("Select an EC");
  const [info, setInfo] = useState("");
  const [details, setDetails] = useState();
  const myEcs = getMyEcs();

  return (
    <div>
      <div id="side">
    {myEcs.map((ec) => (<button onClick={() => updateContent(ec)}>{ec.user.name} - {ec.title}</button>))} </div>
    <div id="title">
        {title}</div>
      <div id="bottom">
        {info}<br></br>{details}<button>Close EC</button></div>
    </div>
  )
}

export default ViewMyECs