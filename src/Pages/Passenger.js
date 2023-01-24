import React from "react";
import Header from "../components/Header/Header";
import "./styles/Passenger.css";

function Passenger() {
  return (
    <div>
      <Header />
      <div className="passenger_page">
        <h4>Please fill the below details</h4>
        <form className="pass_details">
          <input
            className="text_feild"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            className="text_feild"
            type="text"
            placeholder="Last Name"
            required
          />
          <input
            className="text_feild"
            type="email"
            placeholder="E-Mail"
            required
          />
          <input
            className="text_feild"
            type="number"
            placeholder="Phone"
            required
          />
          <button
            className="details_submit"
            onClick={() => {
              alert("Ticked was booked Sucessfully");
            }}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Passenger;
