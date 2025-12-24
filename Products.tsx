import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductCard, Product } from './ui/ProductCard';
import { Button } from './ui/Button';
const categories = ['All', 'GVT & PGVT', 'Parking Tiles', 'Wall Tiles', 'Full Body'];
const products: Product[] = [{
  id: '1',
  name: 'Carrara Marble',
  category: 'GVT & PGVT',
  size: '600x600mm',
  finish: 'Polished',
  usage: 'Indoor',
  image: 'https://aparnaunispace.com/how-to-choose-the-perfect-tiles-for-your-home/'
}, {
  id: '2',
  name: 'Slate Grey',
  category: 'Parking Tiles',
  size: '300x600mm',
  finish: 'Matte',
  usage: 'Indoor/Outdoor',
  image: 'https://images.unsplash.com/photo-1520106689531-9a7444154a41?q=80&w=2072&auto=format&fit=crop'
}, {
  id: '3',
  name: 'Travertine Beige',
  category: 'Wall Tiles',
  size: '450x450mm',
  finish: 'Honed',
  usage: 'Indoor',
  image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2070&auto=format&fit=crop'
}, {
  id: '4',
  name: 'Subway White',
  category: 'Full Body',
  size: '100x300mm',
  finish: 'Glossy',
  usage: 'Wall',
  image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop'
}, {
  id: '5',
  name: 'Wood Effect Oak',
  category: 'Floor',
  size: '200x1200mm',
  finish: 'Matte',
  usage: 'Indoor',
  image: 'https://aparnaunispace.com/wp-content/uploads/2024/07/How-to-Choose-the-Perfect-the-Tiles-for-Home-1.jpg'
}, {
  id: '6',
  name: 'Mosaic Hexagon',
  category: 'Bathroom',
  size: '300x300mm',
  finish: 'Mixed',
  usage: 'Wall/Floor',
  image: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=2070&auto=format&fit=crop'
}, {
  id: '7',
  name: 'Concrete Grey',
  category: 'Outdoor',
  size: '600x600mm',
  finish: 'Textured',
  usage: 'Outdoor',
  image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop'
}, {
  id: '8',
  name: 'Terracotta',
  category: 'Outdoor',
  size: '400x400mm',
  finish: 'Matte',
  usage: 'Outdoor',
  image: 'https://images.unsplash.com/photo-1459478309853-2c33a60058e7?q=80&w=2070&auto=format&fit=crop'
}, {
  id: '9',
  name: 'Black Granite',
  category: 'Kitchen',
  size: '300x600mm',
  finish: 'Polished',
  usage: 'Countertop/Floor',
  image: 'https://images.unsplash.com/photo-1620615307704-47f91369540f?q=80&w=1974&auto=format&fit=crop'
}, {
  id: '10',
  name: 'Cream Limestone',
  category: 'Floor',
  size: '600x600mm',
  finish: 'Honed',
  usage: 'Indoor',
  image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop'
}];
export function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProducts = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory || activeCategory === 'Bathroom' && p.category === 'Wall' || activeCategory === 'Kitchen' && p.category === 'Wall');
  return <section id="products" className="py-20 md:py-32 bg-[#F9F7F5]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h4 className="text-[#C9A961] font-bold tracking-widest uppercase text-sm mb-4">
            Our Collections
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
            Discover Excellence
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category ? 'bg-[#2C2C2C] text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-[#D4C5B9] hover:text-[#2C2C2C]'}`}>
              {category}
            </button>)}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg">
            View Full Catalog
          </Button>
        </div>
      </div>
    </section>;
}