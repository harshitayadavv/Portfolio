import React from 'react';
import LightRays from '../components/ReactBits/LightRays/LightRays';

const AboutBack = () => {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      <LightRays
        raysOrigin="top-center"
        raysColor="#F5F5DC"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="w-full h-full"
      />
    </div>
  );
};

export default AboutBack;