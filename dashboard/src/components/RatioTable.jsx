import React from 'react';

const RatioTable = ({ category, ratios }) => {
  return (
    <div className="bg-white p-4 rounded shadow-sm border border-slate-200">
      <h3 className="text-sm font-semibold text-slate-800 mb-3 capitalize">{category} Ratios</h3>
      <table className="w-full text-left text-xs">
        <thead>
          <tr className="text-slate-500 border-b">
            <th className="pb-2">Ratio</th>
            <th className="pb-2">2024</th>
            <th className="pb-2">2025</th>
            <th className="pb-2">Trend</th>
          </tr>
        </thead>
        <tbody>
          {ratios.map((ratio, i) => (
            <tr key={i} className="border-b last:border-none group">
              <td className="py-2 cursor-help relative">
                <span className="border-b border-dotted border-slate-400">{ratio.name}</span>
                <div className="absolute left-0 bottom-full mb-1 w-48 bg-slate-800 text-white p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20 text-[10px]">
                  Formula: {ratio.formula}
                </div>
              </td>
              <td className="py-2 font-medium">{ratio.value2024}</td>
              <td className="py-2 font-medium">{ratio.value2025}</td>
              <td className={`py-2 font-semibold ${parseFloat(ratio.trend) >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                {parseFloat(ratio.trend) >= 0 ? '▲' : '▼'} {Math.abs(parseFloat(ratio.trend))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RatioTable;
