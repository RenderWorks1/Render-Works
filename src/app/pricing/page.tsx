'use client';

import { AuroraBackground } from '@/components/ui/aurora-background';

export default function PricingPage() {
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
            <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <span className="text-xl font-bold text-white">Render Works</span>
              {/* Main Logo Image */}
              <img src="/Mainlogo.png" alt="Render Works Logo" width={40} height={40} className="object-contain -mt-1" />
            </a>

            {/* Center Navigation - Large Pill with White Border */}
            <div className="hidden md:flex items-center border border-white/20 rounded-full pl-1 pr-1 py-1 absolute left-1/2 transform -translate-x-1/2" style={{ backgroundColor: '#121212' }}>
              {/* How It Works - Inactive */}
              <a href="/" className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white rounded-full transition-all duration-200 font-medium text-sm">
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <span>How It Works</span>
              </a>
              
              {/* Benefits - Inactive */}
              <a href="/#benefits" className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white rounded-full transition-all duration-200 font-medium text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                <span>Benefits</span>
              </a>
              
              {/* Pricing - Active */}
              <button className="flex items-center space-x-2 px-3 py-2 bg-gray-200 text-gray-900 rounded-full transition-all duration-200 font-medium text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
                <span>Pricing</span>
              </button>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-4">
              {/* Enquire */}
              <a href="/enquire" className="px-4 py-2 bg-gray-200 text-gray-900 rounded-full hover:bg-gray-300 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-300">
                Enquire
              </a>
            </div>
          </div>
        </nav>

        {/* Pricing Content */}
        <main className="relative z-10 px-4 sm:px-6 lg:px-8 pt-32 pb-48 sm:pt-48 sm:pb-56">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-200 mb-8 leading-tight font-inter tracking-tight">
              Choose Your Plan
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-200 mb-16 max-w-2xl mx-auto leading-relaxed font-inter font-medium">
              Professional video walkthroughs at competitive prices. No hidden fees, no surprises.
            </p>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {/* Starter Plan */}
              <div className="backdrop-blur-sm rounded-2xl p-12 relative" style={{ backgroundColor: '#121212' }}>
                <div>
                  <h3 className="text-2xl font-medium text-gray-200 mb-2 text-left">Render Only</h3>
                  <p className="text-gray-400 text-sm mb-4 text-left">Perfect for static presentation needs</p>
                  <div className="text-4xl font-medium text-gray-200 mb-6 text-left">$749</div>
                  <button className="w-full px-6 py-3 bg-gray-200 text-gray-900 font-medium rounded-xl hover:bg-gray-300 transition-colors duration-200 mb-12">
                    Buy plan
                  </button>
                  <ul className="text-left space-y-4">
                    <li className="flex items-center text-gray-300">
                      <div className="w-1 h-1 bg-white rounded-full mr-3"></div>
                      1–3 Premium Renders
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1 h-1 bg-white rounded-full mr-3"></div>
                      Ideal for real estate listings & investor decks
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1 h-1 bg-white rounded-full mr-3"></div>
                      Includes basic lighting and material work
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1 h-1 bg-white rounded-full mr-3"></div>
                      1 Revision included
                    </li>
                  </ul>
                </div>
              </div>

              {/* Professional Plan */}
              <div className="backdrop-blur-sm rounded-2xl p-12 relative" style={{ backgroundColor: '#121212' }}>
                <div>
                  <h3 className="text-2xl font-medium text-gray-200 mb-2 text-left">Render + Animation</h3>
                  <p className="text-gray-400 text-sm mb-4 text-left">For when stills aren't enough</p>
                  <div className="text-4xl font-medium text-gray-200 mb-6 text-left">$2999</div>
                  <button className="w-full px-6 py-3 bg-gray-200 text-gray-900 font-medium rounded-xl hover:bg-gray-300 transition-colors duration-200 mb-12">
                    Buy plan
                  </button>
                  <ul className="text-left space-y-4">
                    <li className="flex items-center text-gray-300">
                      <div className="w-1 h-1 bg-white rounded-full mr-3"></div>
                      3+ High-End Renders
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1 h-1 bg-white rounded-full mr-3"></div>
                      10–30 second cinematic animation
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1 h-1 bg-white rounded-full mr-3"></div>
                      Motion paths, lighting transitions, fly-throughs
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1 h-1 bg-white rounded-full mr-3"></div>
                      2 Rounds of revisions
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1 h-1 bg-white rounded-full mr-3"></div>
                      Optional background music
                    </li>
                  </ul>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="backdrop-blur-sm rounded-2xl p-12 relative bg-gray-300">
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-2 text-left">Custom Package</h3>
                  <p className="text-gray-600 text-sm mb-4 text-left">Tailored to your project, your vision</p>
                  <div className="text-4xl font-medium text-gray-900 mb-6 text-left">Custom</div>
                  <button className="w-full px-6 py-3 text-white font-medium rounded-xl hover:bg-gray-700 transition-colors duration-200 mb-12 border border-gray-400" style={{ backgroundColor: '#242425' }}>
                    Get Started
                  </button>
                  <ul className="text-left space-y-4">
                    <li className="flex items-center text-gray-700">
                      <div className="w-1 h-1 bg-gray-900 rounded-full mr-3"></div>
                      Renders, animations, interactive elements — you name it
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-1 h-1 bg-gray-900 rounded-full mr-3"></div>
                      Strategy call to align on goals
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-1 h-1 bg-gray-900 rounded-full mr-3"></div>
                      Unlimited potential: branding, editing, voiceover, 3D floorplans
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-1 h-1 bg-gray-900 rounded-full mr-3"></div>
                      Flexible revisions
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-1 h-1 bg-gray-900 rounded-full mr-3"></div>
                      Priority support & collaboration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </AuroraBackground>
    </>
  );
} 