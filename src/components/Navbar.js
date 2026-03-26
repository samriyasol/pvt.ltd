"use client";
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  };  
  
  const menuData = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products", submenu: ["Faith V 1.0", "CDR Analyzer", "SDR Tool", "Tower Dump Analysis"] },
    { name: "Solutions", href: "/solutions", submenu: ["Digital Forensics", "Data Integrity", "Network Security"] },
    { name: "Pricing", href: "/pricing", submenu: ["Starter Plan", "Corporate Plan", "Enterprise"] },
    { name: "Gallery", href: "/gallery" },
    { name: "Demo", href: "/demo" },
    { name: "Contact Us", href: "/contact" },
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
                <div className="absolute left-0 mt-0 w-52 bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
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

      {/* मोबाइल मेनू */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {menuData.map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => item.submenu && setOpenSubmenu(openSubmenu === i ? null : i)}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-gray-700 hover:bg-purple-50 hover:text-purple-900 rounded-lg transition uppercase tracking-wider"
                >
                  <Link href={item.href || "#"} onClick={!item.submenu ? closeMenu : undefined}>
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <ChevronDown 
                      size={16} 
                      className={`transform transition-transform ${openSubmenu === i ? 'rotate-180' : ''}`}
                    />
                  )}
                </button>
                
                {/* मोबाइल सबमेनू */}
                {item.submenu && openSubmenu === i && (
                  <div className="bg-gray-50 rounded-lg mt-2 ml-4 border-l-2 border-purple-500">
                    {item.submenu.map((sub, sIndex) => (
                      <a
                        key={sIndex}
                        href="#"
                        onClick={closeMenu}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-purple-100 hover:text-purple-900 rounded transition font-medium"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
