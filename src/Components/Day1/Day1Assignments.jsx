import React from 'react';
import FixedDepositSummary from './FixedDepositSummary';
import RDContributionTracker from './RDContributionTracker';
import CustomerProfile from './CustomerProfile';

const Day1Assignments = () => {
  return (
    <div className="container py-4">
      <style>{`
        .card {
          border: 1px solid #ddd;
          border-radius: 10px;
          overflow: hidden;
        }
        .card-header {
          padding: 10px 15px;
          font-weight: bold;
          background-color: #ff69b4; /* Pink */
          color: white;
        }
        .card-body {
          padding: 15px;
        }
        .custom-btn {
          background-color: #32cd32; /* Green */
          color: white;
          border: none;
          padding: 5px 10px;
          border-radius: 5px;
        }
        .custom-btn:hover {
          background-color: #28a428;
        }
        .form-label {
          font-weight: bold;
        }
        input.form-control {
          border-radius: 5px;
        }
      `}</style>

      <h2 className="mb-4">Day 1 Components</h2>

      <FixedDepositSummary
        depositAmount={50000}
        interestRate={7.5}
        tenure={12}
        maturityAmount={54000}
      />

      <RDContributionTracker />

      <CustomerProfile
        name="BEJAWADA GOPINADH"
        totalFDs={3}
        totalRDs={2}
        totalInvestment={150000}
      />
    </div>
  );
};

export default Day1Assignments;
