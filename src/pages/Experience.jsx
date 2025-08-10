import React, { useEffect, forwardRef, useState } from "react";
import { motion } from "framer-motion";
import ExperienceBack from "../components/ExperienceBack";
import Navbar from "../components/Navbar";

const Experience = forwardRef((props, ref) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("Experience section loaded");
    // Force animations to trigger after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Your actual experience data
  const experienceData = [
    {
      id: 1,
      role: "Mobile Application Intern",
      company: "udChalo",
      duration: "May 2025 - August 2025",
      location: "Remote",
      description: "Developed a scalable user interface for a React Native app that serves 10L+ users. Collaborated with the development team to contribute to scalable and user-friendly mobile features.",
      technologies: ["React Native", "JavaScript", "Mobile UI/UX", "Scalable Architecture"],
      achievements: [
        "Built UI for 10L+ user mobile application",
        "Contributed to scalable mobile features",
        "Collaborated with development team on user-friendly interfaces"
      ]
    }
  ];

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Experience Background */}
      <ExperienceBack />

      {/* Experience Content */}
      <motion.div
        className="relative z-40 flex flex-col items-center justify-center min-h-screen px-8 py-20 pb-32"
        initial={{ opacity: 0, y: 50 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        {/* Page Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -30, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-300 bg-clip-text text-transparent drop-shadow-lg">
            Experience
          </h1>
        </motion.div>

        {/* Experience Timeline */}
        <div className="w-full max-w-5xl flex justify-center mb-16">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Experience Card - Wider and shorter */}
              <motion.div 
                className="w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300"
                whileHover={{ scale: 1.01, y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Left: Role and Company Info */}
                  <div className="lg:col-span-1 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-yellow-200 font-medium text-lg mb-3">
                      {exp.company}
                    </p>
                    <div className="space-y-1">
                      <span className="block text-gray-300 text-sm font-medium">
                        {exp.duration}
                      </span>
                      <span className="block text-gray-400 text-sm">
                        {exp.location}
                      </span>
                    </div>
                    
                    {/* Impact highlight moved here */}
                    <motion.div
                      className="mt-4 p-3 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-lg border border-yellow-400/20"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <div className="text-center">
                        <span className="text-xl mb-1 block">🚀</span>
                        <p className="text-yellow-200 text-sm font-medium">
                          <span className="text-yellow-100 font-bold">10+ Million Users</span>
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Middle: Description */}
                  <div className="lg:col-span-1">
                    <p className="text-gray-200 leading-relaxed text-center lg:text-left mb-4">
                      {exp.description}
                    </p>
                    
                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-medium mb-2 text-center lg:text-left">Technologies:</h4>
                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-300/30 rounded-full text-xs text-yellow-200 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Achievements */}
                  <div className="lg:col-span-1">
                    <h4 className="text-white font-medium mb-3 text-center lg:text-left">Key Contributions:</h4>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div 
                          key={achIndex}
                          className="flex items-start justify-center lg:justify-start"
                        >
                          <span className="text-yellow-400 mr-2 mt-0.5 text-sm">✨</span>
                          <span className="text-gray-200 text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Navbar */}
      <Navbar sectionRefs={{ experienceRef: ref }} />
    </section>
  );
});

Experience.displayName = 'Experience';

export default Experience;