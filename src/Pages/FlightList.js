import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import "./styles/FlightList.css";
import { useNavigate } from "react-router-dom";

function FlightList() {
  const [data, setData] = useState([]);
  let Navigate = useNavigate();

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
                    <button
                      className="Bookbutton"
                      onClick={() => {
                        Navigate("/Home/Passenger");
                      }}
                    >
                      BOOK
                    </button>
                  </div>
                </div>
                {/* <div className="details-panel"></div> */}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default FlightList;
