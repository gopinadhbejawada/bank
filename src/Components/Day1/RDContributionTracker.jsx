import React, { useState } from 'react';

const RDContributionTracker = () => {
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const tenure = 12;
  const totalInvested = monthlyContribution * tenure;
  const estimatedMaturity = totalInvested + (totalInvested * 0.06);

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-header">
        RD Contribution Tracker
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Monthly Contribution (₹)</label>
          <input
            type="number"
            className="form-control"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(parseInt(e.target.value))}
          />
        </div>
        <p><strong>Tenure:</strong> {tenure} months</p>
        <p><strong>Total Invested:</strong> ₹{totalInvested}</p>
        <p><strong>Estimated Maturity:</strong> ₹{estimatedMaturity.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default RDContributionTracker;
