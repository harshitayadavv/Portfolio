import React from "react";
import Threads from "./ReactBits/Threads/Threads";

const ContactBack = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Exact black background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Threads Background */}
      <div className="absolute inset-0">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Threads
            amplitude={1}
            distance={0}
            enableMouseInteraction={true}
          />
        </div>
      </div>

      {/* Additional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Subtle radial gradient overlay for focus */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/10 to-black/40" />

      {/* Top and bottom gradient fades */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
};

export default ContactBack;