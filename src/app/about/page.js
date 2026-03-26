"use client";
import React from "react";
import Image from "next/image";
import { Target, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section className="bg-purple-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            About Samriya Solutions
          </h1>
          <p className="text-purple-200 text-base md:text-lg max-w-2xl mx-auto">
            We build reliable, scalable, and data-driven software systems that
            help organizations turn complex information into clear decisions.
          </p>
        </div>
      </section>

      {/* ABOUT + IMAGE */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">
              Our Approach
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We focus on structured thinking, data accuracy, and scalable
              architecture to build systems that perform consistently in
              real-world environments.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-purple-800">Mission</h3>
                <p className="text-gray-600 text-sm">
                  To transform complex data into structured intelligence using
                  reliable and scalable technology.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-purple-800">Vision</h3>
                <p className="text-gray-600 text-sm">
                  To become a globally trusted provider of intelligent data
                  solutions.
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE FROM PUBLIC */}
          <div className="rounded-3xl overflow-hidden border">
            <Image
              src="/1.png"
              alt="Team Samriya"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CORE SECTION */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Goal",
              icon: <Target className="text-orange-600" />,
              desc: "Achieve scalable growth by delivering reliable and intelligent data solutions to a growing user base.",
            },
            {
              title: "Our Team",
              icon: <Users className="text-purple-900" />,
              desc: "A focused team of engineers and problem-solvers building practical and scalable systems.",
            },
            {
              title: "Progress",
              icon: <Award className="text-orange-600" />,
              desc: "Defined core architecture, built initial prototype, and established a strong technical foundation.",
            },
          ].map((val, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{val.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{val.title}</h3>
              <p className="text-gray-600 text-sm">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6">
          Why Samriya
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Accuracy Focused",
            "Scalable Systems",
            "Secure Architecture",
            "Analytical Approach",
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 border rounded-xl text-sm hover:bg-purple-50"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
