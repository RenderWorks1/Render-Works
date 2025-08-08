"use client";
import { motion } from "framer-motion";

const slides = [
  { 
    title: "3D Rendering",
    description: "Transform your property plans into stunning 3D visualizations that showcase every detail. Our high-quality renders bring your developments to life with photorealistic quality.",
  },
  { 
    title: "AI Video Generation",
    description: "Create cinematic video walkthroughs using cutting-edge AI technology. Generate professional-quality videos in days, not weeks, with automated scene creation and smooth transitions.",
  },
  { 
    title: "Social Media Ready Clips",
    description: "Perfect for social media platforms with optimized formats and engaging content. Create viral-worthy clips that drive engagement and attract potential buyers across all channels.",
  },
  { 
    title: "Marketing Campaigns",
    description: "Comprehensive marketing solutions that integrate seamlessly with your campaigns. From property listings to investor presentations, we deliver content that converts.",
  },
];

export default function StickyShowcase() {
  return (
    <section className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-0 px-6 md:px-10 py-24">
        {/* Left: tall scrolling column */}
        <div className="space-y-0">
          {slides.map((s, i) => (
            <figure
              key={i}
              className="h-screen flex flex-col justify-center"
            >
              <div className="h-full overflow-hidden bg-white/3 p-12 pt-16 pb-16 px-20 flex flex-col justify-center">
                <h3 className="text-4xl font-bold mb-16">{s.title}</h3>
                <p className="text-gray-300 text-xl leading-relaxed">
                  {s.description}
                </p>
              </div>
            </figure>
          ))}
        </div>

        {/* Right: sticky text that stays put */}
        <aside className="md:sticky md:top-0 self-start flex items-center justify-center h-screen relative">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: 'url(/render2.jpg)' }}></div>
          <div className="text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-center">
              What We Offer
            </h2>
          </div>
        </aside>
      </div>
    </section>
  );
} 