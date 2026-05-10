import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ComparativeChart = ({ data, lines, title, xAxisKey = "year", dualAxis = false }) => {
  return (
    <div className="bg-white p-3 rounded shadow-sm border border-slate-200">
      <h3 className="text-xs font-semibold text-slate-800 mb-2">{title}</h3>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey={xAxisKey} stroke="#64748b" fontSize={10} />
            
            {dualAxis ? (
              <>
                <YAxis yAxisId="left" orientation="left" stroke="#003366" fontSize={10} domain={['auto', 'auto']} />
                <YAxis yAxisId="right" orientation="right" stroke="#dc3545" fontSize={10} domain={['auto', 'auto']} />
              </>
            ) : (
              <YAxis stroke="#64748b" fontSize={10} />
            )}
            
            <Tooltip contentStyle={{ fontSize: '10px' }} />
            <Legend wrapperStyle={{ fontSize: '10px' }} />
            {lines.map((line, i) => (
              <Line 
                key={i} 
                type="monotone" 
                dataKey={line.key} 
                stroke={line.color} 
                strokeWidth={2} 
                dot={{ r: 3 }} 
                name={line.name} 
                yAxisId={dualAxis ? (i === 0 ? "left" : "right") : undefined} 
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComparativeChart;
