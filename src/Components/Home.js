// src/pages/Home.jsx
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import backgroundImage from "../Images/portfolio.png";

// Importing your header and footer components
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Java Full Stack Developer", "React Enthusiast", "Lifelong Learner","Backend Developer"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <Header />

      {/* Hero section with background */}
      <div
        className="home-container"
        style={{
          flex: 1,
          position: "relative",
          width: "100%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="text-overlay"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            backgroundColor: "rgba(0,0,0,0.4)",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <span ref={typedRef}></span>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
