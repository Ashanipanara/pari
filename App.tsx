import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Applications } from './components/Applications';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
function App() {
  return <div className="min-h-screen bg-white font-sans text-[#2C2C2C] selection:bg-[#C9A961] selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyChooseUs />
        <Applications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>;
}
export { App };