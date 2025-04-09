import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./About.css"; // Optional: if you're using the CSS file for styling
import { DiJava, DiMysql, DiReact, DiPython } from "react-icons/di";
import { SiSpringboot } from "react-icons/si";
const About = () => {
  return (
    <div className="about-page">
      <Header />

      {/* Main About Content */}
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-heading">About Me </h2>
          <p className="about-text">
            Hello! I'm a passionate <strong>Java Full Stack Developer</strong> with a love for building efficient,
            scalable, and user-friendly applications. I specialize in working with technologies like <strong>Java</strong>,
            <strong>Spring Boot</strong>, <strong>React.js</strong>, and <strong>MySQL</strong>.
          </p>
          <p className="about-text">
            I enjoy learning new tools and frameworks, solving challenging problems, and writing clean,
            maintainable code. My goal is to create impactful digital experiences that solve real-world problems.
          </p>
          <p className="about-text">
            When I’m not coding, you’ll find me exploring new tech trends, reading, or working on side projects to
            sharpen my skills.
          </p>
        </div>
      </div>
      <h2 className="skills-heading">My Skills</h2>
      <div className="tech-icons">
        <DiJava title="Java" />
        <DiMysql title="MySQL" />
        <SiSpringboot title="Spring Boot" />
        <DiReact title="React.js" />
        <DiPython title="Python" />
      </div>


      <Footer />
    </div>
  );
};

export default About;
