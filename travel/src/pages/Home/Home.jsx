import React from 'react';
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import Services from '../../components/Services';
import AboutUsSection from '../../components/About';
import Footer from '../../components/Footer';
import ExploreSection from '../../components/Explore';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Services />

      <ExploreSection />
      <AboutUsSection />
      <Footer />
    </div>
  );
}

export default App;
