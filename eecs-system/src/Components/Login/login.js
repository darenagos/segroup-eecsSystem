import React from "react";
import "./login.css";
import "../../reset.css";
// react hook -> History - holds information about the previous page you are in.

function Login(props) {

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
            <button
              type="submit"
              onClick={() => props.onPageChange("student")}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </body>
  );
}

export default Login;
