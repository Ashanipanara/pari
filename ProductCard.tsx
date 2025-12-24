import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export interface Product {
  id: string;
  name: string;
  category: string;
  size: string;
  finish: string;
  usage: string;
  image: string;
}
interface ProductCardProps {
  product: Product;
}
export function ProductCard({
  product
}: ProductCardProps) {
  return <motion.div className="group relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300" initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5
  }}>
      <div className="aspect-square overflow-hidden relative">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white text-[#2C2C2C] px-6 py-2 font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
            View Details <ArrowRight size={16} />
          </button>
        </div>
      </div>
      <div className="p-4 bg-white">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-[#2C2C2C]">
            {product.name}
          </h3>
          <span className="text-xs uppercase tracking-wider text-[#C9A961] font-medium border border-[#C9A961] px-2 py-0.5">
            {product.category}
          </span>
        </div>
        <div className="space-y-1 text-sm text-gray-600">
          <p>
            <span className="font-medium text-gray-900">Size:</span>{' '}
            {product.size}
          </p>
          <p>
            <span className="font-medium text-gray-900">Finish:</span>{' '}
            {product.finish}
          </p>
          <p>
            <span className="font-medium text-gray-900">Usage:</span>{' '}
            {product.usage}
          </p>
        </div>
      </div>
    </motion.div>;
}