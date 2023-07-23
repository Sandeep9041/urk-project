import React, { Component } from "react";
import { PieChart, Pie,Label, Legend,ResponsiveContainer } from "recharts";



const data = [
  { name: "Group A", value: 95, fill: "#1FB57A" },
  { name: "Group B", value: 5, fill: "#D7FFF7" },
];

export default class DonutPie2 extends Component {
  render() {
    return (
        <ResponsiveContainer className="responsive"  width="25%" height={120}>
      <PieChart width={800} height={400} >
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={35}
          outerRadius={43}
          startAngle={90}
          endAngle={-270}
          width={15}
        >
            <Label
            value="95%"
            position="center"
            fill="#000"
            fontSize="20px"
            fontWeight="bold"
          />
        </Pie>
      </PieChart>
      </ResponsiveContainer>
    );
  }
}
