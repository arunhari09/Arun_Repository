// src/components/Header.js
//import React from "react";
//import { NavLink } from "react-router-dom";
//import "./Header.css";
//
//const Header = () => {
//  const linkClass = "hover:text-blue-600 transition";
//  const activeClass = "text-blue-600 font-semibold";
//
//  return (
//    <header className="fixed w-full bg-white shadow z-50">
//      <nav className="flex justify-between items-center px-6 py-4">
//        <h1 className="text-xl font-bold text-blue-600">portfolio</h1>
//        <ul className="flex gap-6 text-gray-700 font-medium">
//          <li>
//            <NavLink to="/" className={({ isActive }) => isActive ? activeClass : linkClass}>
//              Home
//            </NavLink>
//          </li>
//          <li>
//            <NavLink to="/projects" className={({ isActive }) => isActive ? activeClass : linkClass}>
//              Projects
//            </NavLink>
//          </li>
//          <li>
//         <NavLink to="/certificates" className={({ isActive }) => isActive ? activeClass : linkClass}>
//           Certificates
//          </NavLink>
//     </li>
//   <li>
//     <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : linkClass}>
//        About
//     </NavLink>
//    </li>
//    <li>
//        <NavLink to="/resume" className={({ isActive }) => isActive ? activeClass : linkClass}>
//           Resume
//         </NavLink>
//          </li>
//        </ul>
//      </nav>
//    </header>
//  );
//};
//
//export default Header;
import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaProjectDiagram, FaCertificate, FaUser, FaFileAlt } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <h1 className="logo">
          <span className="logo-initials">HK</span> hari Portfolio
        </h1>

        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              <FaHome className="icon" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
              <FaProjectDiagram className="icon" /> Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/certificates" className={({ isActive }) => isActive ? "active" : ""}>
              <FaCertificate className="icon" /> Certificates
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
              <FaUser className="icon" /> Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className={({ isActive }) => isActive ? "active" : ""}>
              <FaFileAlt className="icon" /> Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
