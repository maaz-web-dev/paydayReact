import React from 'react';
import QuickLoanForm from '../component/QuickLoanForm'; // Adjust path as necessary
import logo from '../assets/images/DSCLOGO.jpg'; // Adjust path as necessary

const ElectronicConsent = () => {
  return (
    <div className="container">
      <a href="/" className="logo">
        <img src={logo} width="54" alt="doorestepcash logo" />
      </a>
      <div className="row">
        <div className="col-md-8 howitsworks">
          <h2>Electronic Consent Agreement</h2>
          <p className="section-text" style={{ marginBottom: "20px" }}>
            By engaging with our platform and clicking to agree to our terms, you're entering into this Electronic Consent Agreement. You agree to receive, and we're authorized to deliver, all required notices, disclosures, and documents electronically, including via email, our website, or mobile devices.
          </p>
          {/* Add more sections here as in your original HTML */}
        </div>
        <div className="col-md-4 howitsworks">
          <QuickLoanForm />
        </div>
      </div>
    </div>
  );
};

export default ElectronicConsent;
