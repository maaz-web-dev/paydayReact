import React from 'react';
import QuickLoanForm from './QuickLoanForm'; // Assuming you have a QuickLoanForm component

const PrivacyPolicy = () => {
  return (
    <div className="container">
      <a href="../index.html" className="logo">
        {/* Ensure the path to your image is correct */}
        <img src="../assets/images/DSCLOGO.jpg" width="54px" height="auto" alt="doorestepcash logo" />
      </a>
      <div className="row">
        <div className="col-md-8 howitsworks">
          <h2>Privacy Policy Overview</h2>
          <p className="section-text" style={{ marginBottom: "20px" }}>
            Welcome to the doorestepcash.com Privacy Policy. Here, we detail our practices around the collection, use, and sharing of your personal information. Our commitment is to your privacy and the protection of your data.
          </p>

          <h3>What Personal Information We Collect</h3>
          <ul className="section-text" style={{ marginBottom: "20px" }}>
            <li><strong>Identifiers:</strong> Name, address, email, social security number, and more, collected directly from you to connect you with potential lenders.</li>
            <li><strong>Personal Details:</strong> Employment and bank account information, aimed at facilitating your search for financial services.</li>
            <li><strong>Demographic Information:</strong> Including age, to ensure services are tailored appropriately.</li>
            <li><strong>Location Data:</strong> To better match you with lenders in your vicinity.</li>
          </ul>

          <h3>How We Use and Share Your Information</h3>
          <p className="section-text" style={{ marginBottom: "20px" }}>
            Your data may be shared with lenders, marketing partners, and other entities to connect you with the financial services you seek. We respect your privacy and are transparent about our practices.
          </p>

          <h3>Protecting Your Data</h3>
          <p className="section-text" style={{ marginBottom: "20px" }}>
            Security is paramount. We employ federal-compliant measures, including encryption, to safeguard your information against unauthorized access.
          </p>

          <h3>Cookies for a Better Experience</h3>
          <p className="section-text" style={{ marginBottom: "20px" }}>
            Our use of cookies helps enhance your site experience by remembering your preferences and visits, ensuring a smoother journey on our platform.
          </p>

          <h3>Your Rights and Choices</h3>
          <p className="section-text">
            You have rights under laws like the CCPA, including requesting information about data collection, deleting your personal information, and opting out of data sales. Contact us at support@doorestepcash.com to exercise your rights.
          </p>
        </div>
        <div className="col-md-4 howitsworks">
          <QuickLoanForm />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
