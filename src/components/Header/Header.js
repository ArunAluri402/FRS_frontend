import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import '../../Pages/styles/Login.css'

const Header = () => {
  return (
    <div className="loginPageContaier">
      <div className="navBar">
        <h4 className="logo"> Let's FLY</h4>
        <div>
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
          </Link>

          <Link
            style={{
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "700",

              border: "none",
              color: "rgba(0, 0, 0, 0.75)",
              padding: "5px 10px",
              borderRadius: "4px",
            }}
            to="about"
          >
            ABOUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
