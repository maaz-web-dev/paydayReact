import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CTANavigation from '../ components/CTANavigation'; // Adjust the import path as necessary
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Home} from './pages/Home';
import { HowItWorks } from './pages/HowItWorks';
// Import other pages/components
import AboutUs from './pages/AboutUs';
import ImportantNotices from './pages/ImportantNotices ';
import ElectronicConsent from './pages/ElectronicConsent';
import CommitmentToResponsibleLending from './pages/LendingPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RatesAndFees from './pages/RatesAndFees';
import TermsOfService from './pages/TermOfUse';
import WhyChooseUs from './pages/WhyChoseUs';
import ContactPage from './pages/ContactPage';
// import HowItWorks from './pages/HowItWorks';
// Continue importing other components that correspond to your routes

function App() {
  return (
    <Router>
      <>
        {/* <CTANavigation /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/disclaimer" element={<ImportantNotices />} />
          <Route path="/e-consent" element={<ElectronicConsent />} />
          <Route path="/lending-policy" element={<CommitmentToResponsibleLending/>} />
           {/* Define more routes here using the element prop */}
           <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
           <Route path="/rates-fees" element={<RatesAndFees/>} />
           <Route path="/terms-of-use" element={<TermsOfService />} />
           <Route path="/contact" element={<ContactPage />} />
           <Route path="/why-choose-us" element={<WhyChooseUs />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
