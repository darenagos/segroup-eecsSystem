import React, { useState } from 'react'
import myServiceRegistry, { Service } from '../../../Managers/serviceRegistry'
import "./technician.css"

function UpdateServices() {

  function updateContent(index) {
    const service = myServiceRegistry.getService(index)
    setCurrentServiceIndex(index)
    setName(service.name);
    setDetails(service.details);
    setStatus(service.status)
  }

  function deleteService(){
    const originalIndex = currentServiceIndex
    if (currentServiceIndex ===0 && myServiceRegistry.data.length > 1){
      updateContent(1)
    }
    else if (myServiceRegistry.data.length === 1){
      alert("Can't Delete final Service")
    }
    else{
      updateContent(originalIndex -1)
    }
    myServiceRegistry.deleteService(originalIndex)
  }

  function submitService(){
    myServiceRegistry.setService(currentServiceIndex, new Service(name,details,status))
    updateContent(currentServiceIndex)
  }

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
  const firstService = myServiceRegistry.getService(0)
  const [name, setName] = useState(firstService.name);
  const [details, setDetails] = useState(firstService.details);
  const [status, setStatus] = useState(firstService.service)

  

  const services = myServiceRegistry.getAllServices()
  console.log(services)
  return (
    <div>
      <div className="padding-grid">
        <div className="grid-container">
          <div className="grid-row-span-2">
            <div className="box" id = "ecList">
              {services.map((service, index) => (
                <div key = {index}>
                <button 
                  className="ec-title-button-side"
                  onClick={() => updateContent(index)}
                >
                  {service.name}
                </button>

                </div>
              ))}
            </div>
          </div>

          <div className="ec-title grid-col-span-2 box">{name}</div>
          <div className="ec-content grid-col-span-2 box">
          <div>
            <input type="text" defaultValue={name} value={name} onChange={(e) => setName(e.target.value)}></input><br></br>
            <input type="text" defaultValue={details} value={details} onChange={(e) => setDetails(e.target.value)}></input><br></br>
            <label>Full<   input type="radio" checked={status === "full"}   defaultChecked={status === "full"} onChange={() => setStatus("full")} ></input></label><br></br>
            <label>Partial<input type="radio" checked={status === "partial"}defaultChecked={status === "partial"} onChange={() => setStatus("partial")}></input></label><br></br>
            <label>None<   input type="radio" checked={status === "none"}   defaultChecked={status === "none"} onChange={() => setStatus("none")}></input></label>
            </div>
            <div>
            <button
              onClick= {submitService}
            >Submit changes</button>
            <button
              onClick= {deleteService}
            >Delete Service</button>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default UpdateServices