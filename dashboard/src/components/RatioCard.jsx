import React, { useState } from 'react';

const RatioCard = ({ name, value, trend, formula }) => {
  const [showFormula, setShowFormula] = useState(false);
  const isPositive = parseFloat(trend) >= 0;

  return (
    <div className="bg-white p-3 rounded shadow-sm border border-slate-200 relative">
      <div className="flex justify-between items-start">
        <h3 className="text-xs text-slate-500 font-medium truncate">{name}</h3>
        <button 
          onMouseEnter={() => setShowFormula(true)} 
          onMouseLeave={() => setShowFormula(false)}
          className="text-slate-400 hover:text-slate-600 text-[10px]"
        >
          ?
        </button>
      </div>
      
      {showFormula && (
        <div className="absolute top-8 right-2 z-20 bg-slate-800 text-white text-[10px] p-2 rounded shadow-lg w-32">
          {formula}
        </div>
      )}

      <div className="mt-1 flex items-baseline justify-between">
        <span className="text-sm font-bold text-slate-900">{value}</span>
        <span className={`text-[10px] font-semibold ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
          {isPositive ? '+' : ''}{trend}
        </span>
      </div>
    </div>
  );
};

export default RatioCard;
