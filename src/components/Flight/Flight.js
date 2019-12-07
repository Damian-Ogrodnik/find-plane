import React from "react";
import "./style.css";

const Flight = ({ flight: { callsign, origin_country, distance } }) => {
  return (
    <div className="flight">
      <h3>Flight Number:{callsign}</h3>
      <p>Origin Country:{origin_country}</p>
      <b>Distance: {distance}</b>
      <button>More information</button>
    </div>
  );
};

export default Flight;
