"use client";
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, ArrowUp } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-5">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-3 mb-6">
            <img src="/SAMRIYA.PNG" alt="Logo" className="h-8 w-8 object-contain" />
            <span className="text-2xl font- text-purple-900 tracking-tighter uppercase">SAMRIYA SOLUTION PVT LTD</span>
          </div>
          <p className="text-gray-500 max-w-sm leading-relaxed font-medium">
             Our mission is to re-establish Bihar as a global hub of knowledge by engineering intelligent digital systems rooted in accuracy and logical precision, transforming complex data into meaningful and actionable intelligence.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.facebook.com/SamriyaSol/" className="p-2 bg-white shadow-sm rounded-full text-purple-900 hover:bg-purple-900 hover:text-white transition"><Facebook size={18} /></a>
            <a href="#" className="p-2 bg-white shadow-sm rounded-full text-purple-900 hover:bg-purple-900 hover:text-white transition"><Linkedin size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-2 uppercase text-xs tracking-[0.2em] text-orange-600">Use Link</h4>
          <ul className="space-y-2 text-gray-600 font-semibold text-sm">
            <li><Link href="/" className="hover:text-purple-900 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-purple-900 transition">About</Link></li>
            <li><Link href="/products" className="hover:text-purple-900 transition">Products</Link></li>
            <li><Link href="/solutions" className="hover:text-purple-900 transition">Solutions</Link></li>
            <li><Link href="/pricing" className="hover:text-purple-900 transition">Pricing</Link></li>
            <li><Link href="/gallery" className="hover:text-purple-900 transition">Gallery</Link></li>
            <li><Link href="/demo" className="hover:text-purple-900 transition">Demo</Link></li>
            <li><Link href="/contact" className="hover:text-purple-900 transition">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-[0.2em] text-orange-600">Contact</h4>
          <ul className="space-y-4 text-gray-600 text-sm">
            <li className="flex items-start">
              <MapPin size={18} className="mr-3 text-purple-900 shrink-0" />
              <span>muzaffarpur,BIHAR</span>
            </li>
            <li className="flex items-center">
              <Phone size={18} className="mr-3 text-purple-900 shrink-0" />
              <span>990000****</span>
            </li>
            <li className="flex items-center">
              <Mail size={18} className="mr-3 text-purple-900 shrink-0" />
              <span>info[at]samriya[dot]com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-5 pt-2 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">
          © 2026 SAMRIYA SOLUTION PVT LTD. All Rights Reserved.
        </p>
        <button onClick={scrollToTop} className="bg-white p-3 shadow-md rounded-xl hover:shadow-lg transition-all border border-gray-100">
          <ArrowUp size={20} className="text-purple-900" />
        </button>
      </div>
    </footer>
  );
}
