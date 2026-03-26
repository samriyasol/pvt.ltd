"use client";
import React from 'react';
import { PlayCircle, ArrowRight, Shield } from 'lucide-react';

export default function DemoPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-purple-900 uppercase mb-4">
            LIVE <span className="text-orange-600">DEMO</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Experience the true potential of our digital forensic tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* वीडियो / प्रेजेंटेशन एरिया */}
	    <div className="aspect-video w-full">
  	    <iframe 
    	    className="w-full h-full rounded-3xl"
            src="https://www.youtube.com/embed/K7Pj7jbkHcM" 
            title="Product Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
  	></iframe>
      </div>


          {/* डेमो रिक्वेस्ट फॉर्म */}
          <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-purple-900 mb-6 flex items-center">
              <Shield className="mr-3 text-orange-600" /> Book a Demo
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Good Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900" placeholder="नाम लिखें" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email/Mobile No</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900" placeholder="संपर्क विवरण" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Select Product</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900 bg-white">
                  <option>Faith V 1.0</option>
                  <option>CDR Analyzer</option>
                  <option>अन्य</option>
                </select>
              </div>
              <button type="button" className="w-full bg-purple-900 text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors flex items-center justify-center">
                Submit Now <ArrowRight className="ml-2" size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}