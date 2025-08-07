import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AuroraBackground } from '@/components/ui/aurora-background';
import CarouselDemo from '@/components/ui/carousel-demo';
import CarouselDemoOptionB from '@/components/ui/carousel-demo-option-b';

export default function HowItWorksPage() {
  return (
    <>
      <AuroraBackground className="bg-black dark:bg-black min-h-screen">
        {/* Circular gradient overlay */}
        <div className="absolute inset-0 circular-gradient pointer-events-none"></div>
        {/* Navigation - Fixed and Transparent */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto relative flex items-center justify-between">
            {/* Left - Logo */}
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <span className="text-xl font-bold text-white">Render Works</span>
              <Image src="/Mainlogo.png" alt="Render Move Logo" width={40} height={40} className="object-contain -mt-1" />
            </Link>
            {/* Center Navigation - Large Pill with White Border */}
            <div className="hidden md:flex items-center border border-white/20 rounded-full pl-1 pr-3 py-1 absolute left-1/2 transform -translate-x-1/2" style={{ backgroundColor: '#121212' }}>
              <Link href="/how-it-works" className="flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-200 font-medium text-sm text-gray-300 hover:text-white">
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <span>How It Works</span>
              </Link>
              <Link href="/benefits" className="flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 font-medium text-sm text-gray-300 hover:text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                <span>Benefits</span>
              </Link>
              <Link href="/enquire" className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white rounded-full transition-all duration-200 font-medium text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
                <span>Enquire</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4"></div>
          </div>
        </nav>
        {/* Main Content */}
        <div className="min-h-screen text-gray-100 py-20 px-4 sm:px-6 lg:px-8 pt-40">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-center font-inter tracking-tight">How It Works</h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-20 text-center max-w-2xl mx-auto">
              Whether you have architectural plans, moodboards, or finished 3D renders, we turn your development vision into cinematic video walkthroughs. Our process combines photorealistic 3D rendering with advanced AI video generation, making it easy to showcase unbuilt properties for marketing, planning, or presales. Discover how we bring your ideas to life—step by step.
            </p>
            {/* Option Graphics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 mb-4">
              {/* Option A Graphic */}
              <div className="bg-[#18181b] rounded-2xl p-8 shadow-lg text-center">
                <div className="w-24 h-24 border-2 border-gray-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 font-inter text-white">Option A</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We Create the Renders<br />
                  No 3D visuals yet? We&apos;ll create them from your plans and drawings.
                </p>
              </div>
              {/* Option B Graphic */}
              <div className="bg-[#18181b] rounded-2xl p-8 shadow-lg text-center">
                <div className="w-24 h-24 border-2 border-gray-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 15V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 font-inter text-white">Option B</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  You Have Renders<br />
                  Already have 3D renders? We&apos;ll transform them into stunning videos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AuroraBackground>

      {/* Option A Section - Full Width */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-32" style={{ backgroundColor: '#121212' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Info */}
            <div>
              <div className="text-left mb-10 md:mb-0">
                <h2 className="text-4xl sm:text-5xl font-medium text-gray-200 mb-8 leading-tight font-inter tracking-tight">
                  Option A — We Create the Renders
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed font-inter mb-8">
                  No 3D visuals yet? No problem. Simply send us your development assets and we&apos;ll transform them into high-quality, photorealistic 3D renders.
                </p>
                <h3 className="text-2xl font-bold mb-4 font-inter text-white">What You Can Send Us</h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-300 mb-8 text-base">
                  <li>Floor plans</li>
                  <li>Site plans</li>
                  <li>Architectural drawings</li>
                  <li>Material selections</li>
                  <li>Moodboards or references</li>
                </ul>
                <h3 className="text-2xl font-bold mb-4 font-inter text-white mt-10">What We Deliver</h3>
                <p className="text-gray-300 leading-relaxed text-base">
                  Our team will transform your assets into high-quality, photorealistic 3D renders ready for marketing, planning, or presentation. These renders will serve as the foundation for creating stunning video walkthroughs that showcase your development in its best light.
                </p>
              </div>
            </div>
            {/* Right Column: Carousel Demo */}
            <div className="flex justify-center items-center">
              <CarouselDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Option B Section - Full Width */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-32" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Carousel Demo */}
            <div className="flex justify-center items-center">
              <CarouselDemoOptionB />
            </div>
            {/* Right Column: Info */}
            <div>
              <div className="text-left mb-10 md:mb-0">
                <h2 className="text-4xl sm:text-5xl font-medium text-gray-200 mb-8 leading-tight font-inter tracking-tight">
                  Option B — You Have Renders
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed font-inter mb-8">
                  Already have 3D renders? Send us your finished visuals and we&apos;ll transform them into cinematic marketing videos using advanced AI and creative editing.
                </p>
                <h3 className="text-2xl font-bold mb-4 font-inter text-white">What You Can Send Us</h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-300 mb-8 text-base">
                  <li>3D renders (images or animations)</li>
                  <li>Camera paths or flythroughs</li>
                  <li>Reference videos</li>
                  <li>Branding guidelines</li>
                  <li>Music or voiceover preferences</li>
                </ul>
                <h3 className="text-2xl font-bold mb-4 font-inter text-white mt-10">What We Deliver</h3>
                <p className="text-gray-300 leading-relaxed text-base">
                  We&apos;ll craft cinematic video walkthroughs from your 3D renders, complete with dynamic camera moves, music, and branding. Perfect for marketing, listings, and presentations—ready to impress your audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 