import React from "react";
import "./login.css";

// react hook -> History - holds information about the previous page you are in.
import { useNavigate } from "react-router-dom";
import { useState} from "react";


const Login = () => {

  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword]=useState('');

  const handleUsernameInputChange = (e) => {
    setUsername(e.target.value);};

  const handlePasswordInputChange = (e) => {
  setPassword(e.target.value);};

  

  const handleSubmit = (e) => {
    if (username === "student" && password === "student")
      navigate("student-Homepage")
    else if (username === "admin" && password === "admin") 
      navigate("admin-Homepage")
    else if (username === "technician" && password === "technician") 
      navigate("technician-Homepage")
    else{
      console.log("invalid");
      alert("not a valid login")
    }
  };
  

  return (
      <div className="login-container">
        <form action="" id="login">
          <div className="login-form">
            <h1>EECSHelp</h1>
            <div className="input-box">
              <h2>Username</h2>
              <input type="text" value={username} onChange={handleUsernameInputChange} placeholder="" required />
            </div>
            <div className="input-box">
              <h2>Password</h2>
              <input type="text"value={password} onChange={handlePasswordInputChange} placeholder="" required />
            </div>
            <button type="submit" onClick={() => { handleSubmit() }}>Login</button>
          </div>
        </form>
      </div>
  
  );
}

export default Login;
