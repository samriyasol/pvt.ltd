"use client";
import React, { useState } from "react";
import { Code, Database, ShieldCheck, Rocket } from "lucide-react";

export default function SolutionsPage() {
  const [lang, setLang] = useState("EN");

  const content = {
    EN: {
      title: "Our Solutions",
      items: [
        {
          title: "Software Development",
          desc: "We design and develop scalable, high-performance software systems tailored to business needs with a strong focus on reliability and maintainability.",
          icon: <Code size={36} />,
          color: "bg-purple-900",
        },
        {
          title: "Data Processing",
          desc: "Our platforms efficiently process and structure large volumes of data, transforming complexity into meaningful and actionable insights.",
          icon: <Database size={36} />,
          color: "bg-orange-600",
        },
        {
          title: "Secure Systems",
          desc: "We build secure and resilient architectures that protect sensitive information and ensure system integrity across environments.",
          icon: <ShieldCheck size={36} />,
          color: "bg-purple-800",
        },
        {
          title: "Upcoming Innovations",
          desc: "We are continuously working on next-generation solutions to expand capabilities in data intelligence and system automation.",
          icon: <Rocket size={36} />,
          color: "bg-gray-800",
        },
      ],
    },
    HI: {
      title: "हमारे समाधान",
      items: [
        {
          title: "सॉफ्टवेयर डेवलपमेंट",
          desc: "हम स्केलेबल और उच्च-प्रदर्शन वाले सॉफ्टवेयर सिस्टम विकसित करते हैं जो व्यवसाय की जरूरतों के अनुसार बनाए जाते हैं।",
          icon: <Code size={36} />,
          color: "bg-purple-900",
        },
        {
          title: "डेटा प्रोसेसिंग",
          desc: "हमारे सिस्टम बड़े डेटा को प्रोसेस करके उसे स्पष्ट और उपयोगी जानकारी में बदलते हैं।",
          icon: <Database size={36} />,
          color: "bg-orange-600",
        },
        {
          title: "सुरक्षित सिस्टम",
          desc: "हम सुरक्षित और विश्वसनीय सिस्टम आर्किटेक्चर बनाते हैं जो डेटा और सिस्टम को सुरक्षित रखते हैं।",
          icon: <ShieldCheck size={36} />,
          color: "bg-purple-800",
        },
        {
          title: "आगामी नवाचार",
          desc: "हम भविष्य की तकनीकों पर काम कर रहे हैं जो डेटा और ऑटोमेशन को और बेहतर बनाएंगी।",
          icon: <Rocket size={36} />,
          color: "bg-gray-800",
        },
      ],
    },
  };

  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900">
            {content[lang].title}
          </h2>

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "EN" ? "HI" : "EN")}
            className="px-3 py-1 border rounded-md text-sm hover:bg-purple-900 hover:text-white transition"
          >
            {lang}
          </button>
        </div>

        {/* Cards */}
        <div className="space-y-10">
          {content[lang].items.map((sol, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl bg-gray-50 border hover:shadow-lg transition"
            >
              <div className={`${sol.color} p-6 rounded-2xl text-white`}>
                {sol.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">{sol.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {sol.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
