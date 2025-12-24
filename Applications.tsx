import React from 'react';
import { motion } from 'framer-motion';
const applications = [{
  title: 'Residential',
  description: 'Living rooms, bedrooms, and hallways',
  image: 'https://aparnaunispace.com/how-to-choose-the-perfect-tiles-for-your-home/',
  size: 'lg'
}, {
  title: 'Commercial',
  description: 'Offices, hotels, and retail spaces',
  image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop',
  size: 'sm'
}, {
  title: 'Bathroom',
  description: 'Spa-like sanctuaries',
  image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574&auto=format&fit=crop',
  size: 'sm'
}, {
  title: 'Kitchen',
  description: 'Modern culinary spaces',
  image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2670&auto=format&fit=crop',
  size: 'sm'
}, {
  title: 'Outdoor',
  description: 'Patios, walkways, and pools',
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
  size: 'lg'
}];
export function Applications() {
  return <section id="applications" className="py-20 md:py-32 bg-[#2C2C2C] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h4 className="text-[#C9A961] font-bold tracking-widest uppercase text-sm mb-4">
              Applications
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Versatility in Every Tile
            </h2>
            <p className="text-gray-400 text-lg">
              Explore how our diverse range of products can be applied across
              various spaces to create stunning environments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
          {applications.map((app, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className={`relative group overflow-hidden cursor-pointer ${app.size === 'lg' ? 'md:col-span-2' : 'md:col-span-1'}`}>
              <img src={app.image} alt={app.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">{app.title}</h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {app.description}
                </p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}