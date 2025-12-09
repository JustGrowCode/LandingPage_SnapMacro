import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Solution } from './components/sections/Solution';
import { HowItWorks } from './components/sections/HowItWorks';
import { Proof } from './components/sections/Proof';
import { Comparison } from './components/sections/Comparison';
import { FAQ } from './components/sections/FAQ';
import { Pricing } from './components/sections/Pricing';
import { FooterCTA } from './components/sections/FooterCTA';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Proof />
        <Comparison />
        <FAQ />
        <Pricing />
      </main>
      <FooterCTA />
      <ChatWidget />
    </div>
  );
};

export default App;