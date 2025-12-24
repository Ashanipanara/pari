import React from 'react';
import { TestimonialCard } from './ui/TestimonialCard';
const testimonials = [{
  name: 'Sarah Jenkins',
  role: 'Interior Designer',
  content: 'The quality of the porcelain tiles I sourced for the Westview Hotel project was exceptional. The consistency in finish and size made installation a breeze. Highly recommended.',
  rating: 5
}, {
  name: 'Michael Chen',
  role: 'Homeowner',
  content: 'We renovated our entire ground floor with PARI CERAMICS. The showroom staff was incredibly helpful in guiding us to the perfect wood-effect tiles that look just like the real thing.',
  rating: 5
}, {
  name: 'David Miller',
  role: 'Construction Manager',
  content: 'I have worked with many suppliers over 15 years, but PARI CERAMICS stands out for their reliability and inventory. They always deliver on time, which is crucial for our timelines.',
  rating: 5
}];
export function Testimonials() {
  return <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h4 className="text-[#C9A961] font-bold tracking-widest uppercase text-sm mb-4">
            Testimonials
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => <TestimonialCard key={index} {...t} delay={index * 0.1} />)}
        </div>
      </div>
    </section>;
}