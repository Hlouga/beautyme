"use client";

import { useState } from "react";

type PortfolioItem = {
  id: string;
  imageKey: string;
  caption: string | null;
  altText: string | null;
};

export function PortfolioLightbox({ items }: { items: PortfolioItem[] }) {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  if (!items || items.length === 0) {
    return (
      <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm text-center">
        <p className="text-gray-500">This provider hasn't uploaded any portfolio images yet.</p>
      </div>
    );
  }

  return (
    <>
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedImage(item)}
            className="relative aspect-square rounded-2xl overflow-hidden group bg-gray-100 cursor-pointer"
          >
            <img
              src={`${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/${item.imageKey}`}
              alt={item.altText || "Portfolio image"}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-3xl">🔍</span>
            </div>
          </div>
        ))}
      </div>

      {/* Full Screen Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>

          {/* Full Image */}
          <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={`${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/${selectedImage.imageKey}`}
              alt={selectedImage.altText || "Portfolio image full screen"}
              className="object-contain w-full h-full max-h-[80vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
            />
            
            {/* Caption */}
            {selectedImage.caption && (
              <p className="text-white text-lg mt-4 text-center font-medium bg-black/50 px-4 py-2 rounded-full">
                {selectedImage.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}