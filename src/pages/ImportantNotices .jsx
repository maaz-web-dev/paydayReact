// import React from 'react';
// import { NavLink } from 'react-router-dom';
import logo from '../assets/images/DSCLOGO.jpg'; // Adjust the path as necessary
import QuickLoanForm from '../component/QuickLoanForm'; // Adjust the import path as necessary
import { CombineComp } from './CombineComp';

const ImportantNotices = () => {
  return (
    <>|
   <div className="container">
      <a href="../index.html" className="logo">
        <img src={logo} width="54" height="auto" alt="doorestepcash logo" />
      </a>
      <div className="row">
        <div className="col-md-8 howitsworks">
          <h2>Important Notices & Consent</h2>
          <p className="section-text">
            If you're experiencing financial challenges, we encourage exploring alternative solutions or seeking professional advice before making financial decisions.
          </p>

          <h3>Website Technology Use</h3>
          <p className="section-text">
            This site employs technology, including third-party systems like Jornaya’s LeadiD, to document visits for enhancing user experience and security. Your use of this site indicates consent to this monitoring.
          </p>

          <h3>Our Role & Services</h3>
          <p className="section-text">
            We do not act as a lender or make credit decisions. This platform serves to connect you with financial service providers potentially suited to your needs. Our service is administrative and offered at no cost to you, funded by financial service providers for lead generation.
          </p>

          <h3>Tribal Lending Considerations</h3>
          <p className="section-text">
            Some partners may be Tribal Lending Enterprises (TLEs), operating under tribal and certain federal laws, which might present different rates, fees, and dispute resolution terms than state-licensed lenders. Review and understand all loan terms carefully, regardless of the lender's licensing.
          </p>

          <h3>Consent for Credit Checks</h3>
          <p className="section-text">
            By submitting your information, you consent to credit checks by or on behalf of financial service providers, which may affect your credit score. These checks are thorough, respecting privacy and aimed at assessing creditworthiness.
          </p>

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
    <CombineComp/>
    </>
  );
};

export default ImportantNotices;
