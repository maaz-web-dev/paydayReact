import React from 'react';
import './Disclosures.css'; // Ensure the path is correct based on your project structure

const Disclosures = () => {
  return (
    <div className="container">
      <h1 className="title">Important Disclosures. Please Read Carefully.</h1>
      <p className="section-text">Persons facing serious financial difficulties should consider other alternatives or should seek out professional financial advice.</p>
      <p className="section-text">This website uses Site Visit Recordation Technology to memorialize site visits, including technology provided by third parties like Jornaya’s LeadiD. By submitting your information through this website, you consent to the use of Site Visit Recordation Technology.</p>
      {/* Additional paragraphs follow the same pattern */}
      <p className="section-text">By submitting your information via this website, you authorize the owner of this website and its network of available lenders to do a credit check, which may include verifying your social security number, driver license number, or other identification, and a review of your creditworthiness. Credit checks are usually performed by one of the major credit bureaus such as Experian, Equifax and TransUnion, but also may include alternative credit bureaus such as Clarity, DataX, or others. You also authorize the owner of this website to share your information and credit history with its network of available lenders and other service providers.</p>
      <h1 className="title">Lender’s or Lending Partner’s Disclosure of Terms.</h1>
      <p className="section-text">When a lender decides to offer you a loan, it is required by law to provide documents that contain all fees and rate information pertaining to the loan, including any potential fees for late-payments, and the terms (if permitted by applicable law) to refinance, renew or rollover your loan. Loan fees and interest rates are determined solely by the lender or financial service provider based on their internal policies, underwriting criteria and applicable law. This website has no knowledge of or control over the loan terms offered to you.</p>
      <h1 className="title">Late Payments Hurt Your Credit Score</h1>
      <p className="section-text">Please be aware that missing a payment or making a late payment can negatively impact your credit score. To protect yourself and your credit history, make sure you only accept loan terms that you can afford to repay. If you cannot make a payment on time, you should contact your lender immediately and discuss how to proceed with late payments.</p>
    </div>
  );
};

export default Disclosures;
