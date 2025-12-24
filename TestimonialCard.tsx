import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating?: number;
  delay?: number;
}
export function TestimonialCard({
  name,
  role,
  content,
  rating = 5,
  delay = 0
}: TestimonialCardProps) {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5,
    delay
  }} className="bg-[#F9F7F5] p-8 relative">
      <Quote className="absolute top-6 right-6 text-[#D4C5B9] w-10 h-10 opacity-50" />
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-[#C9A961] fill-[#C9A961]' : 'text-gray-300'}`} />)}
      </div>
      <p className="text-gray-700 italic mb-6 leading-relaxed">"{content}"</p>
      <div>
        <h4 className="font-bold text-[#2C2C2C]">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </motion.div>;
}