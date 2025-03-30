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
      {/* Background Video */}
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src="/ghost.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="bg-overlay"></div>

      {/* Overlay Content */}
      <section className="hero position-relative d-flex flex-column justify-content-center text-left">
        {/* Logo */}
        <div className="logo-container">
          <Image src="/images/playhamster.png" alt="PlaYHamsteR Logo" width={100} height={100} />
        </div>

        {/* Text Content */}
        <div className="text-content">
          <h1 className="display-1 fw-bold animate__fadeInLeft">
            <br/>
            Uncover <br />
            Tomorrow&apos;s Hits & <br />
            Today&apos;s Epic Deals.
          </h1>
          <button className="btn neon-btn animate__pulse">Get Started</button>
        </div>
      </section>

      {/* Second Section - Modified for Full-Screen & Responsive Design */}
      <section id="next-section" className={`info-section ${sectionVisible ? 'visible' : 'hidden'}`}>
        <div className="video-container">
          <video className="bg-video" autoPlay loop muted playsInline>
            <source src="/got-sunset.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="text-container">
          <h2 className="display-1 fw-bold animate__fadeInDown">Discover the Best Deals</h2>
          <p className="lead animate__fadeInRight">Get the latest discounts on top PC games.</p>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        .landing-page {
          position: relative;
          width: 100%;
          min-height: 100vh; /* Ensures full height */
          color: white;
          font-family: 'Bebas Neue', sans-serif;
        }

        /* Full-Page Background Video */
        .bg-video {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100dvh; /* Ensures full height on all devices */
          object-fit: cover; /* Prevents video from cutting off */
          z-index: -2;
        }

        /* Dark Overlay */
        .bg-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100dvh;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: -1;
        }

        /* Hero Section */
        .hero {
          position: relative;
          z-index: 2;
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding-left: 5vw;
          width: 100%;
          min-height: 100vh;
        }

        /* Logo */
        .logo-container {
          position: absolute;
          top: 20px;
          left: 80px;
          filter: drop-shadow(0 0 5px #ff073a);
        }

        /* Text Content */
        .text-content {
          max-width: 90%;
        }

        .text-content h1 {
          font-size: clamp(3rem, 8vw, 8rem);
          font-weight: bold;
          line-height: 1.2;
          color: #ff073a;
          opacity: 0.5;
        }

        /* Transparent Get Started Button */
        .neon-btn {
          background-color: rgba(255, 7, 58, 0.8);
          color: black;
          font-size: clamp(1rem, 3vw, 1.5rem);
          border: 2px solid rgba(255, 7, 58, 0.8);
          padding: 12px 24px;
          margin-top: 15px;
          transition: 0.3s ease-in-out;
        }

        .neon-btn:hover {
          background-color: black;
          color: #ff073a;
          box-shadow: 0 0 10px #ff073a;
        }

        /* Info Section - Modified */
        .info-section {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: black;
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.6s ease, transform 0.6s ease;
          overflow: hidden;
        }

        .info-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Video Container to Prevent Clipping */
        .video-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .bg-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .text-container {
          position: relative;
          z-index: 2;
          color: white;
          max-width: 80%;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .text-content h1 {
            font-size: 3rem;
            line-height: 1.1;
          }

          .hero {
            padding-left: 10vw;
          }

          .logo-container {
            left: 30px;
            top: 10px;
          }

          .text-container {
            max-width: 90%;
          }

          .info-section {
            padding: 2rem;
          }

          .text-container h2 {
            font-size: 2rem;
          }

          .text-container p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
