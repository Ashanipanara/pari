import React from 'react';
import { Shield, Sparkles, Droplet, DollarSign } from 'lucide-react';
import { FeatureCard } from './ui/FeatureCard';
const features = [{
  icon: Shield,
  title: 'Unmatched Durability',
  description: 'Our tiles are engineered to withstand the test of time, resisting wear, scratches, and heavy foot traffic for decades.'
}, {
  icon: Sparkles,
  title: 'Premium Finish',
  description: 'From high-gloss polish to natural matte, our finishes are applied with precision technology for a flawless look.'
}, {
  icon: Droplet,
  title: 'Easy Maintenance',
  description: 'Stain-resistant and easy to clean surfaces mean your spaces stay beautiful with minimal effort.'
}, {
  icon: DollarSign,
  title: 'Affordable Luxury',
  description: 'We source directly from manufacturers to bring you premium quality at competitive market prices.'
}];
export function WhyChooseUs() {
  return <section id="why-us" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h4 className="text-[#C9A961] font-bold tracking-widest uppercase text-sm mb-4">
            Why Choose Us
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-6">
            The Luxe Advantage
          </h2>
          <p className="text-gray-600 text-lg">
            We don't just sell tiles; we provide lasting solutions for your
            architectural needs. Here is why thousands of clients trust us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} delay={index * 0.1} />)}
        </div>
      </div>
    </section>;
}