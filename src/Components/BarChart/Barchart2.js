import "./barchart.css";
// import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
    {
      name: "20",
      uv:19,
      pv: 23,
      amt:26
    },
    {
      name: "35",
      uv:32,
      pv: 35,
      amt: 39
    },
    {
      name: "40",
      uv:45,
      pv:48,
      amt:50
    },
    
    {
      name: "45",
      uv: 59,
      pv: 62,
      amt: 65
    },
    {
      name: "50",
      uv: 72,
      pv: 75,
      amt: 78
    },
    {
      name: "55",
      uv:85,
      pv: 88,
      amt: 90
    },
    {
      name: "60",
      uv: 100,
      pv: 95,
      amt:90
    }
  ];

const BarChartDisplay2 =() => {
    return (
  <div className="barchart-sm">
      <BarChart
        width={300}
        height={300}
        data={data}
        margin={{
          top:50,
          right: 30,
          left:-35,
          bottom:-10
        }}
        className="barchart"
        
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="name" fontSize={10} />
        <YAxis fontSize={10}/>
        <Tooltip />
        <Bar dataKey="pv"id="bar" barSize={15} stackId="a" fill="#000080" />
        <Bar dataKey="uv" stackId="a" fill="blue" />
        <Bar dataKey="uv" stackId="a" fill="#6495ED" />
      </BarChart>
      </div>
    );
}

export default BarChartDisplay2  