/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WaveDivider } from './components/WaveDivider';
import { BenefitsBar } from './components/BenefitsBar';
import { ProductsSection } from './components/ProductsSection';
import { Educational } from './components/Educational';
import { ScrollingFeatures } from './components/ScrollingFeatures';
import { Audience } from './components/Audience';
import { VideoTestimonials } from './components/VideoTestimonials';
import { Testimonials } from './components/Testimonials';
import { IntelligentHydration } from './components/IntelligentHydration';
import { Faq } from './components/Faq';
import { About } from './components/About';
import { Reseller } from './components/Reseller';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FixedButtons } from './components/FixedButtons';

export default function App() {
  useEffect(() => {
    // Force scroll to top on initial page load / refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative">
      <TopBar />
      <Navbar />
      <main className="relative z-0">
        <Hero />
        {/* Section 2 - Content slides smoothly up over the sticky Hero */}
        <div className="relative z-10 bg-slate-50">
          <WaveDivider color="#f8fafc" position="top" />
          <BenefitsBar />
          <ProductsSection />
          <Educational />
          <ScrollingFeatures />
          <Audience />
          <VideoTestimonials />
          <Testimonials />
          <IntelligentHydration />
          <About />
          <Reseller />
          <Contact />
          <Faq />
        </div>
      </main>
      <Footer />
      <FixedButtons />
    </div>
  );
}

