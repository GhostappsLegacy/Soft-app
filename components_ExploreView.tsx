import React from "react";
import { Mic } from "lucide-react";
export function ExploreView() {
  return (
    <div className="px-4 pb-8">
      <h1 className="text-4xl font-bold mb-6 pt-4">Explorer</h1>
      <div className="relative mb-6">
        <input
          type="search"
          placeholder="Search"
          className="w-full h-12 px-4 pr-12 bg-gray-100 rounded-xl text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black/5"
          aria-label="Search properties"
        />
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-500 hover:text-gray-700"
          aria-label="Voice search"
        >
          <Mic size={20} />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
          >
            <div className="relative aspect-[4/3]">
              <img
                src={`https://images.unsplash.com/photo-160059654281${index}-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2575&q=80`}
                alt={`Property ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-3 bg-white">
              <h3 className="font-semibold text-sm">950 Kitchen</h3>
              <p className="text-gray-600 text-xs">950 Lucky Ave</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
