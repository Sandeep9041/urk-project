import React, { Component } from "react";
import { PieChart, Pie,Label, Legend,ResponsiveContainer } from "recharts";



const data = [
  { name: "Group A", value: 78, fill: "#1FB57A" },
  { name: "Group B", value: 22, fill: "#D7FFF7" },
];

// const renderColorfulLegendText = (value: "string", entry: any) => {
//   return (
//     <span style={{ color: "#596579", fontWeight: 500, padding: "10px" }}>
//       {value}
//     </span>
//   );
// };

export default class Example extends Component {
  render() {
    return (
        <ResponsiveContainer width="50%" height={200}>
      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        {/* <Legend
          height={36}
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          iconSize={10}
          padding={5}
          // formatter={renderColorfulLegendText}
        /> */}

        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={50}
          startAngle={90}
          endAngle={-270}
          width={15}
        >
            <Label
            value="75%"
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
