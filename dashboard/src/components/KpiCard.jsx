import React from 'react';

const KpiCard = ({ label, value, growth, icon }) => {
  const isPositive = parseFloat(growth) >= 0;
  return (
    <div className="bg-white p-3 rounded shadow-sm border border-slate-200">
      <div className="flex items-center gap-2">
        <span className="text-sm">{icon}</span>
        <h3 className="text-[10px] text-slate-500 font-medium uppercase truncate">{label}</h3>
      </div>
      <div className="mt-1 flex items-baseline justify-between">
        <span className="text-sm font-bold text-slate-900">{value}</span>
        <span className={`text-[10px] font-semibold flex items-center ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
          {isPositive ? '▲' : '▼'} {growth}
        </span>
      </div>
    </div>
  );
};

export default KpiCard;
