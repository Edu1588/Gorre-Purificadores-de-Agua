/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BenefitsBar } from './components/BenefitsBar';
import { ProductsSection } from './components/ProductsSection';
import { Educational } from './components/Educational';
import { ScrollingFeatures } from './components/ScrollingFeatures';
import { Audience } from './components/Audience';
import { VideoTestimonials } from './components/VideoTestimonials';
import { Testimonials } from './components/Testimonials';
import { IntelligentHydration } from './components/IntelligentHydration';
import { About } from './components/About';
import { Reseller } from './components/Reseller';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FixedButtons } from './components/FixedButtons';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
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
      </main>
      <Footer />
      <FixedButtons />
    </div>
  );
}
