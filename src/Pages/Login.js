import React, { useRef } from "react";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let email = useRef();
  let password = useRef();
  let Navigate = useNavigate();
  const handleSubmit = (e) => {
    if (
      email.current.value == "abc@gmail.com" &&
      password.current.value == "123"
    ) {
      localStorage.setItem("emailData", "abc@gmail.com");
      localStorage.setItem("passwordData", "123");
      Navigate("/Home");
    } else if (
      email.current.value == "admin@gmail.com" &&
      password.current.value == "admin"
    ) {
      localStorage.setItem("emailData", "admin@gmail.com");
      localStorage.setItem("passwordData", "admin");
      Navigate("/admin");
    } else {
      alert("INVALID CREDENTIALS");
    }
  };

  return (
    <div className="loginPageContaier">
      <div className="navBar">
        {/* <Link
          style={{
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "700",
            marginRight: "40px",
            border: "none",
            color: "rgba(0, 0, 0, 0.75)",
            padding: "5px 10px",
            borderRadius: "4px",
          }}
          to="/"
        >
          HOME
        </Link>

        <Link
          style={{
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "700",
            marginRight: "40px",
            border: "none",
            color: "rgba(0, 0, 0, 0.75)",
            padding: "5px 10px",
            borderRadius: "4px",
          }}
          to="navbar"
        >
          ABOUT
        </Link>

        <Link
          style={{
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "700",
            marginRight: "40px",
            border: "none",
            color: "rgba(0, 0, 0, 0.75)",
            padding: "5px 10px",
            borderRadius: "4px",
          }}
          to="contact"
        >
          CONTACT
        </Link> */}
      </div>
      <div className="loginContainer">
        <img src="./Logo.png" alt="Logo" className="Logo" />

        <div className="title">
          <h3>Login</h3>
        </div>

        <div className="loginContainer2">
          <input
            className="user"
            type="text"
            placeholder="Username"
            ref={email}
            autoFocus
          />

          <input
            type="password"
            className="user"
            placeholder="Password"
            ref={password}
          />
        </div>
        <button className="loginButton" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
