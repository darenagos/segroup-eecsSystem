import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import currentUserManager from "./../../../Managers/CurrentUserManager";
import userRegistry from "./../../../Managers/UserRegistry";

const Login = () => {
 let navigate = useNavigate();
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [oldPassword, setOldPassword] = useState("");
 const [newPassword, setNewPassword] = useState("");
 const [confirmNewPassword, setConfirmNewPassword] = useState("");
 const [error, setError] = useState("");
 const [showErrorPopup, setShowErrorPopup] = useState(false);

 const showForm = () => {
  document.getElementById("change-password").classList.toggle('hidden');
}

 const handleUsernameInputChange = (e) => {
  setUsername(e.target.value);
};

 const handlePasswordInputChange = (e) => {
  setPassword(e.target.value);
};

 const handleOldPasswordInputChange = (e) => {
  setOldPassword(e.target.value);
};

 const handleNewPasswordInputChange = (e) => {
  setNewPassword(e.target.value);
};

 const handleConfirmNewPasswordInputChange = (e) => {
  setConfirmNewPassword(e.target.value);
};
const validateUser = async (username, password) => {
  const user = userRegistry.findUserByUsername(username);
  if (user && user.password === password) {
    navigateUser(user);
  } else {
    setError("Incorrect Password.");
    setShowErrorPopup(true);
  }
};

 const changePassword = async () => {
  const user = userRegistry.findUserByUsername(username);
  if (user && user.password === oldPassword) {
     if (newPassword === confirmNewPassword) {
       user.password = newPassword;
       setError("Password changed successfully.");
       setShowErrorPopup(true);
     } else {
       setError("New password and confirmation do not match.");
       setShowErrorPopup(true);
     }
  } else {
     setError("Incorrect old password or username.");
     setShowErrorPopup(true);
  }
 };
 

 const navigateUser = async (user) => {
    await currentUserManager.setUser(user);
    await navigate(`${user.userType}/home`);
 };

 const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.id === "login") {
      await validateUser(username, password);
    } else if (e.target.id === "change-password") {
      await changePassword();
    }
 };

 return (
    <div className="background-login">
      <div className="grid-login-container">
        <form action="" id="login" onSubmit={handleSubmit}>
          <div className="login-form">
            <h1>EECSHelp</h1>
            <div className="input-box">
              <h2>Username</h2>
              <input
                className="input-box"
                type="text"
                value={username}
                onChange={handleUsernameInputChange}
                placeholder=""
                required
              />
            </div>
            <div className="input-box">
              <h2>Password</h2>
              <input
                className="input-box"
                type="password"
                value={password}
                onChange={handlePasswordInputChange}
                placeholder=""
                required
              />
            </div>
            <button className="button" type="submit">
              Login
            </button>
          </div>
        </form>
        {showErrorPopup && (
          <div className="error-popup">
            <p>{error}</p>
            <button className="close" onClick={() => setShowErrorPopup(false)}>
              Close
            </button>
          </div>
        )}
        <button className="button" type="button" onClick={showForm}>Change Password</button>
        <form action="" id="change-password"  class="hidden" onSubmit={handleSubmit}>
          <div className="change-password-form">
            <h2>Change Password</h2>
            <div className="input-box">
              <h2>Username</h2>
              <input
                  className="input-box"
                  type="text"
                  value={username}
                  onChange={handleUsernameInputChange}
                  placeholder="Enter your username"
                  required
              />
            </div>
            <div className="input-box">
              <h2>Old Password</h2>
              <input
                className="input-box"
                type="password"
                value={oldPassword}
                onChange={handleOldPasswordInputChange}
                placeholder="Enter your old password"
                required
              />
            </div>
            <div className="input-box">
              <h2>New Password</h2>
              <input
                className="input-box"
                type="password"
                value={newPassword}
                onChange={handleNewPasswordInputChange}
                placeholder="Enter your new password"
                required
              />
            </div>
            <div className="input-box">
              <h2>Confirm New Password</h2>
              <input
                className="input-box"
                type="password"
                value={confirmNewPassword}
                onChange={handleConfirmNewPasswordInputChange}
                placeholder="Confirm your new password"
                required
              />
            </div>
            <button className="button" type="submit">
              Change Password
            </button>
            <button className="button">
              I've forgotten my password (WIP) 
            </button>
          </div>
        </form>
      </div>
    </div>
 );
};

export default Login;