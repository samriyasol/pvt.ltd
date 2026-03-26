"use client";
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // यहाँ आपके सभी मेनू और सब-मेनू का पूरा डेटा है
  const menuData = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products", submenu: ["Faith V 1.0", "CDR Analyzer", "SDR Tool", "Tower Dump Analysis"] },
    { name: "Solutions", href: "/solutions", submenu: ["Digital Forensics", "Data Integrity", "Network Security"] },
    { name: "Pricing", href: "/pricing", submenu: ["Starter Plan", "Corporate Plan", "Enterprise"] },
    { name: "Gallery", href: "/gallery" },
    { name: "Demo", href: "/demo" },
    { name: "Contact Us", href: "/contact" }, // अगर अलग पेज है तो "/contact" करें
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <style jsx global>{`
        @keyframes rotate-cw { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes rotate-acw { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        .ring-cw { animation: rotate-cw 12s linear infinite; }
        .ring-acw { animation: rotate-acw 20s linear infinite; }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        {/* लोगो */}
        <Link href="/" className="flex items-center space-x-4">
          <div className="relative h-12 w-12 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-dashed border-purple-900/30 rounded-full ring-acw"></div>
            <div className="absolute inset-2 border border-orange-500/40 rounded-full ring-cw"></div>
            <img src="/SAMRIYA.PNG" alt="Logo" className="relative h-8 w-8 object-contain z-10" />
          </div>
          <div className="flex flex-col">
            <span className="text-purple-900 font-bold text-xl leading-none">SAMRIYA</span>
            <span className="text-[8px] text-orange-600 font-bold tracking-widest uppercase">Solution Pvt Ltd</span>
          </div>
        </Link>

        {/* डेस्कटॉप मेनू */}
        <div className="hidden xl:flex space-x-6 items-center">
          {menuData.map((item, i) => (
            <div key={i} className="relative group py-6">
              <Link href={item.href || "#"} className="flex items-center text-[11px] font-bold text-gray-700 hover:text-purple-900 uppercase tracking-wider transition">
                {item.name}
                {item.submenu && <ChevronDown className="ml-1 w-3 h-3" />}
              </Link>
              {item.submenu && (
                <div className="absolute left-0 mt-0 w-52 bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="p-2">
                    {item.submenu.map((sub, sIndex) => (
                      <a key={sIndex} href="#" className="block px-4 py-3 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-900 rounded-lg transition font-medium">
                        {sub}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* मोबाइल मेनू बटन */}
        <div className="xl:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-purple-900">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
}