'use client'

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "@fontsource/bebas-neue";
import "@fontsource/anton";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("next-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        setSectionVisible(rect.top < window.innerHeight * 0.75 && rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero vh-100 position-relative d-flex flex-column justify-content-center align-items-center text-center">
        {/* Background Video */}
        <video className="bg-video" autoPlay loop muted playsInline>
          <source src="/ghost.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Logo */}
        <div className="logo-container">
          <Image src="/images/playhamster.png" alt="PlaYHamsteR Logo" width={100} height={100} />
        </div>

        {/* Content */}
        <h1 className="display-1 fw-bold animate__fadeInDown">Welcome to PlaYHamsteR</h1>
        <p className="lead animate__fadeInUp">Track upcoming PC game releases & discounts.</p>
        <button className="btn neon-btn animate__pulse">Get Started</button>

        {/* Login Button */}
        <a href="/login" className="login-btn">Login</a>
      </section>

      {/* Second Section */}
      <section id="next-section" className={`info-section ${sectionVisible ? 'visible' : 'hidden'}`}>
        <video className="bg-video" autoPlay loop muted playsInline>
          <source src="/batman.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="text-container">
          <h2 className="display-3 animate__fadeInLeft">Discover the Best Deals</h2>
          <p className="lead animate__fadeInRight">Get the latest discounts on top PC games.</p>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        .landing-page {
          background-color: black;
          color: white;
          font-family: 'Bebas Neue', sans-serif;
        }

        .hero {
          position: relative;
          overflow: hidden;
          text-align: center;
          color: #ff073a;
        }

        .bg-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.5;
        }

        .logo-container {
          position: absolute;
          top: 20px;
          left: 20px;
          filter: drop-shadow(0 0 5px #ff073a);
        }

        .neon-btn {
          background-color: #ff073a;
          color: black;
          font-size: 1.5rem;
          border: none;
          padding: 12px 24px;
          margin-top: 15px;
          transition: 0.3s ease-in-out;
        }

        .neon-btn:hover {
          background-color: black;
          color: #ff073a;
          box-shadow: 0 0 10px #ff073a;
        }

        .login-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 1.2rem;
          background-color: #ff073a;
          color: black;
          padding: 8px 16px;
          border-radius: 5px;
          transition: 0.3s ease-in-out;
        }

        .login-btn:hover {
          background-color: black;
          color: #ff073a;
          box-shadow: 0 0 10px #ff073a;
        }

        .info-section {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: black;
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .info-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .info-section .text-container {
          position: relative;
          z-index: 2;
          color: white;
        }
      `}</style>
    </div>
  );
}
