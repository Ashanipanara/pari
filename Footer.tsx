import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
export function Footer() {
  return <footer className="bg-[#1A1A1A] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <a href="#hero" className="text-2xl font-bold tracking-tight mb-6 block">
              PARI CERAMICS<span className="text-[#C9A961]">.</span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium quality tiles for modern spaces. We bring the world's
              finest textures and finishes to your doorstep.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#C9A961] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C9A961] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C9A961] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C9A961] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#C9A961] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-[#C9A961] transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#applications" className="text-gray-400 hover:text-[#C9A961] transition-colors">
                  Applications
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-[#C9A961] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#C9A961] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6">Collections</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#C9A961] transition-colors">
                  Floor Tiles
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#C9A961] transition-colors">
                  Wall Tiles
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#C9A961] transition-colors">
                  Bathroom
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#C9A961] transition-colors">
                  Kitchen
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#C9A961] transition-colors">
                  Outdoor
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on new collections and special offers.
            </p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="bg-[#2C2C2C] border-none text-white px-4 py-2 flex-grow focus:ring-1 focus:ring-[#C9A961] outline-none" />
              <button className="bg-[#C9A961] text-[#2C2C2C] px-4 py-2 font-medium hover:bg-[#b09250] transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} PARI CERAMICS. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
}