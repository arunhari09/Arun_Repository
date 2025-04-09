import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import resumePdf from "../assets/your_resume.pdf"; // 📂 Replace with your actual path
import "./Resume.css"; // 🎨 External CSS for styling

const Resume = () => {
  return (
    <div className="resume-page">
      <Header />

      <section className="resume-section">
        <h2 className="resume-title">My Resume</h2>

        <div className="resume-viewer">
          <iframe
            src={resumePdf}
            title="Resume"
          />
        </div>

        <a
          href={resumePdf}
          download="Your_Name_Resume.pdf" // 📁 Replace with actual name
          className="resume-download"
        >
          Download Resume
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Resume;

