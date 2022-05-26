import React from "react";
import "./Chart.scss";

const Chart = ({ label, presentage }) => {
  const presentstroke = {
    strokeDashoffset: 502 - (presentage * 502),
    // $fill: 10,
  };
  return (
    <div  className="container-chart-skill">
      <div className="cir-child">
        <svg className="progress-ring" width="180" height="200">
          <circle cx="80" cy="80" r="80" fill="transparent" />
          <circle
            cx="80"
            cy="80"
            r="80"
            fill="transparent"
            style={presentstroke}
          />
        </svg>
        <span> {presentage * 100}%</span>
        <h3>{label}</h3>
      </div>
      
    </div>
  );
};

export default Chart;
