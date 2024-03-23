import Advantages from '../component/Advantage.jsx';
// import CTANavigation from '../component/CTANavigation.jsx';
// import Disclosures from '../component/Disclosures.jsx';
// import Footer from '../component/Footer.jsx';
import { Header } from '../component/Header.jsx';
import { Main } from '../component/Header.jsx';
import Hero from '../component/Hero.jsx';
import Pricing from '../component/Pricing.jsx';
import { CombineComp } from './CombineComp.jsx';
export const Home = () => {
  return (
    <div>
         <Header />
        <Main />
        <Hero />
        <Advantages />
        <Pricing />
        <CombineComp />
        {/* <CTANavigation />
        <Disclosures />
        <Footer /> */}
    </div>
  )
}
