import React from 'react';
// import QuickLoanForm from '../components/QuickLoanForm'; // Adjust the path as necessary
import logo from '../assets/images/DSCLOGO.jpg'; // Ensure the path is correct
import QuickLoanForm from '../component/QuickLoanForm';
import { CombineComp } from './CombineComp';
const ElectronicConsentPage = () => {
  return (
    <>
    <div className="container">
      <a href="/" className="logo">
        <img src={logo} width="54" height="auto" alt="doorestepcash logo" />
      </a>
      <div className="row">
        <div className="col-md-8 howitsworks">
          <h2>Electronic Consent Agreement</h2>
          <p className="section-text">
            By engaging with our platform and clicking to agree to our terms, you're entering into this Electronic Consent Agreement. You agree to receive, and we're authorized to deliver, all required notices, disclosures, and documents electronically, including via email, our website, or mobile devices.
          </p>

          <h3>Option for Non-Electronic Records</h3>
          <p className="section-text">
            You can request paper copies of all electronic documents by reaching out directly to the lending partners. They'll provide these at no extra cost, adhering to legal retention requirements.
          </p>

          <h3>Consent Coverage</h3>
          <p className="section-text">
            This consent applies to all digital interactions with lenders or lending partners and encompasses mobile communications. It allows for the electronic delivery of all transaction-related documents and notices.
          </p>

          <h3>Technical Requirements</h3>
          <p className="section-text">
            Ensure you have the necessary technology to receive and access documents electronically, which includes a valid email, internet access, and hardware capable of opening documents, such as PDF files.
          </p>

          <h3>Withdrawing Consent</h3>
          <p className="section-text">
            While this consent is necessary for the transaction with our platform, you may withdraw consent with any lender or lending partner at any time. Withdrawing consent before receiving credit may affect your ability to obtain credit from them.
          </p>

          <h3>Updating Your Information</h3>
          <p className="section-text">
            Keep your contact information current to ensure you receive all communications. Update your details through the lender's or partner's website or by written notice.
          </p>
        </div>

        <div className="col-md-4 howitsworks">
          <QuickLoanForm />
        </div>
      </div>
    </div>
      <CombineComp />
    </>
  );
};

export default ElectronicConsentPage;
