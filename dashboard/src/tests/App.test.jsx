import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App', () => {
  it('renders the dashboard title', () => {
    render(<App />);
    expect(screen.getByText(/ANZ Financial Performance 2025/i)).toBeInTheDocument();
  });

  it('renders key metrics', () => {
    render(<App />);
    expect(screen.getByText(/Total Income/i)).toBeInTheDocument();
    expect(screen.getByText(/Profitability Ratios/i)).toBeInTheDocument();
    expect(screen.getByText(/Liquidity Coverage Ratio/i)).toBeInTheDocument();
  });
});
