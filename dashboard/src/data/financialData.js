export const financialData = {
  performance: [
    { label: "Revenue", value: "$21.5B", growth: "4.2%", icon: "💰" },
    { label: "Net Profit", value: "$7.8B", growth: "3.5%", icon: "📈" },
    { label: "Total Assets", value: "$1,050B", growth: "2.1%", icon: "🏢" },
    { label: "Total Liabilities", value: "$980B", growth: "1.8%", icon: "📉" },
    { label: "Equity", value: "$70B", growth: "5.0%", icon: "🛡️" },
    { label: "Total Loan", value: "$650B", growth: "3.0%", icon: "🤝" },
    { label: "Total Deposit", value: "$600B", growth: "2.8%", icon: "🏦" },
    { label: "Cost-to-Income", value: "42%", growth: "-1.2%", icon: "⚙️" },
  ],
  comparative: {
    financials: [
      { year: "2021", Revenue: 18.2, NII: 12.0, PAT: 6.0 },
      { year: "2022", Revenue: 19.5, NII: 13.5, PAT: 6.8 },
      { year: "2023", Revenue: 20.1, NII: 14.8, PAT: 7.2 },
      { year: "2024", Revenue: 20.6, NII: 15.2, PAT: 7.5 },
      { year: "2025", Revenue: 21.5, NII: 15.8, PAT: 7.8 },
    ],
    growthTrend: [
      { year: "2021", loan: 4.2, deposit: 3.5 },
      { year: "2022", loan: 4.5, deposit: 3.8 },
      { year: "2023", loan: 3.8, deposit: 3.2 },
      { year: "2024", loan: 3.5, deposit: 3.0 },
      { year: "2025", loan: 3.0, deposit: 2.8 },
    ],
    marketMonthly2025: [
      { month: "Jan", closingPrice: 31.5, nzxIndex: 14000 },
      { month: "Feb", closingPrice: 31.8, nzxIndex: 14100 },
      { month: "Mar", closingPrice: 32.2, nzxIndex: 14050 },
      { month: "Apr", closingPrice: 32.0, nzxIndex: 14200 },
      { month: "May", closingPrice: 32.5, nzxIndex: 14300 },
      { month: "Jun", closingPrice: 32.8, nzxIndex: 14250 },
      { month: "Jul", closingPrice: 33.0, nzxIndex: 14400 },
      { month: "Aug", closingPrice: 33.2, nzxIndex: 14500 },
      { month: "Sep", closingPrice: 33.4, nzxIndex: 14450 },
      { month: "Oct", closingPrice: 33.6, nzxIndex: 14600 },
      { month: "Nov", closingPrice: 33.8, nzxIndex: 14700 },
      { month: "Dec", closingPrice: 33.5, nzxIndex: 14550 },
    ],
  },
  ratios: {
    liquidity: [
      { name: "Current Ratio", value2024: "1.13x", value2025: "1.15x", trend: "0.02", formula: "Current Assets / Current Liabilities" },
      { name: "Cash Ratio", value2024: "0.26x", value2025: "0.25x", trend: "-0.01", formula: "Cash / Current Liabilities" },
    ],
    profitability: [
      { name: "Net Profit Margin", value2024: "35%", value2025: "36%", trend: "1.0%", formula: "Net Profit / Revenue" },
      { name: "ROE", value2024: "10.7%", value2025: "11.2%", trend: "0.5%", formula: "Net Income / Shareholders Equity" },
      { name: "Cost to Income", value2024: "43.2%", value2025: "42%", trend: "-1.2%", formula: "Operating Expenses / Operating Income" },
    ],
    leverage: [
      { name: "Debt to Equity", value2024: "1.5x", value2025: "1.4x", trend: "-0.1", formula: "Total Liabilities / Shareholders Equity" },
      { name: "Capital Adequacy", value2024: "12.3%", value2025: "12.5%", trend: "0.2%", formula: "Total Capital / RWA" },
    ],
  },
};
