"use client";
import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    const yOffset = -80;
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* HERO with public folder image */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <img
          src="/1.png"  // <-- यहाँ public फोल्डर की image का नाम डालें
          alt="Company Building"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-purple-900/30"></div>

        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Intelligent Software for Modern Enterprises
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow">
            Inspired by the legacy of knowledge from Bihar, we design reliable,
            scalable, and secure data solutions for modern enterprises.
          </p>

          <button
            onClick={() => scrollToSection("philosophy")}
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition"
          >
            Explore Our Philosophy <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
            Our Philosophy
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine structured thinking, modern technology, and deep data
            understanding to deliver clarity in complex environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Accuracy First",
              desc: "We focus on reliable and verifiable data processing to support confident decision-making.",
            },
            {
              title: "Structured Intelligence",
              desc: "Transforming complex datasets into meaningful, actionable insights.",
            },
            {
              title: "Scalable Systems",
              desc: "Building solutions that handle high-volume data with performance and stability.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 border rounded-2xl hover:shadow-lg transition bg-white"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT */}
      <section className="bg-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Solution: Faith V1.0
            </h2>
            <p className="text-purple-200 mb-6">
              A powerful data intelligence platform designed for processing and
              analyzing large-scale telecom datasets with efficiency and
              precision.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
            <ul className="space-y-4">
              {["CDR Analysis", "Tower Dump Processing", "IMEI Tracking"].map(
                (item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-orange-400" />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Enterprise-grade reliability",
            "Built for high-volume data",
            "Rooted in strong analytical thinking",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl hover:shadow-md transition bg-white"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
