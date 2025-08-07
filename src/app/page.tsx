'use client';

import Image from 'next/image';
import { useState } from 'react';
import LivingRendersCarousel from '@/components/ui/living-renders-carousel';
import BenefitsSection from '@/components/ui/benefits-section';
import { AuroraBackground } from '@/components/ui/aurora-background';

export default function Home() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    {
      id: 1,
      src: '/vid1.mp4',
      title: 'Luxury Townhouse Complex',
      description: 'Exterior showcase of modern townhouse frontage'
    },
    {
      id: 2,
      src: '/vid4.mp4',
      title: 'Office Tower Development',
      description: 'Professional corporate facility showcase'
    },
    {
      id: 3,
      src: '/vid3.mp4',
      title: 'Suburban Housing Estate',
      description: 'Family-friendly neighborhood tour'
    }
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <>
      {/* Hero Section with Aurora Background */}
      <AuroraBackground className="bg-black dark:bg-black min-h-screen">
        {/* Circular gradient overlay */}
        <div className="absolute inset-0 circular-gradient pointer-events-none"></div>
        
        {/* Navigation - Fixed and Transparent */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <span className="text-xl font-bold text-white">Render Works</span>
              {/* Main Logo Image */}
              <Image src="/mainlogo.png" alt="Render Move Logo" width={40} height={40} className="object-contain -mt-1" />
            </div>

            {/* Center Navigation - Large Pill with White Border */}
            <div className="hidden md:flex items-center border border-white/20 rounded-full pl-1 pr-3 py-1" style={{ backgroundColor: '#121212' }}>
              {/* How It Works - Active */}
              <button className="flex items-center space-x-2 px-3 py-2 bg-gray-200 text-gray-900 rounded-full transition-all duration-200 font-medium text-sm">
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <span>How It Works</span>
              </button>
              
              {/* Benefits - Inactive */}
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white rounded-full transition-all duration-200 font-medium text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                <span>Benefits</span>
              </button>
              
              {/* Pricing - Inactive */}
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white rounded-full transition-all duration-200 font-medium text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
                <span>Pricing</span>
              </button>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-4">
              {/* Dark/Light Mode Toggle */}
              <button className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Log In */}
              <button className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-full transition-colors">
                Log in
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <main className="relative z-10 px-4 sm:px-6 lg:px-8 pt-32 pb-48 sm:pt-48 sm:pb-56">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-1 bg-gray-700/50 border border-gray-600/50 rounded-full text-gray-300 text-xs font-medium mb-8">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 animate-pulse"></div>
              Powered by AI Video Generation
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-200 mb-8 leading-tight font-inter tracking-tight">
              Bring Your Properties to Life
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-200 mb-12 max-w-md mx-auto leading-relaxed font-inter font-medium">
              We transform your unbuilt developments into cinematic video walkthroughs using cutting-edge AI. Perfect for ads, listings, and presales.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
              <button className="w-full sm:w-auto px-8 py-4 bg-gray-200 text-gray-900 font-bold text-base rounded-xl hover:bg-gray-300 transition-colors duration-200">
                Upload Your Renders
              </button>
              <button className="w-full sm:w-auto px-8 py-4 text-white font-bold text-base rounded-xl hover:bg-gray-800 transition-colors duration-200" style={{ backgroundColor: '#121212' }}>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Video Showcase Carousel */}
          <div className="max-w-7xl mx-auto mt-32">
            {/* Video Container */}
            <div className="relative w-full max-w-7xl mx-auto">
              <div className="relative aspect-video overflow-hidden shadow-2xl" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)' }}>
                <video 
                  key={videos[currentVideoIndex].id}
                  className="w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                >
                  <source src={videos[currentVideoIndex].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevVideo}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>

              <button 
                onClick={nextVideo}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideoIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentVideoIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </AuroraBackground>

      {/* How It Works Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-32" style={{ backgroundColor: '#121212' }}>
        <LivingRendersCarousel />
      </section>

      {/* Benefits Section */}
      <BenefitsSection />
    </>
  );
}