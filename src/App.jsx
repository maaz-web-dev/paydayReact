import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CTANavigation from '../ components/CTANavigation'; // Adjust the import path as necessary
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Home} from './pages/Home';
import { HowItWorks } from './pages/HowItWorks';
// Import other pages/components
import AboutUs from './pages/AboutUs';
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
          {/* Define more routes here using the element prop */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
