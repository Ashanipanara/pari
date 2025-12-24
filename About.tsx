import React from 'react';
import { motion } from 'framer-motion';
const stats = [{
  label: 'Years Experience',
  value: '25+'
}, {
  label: 'Projects Completed',
  value: '500+'
}, {
  label: 'Happy Clients',
  value: '1000+'
}, {
  label: 'Tile Varieties',
  value: '200+'
}];
export function About() {
  return <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <h4 className="text-[#C9A961] font-bold tracking-widest uppercase text-sm mb-4">
              About Luxe Tiles
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
              Crafting Foundations for Beautiful Spaces
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At Luxe Tiles, we believe that every space tells a story. For over
              two decades, we have been the preferred partner for architects,
              interior designers, and homeowners who seek perfection in every
              detail.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our mission is to bring the world's finest textures and finishes
              to your doorstep. From Italian marble to Spanish porcelain, our
              curated collection represents the pinnacle of design and
              durability.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-10">
              {stats.map((stat, index) => <div key={index} className="border-l-2 border-[#C9A961] pl-6">
                  <div className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>)}
            </div>
          </motion.div>

          {/* Image Composition */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative">
            <div className="relative z-10">
              <img src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1632&auto=format&fit=crop" alt="Showroom interior" className="w-full h-[500px] object-cover rounded-sm shadow-2xl" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-2/3 h-2/3 bg-[#F9F7F5] -z-0 hidden md:block" />
            <div className="absolute -top-10 -right-10 w-1/2 h-1/2 border-4 border-[#D4C5B9] -z-0 hidden md:block" />
          </motion.div>
        </div>
      </div>
    </section>;
}