import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function EventChart(props) {
  //custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-chart-tooltip">
          <p className="tooltip-label">{`${payload[0].value}`}</p>   
          <p className="tooltip-number">{`Events: ${payload[1].value}`}</p>  
        </div>
      );
    }
  
    return null;
  };

  return (
    <ResponsiveContainer className="event-chart" height={400}>
      <ScatterChart
        width={800}
        height={400}
        margin={{
          top: 20,
          right: 50,
          bottom: 20,
          left: 5,
        }}
      >
        <CartesianGrid stroke="#f89982" />
        <XAxis type="category" dataKey="city" name="city" stroke="#cc1f00" />
        <YAxis
          type="number"
          dataKey="number"
          name="number of events"
          allowDecimals={false}
          stroke="#cc1f00"
        />
        <Tooltip  content={<CustomTooltip />}/>
        <Scatter data={props.data} fill="#cc1f00" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
