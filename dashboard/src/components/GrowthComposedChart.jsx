import React from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GrowthComposedChart = ({ data }) => {
  return (
    <div className="bg-white p-3 rounded shadow-sm border border-slate-200">
      <h3 className="text-xs font-semibold text-slate-800 mb-2">Loan & Deposit Growth (%)</h3>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="year" stroke="#64748b" fontSize={10} />
            <YAxis stroke="#64748b" fontSize={10} />
            <Tooltip contentStyle={{ fontSize: '10px' }} />
            <Legend wrapperStyle={{ fontSize: '10px' }} />
            <Bar dataKey="loan" barSize={20} fill="#003366" name="Loan Growth" />
            <Bar dataKey="deposit" barSize={20} fill="#ffc107" name="Deposit Growth" />
            <Line type="monotone" dataKey="loan" stroke="#003366" strokeWidth={2} dot={{ r: 3 }} name="Loan Growth" />
            <Line type="monotone" dataKey="deposit" stroke="#ffc107" strokeWidth={2} dot={{ r: 3 }} name="Deposit Growth" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GrowthComposedChart;
