"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion, useInView } from "framer-motion";

export default function LivingRendersCarousel() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div ref={ref} className="w-full h-full">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans text-center"
      >
        How It Works
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Carousel items={cards} />
      </motion.div>
    </div>
  );
}

const StepContent = ({ stepNumber, title, description, details }: {
  stepNumber: string;
  title: string;
  description: string;
  details: string[];
}) => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"step-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <div className="mb-6">
                <span className="font-bold text-neutral-700 dark:text-neutral-200 text-sm uppercase tracking-wide">
                  {stepNumber}
                </span>
                <h3 className="font-bold text-neutral-700 dark:text-neutral-200 text-2xl md:text-4xl mb-4">
                  {title}
                </h3>
                <p className="text-lg md:text-xl mb-6">
                  {description}
                </p>
              </div>
              <ul className="space-y-3">
                {details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Step 01",
    title: "Upload Your Renders",
    src: "/Development3.png",
    content: <StepContent 
      stepNumber="Step 01"
      title="Upload Your Renders"
      description="Send us your property development files and we'll get started immediately."
      details={[
        "Upload 3D renders, 360° images, or architectural drawings",
        "Support for all major file formats (JPG, PNG, OBJ, FBX)",
        "Secure file transfer with end-to-end encryption",
        "No file size limits - we handle large projects"
      ]}
    />,
  },
  {
    category: "Step 02",
    title: "AI Video Generation",
    src: "/AI3.png",
    content: <StepContent 
      stepNumber="Step 02"
      title="AI Video Generation"
      description="Our cutting-edge AI transforms your static renders into cinematic video walkthroughs."
      details={[
        "Advanced AI algorithms create realistic camera movements",
        "Automatic lighting and atmosphere enhancement",
        "Cinematic transitions and professional editing",
        "Multiple video formats for different platforms"
      ]}
    />,
  },
  {
    category: "Step 03",
    title: "Ready to Showcase",
    src: "/layout2.png",
    content: <StepContent 
      stepNumber="Step 03"
      title="Ready to Showcase"
      description="Deploy your videos across all marketing channels to boost sales and buyer confidence."
      details={[
        "Perfect for social media, websites, and presentations",
        "Optimized for mobile and desktop viewing",
        "Ready-to-use formats for all platforms",
        "Track engagement and conversion metrics"
      ]}
    />,
  },
]; 