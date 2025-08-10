import React, { useEffect, forwardRef } from "react";
import { motion } from "framer-motion";
import AboutBack from "../components/AboutBack";

const AboutSection = forwardRef((props, ref) => {
  useEffect(() => {
    console.log("About section loaded");
  }, []);

  const socialProfiles = [
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: "https://www.linkedin.com/in/harshitayadav504"
    },
    {
      name: "GitHub",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: "https://github.com/harshitayadavv"
    },
    {
      name: "Resume",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        </svg>
      ),
      url: "https://drive.google.com/file/d/1W3zkmcHzuBWGtAFo53qRewguKkKjPUEm/view?usp=sharing"
    },
    {
      name: "LeetCode",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.024 2.019 7.306.188a7.028 7.028 0 0 0 1.839-2.165 1.314 1.314 0 0 0-.487-1.803 1.344 1.344 0 0 0-1.846.443 4.52 4.52 0 0 1-1.1 1.251c-1.421.90-2.556.754-3.784-.34l-4.189-4.119a2.96 2.96 0 0 1-.262-.264 2.72 2.72 0 0 1-.314-.687 2.365 2.365 0 0 1-.037-.277 2.327 2.327 0 0 1 .1-.692 2.4 2.4 0 0 1 .61-.967l8.24-8.795a1.375 1.375 0 0 0 0-1.946 1.394 1.394 0 0 0-1.946 0z"/>
        </svg>
      ),
      url: "https://leetcode.com/u/hersheyyys"
    },
    {
      name: "CodeChef",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.5 0c-.4.1-.7.5-.9.9L9 4.4c-.1.3-.1.6 0 .9.1.3.4.5.7.6l.4.1c.3 0 .6-.1.8-.3l1.6-3.5c.2-.4.1-.9-.3-1.2C12 .8 11.7.7 11.5 0zm1 0c.4.1.7.5.9.9L15 4.4c.1.3.1.6 0 .9-.1.3-.4.5-.7.6l-.4.1c-.3 0-.6-.1-.8-.3l-1.6-3.5c-.2-.4-.1-.9.3-1.2C12 .8 12.3.7 12.5 0zM12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0 1c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"/>
        </svg>
      ),
      url: "https://www.codechef.com/users/harshitaydv21"
    },
    {
      name: "Codeforces",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3A1.5 1.5 0 0 1 0 19.5V9a1.5 1.5 0 0 1 1.5-1.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 19.5v-15A1.5 1.5 0 0 1 10.5 3h3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z"/>
        </svg>
      ),
      url: "https://codeforces.com/profile/hersheyyys"
    },
    {
      name: "GeeksforGeeks",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.007zM16.115 11.185a3.317 3.317 0 0 1 4.34-4.132c.584.175 1.122.49 1.543.904.42.414.716.919.85 1.449.134.53.103 1.083-.089 1.596-.192.514-.538.96-.99 1.28-.452.32-1.01.511-1.592.548-.583.037-1.175-.103-1.69-.4-.515-.297-.94-.738-1.215-1.260-.275-.523-.344-1.118-.199-1.698-.145.58-.076 1.175.2 1.698.274.522.699.963 1.214 1.26.515.297 1.107.437 1.69.4.582-.037 1.14-.228 1.592-.548.452-.32.798-.766.99-1.28.192-.513.223-1.066.089-1.596-.134-.53-.43-1.035-.85-1.449a4.267 4.267 0 0 0-1.543-.904 3.317 3.317 0 0 0-4.34 4.132z"/>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      url: "https://www.geeksforgeeks.org/user/harshitayadavv"
    },
    {
      name: "Portfolio",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L3 7l9 5 9-5-9-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      url: "https://harshitayadav-portfolio.vercel.app"
    }
  ];

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* About Background */}
      <AboutBack />
      
      {/* About Content */}
      <motion.div
        className="relative z-40 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Content Box - Responsive Layout */}
        <div className="flex flex-col lg:flex-row w-full max-w-7xl min-h-[80vh] lg:h-5/6 bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg rounded-2xl sm:rounded-3xl border border-gradient-to-r from-amber-200/30 via-gray-300/20 to-gray-400/30 shadow-2xl overflow-hidden">
          
          {/* Profile Card Section */}
          <motion.div 
            className="w-full lg:w-1/3 p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center bg-gradient-to-b from-gray-800/50 to-gray-900/70 lg:border-r border-amber-200/20"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Profile Image */}
            <div className="relative mb-4 sm:mb-6">
              <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-2xl lg:rounded-3xl overflow-hidden border-4 border-gradient-to-r from-amber-200 via-gray-300 to-gray-400 shadow-2xl">
                <img 
                  src="/profile.jpg" 
                  alt="Harshita Yadav" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Sparkle decorations - Hidden on mobile for cleaner look */}
              <div className="hidden sm:block absolute -top-2 -right-2 lg:-top-3 lg:-right-3 text-amber-200 text-2xl lg:text-3xl">✨</div>
              <div className="hidden sm:block absolute -bottom-2 -left-2 lg:-bottom-3 lg:-left-3 text-gray-300 text-xl lg:text-2xl">⭐</div>
            </div>

            {/* Name */}
            <motion.div 
              className="text-center mb-4 sm:mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                Harshita Yadav
              </h2>
            </motion.div>

            {/* Social Profiles - Responsive Grid */}
            <motion.div 
              className="grid grid-cols-4 gap-2 sm:gap-3 lg:gap-4 px-2 sm:px-4 lg:px-6 max-w-xs sm:max-w-sm"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {socialProfiles.map((profile, index) => (
                <motion.a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mx-auto text-white hover:text-amber-200 transition-all duration-300"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {profile.icon}
                  
                  {/* Tooltip - Hidden on mobile, visible on hover for larger screens */}
                  <div className="hidden sm:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg border border-gray-600 z-10">
                    {profile.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* About Content Section */}
          <motion.div 
            className="w-full lg:w-2/3 p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col justify-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-6 sm:space-y-8">
              
              {/* About Section */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-amber-200 mb-3 sm:mb-4 flex items-center">
                  <span className="mr-2 sm:mr-3">👤</span> About Me
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Full Stack Developer with a love for building functional, elegant solutions. AI/ML enthusiast passionate about innovation, 
                  design, and creating impact-driven products 🚀 ✨
                </p>
              </div>

              {/* Details Grid - Responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                
                {/* Name */}
                <div className="group">
                  <label className="text-amber-200 font-semibold text-xs sm:text-sm uppercase tracking-wide">Name</label>
                  <div className="mt-2 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-gray-600/30 group-hover:border-amber-200/40 transition-all duration-300">
                    <p className="text-white font-medium text-sm sm:text-base">Harshita Yadav</p>
                  </div>
                </div>

                {/* Location */}
                <div className="group">
                  <label className="text-gray-300 font-semibold text-xs sm:text-sm uppercase tracking-wide">Location</label>
                  <div className="mt-2 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-gray-600/30 group-hover:border-gray-300/40 transition-all duration-300">
                    <p className="text-white font-medium text-sm sm:text-base">Gurugram</p>
                  </div>
                </div>

                {/* Profession */}
                <div className="group">
                  <label className="text-gray-400 font-semibold text-xs sm:text-sm uppercase tracking-wide">Profession</label>
                  <div className="mt-2 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-gray-600/30 group-hover:border-gray-400/40 transition-all duration-300">
                    <p className="text-white font-medium text-sm sm:text-base">3rd year student at IIIT Kota</p>
                  </div>
                </div>

                {/* Gender */}
                <div className="group">
                  <label className="text-amber-100 font-semibold text-xs sm:text-sm uppercase tracking-wide">Gender</label>
                  <div className="mt-2 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-gray-600/30 group-hover:border-amber-100/40 transition-all duration-300">
                    <p className="text-white font-medium text-sm sm:text-base">Female</p>
                  </div>
                </div>

              </div>

              {/* Tech Stack Hint */}
              <motion.div 
                className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-amber-200/10 via-gray-300/5 to-gray-400/10 rounded-xl sm:rounded-2xl border border-amber-200/20"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-gray-300 text-center text-sm sm:text-base">
                  <span className="text-amber-200 font-semibold">💡 Passionate about:</span> React, Python, AI/ML, and building amazing user experiences
                </p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;