import React, { useEffect, forwardRef, useState } from "react";
import { motion } from "framer-motion";
import ProjectsBack from "../components/PojectsBack"; // Added .jsx extension
import ChromaGrid from "../components/ReactBits/ChromaGrid/ChromaGrid";
import Navbar from "../components/Navbar";

const Projects = forwardRef((props, ref) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("Projects section loaded");
    // Force animations to trigger after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Projects data for ChromaGrid
  const projectItems = [
    // Add this as the FIRST item in your projectItems array

{
  image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&h=300&fit=crop&crop=center",
  title: "WordSmith",
  subtitle: "AI Text Companion",
  handle: "@wordsmith",
  description: "AI-powered Chrome extension and web app that instantly transforms text using 8 different styles. Features grammar fixes, tone changes, text shortening/expansion, bullet formatting, emoji addition, and tweet optimization for writers and professionals.",
  techStack: ["React", "FastAPI", "Groq API", "Tailwind CSS", "Chrome Extension", "Railway", "Vercel"],
  borderColor: "#FF6B6B",
  gradient: "linear-gradient(135deg, #FF6B6B, #000)",
  url: "https://github.com/harshitayadavv/wordsmith",
  demoUrl: "https://word-smith-three.vercel.app/"
    },
    {
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&h=300&fit=crop&crop=center",
      title: "AeroDeals",
      subtitle: "Flight Deal Finder",
      handle: "@aerodeals",
      description: "A flight deal finder web app that helps users search and compare flights between two cities within a selected date range. It scrapes real-time data and highlights the best available deals with smart pricing analysis.",
      techStack: ["React", "Tailwind CSS", "FastAPI", "Python", "Web Scraping"],
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://github.com/harshitayadavv/AeroDeals"
    },
    {
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=300&h=300&fit=crop&crop=center",
      title: "Insta-News",
      subtitle: "Flask News App",
      handle: "@insta-news",
      description: "A simple and elegant Flask-based web app that displays the latest news headlines using NewsAPI. Users can search for topics, browse categories, and view news cards styled with Bootstrap and custom SCSS.",
      techStack: ["Flask", "Bootstrap", "SCSS", "NewsAPI", "Python"],
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://github.com/harshitayadavv/Insta-News"
    },
    {
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&h=300&fit=crop&crop=center",
      title: "Skylink",
      subtitle: "In-Flight Communication Platform",
      handle: "@skylink",
      description: "Bridges the gap in air travel communication with real-time chatrooms, AI-powered moderation, and offline P2P messaging. Features pre/post flight chatrooms, privacy-focused entry, and real-time flight updates.",
      techStack: ["React", "Supabase", "PyTorch", "BERT", "WebRTC", "AI Moderation"],
      borderColor: "#06B6D4",
      gradient: "linear-gradient(180deg, #06B6D4, #000)",
      url: "https://github.com/harshitayadavv/Return0"
    },
    {
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop&crop=center",
      title: "SAGA",
      subtitle: "Digital Bookshelf Companion",
      handle: "@saga",
      description: "A modern web application designed to help users track and manage their reading progress. Features book search, reading lists management, progress tracking, and reviews with an engaging UI including custom illustrations.",
      techStack: ["React.js", "React Router DOM", "CSS3", "Google Books API", "Custom UI Design"],
      borderColor: "#F59E0B",
      gradient: "linear-gradient(315deg, #F59E0B, #000)",
      url: "https://github.com/harshitayadavv/saga"
    },
    {
      image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=300&h=300&fit=crop&crop=center",
      title: "Spotify Music Recommender",
      subtitle: "ML Clustering System",
      handle: "@spotify-ml",
      description: "Performs unsupervised clustering of Spotify songs based on audio features using KMeans clustering. Groups songs into distinct 'vibe' clusters and provides content-based recommendations with PCA for visualization.",
      techStack: ["Python", "KMeans", "PCA", "Scikit-learn", "Pandas", "Audio Feature Analysis"],
      borderColor: "#1DB954",
      gradient: "linear-gradient(135deg, #1DB954, #000)",
      url: "https://github.com/harshitayadavv/Spotify-Music-Recommender-"
    }
  ];

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-black">
      {/* Projects Background */}
      <ProjectsBack />

      {/* Projects Content */}
      <motion.div
        className="relative z-40 flex flex-col items-center justify-start min-h-screen px-4 pt-12 pb-32"
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
          <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-100 via-yellow-200 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl">
            My Projects
          </h1>
          <p className="text-gray-300 text-xl mt-4 max-w-2xl">
            A showcase of applications and solutions I've built using modern technologies
          </p>
        </motion.div>

        {/* ChromaGrid Container */}
        <motion.div 
          className="w-full max-w-7xl flex-1 flex items-start justify-center min-h-[1200px] pt-8 px-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isLoaded ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div style={{ height: '1200px', position: 'relative', width: '100%' }}>
            <ChromaGrid 
              items={projectItems}
              radius={550}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div 
          className="text-center mt-6 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-400 text-sm">
            Click to explore • More projects coming soon 🚧
          </p>
        </motion.div>
      </motion.div>

      {/* Navbar */}
      <Navbar sectionRefs={{ projectsRef: ref }} />
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;