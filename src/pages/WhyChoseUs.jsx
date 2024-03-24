import React from 'react';
import QuickLoanForm from '../component/QuickLoanForm'; // Update this path as necessary
import { CombineComp } from './CombineComp';

const WhyChooseUs = () => {
  return (
    <>
    <div className="container">
      <a href="../index.html" className="logo">
        <img src="../assets/images/DSCLOGO.jpg" alt="doorestepcash logo" width="54" height="auto" />
      </a>
      <div className="row">
        <div className="col-md-8 howitsworks">
          <h2>Why Opt for Our Services?</h2>
          <p className="section-text">
            While numerous options exist for securing a loan, our platform stands out for several compelling reasons. Below, we outline why choosing us to connect with a lender or lending partner is in your best interest:
          </p>

          <h3>Efficiency</h3>
          <p className="section-text">
            Speed defines our service. Our efficient process aims to swiftly link you with a lender or lending partner, potentially by the next business day. Begin by filling out our simple request form to expedite your connection to a ready and willing financial partner.
          </p>

          <h3>Security</h3>
          <p className="section-text">
            Your data's security is paramount. Unlike some platforms that might expose you to risks, we rigorously safeguard your personal details. Beware of sites that could compromise your device with harmful software or misuse your sensitive data. Our commitment to your privacy and security is unwavering, ensuring a safe digital environment for your financial endeavors.
          </p>

          <h3>Simplicity</h3>
          <p className="section-text">
            Skip the queues and the need to leave your comfort zone. Our online form is accessible from the serenity of your home, offering a direct path to a network of lenders or lending partners. With us, convenience is just a few clicks away, simplifying your journey to financial assistance.
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

export default WhyChooseUs;
