"use client";

import React, { useState } from "react";
import { Database, Search, Cpu, Globe, ArrowRight, Layers, CheckCircle } from "lucide-react";

export default function PricingAndProductsPage() {
  const [lang, setLang] = useState("EN");

  // Combined content for pricing & products
  const content = {
    EN: {
      pricing: {
        title: "Plans & Pricing",
        subtitle: "Flexible pricing models designed to scale with your business needs.",
        button: "Get Started",
        plans: [
          { name: "Starter", price: "$19/mo", features: ["Core Features Access", "Basic Support", "Single User"] },
          { name: "Corporate", price: "$99/mo", highlight: true, features: ["Advanced Features", "Priority Support", "Up to 5 Users"] },
          { name: "Enterprise", price: "Custom", features: ["Full Platform Access", "Dedicated Infrastructure", "Unlimited Users"] },
        ],
      },
      products: {
        title: "Our Products",
        subtitle: "Flexible, scalable, and domain-agnostic solutions designed to work across industries and data environments.",
        button: "Explore",
        list: [
          { name: "Faith Platform", desc: "Modular intelligence platform for complex workflows.", icon: <Layers /> },
          { name: "Data Analyzer", desc: "Advanced analytics engine for structured & unstructured datasets.", icon: <Search /> },
          { name: "Processing Engine", desc: "High-performance computation system for large-scale tasks.", icon: <Cpu /> },
          { name: "Network Insights", desc: "Data mapping & visualization tools for complex network relationships.", icon: <Globe /> },
        ],
      },
    },
    HI: {
      pricing: {
        title: "प्लान और प्राइसिंग",
        subtitle: "आपके व्यवसाय की जरूरतों के अनुसार लचीले प्राइसिंग विकल्प।",
        button: "शुरू करें",
        plans: [
          { name: "स्टार्टर", price: "₹1500/माह", features: ["बेसिक फीचर्स", "सामान्य सपोर्ट", "1 यूज़र"] },
          { name: "कॉरपोरेट", price: "₹8000/माह", highlight: true, features: ["एडवांस्ड फीचर्स", "प्राथमिक सपोर्ट", "5 यूज़र तक"] },
          { name: "एंटरप्राइज", price: "कस्टम", features: ["पूरा प्लेटफॉर्म एक्सेस", "डेडिकेटेड सर्वर", "अनलिमिटेड यूज़र"] },
        ],
      },
      products: {
        title: "हमारे उत्पाद",
        subtitle: "लचीले और स्केलेबल समाधान जो विभिन्न उद्योगों और डेटा सिस्टम में उपयोग किए जा सकते हैं।",
        button: "देखें",
        list: [
          { name: "फेथ प्लेटफॉर्म", desc: "एक मॉड्यूलर प्लेटफॉर्म जो विभिन्न क्षेत्रों में जटिल डेटा को संभालने के लिए बनाया गया है।", icon: <Layers /> },
          { name: "डेटा एनालाइज़र", desc: "तेज़ और सटीक डेटा विश्लेषण के लिए उन्नत सिस्टम।", icon: <Search /> },
          { name: "प्रोसेसिंग इंजन", desc: "बड़े पैमाने पर डेटा प्रोसेसिंग के लिए उच्च-प्रदर्शन प्रणाली।", icon: <Cpu /> },
          { name: "नेटवर्क इनसाइट्स", desc: "जटिल डेटा संबंधों को समझने के लिए विज़ुअलाइज़ेशन टूल्स।", icon: <Globe /> },
        ],
      },
    },
  };

  return (
    <div className="bg-white pb-20 px-4">
      {/* Language Switch */}
      <div className="max-w-7xl mx-auto flex justify-end py-6">
        <button
          onClick={() => setLang(lang === "EN" ? "HI" : "EN")}
          className="px-3 py-1 border rounded-md text-sm hover:bg-purple-900 hover:text-white transition"
        >
          {lang}
        </button>
      </div>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto text-center py-16">
        <h1 className="text-3xl md:text-5xl font-bold text-purple-900 mb-4">{content[lang].pricing.title}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">{content[lang].pricing.subtitle}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {content[lang].pricing.plans.map((plan, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl border transition-all ${
                plan.highlight
                  ? "bg-purple-900 text-white scale-105 shadow-xl border-purple-900"
                  : "bg-white border-gray-200"
              }`}
            >
              <h3 className="text-lg font-semibold mb-2 uppercase tracking-wide">{plan.name}</h3>
              <div className="text-3xl font-bold mb-6">{plan.price}</div>
              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center">
                    <CheckCircle
                      className={`mr-2 ${plan.highlight ? "text-orange-400" : "text-purple-900"}`}
                      size={18}
                    />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-orange-600 text-white hover:bg-white hover:text-purple-900"
                    : "bg-purple-900 text-white hover:bg-orange-600"
                }`}
              >
                {content[lang].pricing.button}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto text-center py-16">
        <h1 className="text-3xl md:text-5xl font-bold text-purple-900 mb-4">{content[lang].products.title}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">{content[lang].products.subtitle}</p>
        <div className="grid md:grid-cols-2 gap-8">
          {content[lang].products.list.map((p, i) => (
            <div
              key={i}
              className="p-8 border rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition flex flex-col items-start text-left group"
            >
              <div className="p-4 bg-white rounded-xl shadow-sm text-purple-900 mb-4 group-hover:bg-orange-600 group-hover:text-white transition">
                {p.icon}
              </div>
              <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{p.desc}</p>
              <button className="flex items-center text-sm font-medium text-purple-900 group-hover:text-orange-600">
                {content[lang].products.button} <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}