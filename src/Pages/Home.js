import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import "./styles/Home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  let Navigate = useNavigate();
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("./data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      <Header />
      {data &&
        data.length > 0 &&
        data.map((item) => {
          return (
            <div className="flightList">
              <div className="dataTable">
                <div className="srcdest">
                  <div className="heading">
                    <div>Source</div>
                    <div>Destinantion</div>
                  </div>
                  <div className="data">
                    <div>{item.Source}</div>
                    <div>{item.Destination}</div>
                  </div>
                </div>
                <div className="details-panel">
                  <div className="details">
                    <div className="subheading">Operator</div>
                    <div>{item.FlightOperator}</div>
                  </div>
                  <div className="details">
                    <div className="subheading">FLight Number</div>
                    <div>{item.FlightNumber}</div>
                  </div>
                  <div className="details">
                    <div className="subheading">Journey Time</div>
                    <div>{item.TotalTime}</div>
                  </div>
                  <div className="details">
                    <div className="subheading">Book Ticket</div>
                    <button className="Bookbutton" onClick={() => {
                      Navigate("/Home/Passenger")
                    }}>BOOK</button>
                  </div>
                </div>
                {/* <div className="details-panel"></div> */}
              </div>
            </div>
          );
        })}
{/* 
      <div className="homeContainer">
        <form className="BookingForm">
          <select name="origin" className="drop" id="ori">
            <option value="Origin">Origin</option>
            <option value="Mumbai">MUMBAI</option>
            <option value="Delhi">DELHI</option>
            <option value="Banglore">BANGLORE</option>
            <option value="Kolkata">KOLKATA</option>
          </select> */}
          {/* <i className="fas fa-exchange-alt"></i> */}
          {/* <select name="destination" className="drop" id="dest">
            <option value="Destination">Destination</option>
            <option value="Mumbai">MUMBAI</option>
            <option value="Delhi">DELHI</option>
            <option value="Banglore">BANGLORE</option>
            <option value="Kolkata">KOLKATA</option>
          </select>
          <input
            type="number"
            className="drop"
            name="passengers"
            step="1"
            min="1"
            max="10"
            placeholder="Number Of Passengers"
          />
          <span className="lab">Departure</span>
          <input type="date" name="depart" className="drop" id="depart" />

          <input
            type="submit"
            name="submit"
            id="flightsButton"
            onClick={() => {
              Navigate("/flightlist");
            }}
          />
        </form>
      </div> */}
    </div>
  );
}

export default Home;
