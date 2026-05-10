import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Cell } from 'recharts';
import { financialData } from './data/financialData';

const App = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-900 text-white">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-anz-teal">ANZ Financial Performance 2025</h1>
        <p className="text-gray-400">Comparative Analysis: 2024 vs 2025</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Income Card */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-white">Total Income (NZD Millions)</h2>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={financialData.income}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="year" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Bar dataKey="value" fill="#00D1C1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Profitability Card */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-white">Profitability Ratios (%)</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Return on Equity (ROE)</span>
              <span className="text-anz-teal font-bold text-lg">{financialData.profitability.roe.current}%</span>
            </div>
            <div className="flex justify-between items-center text-gray-500 text-sm">
              <span>(Previous Year: {financialData.profitability.roe.prev}%)</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Net Interest Margin</span>
              <span className="text-anz-teal font-bold text-lg">{financialData.profitability.netInterestMargin.current}%</span>
            </div>
          </div>
        </div>

        {/* Liquidity Card */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-white">Liquidity Coverage Ratio</h2>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={financialData.liquidity}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" domain={[130, 160]} />
                <Tooltip />
                <Line type="monotone" dataKey="current" stroke="#00D1C1" strokeWidth={3} />
                <Line type="monotone" dataKey="prev" stroke="#555" strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
