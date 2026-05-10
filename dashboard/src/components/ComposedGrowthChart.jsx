import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ComposedGrowthChart = ({ data, bars, title }) => {
  return (
    <div className="bg-white p-3 rounded shadow-sm border border-slate-200">
      <h3 className="text-xs font-semibold text-slate-800 mb-2">{title}</h3>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="year" stroke="#64748b" fontSize={10} />
            <YAxis stroke="#64748b" fontSize={10} />
            <Tooltip contentStyle={{ fontSize: '10px' }} />
            <Legend wrapperStyle={{ fontSize: '10px' }} />
            {bars.map((bar, i) => (
              <Bar key={`bar-${i}`} dataKey={bar.key} fill={bar.color} name={bar.name} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComposedGrowthChart;
