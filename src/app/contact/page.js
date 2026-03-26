"use client";
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-purple-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-black mb-4 uppercase tracking-tighter">Contact Us</h1>
          <p className="text-purple-200 text-xl max-w-2xl mx-auto font-medium italic">
            "We are always ready to resolve your technical problems.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-3 gap-12">
        {/* संपर्क कार्ड्स */}
        <div className="md:col-span-1 space-y-6">
          <div className="p-8 bg-purple-50 rounded-[2rem] border border-purple-100 group hover:bg-purple-900 transition-all">
            <Phone className="text-orange-600 mb-4 group-hover:text-white" size={32} />
            <h3 className="text-xl font-bold mb-2 group-hover:text-white">Call Us</h3>
            <p className="text-gray-600 group-hover:text-purple-200 font-bold">Mobile - 8797858081</p>
          </div>
          <div className="p-8 bg-orange-50 rounded-[2rem] border border-orange-100 group hover:bg-orange-600 transition-all">
            <Mail className="text-purple-900 mb-4 group-hover:text-dark red" size={32} />
            <h3 className="text-xl font-bold mb-2 group-hover:text-white">Email</h3>
            <p className="text-gray-600 group-hover:text-orange-100 font-bold">info@samriya.com</p>
          </div>
        </div>

        {/* फॉर्म सेक्शन */}
        <div className="md:col-span-2 bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100">
          <h2 className="text-3xl font-black text-purple-900 mb-8 flex items-center">
            <MessageSquare className="mr-3 text-red-900" /> Write Us
          </h2>
          <form className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name" className="p-4 rounded-2xl bg-gray-50 border focus:ring-2 focus:ring-purple-900 outline-none" />
            <input type="email" placeholder="Email Id" className="p-4 rounded-2xl bg-gray-50 border focus:ring-2 focus:ring-purple-900 outline-none" />
            <input type="text" placeholder="Subject" className="p-4 rounded-2xl bg-gray-50 border focus:ring-2 focus:ring-purple-900 outline-none md:col-span-2" />
            <textarea placeholder="Write here..." rows="5" className="p-4 rounded-2xl bg-gray-50 border focus:ring-2 focus:ring-purple-900 outline-none md:col-span-2"></textarea>
            <button className="bg-purple-900 text-white font-bold py-5 rounded-2xl flex items-center justify-center hover:bg-orange-600 transition md:col-span-2">
              Submit Now <Send className="ml-2" size={20} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}