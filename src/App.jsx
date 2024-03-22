
import './App.css'
import Advantages from './component/Advantage.jsx';
import CTANavigation from './component/CTANavigation.jsx';
// import { Header } from './component/Header.jsx';
import { Header } from './component/Header.jsx';
import { Main } from './component/Header.jsx';
import Hero from './component/Hero.jsx';
import Pricing from './component/Pricing.jsx';

function App() {


  return (
    <>
      <div>
        <Header />
        <Main />
        <Hero />
        <Advantages />
        <Pricing />
        <CTANavigation />

      </div>
    </>
  )
}

export default App
