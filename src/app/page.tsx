'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import LivingRendersCarousel from '@/components/ui/living-renders-carousel';
import BenefitsCometCards from '@/components/ui/benefits-comet-cards';
import FAQSection from '@/components/ui/faq-section';
import FooterSection from '@/components/ui/footer-section';
import { AuroraBackground } from '@/components/ui/aurora-background';
import StickyShowcase from '@/components/ui/sticky-showcase';
import Link from 'next/link';

export default function Home() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('');

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
      src: '/vid5.mp4',
      title: 'Suburban Housing Estate',
      description: 'Family-friendly neighborhood tour'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const whatWeOfferSection = document.getElementById('what-we-offer');
      const howItWorksSection = document.getElementById('how-it-works');
      const benefitsSection = document.getElementById('benefits');
      
      if (whatWeOfferSection) {
        const whatWeOfferRect = whatWeOfferSection.getBoundingClientRect();
        if (whatWeOfferRect.top <= 200 && whatWeOfferRect.bottom >= 200) {
          setActiveSection('what-we-offer');
          return;
        }
      }
      
      if (howItWorksSection) {
        const howItWorksRect = howItWorksSection.getBoundingClientRect();
        if (howItWorksRect.top <= 100 && howItWorksRect.bottom >= 100) {
          setActiveSection('how-it-works');
          return;
        }
      }
      
      if (benefitsSection) {
        const benefitsRect = benefitsSection.getBoundingClientRect();
        if (benefitsRect.top <= 100 && benefitsRect.bottom >= 100) {
          setActiveSection('benefits');
          return;
        }
      }
      
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Hero Section with Aurora Background */}
      <AuroraBackground className="bg-black dark:bg-black min-h-screen">
        {/* Circular gradient overlay */}
        <div className="absolute inset-0 circular-gradient pointer-events-none"></div>
        
        {/* Navigation - Fixed and Transparent */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto relative flex items-center justify-between">
            {/* Left - Logo */}
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <span className="text-xl font-bold text-white">Render Works</span>
              {/* Main Logo Image */}
              <Image src="/Mainlogo.png" alt="Render Move Logo" width={40} height={40} className="object-contain -mt-1" />
            </Link>

            {/* Center Navigation - Large Pill with White Border */}
            <div className="hidden md:flex items-center border border-white/20 rounded-full pl-1 pr-3 py-1 absolute left-1/2 transform -translate-x-1/2" style={{ backgroundColor: '#121212' }}>
              {/* What We Offer - Conditional Active */}
              <button 
                onClick={() => scrollToSection('what-we-offer')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-200 font-medium text-sm ${
                  activeSection === 'what-we-offer' 
                    ? 'bg-gray-200 text-gray-900' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <span>What We Offer</span>
              </button>
              
              {/* How It Works - Conditional Active */}
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 font-medium text-sm ${
                  activeSection === 'how-it-works' 
                    ? 'bg-gray-200 text-gray-900' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                <span>How It Works</span>
              </button>
              
              {/* Benefits - Conditional Active */}
              <button 
                onClick={() => scrollToSection('benefits')}
                className={`flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white rounded-full transition-all duration-200 font-medium text-sm ${
                  activeSection === 'benefits' 
                    ? 'bg-gray-200 text-gray-900' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Benefits</span>
              </button>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-4">
              <a href="/enquire" className="px-6 py-2 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors duration-200">
                Enquire
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <main className="relative z-10 px-4 sm:px-6 lg:px-8 pt-36 pb-48 sm:pt-52 sm:pb-56">
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
              <a href="/enquire" className="w-full sm:w-auto px-8 py-4 bg-gray-200 text-gray-900 font-bold text-base rounded-xl hover:bg-gray-300 transition-colors duration-200">
                Enquire
              </a>
              <button className="w-full sm:w-auto px-8 py-4 text-white font-bold text-base rounded-xl hover:bg-gray-800 transition-colors duration-200" style={{ backgroundColor: '#121212' }}>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Video Showcase Carousel */}
          <div className="w-full mx-auto mt-32" style={{ maxWidth: '88rem' }}>
            {/* Video Container */}
            <div className="relative w-full mx-auto">
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

      {/* What We Offer Section */}
      <section id="what-we-offer">
        <StickyShowcase />
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 px-4 sm:px-6 lg:px-8 py-24" style={{ backgroundColor: '#121212' }}>
        <LivingRendersCarousel />
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="relative z-10 px-4 sm:px-6 lg:px-8 py-32" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-medium text-gray-200 mb-6 leading-tight font-inter tracking-tight">
              Why Choose Render Works?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-inter">
              Transform your property presentations with cutting-edge AI technology and professional expertise.
            </p>
          </div>

          {/* Benefits Hover Effect */}
          <BenefitsCometCards />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer Section */}
      <FooterSection />
    </>
  );
}