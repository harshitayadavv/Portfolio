import React from "react";
import Galaxy from "../components/ReactBits/Galaxy/Galaxy";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="dark" style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Galaxy transparent={false} />

      {/* Overlay content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-white z-10"
        style={{ pointerEvents: "none" }}
      >
        <h1 className="text-8xl font-bold mb-4 font-mystery bg-gradient-to-br from-[#E0E0E0] via-[#A9A9A9] to-[#DCDCDC] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Harshita Yadav
        </h1>
        <p className="text-xl font-poppins mb-6">Creating tech magic, one line of code at a time</p>

        {/* ✨ MAGICAL ENTER BUTTON */}
        <div style={{ pointerEvents: "auto" }}>
          <Link to="/about">
            <button className="magic-button">
              <span className="font-poppins font-bold">Enter</span>
              <span className="ripple"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
