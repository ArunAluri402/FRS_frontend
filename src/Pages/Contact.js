import React from "react";
import Header from "../components/Header/Header";
import "./styles/Contact.css";

function Contact() {
  return (
    <div>
      <Header />
      <div className="contact_details">
        <div className="content">
          <div className="left">
            <label>Contact Details </label>
            <p>Mobile Number : +91 999999999</p>
            <p>
              Address : Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
