import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowDown } from 'lucide-react';
export function Hero() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop" alt="Luxury modern bathroom with premium tiles" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center text-white">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="max-w-3xl">
          <span className="inline-block py-1 px-3 border border-white/30 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium tracking-wide mb-6">
            ESTABLISHED 1998
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Premium Quality Tiles for{' '}
            <span className="text-[#C9A961]">Modern Spaces</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
            Transform your home or business with our exclusive collection of
            imported ceramics, porcelain, and natural stone. Designed for
            durability, crafted for elegance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" size="lg" onClick={scrollToProducts} className="min-w-[180px]">
              Explore Collection
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToContact} className="min-w-[180px] border-white text-white hover:bg-white hover:text-[#2C2C2C]">
              Get a Quote
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1,
      y: [0, 10, 0]
    }} transition={{
      duration: 2,
      repeat: Infinity,
      delay: 1
    }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    })}>
        <ArrowDown size={32} className="opacity-80" />
      </motion.div>
    </section>;
}