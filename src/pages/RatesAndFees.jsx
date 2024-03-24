import React from 'react';
import QuickLoanForm from './QuickLoanForm'; // Adjust the path as necessary

const RatesAndFees = () => {
  return (
    <div className="container">
      <a href="../index.html" className="logo">
        <img src="../assets/images/DSCLOGO.jpg" width="54px" height="auto" alt="doorestepcash logo" />
      </a>
      <div className="row">
        <div className="col-md-8 howitsworks">
          <h2>Rates & Fees Transparency</h2>
          <p className="section-text" style={{ marginBottom: "20px" }}>
            Our platform, doorestepcash.com, is committed to providing a free service that connects you efficiently with our network of lenders and lending partners, without directly offering loans. We leverage the information you provide to facilitate these connections, aiming to find you a fitting loan offer.
          </p>
          
          <h3>Comprehensive Disclosure</h3>
          <p className="section-text" style={{ marginBottom: "20px" }}>
            In compliance with the Truth in Lending Act, our affiliated lenders and lending partners are obligated to reveal all potential fees and interest rates you might face. This information is crucial and will be made available upon loan approval, ensuring you have all the details needed to make an informed decision.
          </p>
          
          <h3>Detailed Terms Agreement</h3>
          <p className="section-text" style={{ marginBottom: "20px" }}>
            The loan offer, including all associated costs and interest rates, will be explicitly detailed by the lender or lending partner. We urge you to scrutinize this information before accepting any terms. Remember, you're not obligated to proceed if the offer doesn't align with your preferences or needs.
          </p>
          
          <h3>Understanding Late Payments</h3>
          <p className="section-text" style={{ marginBottom: "20px" }}>
            Policies regarding late payments vary among lenders and lending partners. It's essential to familiarize yourself with these policies as outlined in your loan agreement. All entities adhere to legal standards governing late payment penalties.
          </p>
          
          <h3>Implications of Non-payment</h3>
          <p className="section-text" style={{ marginBottom: "20px" }}>
            Should you find yourself unable to fulfill the repayment terms, additional charges may apply. We prioritize working with lenders and lending partners known for their fair and considerate collection practices.
          </p>
          
          <h3>Policy on Loan Renewal</h3>
          <p className="section-text">
            Renewal policies are subject to state laws, which may permit or restrict the ability to extend your loan. Such extensions can significantly affect the total cost of your loan, due to additional fees and interest. It's important to understand these policies and their implications.
          </p>
        </div>
        <div className="col-md-4 howitsworks">
          <QuickLoanForm />
        </div>
      </div>
    </div>
  );
};

export default RatesAndFees;
