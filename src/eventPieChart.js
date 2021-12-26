import React from 'react';
import { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

function EventPieChart({ events }) {
  // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const [data, setData] = useState([]);

  const COLORS = ['#AC92EB', '#4FC1EB', '#A0D568', '#FFCE54', '#ED5564'];

  useEffect(() => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    let data = genres.map((genre) => {
      const count = events.filter((event) =>
        event.summary.includes(genre)
      ).length;
      const obj = { name: genre, value: count };
      return obj;
    });

    //remove elements that have a value of 0 (or less)
    for (var i = data.length - 1; i >= 0; --i) {
      if (data[i].value <= 0) {
        data.splice(i, 1);
      }
    }
    setData(data);
  }, [events]);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    name,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        className="pie-text"
        x={x}
        y={y}
        fill="#000"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    // the css class only adds the pink debug background color
    <ResponsiveContainer className="event-pie-chart" height={400}>
      <PieChart width={400} height={400}>
        <Pie
          isAnimationActive={false}
          data={data}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#cc1f00"
          dataKey="value"
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventPieChart;
