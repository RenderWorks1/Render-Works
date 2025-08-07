'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AuroraBackground } from '@/components/ui/aurora-background';

export default function EnquirePage() {
  return (
    <>
      {/* Hero Section with Aurora Background */}
      <AuroraBackground className="bg-black dark:bg-black min-h-screen">
        {/* Circular gradient overlay */}
        <div className="absolute inset-0 circular-gradient pointer-events-none"></div>
        
        {/* Navigation - Fixed and Transparent */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto relative flex items-center justify-between">
            {/* Left - Logo */}
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <span className="text-xl font-bold text-white">Render Works</span>
              {/* Main Logo Image */}
              <Image src="/Mainlogo.png" alt="Render Works Logo" width={40} height={40} className="object-contain -mt-1" />
            </Link>

            {/* Center Navigation - Large Pill with White Border */}
            <div className="hidden md:flex items-center border border-white/20 rounded-full pl-1 pr-1 py-1 absolute left-1/2 transform -translate-x-1/2" style={{ backgroundColor: '#121212' }}>
              {/* How It Works - Inactive */}
              <Link href="/" className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white rounded-full transition-all duration-200 font-medium text-sm">
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <span>How It Works</span>
              </Link>
              
              {/* Benefits - Inactive */}
              <Link href="/#benefits" className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white rounded-full transition-all duration-200 font-medium text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                <span>Benefits</span>
              </Link>
              
              {/* Enquire - Active */}
              <button className="flex items-center space-x-2 px-3 py-2 bg-gray-200 text-gray-900 rounded-full transition-all duration-200 font-medium text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
                <span>Enquire</span>
              </button>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-4">
              {/* Empty div to maintain layout */}
            </div>
          </div>
        </nav>

        {/* Enquire Content */}
        <main className="relative z-10 px-4 sm:px-6 lg:px-8 pt-32 pb-48 sm:pt-48 sm:pb-56">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-200 mb-8 leading-tight font-inter tracking-tight">
              Let&apos;s Start Your Project
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-200 mb-16 max-w-2xl mx-auto leading-relaxed font-inter font-medium">
              Ready to bring your development to life? Get in touch and we&apos;ll discuss your vision.
            </p>

            {/* Email Form */}
            <div className="max-w-md mx-auto">
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 text-left">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent backdrop-blur-sm"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gray-200 text-gray-900 font-medium rounded-xl hover:bg-gray-300 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </main>
      </AuroraBackground>
    </>
  );
} 