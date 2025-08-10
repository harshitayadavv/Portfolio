// src/pages/Skills.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Skills = () => {
  const skillsRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("Skills page loaded");
    // Force animations to trigger after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Organized skills data by categories
  const skillsCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "C++", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "C", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
      ]
    },
    {
      title: "Databases & CS Fundamentals",
      icon: "🗄️",
      skills: [
        { name: "SQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "DBMS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "DSA", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "OOP", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "OS Development", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
      ]
    },
    {
      title: "Development Frameworks & Libraries",
      icon: "⚛️",
      skills: [
        { name: "React JS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "React Native", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Redux", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "Flask", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "FastAPI", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" }
      ]
    },
    {
      title: "Data Science & ML Libraries",
      icon: "🧠",
      skills: [
        { name: "Scikit-learn", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
        { name: "NumPy", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Pandas", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "Matplotlib", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
        { name: "TensorFlow", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Keras", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
        { name: "PyTorch", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "BeautifulSoup", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Selenium", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "VS Code", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Google Colab", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
        { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Canva", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
        { name: "REST APIs", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Linux", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
      ]
    }
  ];

  // Create floating stars animation variants
  const starVariants = {
    animate: {
      y: [0, -10, 0],
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Create skill card hover animations
  const skillCardVariants = {
    initial: { scale: 1, rotateY: 0 },
    hover: { 
      scale: 1.05, 
      rotateY: 5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Dark Platinum Galaxy Background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Animated Stars */}
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() > 0.7 ? '2px' : '1px',
              height: Math.random() > 0.7 ? '2px' : '1px',
              background: Math.random() > 0.5 ? '#E5E7EB' : '#F59E0B'
            }}
            variants={starVariants}
            animate="animate"
            transition={{ delay: Math.random() * 2 }}
          />
        ))}
        
        {/* Subtle Nebula Effect */}
        <div className="absolute inset-0 w-full h-full opacity-15">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-400 to-yellow-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-yellow-300 to-gray-400 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      {/* Skills Content */}
      <motion.div
        ref={skillsRef}
        className="relative z-40 flex flex-col items-center justify-center min-h-screen px-8 py-12 pb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        {/* Page Title */}
        <motion.div 
          className="text-center mb-8"
          initial={{ y: -30, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-100 via-yellow-200 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl mb-3">
            Skills
          </h1>
        </motion.div>

        {/* Skills Categories in Grid Layout */}
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillsCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                {/* Category Container Box */}
                <div className="relative p-6 bg-gradient-to-br from-gray-800/30 to-black/50 backdrop-blur-sm rounded-2xl border border-gray-400/30 hover:border-yellow-400/50 transition-all duration-300 group h-full">
                  {/* Category Header */}
                  <motion.div 
                    className="text-center mb-6 pb-4 border-b border-gray-400/20"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={isLoaded ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 + 0.2 }}
                  >
                    <div className="inline-flex items-center space-x-3">
                      <span className="text-2xl">{category.icon}</span>
                      <h2 className="text-xl font-bold bg-gradient-to-r from-gray-200 to-yellow-300 bg-clip-text text-transparent">
                        {category.title}
                      </h2>
                    </div>
                  </motion.div>

                  {/* Skills Grid inside the box */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="group relative"
                        variants={skillCardVariants}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        whileHover="hover"
                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      >
                        {/* Skill Card */}
                        <div className="relative p-3 bg-gradient-to-br from-gray-700/40 to-black/60 backdrop-blur-sm rounded-lg border border-gray-500/30 hover:border-yellow-400/60 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-400/20">
                          {/* Glowing Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-300/0 via-yellow-400/0 to-gray-400/0 group-hover:from-gray-300/5 group-hover:via-yellow-400/8 group-hover:to-gray-400/5 rounded-lg transition-all duration-300"></div>
                          
                          {/* Icon Container */}
                          <div className="relative z-10 flex flex-col items-center space-y-2">
                            <div className="w-10 h-10 p-1.5 bg-gradient-to-br from-gray-300/20 to-gray-600/20 rounded-md backdrop-blur-sm group-hover:scale-105 transition-transform duration-300 border border-gray-400/20 group-hover:border-yellow-400/40">
                              <img 
                                src={skill.image} 
                                alt={skill.name}
                                className="w-full h-full object-contain filter drop-shadow-md group-hover:drop-shadow-lg"
                              />
                            </div>
                            <h3 className="text-gray-200 font-medium text-xs text-center group-hover:text-yellow-300 transition-colors duration-300 leading-tight">
                              {skill.name}
                            </h3>
                          </div>

                          {/* Orbiting particles */}
                          <motion.div
                            className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 shadow-sm shadow-yellow-400/50"
                            animate={{
                              rotate: 360,
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Text with Planet Ring */}
        <motion.div 
          className="text-center mt-8 mb-8 relative"
          initial={{ y: 30, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* <div className="relative inline-block">
            <p className="text-gray-400 text-base font-medium bg-gradient-to-r from-gray-300 via-yellow-200 to-gray-400 bg-clip-text text-transparent">
              Exploring the vast universe of technology ✨
            </p>
            <motion.div 
              className="absolute -inset-3 border border-yellow-400/40 rounded-full shadow-md shadow-yellow-400/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute -inset-5 border border-gray-400/30 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
          </div> */}
        </motion.div>
      </motion.div>

      {/* Navbar */}
      <Navbar sectionRefs={{ skillsRef }} />
    </div>
  );
};

export default Skills;