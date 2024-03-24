import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/DSCLOGO.jpg'; // Adjust the path as necessary
import QuickLoanForm from '../component/QuickLoanForm'; // Adjust the import path as necessary

const ImportantNotices = () => {
  return (
    <div className="container">
      <a href="/" className="logo">
        <img src={logo} width="54" alt="doorestepcash logo" />
      </a>
      <div className="row">
        <div className="col-md-8 howitsworks">
          <h2>Important Notices & Consent</h2>
          <p className="section-text" style={{ marginBottom: "20px" }}>
            If you're experiencing financial challenges, we encourage exploring alternative solutions or seeking professional advice before making financial decisions.
          </p>
          {/* More content goes here */}
          <h3>State Availability & Lender Terms</h3>
          <p className="section-text">
            Not all services are available in every state. Lenders, whether online or tribal, will provide all loan terms, fees, and rate information upon offering you a loan. We advise carefully reviewing these terms to ensure they align with your ability to repay.
          </p>
        </div>
        <div className="col-md-4 howitsworks">
          <QuickLoanForm />
        </div>
      </div>
    </div>
  );
};

export default ImportantNotices;
