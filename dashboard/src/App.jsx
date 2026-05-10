import React from 'react';
import KpiCard from './components/KpiCard';
import ComparativeChart from './components/ComparativeChart';
import ComposedGrowthChart from './components/ComposedGrowthChart';
import RatioTable from './components/RatioTable';
import { financialData } from './data/financialData';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="bg-[#003366] text-white p-3 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-lg font-bold">ANZ NZ | FY2025 Investor Relations</h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4 space-y-6">
        
        {/* Performance */}
        <section id="performance">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2025 At a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
            {financialData.performance.map((item, i) => (
              <KpiCard key={i} {...item} />
            ))}
          </div>
        </section>

        {/* Comparative Analysis */}
        <section id="comparative" className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ComparativeChart 
            title="Financial Performance ($B)" 
            data={financialData.comparative.financials} 
            lines={[
              { key: 'Revenue', color: '#003366', name: 'Revenue' },
              { key: 'NII', color: '#007bff', name: 'Net Interest Income' },
              { key: 'PAT', color: '#28a745', name: 'PAT' }
            ]} 
          />
          <ComposedGrowthChart 
            title="Loan vs Deposit Growth (%)" 
            data={financialData.comparative.growthTrend} 
            bars={[
              { key: 'deposit', color: '#dc3545', name: 'Deposit Growth' },
              { key: 'loan', color: '#ffc107', name: 'Loan Growth' }
            ]} 
          />
          <ComparativeChart 
            title="Movement of Closing Price vs Benchmark Index (2025)" 
            data={financialData.comparative.marketMonthly2025}
            xAxisKey="month"
            dualAxis={true}
            lines={[
              { key: 'closingPrice', color: '#003366', name: 'Closing Price (NZD)' },
              { key: 'nzxIndex', color: '#dc3545', name: 'NZX Index' }
            ]} 
          />
        </section>

        {/* Ratios (Table View) */}
        <section id="ratios" className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800">Ratio Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(financialData.ratios).map(([category, ratios]) => (
              <RatioTable key={category} category={category} ratios={ratios} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
