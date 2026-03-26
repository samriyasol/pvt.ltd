"use client";
import React from 'react';

export default function GalleryPage() {
  // ----------------------------
  // गैलरी आइटम्स - Public folder images
  // ----------------------------
  const galleryItems = [
    { id: 1, img: "/images/gallery1.png", caption: "Team working on project" }, // 
    { id: 2, img: "/images/gallery2.png", caption: "Office workspace" }, // 
    { id: 3, img: "/images/gallery3.png", caption: "Digital Forensics lab" },
    { id: 4, img: "/images/gallery4.png", caption: "Client meeting" },
    { id: 5, img: "/images/gallery5.png", caption: "Training session" },
    { id: 6, img: "/images/gallery6.png", caption: "Team celebration" },
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header Section */}
      <section className="bg-purple-900 text-white py-20 px-4 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-black mb-4 uppercase">Our Gallery</h1>
          <p className="text-purple-200 text-xl max-w-2xl mx-auto">
            A glimpse of the Samaria Solutions team, workplace, and digital programs.
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-gray-100 rounded-3xl h-80 overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-200 cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.img} // <-- यहाँ public folder image path डालें
                alt={item.caption}
                className="w-full h-full object-cover rounded-3xl transition-transform group-hover:scale-110"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-purple-900/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-bold text-lg text-center px-4">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}