# Financial Dashboard — PRD

## 1. Context & Purpose

### Purpose & Problem Statement
Investors face significant difficulties in analyzing the financial health of companies due to the complexity and volume of data. This financial dashboard resolves the issue by presenting key financial information through interactive visualizations, enabling investors to visualize the financial strength of a company in a short timespan.

### Target Users
Investors who need to perform quick, informed evaluations of a company's financial stability and performance trends.

### Goals & Success Metrics

| Goal | Metric | Target |
|------|--------|--------|
| Improve analysis efficiency | Time required for initial analysis | Reduce by 50% vs traditional spreadsheets |
| Ensure usability & clarity | User Satisfaction Score (CSAT) | 4.5 / 5 |

---

## 2. Features & Scope

### User Stories

1. As an investor, I want to select a company from a dropdown menu, so that I can immediately load its specific financial dashboard.
2. As an investor, I want to view comparative financial ratios, so that I can assess the company's financial health.
3. As an investor, I want to view revenue trends and financial ratios over time, so that I can identify performance trajectories.
4. As an investor, I want to view the revenue mix, so that I can understand the composition of the company's income.

### Scope Boundaries

**In scope:**
- Company selection interface (dropdown).
- Interactive visualization of core financial ratios.
- Trend visualization (line graphs) for Revenue, Net Income, and NPAT.
- Revenue mix visualization.

**Out of scope:**
- Real-time market data updates.
- Financial forecasting or projections.
- Mobile or tablet responsiveness (desktop-only).

---

## 3. User Experience

### User Journey
An investor logs in to the platform and is presented with a clear dropdown menu. Upon selecting a desired company, the screen updates to display the financial dashboard for that specific entity. The investor can then navigate through various sections to view ratio comparisons, revenue trends, and income composition.

### Acceptance Criteria

- **Company Selection**: Dashboard loads within 3 seconds of company selection from the dropdown.
- **Financial Data**: Dashboard must accurately display performance data, key ratios, and trends based on historical data.
- **Visualizations**: Revenue, Net Income, and NPAT must be represented using interactive line graphs.

---

## 4. Constraints

### Regulatory / Legal
None identified.

### Platform & Standards
- **Platform**: Desktop-only (optimized for high data density).
- **Supported Environment**: Google Chrome (target browser).

### Performance Requirements
- **Load Time**: Dashboard and data must render within 3 seconds of user selection.

### Assumptions & Risks

| Assumption | Risk if wrong |
|-----------|--------------|
| High-quality historical financial data is available | Inaccurate analysis due to poor data quality |
| Financial data sourcing is reliable | Compromised data integrity leading to wrong investment decisions |

---

## 5. Priorities (Delivery Plan)

### Must-have (MVP)
- Company selection dropdown.
- Core financial ratios display.
- Interactive line charts for Revenue, Net Income, and NPAT trends.

### Can wait
- Additional advanced financial analytics.
- Real-time data integration.
- Predictive forecasting models.

### Order of work
1. Data ingestion and integrity validation pipeline.
2. Core dashboard UI scaffolding and company selection mechanism.
3. Implementation of core financial ratio components.
4. Implementation of interactive line charts for financial trends.

---

## Further Notes
The primary focus is on data integrity and providing a high-density, performant desktop experience for professional investors.
