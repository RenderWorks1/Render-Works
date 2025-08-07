'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "How long does it take to create a video walkthrough?",
      answer: "Our AI-powered pipeline delivers professional video walkthroughs in 3-5 business days, significantly faster than traditional methods that can take weeks."
    },
    {
      question: "What file formats do you provide?",
      answer: "We deliver high-quality MP4 files optimized for web, social media, and presentations. We also provide source files for further editing if needed."
    },
    {
      question: "Can you work with existing 3D models?",
      answer: "Yes! We can work with your existing 3D models, architectural drawings, or even just concept sketches. Our AI can create stunning visuals from various input formats."
    },
    {
      question: "Do you offer revisions?",
      answer: "Absolutely. We include 1-2 rounds of revisions depending on your package. We want to ensure you're completely satisfied with the final result."
    },
    {
      question: "What makes your videos different from competitors?",
      answer: "Our AI technology creates Hollywood-quality cinematic sequences with realistic lighting, camera movements, and atmospheric effects that showcase properties in their most compelling light."
    },
    {
      question: "Can you create videos for different marketing channels?",
      answer: "Yes! We optimize videos for social media, websites, presentations, and advertising campaigns. Each video is tailored to maximize engagement for your specific marketing goals."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-32" style={{ backgroundColor: '#121212' }}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-medium text-gray-200 mb-6 leading-tight font-inter tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-inter">
            Everything you need to know about our AI-powered video walkthrough services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-sm overflow-hidden border-b border-white/20"
              style={{ backgroundColor: '#121212' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-gray-200 pr-4">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 