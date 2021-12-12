import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={null}
          key={dataPoint.label}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
