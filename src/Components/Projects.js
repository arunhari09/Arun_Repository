import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "./Projects.css";
import greencart from '../Images/greencart.png';
// ✅ Use the imported image here




const Projects = () => {
  const project = {
    title: "GreenCart",
    description: "GreenCart is an eco-friendly e-commerce platform dedicated to promoting sustainable living. We offer a wide range of products that are safe for both people and the planet. Our mission is to make eco-conscious shopping simple, affordable, and impactful.Explore our curated collection of environmentally friendly products — from biodegradable kitchenware to organic personal care items. Every purchase supports a greener future.",
    techStack: ["React", "Mysql", "Spring boot"],
    image: greencart,
    link: "https://greencart.live",
    github: "https://github.com/hydaralid/GreenCart_Full_Stack_Project"
  };

  return (
    <div className="projects-page">
      <Header />

      <section id="myworks" className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen pt-32">
        <h2 className="text-4xl font-bold mb-10 text-center text-blue-600">My Works</h2>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Tech Stack:</strong> {project.techStack.join(", ")}
            </p>
            <div className="mt-4 flex space-x-6">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Live Site
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;


