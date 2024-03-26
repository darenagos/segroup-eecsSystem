import React, {useState, useEffect} from 'react'
import "./admin.css"
import "../../../data/ec.json"




function ManageECs() {


  const [title,  setTitle] = useState(0);
  const [info,  setInfo] = useState(0);

  
 
  function updateContent(title, info){
    setTitle(title);
    setInfo(info);
    
  }
  

  return (
    <div>
      <div id = "side">
        
        <button  onClick={()=>updateContent("titeadsgle", "infadfo")
          }>Change cont. </button>
        <button> EC 1 </button>
        <button> EC 2 </button>
        <button> EC 3 </button>
        <button> EC 4 </button>
    
      </div>
      <div id = "title">{title}</div>
      <div id = "bottom">{info}</div>
      <button  >change </button>
    </div>
  )
}



export default ManageECs