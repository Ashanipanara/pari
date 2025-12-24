import React from 'react';
import { motion } from 'framer-motion';
import { BoxIcon } from 'lucide-react';
interface FeatureCardProps {
  icon: BoxIcon;
  title: string;
  description: string;
  delay?: number;
}
export function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0
}: FeatureCardProps) {
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
  }} className="flex flex-col items-center text-center p-6 bg-white border border-gray-100 hover:border-[#D4C5B9] hover:shadow-lg transition-all duration-300 group">
      <div className="mb-4 p-4 bg-[#F9F7F5] rounded-full group-hover:bg-[#D4C5B9] transition-colors duration-300">
        <Icon className="w-8 h-8 text-[#2C2C2C] group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>;
}