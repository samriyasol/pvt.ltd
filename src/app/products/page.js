"use client";
import React, { useState } from "react";
import { Database, Search, Cpu, Globe, ArrowRight, Layers } from "lucide-react";

export default function ProductsPage() {
  const [lang, setLang] = useState("EN");

  const content = {
    EN: {
      title: "Our Products",
      subtitle:
        "Flexible, scalable, and domain-agnostic solutions designed to work across industries and data environments.",
      products: [
        {
          name: "Faith Platform",
          desc: "A modular intelligence platform designed to handle complex data workflows, adaptable across multiple domains.",
          icon: <Layers />,
        },
        {
          name: "Data Analyzer",
          desc: "Advanced analytics engine for processing structured and unstructured datasets with speed and accuracy.",
          icon: <Search />,
        },
        {
          name: "Processing Engine",
          desc: "High-performance computation system built to manage large-scale data processing tasks efficiently.",
          icon: <Cpu />,
        },
        {
          name: "Network Insights",
          desc: "Comprehensive data mapping and visualization tools for understanding complex network relationships.",
          icon: <Globe />,
        },
      ],
      button: "Explore",
    },
    HI: {
      title: "हमारे उत्पाद",
      subtitle:
        "लचीले और स्केलेबल समाधान जो विभिन्न उद्योगों और डेटा सिस्टम में उपयोग किए जा सकते हैं।",
      products: [
        {
          name: "फेथ प्लेटफॉर्म",
          desc: "एक मॉड्यूलर प्लेटफॉर्म जो विभिन्न क्षेत्रों में जटिल डेटा को संभालने के लिए बनाया गया है।",
          icon: <Layers />,
        },
        {
          name: "डेटा एनालाइज़र",
          desc: "तेज़ और सटीक डेटा विश्लेषण के लिए उन्नत सिस्टम।",
          icon: <Search />,
        },
        {
          name: "प्रोसेसिंग इंजन",
          desc: "बड़े पैमाने पर डेटा प्रोसेसिंग के लिए उच्च-प्रदर्शन प्रणाली।",
          icon: <Cpu />,
        },
        {
          name: "नेटवर्क इनसाइट्स",
          desc: "जटिल डेटा संबंधों को समझने के लिए विज़ुअलाइज़ेशन टूल्स।",
          icon: <Globe />,
        },
      ],
      button: "देखें",
    },
  };

  return (
    <div className="bg-white pb-20 px-4">
      <section className="py-20 max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl md:text-5xl font-bold text-purple-900">
            {content[lang].title}
          </h1>

          <button
            onClick={() => setLang(lang === "EN" ? "HI" : "EN")}
            className="px-3 py-1 border rounded-md text-sm hover:bg-purple-900 hover:text-white transition"
          >
            {lang}
          </button>
        </div>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          {content[lang].subtitle}
        </p>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {content[lang].products.map((p, i) => (
            <div
              key={i}
              className="p-8 border rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition flex flex-col items-start text-left group"
            >
              <div className="p-4 bg-white rounded-xl shadow-sm text-purple-900 mb-4 group-hover:bg-orange-600 group-hover:text-white transition">
                {p.icon}
              </div>

              <h2 className="text-xl font-semibold mb-2">{p.name}</h2>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {p.desc}
              </p>

              <button className="flex items-center text-sm font-medium text-purple-900 group-hover:text-orange-600">
                {content[lang].button} <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
