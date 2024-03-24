// QuickLoanForm.jsx
import './QuickLoanForm.css'; // Adjust the file name as necessary

const QuickLoanForm = () => {
  return (
    <div className="fixed-form">
      <div className="form-container">
        <h4>Quick Loan Request</h4>
        <form id="heroForm">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              id="email"
            />
          </div>
          <button type="submit" className="btn-custom">Get Started</button>
        </form>
      </div>
    </div>
  );
};

export default QuickLoanForm;
