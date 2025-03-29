'use client'

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "@fontsource/bebas-neue";
import "@fontsource/anton";

export default function LandingPage() {
  return (
    <div className="position-relative vh-100 overflow-hidden bg-black text-neon-red">
      {/* Background Video */}
      <video
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover opacity-50"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/ghost.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Background Gradient */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient"></div>
      
      {/* Logo */}
      <div className="position-absolute top-0 start-0 ms-4 mt-4">
        <Image 
          src="/images/playhamster.png" 
          alt="PlaYHamsteR Logo" 
          width={100} 
          height={100} 
          className="neon-glow"
        />
      </div>
      
      {/* Content */}
      <div className="position-absolute top-50 start-50 translate-middle text-center text-neon-red">
        <h1 className="display-1 fw-bold" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Welcome to PlaYHamsteR</h1>
        <p className="lead" style={{ fontFamily: "'Anton', sans-serif" }}>Track upcoming PC game releases & discounts.</p>
        <button className="btn neon-btn btn-lg">Get Started</button>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        .bg-gradient {
          background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(255,7,58,0.2) 100%);
        }
        .neon-glow {
          filter: drop-shadow(0 0 5px #ff073a) drop-shadow(0 0 10px #ff073a);
        }
        .neon-btn {
          background-color: #ff073a;
          color: black;
          border: none;
          transition: 0.3s ease-in-out;
        }
        .neon-btn:hover {
          box-shadow: 0 0 10px #ff073a;
        }
        .text-neon-red {
          color: #ff073a;
        }
      `}</style>
    </div>
  );
}
