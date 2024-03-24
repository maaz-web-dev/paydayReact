import React from 'react';
// import QuickLoanForm from ' /QuickLoanForm'; // Update this path as needed
import logo from '../assets/images/DSCLOGO.jpg'; // Update this path as needed
import QuickLoanForm from '../component/QuickLoanForm';
const CommitmentToResponsibleLending = () => {
  return (
    <div className="container my-5">
      <a href="/" className="logo">
        <img src={logo} width="54" height="auto" alt="doorestepcash logo" />
      </a>
      <div className="row">
        <div className="col-md-8 howitsworks">
          <h2>Commitment to Responsible Lending</h2>
          <p className="section-text">
            Our network of lenders and lending partners is dedicated to upholding the highest standards of responsible lending, strictly following federal, state, and local regulations. These standards may encompass restrictions on interest rates, loan terms, the permissible number of rollovers, and more. We encourage you to familiarize yourself with the specifics of any loan offer, including the regulatory framework it operates within.
          </p>
          
          <h3>Adherence to the Truth in Lending Act</h3>
          <p className="section-text">
            In line with the Truth in Lending Act (TILA), our associated lenders and lending partners are committed to transparency, providing detailed information about the fees, interest rates, and terms of your loan upfront. This ensures you have all the necessary details to make an informed decision before entering any agreement.
          </p>
          
          <h3>Dodd-Frank Act Compliance</h3>
          <p className="section-text">
            Following the Dodd-Frank Wall Street Reform Act, fair lending practices are mandatory, promoting equality and protecting consumers from abusive lending. The Consumer Financial Protection Bureau (CFPB) enforces these regulations, ensuring fairness regardless of race, ethnicity, gender, or age.
          </p>
          
          <h3>Identity Verification Requirements</h3>
          <p className="section-text">
            To comply with federal laws aimed at preventing money laundering and the financing of terrorism, lenders and lending partners must verify your identity. This process requires you to provide personal information, such as your name, date of birth, address, social security number, and a valid state or federal ID.
          </p>
        </div>
        <div className="col-md-4 howitsworks">
          <QuickLoanForm />
        </div>
      </div>
    </div>
  );
};

export default CommitmentToResponsibleLending;
