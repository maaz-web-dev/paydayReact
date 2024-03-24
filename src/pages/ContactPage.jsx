import React from 'react';
import logo from '../assets/images/DSCLOGO.jpg'; // Adjust the import path as necessary
import { CombineComp } from './CombineComp';

const ContactPage = () => {
  return (
    <>
    <div className="container">
      <a href="/" className="logo">
        <img src={logo} width="54px" height="auto" alt="doorestepcash logo" />
      </a>
      <div className="row">
        <div className="col-md-12">
          <h2>Contact Information</h2>
          <p className="section-text" style={{ marginBottom: '20px' }}>
            We're here to help and answer any question you might have. We look forward to hearing from you. Below are the details through which you can reach us:
          </p>
          <div className="contact-info" style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
            <h3>doorestepcash.com</h3>
            <p><strong>Email Support:</strong> <a href="mailto:support@doorstep.com" style={{ color: '#007bff', textDecoration: 'none' }}>support@doorstep.com</a></p>
          </div>
        </div>
      </div>
    </div>
    <CombineComp/>
    </>
  );
};

export default ContactPage;
