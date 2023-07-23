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
    name: "",
    uv:26,
    pv:29,
    amt:32
  },{
    name: "25",
    uv:32,
    pv: 35,
    amt: 39
  },
  {
    name: "",
    uv: 39,
    pv: 42,
    amt:45
  },
  
  {
    name: "30",
    uv:45,
    pv:48,
    amt:50
  },
  {
    name: "",
    uv:53,
    pv:56,
    amt: 59
  },
  {
    name: "35",
    uv: 59,
    pv: 62,
    amt: 65
  },
  {
    name: "",
    uv: 65,
    pv: 68,
    amt: 72
  },
  {
    name: "40",
    uv: 72,
    pv: 75,
    amt: 78
  },
  {
    name: "",
    uv: 78,
    pv: 82,
    amt: 85
  },
  {
    name: "60",
    uv:85,
    pv: 88,
    amt: 90
  },
  {
    name: "",
    uv: 90,
    pv: 93,
    amt: 95
  },
  {
    name: "65",
    uv: 100,
    pv: 95,
    amt:90
  }
];



const BarChartDisplay =() => {
  return (
<div className="barchart-lg">
    <BarChart
      width={700}
      height={300}
      data={data}
      margin={{
        top:50,
        right: 30,
        left:-25,
        bottom:-10
      }}
      className="barchart"
      
    >
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="name" fontSize={10} />
      <YAxis fontSize={10}/>
      <Tooltip />
      <Bar dataKey="pv" id="bar" barSize={20} stackId="a" fill="#000080" />
      <Bar dataKey="uv" stackId="a" fill="blue" />
      <Bar dataKey="uv" stackId="a" fill="#6495ED" />
    </BarChart>
    </div>
  );
}




export default BarChartDisplay 
