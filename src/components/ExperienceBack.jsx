import React from "react";
import Aurora from "./ReactBits/Aurora/Aurora";

const ExperienceBack = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Aurora Background */}
      <div className="absolute inset-0">
        <Aurora
          colorStops={["#AAA983", "#E4E496", "#949289"]}
          blend={0.6}
          amplitude={1.2}
          speed={0.4}
        />
      </div>

      {/* Additional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Bottom gradient fade for better content separation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
};

export default ExperienceBack;