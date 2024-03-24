// import React from 'react'
import QuickLoanForm from '../component/QuickLoanForm'
import { CombineComp } from './CombineComp'
import logo from '../assets/images/DSCLOGO.jpg'; 
export const HowItWorks = () => {
  return (
    <>
    <div className="container my-5">
      <a href="/" className="logo">
        <img src={logo} width="54" height="auto" alt="doorstepcash logo" />
      </a>
      <div className="row">
        <div className="col-md-8 howitsworks">
          <h2>How It Works</h2>
          <p className="section-text">
            Requesting a loan is easy with doorestepcash.com. Fill out one easy form on doorestepcash.com and your inquiry will be submitted to our large network of lenders. Loan amounts range from $100 to $5,000 (exact amounts vary based on lender programs and your state of residence). You can have a response from one of our lenders the same day, and often within minutes. Once your loan is approved, you will be redirected to the lender's website where you can review the terms of the loan, including details about all the applicable rates and fees. If you accept these terms, the lender will deposit money directly into your bank account as quickly as the next day.
          </p>
          <h3>Most lenders have the following requirements to be approved:</h3>
          <ul>
            <li>Be employed at your present job for at least 90 days.</li>
            <li>Be a US citizen or a permanent resident, and over the age of 18.</li>
            <li>Have an income of around $1,000 per month after tax deductions.</li>
            <li>Have a checking account in your name.</li>
            <li>Provide a working telephone number for your home and work.</li>
            <li>Provide a valid email address.</li>
          </ul>
          <h3>Quick Inquiry Process</h3>
          <p className="section-text">
            Through our secure technology, we will find a lender in our network that is willing to work with you based on the information you submit. Once we have a lender ready to work with you, that lender will contact you to get any additional information they might need (such as verification of employment, pay stubs, etc.).
          </p>
          <h3>Cash Sent Directly to You</h3>
          <p className="section-text">
            After your lender has taken and approved your request, cash will be deposited directly into your bank account. That means you don’t have to take a trip to the bank to endorse and deposit a check or pay check-cashing fees.
          </p>
          <h3>Private and Secure</h3>
          <p className="section-text">
            We use industry-recognized security and advanced encryption technology to protect your personal information.
          </p>
          <h3>Automated Repayment</h3>
          <p className="section-text">
            If you authorize your lender to take payment via automatic withdrawals (known as "ACH transfers"), then your loan payments will be paid automatically directly from your bank account. This means each payment will be on time and you won’t have to worry about missing any payments or incurring any late fees.
          </p>
          <h3>Late Payments</h3>
          <p className="section-text">
            Late payment policies can differ among lenders. Please make sure you read and understand the loan agreement and your lender’s late payment policy before accepting the loan. In some states, late fees may be limited by law. In other states, late payments may allow the lender to charge late fees and may accelerate the loan making it due in full immediately.
          </p>
          <p><strong>NOTE:</strong> Before agreeing to a loan, please make sure you can make your loan payments in full and on time. We support the responsible use of loans and recognize that nobody knows your situation better than you.</p>
          <h3>Loan Extensions</h3>
          <p className="section-text">
            State law may limit or prohibit a lender’s ability to extend or "roll over" your loan. Consult with your lender if you need a loan extension.
          </p>
          <h3>Loan Default</h3>
          <p className="section-text">
            If you can’t make your loan payments on time, you may be in default of your loan obligations. Late payments and loan defaults may adversely affect your credit and may make it difficult to obtain future loans.
          </p>
        </div>
        <div className="col-md-4 howitsworks">
          <QuickLoanForm/>
        </div>
      </div>
    </div>
    <CombineComp/>
    </>
  )
}
