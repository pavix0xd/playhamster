'use client';

import 'animate.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "@fontsource/bebas-neue";
import "@fontsource/anton";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const [sectionVisible, setSectionVisible] = useState(false);
  const router = useRouter();

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

  const scrollToThirdSection = () => {
    const thirdSection = document.getElementById("third-section");
    if (thirdSection) {
      thirdSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="landing-page">
      {/* Background Video */}
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src="/ghost.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="bg-overlay"></div>

      {/* Fixed Header with Logo and Login Button */}
      <header className="fixed-header d-flex justify-content-between align-items-center">
        <div className="logo-container">
          <Image src="/images/playhamster.png" alt="PlaYHamsteR Logo" width={100} height={100} />
        </div>
        {/* <button className="btn neon-btn login-btn" onClick={() => router.push("/login")}>Login</button> */}
      </header>

      {/* Hero Section */}
      <main>
        <section className="hero d-flex flex-column justify-content-center text-left">
          <div className="text-content">
            <h1 className="display-1 fw-bold animate__fadeInLeft">
              <br />
              ESCAPE <br />
              THE REALITY
            </h1>
            <button className="btn neon-btn animate__pulse" onClick={scrollToThirdSection}>Get Started</button>
          </div>
        </section>

        {/* Info Section with Updated Content */}
        <section id="next-section" className={`info-section ${sectionVisible ? 'visible' : 'hidden'} animate__fadeOut`}>
          <div className="video-container">
            <video className="bg-video" autoPlay loop muted playsInline>
              <source src="/got-sunset.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Reduced opacity for info overlay for better readability */}
          <div className="info-overlay"></div>
          <div className="bg-overlay"></div>
          <div className="text-container">
            <h2 className="display-1 fw-bold animate__fadeInDown">
              Explore Our Mod Library
            </h2>
            <p className="lead animate__fadeInRight">
              Browse thousands of user-generated mods for hundreds of games that transform your gaming experience.
            </p>
          </div>

          {/* Scrolling Image Cards */}
          <div className="scroll-container">
            <div className="scroll-content">
              {[...Array(18)].map((_, index) => (
                <div className="card" key={index}>
                  <Image 
                    src={`/images/loopImages/mod-${index + 1}.jpeg`} 
                    alt={`Mod ${index + 1}`} 
                    width={250} 
                    height={150} 
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate images for seamless scrolling */}
              {[...Array(18)].map((_, index) => (
                <div className="card" key={`duplicate-${index}`}>
                  <Image 
                    src={`/images/loopImages/mod-${index + 1}.jpeg`} 
                    alt={`Mod ${index + 1}`} 
                    width={250} 
                    height={500} 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

          {/* Expanded Third Section */}
          <section id="third-section" className="third-section">
          <div className="text-container">
            <div className="text-container lower-section">
              <h2 className="display-2 fw-bold">Join the Community</h2>
              <p className="lead">
                Connect with millions of gamers and modders. Share, create, and explore limitless possibilities.
              </p>
              <div className="button-group">
                <button className="btn neon-btn" onClick={() => router.push("/signup")}>Sign Up</button>
                <button className="btn neon-btn login-btn" onClick={() => router.push("/login")}>Login</button>
              </div>
            </div>
          </div>

          {/* Video Background */}
          <div className="video-container">
            <video className="third-section-video" autoPlay loop muted playsInline>
              <source src="/hogwarts.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="bg-overlay"></div>
        </section>

        {/* Community Features */}
        <section className="community-section">
          <h2 className="display-2 fw-bold">Why Join PlaYHamsteR?</h2>
          <div className="feature-cards">
            <div className="feature">
              <h3>Download Millions of Mods</h3>
              <p>Explore an extensive collection of mods from around the globe, enhancing your gaming experience like never before.</p>
            </div>
            <div className="feature">
              <h3>Upload and Create Your Own Mods</h3>
              <p>Contribute to our vast mod library by uploading your creations, showcasing your creativity to the community.</p>
            </div>
            <div className="feature">
              <h3>Connect and Collaborate</h3>
              <p>Engage with fellow modders, share insights, and collaborate on exciting projects, fostering a vibrant creative community.</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works">
          <h2 className="display-2 fw-bold">How It Works</h2>
          <div className="steps">
            <div className="step">
              <h3>1. Browse Mods</h3>
              <p>Search for mods by category, game, or trending content.</p>
            </div>
            <div className="step">
              <h3>2. Download & Install</h3>
              <p>Follow easy installation guides to add mods to your game.</p>
            </div>
            <div className="step">
              <h3>3. Share & Create</h3>
              <p>Upload your own mods and connect with other gamers.</p>
            </div>
          </div>

          <div className="enjoy-section">
          <h1>ENJOY</h1>
        </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 PlaYHamsteR. All rights reserved.</p>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        .landing-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          color: white;
          font-family: 'Bebas Neue', sans-serif;
        }

        .bg-video {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          object-fit: cover;
          z-index: -2;
        }

        .bg-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.4);
          z-index: -1;
        }

        .logo-container {
          filter: drop-shadow(0 0 5px #ff073a);
        }

        .login-btn {
          background-color: rgba(255, 7, 58, 0.8);
          color: black;
          font-size: clamp(0.7rem, 1.5vw, 1rem);
          border: 2px solid rgba(255, 7, 58, 0.8);
          padding: 5px 10px;
          transition: 0.3s ease-in-out;
        }

        .login-btn:hover {
          background-color: black;
          color: #ff073a;
          box-shadow: 0 0 10px #ff073a;
        }

        .hero {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 10vh 5vw;
          width: 100%;
          min-height: 100vh;
          margin-bottom: 5rem;
        }

        .text-content {
          max-width: 90%;
          line-height: 1.3;
          }

          @keyframes pulseText {
            from {
              opacity: 0.8;
            }
            to {
              opacity: 1;
              text-shadow: 0 0 15px rgba(255, 7, 58, 1);
            }
          }


        .scroll-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card {
          display: inline-block;
          width: 250px;
          height: 350px;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 0 10px rgba(255, 7, 58, 0.8);
          margin: 0 10px;
        }

        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card {
          display: inline-block;
          width: 250px;
          height: 350px;
          overflow: hidden;
          border-radius: 15px;
          background: rgba(0, 0, 0, 0.85);
          border: 2px solid rgba(255, 7, 58, 0.8);
          box-shadow: 0 0 10px rgba(255, 7, 58, 0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(255, 7, 58, 1);
        }


        @keyframes scrollLoop {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .scroll-content {
          display: flex;
          gap: 20px;
          animation: scrollLoop 40s linear infinite;
        }

        .text-content h1 {
          font-size: clamp(3rem, 8vw, 9rem);
          font-weight: bold;
          line-height: 1.2;
          color: #ff073a;
          opacity: 0.5;
          margin-bottom: 2rem;
        }

        .third-section h2 {
          text-shadow: 0 0 10px rgba(255, 7, 58, 0.8);
          animation: pulseText 1.5s infinite alternate;
        }

        .third-section {
          position: relative;
          width: 100%;
          height: 100vh;
          padding: 5vh 5vw; /* Reduced top/bottom padding to center content more */
          text-align: center;
        }

        .third-section .text-container {
          position: relative;
          z-index: 2;
        }

        .third-section-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }

        @keyframes pulseText {
          from {
            opacity: 0.8;
          }
          to {
            opacity: 1;
            text-shadow: 0 0 15px rgba(255, 7, 58, 1);
          }
        }
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
          padding: 10rem 2rem; 
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.6s ease, transform 0.6s ease;
          overflow: hidden;
        }

        .info-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .video-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .third-section {
          position: relative;
          width: 100%;
          height: 100vh;
          padding: 50vh 5vw;
          text-align: center;
        }

        .third-section .text-container {
          position: relative;
          z-index: 2;
        }

        .third-section-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }
        
        .footer {
          position: relative;
          width: 100%;
          padding: 20px;
          text-align: center;
          background: rgba(255, 7, 58, 0.3);
          color: white;
          font-size: 1.1rem;
          font-weight: bold;
          text-shadow: 0 0 5px rgba(255, 7, 58, 1);
          backdrop-filter: blur(5px);
        }

        .fixed-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 20px 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(0, 0, 0, 0);
          transition: transform 0.3s ease-in-out;
        }

        .fixed-header.hidden {
          transform: translateY(-100%);
        }

        .third-section {
          text-align: center;
          padding: 10vh 5vw;
        }

        .button-group {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 20px;
        }

        .community-section {
          padding: 5vh 5vw;
          text-align: center;
        }

        .feature-cards {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .feature {
          padding: 20px;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 10px;
          width: 250px;
        }

        .how-it-works {
            background: rgba(0, 0, 0, 0.8);
            padding: 60px;
            text-align: center;
          }

          .how-it-works h2 {
            font-size: 3rem;
            margin-bottom: 20px;
          }

          .steps {
            display: flex;
            justify-content: center;
            gap: 30px;
          }

          .step {
            background: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 10px;
            width: 250px;
          }

          .step h3 {
            font-size: 1.8rem;
          }
          .enjoy-section {
            width: 100%;
            text-align: center;
            color: #ff073a;
            font-size: 6rem; 
            font-weight: bold;
            text-transform: uppercase;
            padding: 2rem 0;
            position: relative;
            bottom: 0;
            animation: pulseText 1.5s infinite alternate;
          }

          @keyframes pulseText {
            from {
              opacity: 1;
            }
            to {
              opacity: 2;
              text-shadow: 0 0 15px rgba(255, 7, 58, 1);
            }
          }

        .lower-section {
          margin-top: 200px;
        }
      `}</style>
    </div>
  );
}
