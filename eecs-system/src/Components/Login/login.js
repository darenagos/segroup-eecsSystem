import React from "react";
import "./login.css";
import "../../reset.css";

function Login() {
  return (
    <body>
      <div className="login-container">
        <form action="">
          <div className="login-form">
            <h1>EECSHelp</h1>
            <div className="input-box">
              <h2>Username</h2>
              <input type="text" placeholder="" required />
            </div>
            <div className="input-box">
              <h2>Password</h2>
              <input type="text" placeholder="" required />
            </div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </body>
  );
}

export default Login;
