import React, { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    href: '#hero'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Collections',
    href: '#products'
  }, {
    name: 'Why Us',
    href: '#why-us'
  }, {
    name: 'Applications',
    href: '#applications'
  }, {
    name: 'Testimonials',
    href: '#testimonials'
  }];
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className={`text-2xl font-bold tracking-tight z-50 relative ${isScrolled || isMobileMenuOpen ? 'text-[#2C2C2C]' : 'text-white'}`} onClick={e => scrollToSection(e, '#hero')}>
          PARI CERAMICS<span className="text-[#C9A961]">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <a key={link.name} href={link.href} onClick={e => scrollToSection(e, link.href)} className={`text-sm font-medium transition-colors hover:text-[#C9A961] ${isScrolled ? 'text-[#2C2C2C]' : 'text-white/90'}`}>
              {link.name}
            </a>)}
          <Button variant={isScrolled ? 'primary' : 'secondary'} size="sm" onClick={e => {
          const el = document.querySelector('#contact');
          el?.scrollIntoView({
            behavior: 'smooth'
          });
        }}>
            Get a Quote
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-50 relative p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X className="text-[#2C2C2C]" /> : <Menu className={isScrolled ? 'text-[#2C2C2C]' : 'text-white'} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && <motion.div initial={{
          opacity: 0,
          x: '100%'
        }} animate={{
          opacity: 1,
          x: 0
        }} exit={{
          opacity: 0,
          x: '100%'
        }} transition={{
          type: 'tween',
          duration: 0.3
        }} className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden">
              <nav className="flex flex-col items-center gap-8 text-lg">
                {navLinks.map(link => <a key={link.name} href={link.href} onClick={e => scrollToSection(e, link.href)} className="text-[#2C2C2C] font-medium hover:text-[#C9A961]">
                    {link.name}
                  </a>)}
                <a href="#contact" onClick={e => scrollToSection(e, '#contact')} className="text-[#2C2C2C] font-medium hover:text-[#C9A961]">
                  Contact Us
                </a>
                <div className="flex items-center gap-2 text-[#C9A961] mt-4">
                  <Phone size={20} />
                  <span className="font-medium">+1 (555) 123-4567</span>
                </div>
              </nav>
            </motion.div>}
        </AnimatePresence>
      </div>
    </header>;
}