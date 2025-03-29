'use client'

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "@fontsource/bebas-neue";
import "@fontsource/anton";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    // Scroll handler to trigger animation continuously
    const handleScroll = () => {
      const section = document.getElementById("next-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        // Trigger animation when section is near viewport
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
          setSectionVisible(true);
        } else {
          setSectionVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="position-relative vh-100 overflow-hidden bg-black text-neon-red">
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
            className="neon-glow animate__pulse"
          />
        </div>

        {/* Login Button (Top Right) */}
        <div className="position-absolute top-0 end-0 me-4 mt-4">
          <a href="/login" className="btn neon-btn animate__fadeIn">Login</a>
        </div>
        
        {/* Content */}
        <div className="position-absolute top-50 start-50 translate-middle text-center text-neon-red">
          <h1 className="display-1 fw-bold animate__fadeInDown" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Welcome to PlaYHamsteR</h1>
          <p className="lead animate__fadeInUp" style={{ fontFamily: "'Anton', sans-serif" }}>Track upcoming PC game releases & discounts.</p>
          <button className="btn neon-btn animate__pulse">Get Started</button>
        </div>
      </section>
      
      {/* Second Section */}
      <section 
        id="next-section" 
        className={`vh-100 position-relative bg-black text-white d-flex align-items-center justify-content-center 
          ${sectionVisible ? 'animate__fadeInUp' : 'opacity-0'} transition-all duration-700`}
      >
        {/* Background Video */}
        <video
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover opacity-50"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/batman.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="position-relative text-center">
          <h2 className="display-3 animate__fadeInLeft" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Discover the Best Deals</h2>
          <p className="lead animate__fadeInRight" style={{ fontFamily: "'Anton', sans-serif" }}>Get the latest discounts on top PC games.</p>
        </div>
      </section>

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
          font-size: 1.5rem;
          font-family: 'Anton', sans-serif;
          border: none;
          padding: 10px 20px;
          transition: 0.3s ease-in-out;
        }
        .neon-btn:hover {
          background-color: black;
          color: #ff073a;
          box-shadow: 0 0 10px #ff073a;
        }
        .text-neon-red {
          color: #ff073a !important;
        }

        /* Custom Animations */
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate__fadeInDown {
          animation: fadeInDown 0.7s ease-out;
        }
        .animate__fadeInUp {
          animation: fadeInUp 0.7s ease-out;
        }
        .animate__fadeInLeft {
          animation: fadeInLeft 0.7s ease-out;
        }
        .animate__fadeInRight {
          animation: fadeInRight 0.7s ease-out;
        }
        .animate__pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
}
