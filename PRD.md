# ANZ NZ 2025 Financial Dashboard — PRD

## 1. Context & Purpose

### Purpose & Problem Statement
Investors and analysts require a clear, interactive, and reliable interface to analyze ANZ New Zealand's financial performance for FY 2025. Existing reporting methods are often static PDFs; this dashboard provides an interactive, accessible tool for rapid financial insight, reducing the time required to visualize key performance indicators (KPIs), comparative trends, and financial ratios.

### Target Users
Investors, financial analysts, and stakeholders who need to perform quick data analysis, track historical trends, and evaluate ANZ’s financial health without parsing raw, static reports.

### Goals & Success Metrics

| Goal | Metric | Target |
|------|--------|--------|
| Improve data accessibility | Time to insight for key metrics | < 10 seconds |
| Enhance engagement | User interactions with charts/tables | > 5 interactions/session |
| Ensure platform reliability | Build success and responsiveness | 100% uptime, < 2s load time |

---

## 2. Features & Scope

### User Stories

1. As an investor, I want to see a high-level summary of FY 2025 performance, so that I can quickly gauge the bank's health.
2. As an analyst, I want to visualize revenue, NII, and PAT trends over 5 years, so that I can identify long-term growth trajectories.
3. As an analyst, I want to compare loan growth vs. deposit growth using interactive charts, so that I can evaluate balance sheet health.
4. As an investor, I want to compare 2024 and 2025 financial ratios, so that I can assess year-over-year operational improvements.
5. As an analyst, I want to see tooltips explaining financial formulas, so that I can understand the methodology behind each ratio.
6. As a user, I want a premium, brand-aligned visual interface, so that I can engage with professional financial data confidently.

### Scope Boundaries

**In scope:**
- FY 2025 summary KPI dashboard.
- Historical comparative analysis (2021-2025).
- Interactive ratio tables with formula tooltips.
- Responsive, premium design.

**Out of scope:**
- Real-time live data fetching (uses mock data service).
- User authentication/personalization.
- Complex data export features (PDF/Excel).

---

## 3. User Experience

### User Journey
1. **Initial View:** User lands on the dashboard and sees the "2025 At a Glance" section, providing immediate high-level figures.
2. **Analysis:** User scrolls down to the Comparative Analysis section to visualize trends in financials, loans, and deposits, and market price vs. index.
3. **Deep Dive:** User scrolls to Ratio Analysis, reviewing Liquidity, Profitability, and Leverage ratios side-by-side (2024 vs 2025), hovering over ratios to understand the underlying calculation formulas.

### Acceptance Criteria

- **Performance Overview:** All 8 KPIs render accurately with correct icons and trend indicators (▲/▼).
- **Comparative Charts:** Charts must be interactive (tooltips, legend) and clearly visualize trends over the specified time range.
- **Ratio Tables:** Must correctly display 2024/2025 side-by-side data and trend indicators, with formula tooltips appearing on hover.
- **Responsiveness:** Dashboard must be readable and usable on both desktop and mobile devices.

---

## 4. Constraints

### Regulatory / Legal
None identified for this prototype.

### Platform & Standards
Must support modern web browsers (Chrome, Firefox, Safari, Edge).

### Performance Requirements
Dashboard load time should be under 2 seconds on standard internet connections.

### Assumptions & Risks

| Assumption | Risk if wrong |
|-----------|--------------|
| Mock data structure accurately represents real financial reporting. | Analyst conclusions may be inaccurate if data models are flawed. |

---

## 5. Priorities (Delivery Plan)

### Must-have (MVP)
- KPI Overview ("2025 At a Glance").
- Comparative line charts (Financial Performance, Market Price vs Index).
- Comparative bar chart (Loan vs Deposit Growth).
- Ratio Analysis table (2024/2025 comparison).

### Can wait
- Real-time API data integration.
- Advanced charting (e.g., zoom/pan features).
- User authentication/saving view preferences.

### Order of work
1. UI Scaffolding & Theme application.
2. KPI Overview component implementation.
3. Comparative Charting components.
4. Ratio Analysis Table implementation.
5. Styling polish and responsiveness verification.

---

## Further Notes
The design aesthetic prioritizes "Premium Banking Analytics" using ANZ-inspired color palettes (`#003366` deep navy) to ensure user trust and professionalism.
