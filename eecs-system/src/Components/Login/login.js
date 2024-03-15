import React from "react";
import "./login.css";
import "../../reset.css";
// react hook -> History - holds information about the previous page you are in.
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

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
              onClick={() => {
                // whenever you want to change routes / redirect to an new page you do navigate()>
                navigate("student-Homepage");
              }}
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
