import React, { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { FaLinkedin, FaEnvelope, FaBars } from "react-icons/fa";
import Cursor from "../components/Cursor";

// Lazy load Three.js component
const Hero3D = dynamic(() => import("../components/Hero"), { ssr: false });

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
      <Cursor />

      {/* Header Section */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold">JethinHub</h1>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars size={24} className="text-white" />
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent text-center md:text-left z-10`}
        >
          <a href="#home" className="py-2 md:py-0 px-4 hover:text-blue-400">
            Home
          </a>
          <a href="#about" className="py-2 md:py-0 px-4 hover:text-blue-400">
            About
          </a>
          <a href="/projects" className="py-2 md:py-0 px-4 hover:text-blue-400">
            Projects
          </a>
          <a href="#contact" className="py-2 md:py-0 px-4 hover:text-blue-400">
            Contact
          </a>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hidden md:block p-2 rounded bg-gray-800 text-white"
        >
          Toggle Mode
        </button>
      </header>

      {/* Hero Section */}
      <Hero3D />
      <motion.section
        id="home"
        className="flex flex-col items-center justify-center min-h-screen text-center px-6 md:px-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
            Jethin
          </span>{" "}
          👋
        </h1>
        <p className="text-sm md:text-lg text-gray-300 max-w-xl mb-8">
          A passionate Full-Stack Developer with over 9 years of experience in
          building scalable, responsive, and dynamic web applications using
          modern frameworks and technologies.
        </p>
        <motion.a
          href="/projects"
          className="px-4 py-2 md:px-6 md:py-3 bg-blue-500 rounded-full text-white hover:bg-blue-400 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View My Projects
        </motion.a>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-center px-6 md:px-8"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-sm md:text-lg text-gray-300 max-w-2xl">
          I specialize in creating high-performance web applications and
          microservices architectures. My expertise spans frontend frameworks
          like React and Angular, backend systems using Spring Boot and Node.js,
          and cloud deployments with AWS and Docker.
        </p>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center px-6 md:px-8"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-sm md:text-lg text-gray-300 max-w-2xl mb-8">
          I'm always open to collaborating on exciting projects. Feel free to
          reach out via email or LinkedIn!
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <motion.a
            href="mailto:jethink45@gmail.com"
            className="flex items-center px-4 py-2 md:px-6 md:py-3 bg-blue-500 rounded-full text-white hover:bg-blue-400 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope size={20} className="mr-2" /> Email Me
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jethin-k"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 md:px-6 md:py-3 bg-blue-600 rounded-full text-white hover:bg-blue-500 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={20} className="mr-2" /> Connect on LinkedIn
          </motion.a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="flex justify-center items-center py-4 bg-gray-800 text-gray-400">
        © {new Date().getFullYear()} JethinHub. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
