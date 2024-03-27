import React from "react";
import "./login.css";

// react hook -> History - holds information about the previous page you are in.
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const currentUserManager = require("./../../../Managers/CurrentUserManager");
const userRegistry = require("./../../../Managers/UserRegistry");

const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
  };

  const validateUser = async (username, password) => {
    const user = userRegistry.findUserByUsername(username);
    console.log(userRegistry.findUserByUsername(username));
    if (!user === false) {
      if (user.password === password) {
        navigateUser(user);
      } else {
        return "incorrect Password";
      }
    }
    return `User ${username} does not exist`;
  };

  const navigateUser = async (user) => {
    currentUserManager.setUser(user);
    navigate(`${user.userType}-Homepage`);
  };

  const handleSubmit = async (e) => {
    const error = await validateUser(username, password);
    await console.log(error);
  };

  return (
    <div className="login-container">
      <form action="" id="login">
        <div className="login-form">
          <h1>EECSHelp</h1>
          <div className="input-box">
            <h2>Username</h2>
            <input
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
              type="text"
              value={password}
              onChange={handlePasswordInputChange}
              placeholder=""
              required
            />
          </div>
          <button
            className="button"
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
