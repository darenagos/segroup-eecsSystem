import React, {useState, useEffect} from 'react'
import "./admin.css"
import "../../../data/ec.json"

class EC {
  constructor(name, module, title, date, details){
    this.name = name;
    this.module = module;
    this.date = date;
    this.title = title
    this.details = details
  }
}




function ManageECs() {


  const [title,  setTitle] = useState("Select an EC");
  const [info,  setInfo] = useState("");
  const [details, setDetails] = useState();
  

  const ec1 = new EC ("Luke", "Software Engineering", "PC Broke", "Tues 26th March","agadgvdafgaerderbd")
  const ec2 = new EC ("Mohammed", "Software Engineering", "Github Broke", "Fri 12th March","rhsrjh  elkjhf ali")
  const ec3 = new EC ("Darena", "Software Engineering", "Train late", "Sat 45th Arpil","afdshaefgvbewzrsg4a'aerderbd")
  const ec4 = new EC ("Saad", "Software Engineering", "I hate SE", "Fri 12345th Dec","ro8h0awe fbui; aewj ")
  const ec5 = new EC ("Isaac", "Software Engineering", "Mustafa is lit af", "Fri 000th March","rhsrjh  elkjhf ali")
  const ec6 = new EC ("Finn", "Software Engineering", "Join Ai Soc", "Wed 0.01th Arpil","aadsgvbewzrsg4a'aerderbd")
  const ec7 = new EC ("Yousuf", "Software Engineering", "Yeet", "Mon -4346th Dec","254y bai; aewj ")

  
 
  function updateContent(ec){
    setTitle(ec.name + " : " + ec. module);
    setInfo(ec.title + " - "+ ec.date);
    setDetails(ec.details)
    console.log("update")
  }
  

  return (
    <div>
      <div id = "side">
        
        <button  onClick={()=>updateContent(ec1)}>{ec1.name} - {ec1.title}</button>
        <button  onClick={()=>updateContent(ec2)}>{ec2.name} - {ec2.title}</button>
        <button  onClick={()=>updateContent(ec3)}>{ec3.name} - {ec3.title}</button>
        <button  onClick={()=>updateContent(ec4)}>{ec4.name} - {ec4.title}</button>
        <button  onClick={()=>updateContent(ec5)}>{ec5.name} - {ec5.title}</button>
        <button  onClick={()=>updateContent(ec6)}>{ec6.name} - {ec6.title}</button>
        <button  onClick={()=>updateContent(ec7)}>{ec7.name} - {ec7.title}</button>
        
    
      </div>
      <div id = "title">{title}</div>
      <div id = "bottom">
        {info}<br></br>{details}<button>Close EC</button>
      </div>
     
    </div>
  )
}



export default ManageECs