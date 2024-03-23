import React from 'react';
import QuickLoanForm from '../component/QuickLoanForm'; // Make sure the path is correct based on your project structure
import { CombineComp } from './CombineComp';

const AboutUs = () => {
  return (
    <>
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8">
          <h2>About Us</h2>
          <p className="section-text">
            At doorestepcash.com, our mission is to streamline your access to funds during times when you need them the most. We recognize that life can throw unexpected challenges your way, necessitating immediate financial solutions.
          </p>
          <p className="section-text">
            We've made it our goal to facilitate a seamless connection between you and our extensive network of lenders and lending partners. Forget the old days of browsing through countless websites, filling out endless forms, or waiting in lines. Although we're not direct lenders, our secure online platform plays a pivotal role in linking you with a suitable lender or lending partner from our network, eager to assist you with your financial needs.
          </p>
          <p className="section-text">
            Our network's lenders and lending partners are prepared to offer the financial assistance you require, ensuring an approval process that is not only swift but also straightforward, with loan agreements available for your review and electronic signature.
          </p>
          <p className="section-text">
            We are committed to assisting you in meeting your personal finance requirements and look forward to serving you.
          </p>
        </div>
        <div className="col-md-4">
          <QuickLoanForm />
        </div>
      </div>
    </div>
    <CombineComp/>
    </>
  );
};

export default AboutUs;
