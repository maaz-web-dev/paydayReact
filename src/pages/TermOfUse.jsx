import React from 'react';
// import QuickLoanForm from './QuickLoanForm'; // Ensure this points to the correct file location
import QuickLoanForm from '../component/QuickLoanForm';
import { CombineComp } from './CombineComp';
const TermsOfService = () => {
  return (
    <>
    <div className="container">
      <a href="../index.html" className="logo">
        <img src="../assets/images/DSCLOGO.jpg" alt="doorestepcash logo" width="54" height="auto" />
      </a>
      <div className="row">
        <div className="col-md-8 howitsworks">
          <h2>Terms of Service</h2>
          <p className="section-text">
            Welcome to doorestepcash.com. By accessing our website, you agree to these Terms of Service and our Privacy Policy. Our platform is designed to inform you and facilitate your connection with our extensive network of lenders and lending partners, without directly offering or endorsing any financial products.
          </p>

          {/* Continue with other sections similar to the above pattern */}
          <h3>Service Overview</h3>
          <p className="section-text">
            doorestepcash.com acts as a bridge between you and potential lenders or lending partners. We do not make loan decisions or offer financial advice. Our goal is to connect you with possible financial solutions based on the information you provide.
          </p>
          {/* Add other sections here */}

          <h3>Personal Information and Security</h3>
          <p className="section-text">
            We adhere to strict security protocols to protect your personal information, in compliance with federal laws against money laundering and terrorism financing. Verification of your identity, including providing valid ID, may be required.
          </p>
        </div>
        <div className="col-md-4 howitsworks">
          <QuickLoanForm />
        </div>
      </div>
    </div>
    <CombineComp/>
    </>
  );
};

export default TermsOfService;
