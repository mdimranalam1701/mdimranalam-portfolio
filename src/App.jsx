import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaCode, FaServer, FaTools, FaPhoneAlt, FaTimes, FaDownload, FaBars } from "react-icons/fa";
import profilePic from "./faisal_profile.jpg";
import resumePdf from "../resume/faisaladil_resume.pdf";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <h2 className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          FAISAL<span className="accent">.dev</span>
        </h2>
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          <button onClick={() => handleScroll("about")} className="nav-btn">About</button>
          <button onClick={() => handleScroll("experience")} className="nav-btn">Experience</button>
          <button onClick={() => handleScroll("skills")} className="nav-btn">Skills</button>
          <button onClick={() => handleScroll("projects")} className="nav-btn">Projects</button>
          <button onClick={() => { setIsContactOpen(true); setIsMobileMenuOpen(false); }} className="cta-small" style={{ border: 'none', cursor: 'pointer' }}>Contact</button>
        </div>
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="badge">Aspiring Full-Stack Developer</span>
          <h1>
            Building Modern <br />
            <span className="gradient-text">Web Applications</span>
          </h1>
          <p className="hero-subtitle">
            Hi, I'm <strong className="white">Faisal Adil</strong>. I have hands-on experience in React, Next.js, JavaScript, MongoDB, and modern web technologies.
          </p>
          <div className="hero-actions">
            <button onClick={() => handleScroll("projects")} className="btn-primary">
              Explore My Work
            </button>
            <a href={resumePdf} download="Faisal_Adil_Resume.pdf" className="btn-secondary">
              <FaDownload /> Download Resume
            </a>
            <a href="https://github.com/losskafi-jpg" target="_blank" rel="noreferrer" className="btn-secondary">
              <FaGithub /> GitHub Profile
            </a>
          </div>
        </div>

        <div className="photo-wrapper">
          <div className="photo-frame">
            <img src={profilePic} alt="Faisal Adil" className="profile-img" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-card">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I am an aspiring Full-Stack Developer currently pursuing my B.Tech in Computer Science Engineering.
              I am passionate about building dynamic web applications and exploring the intersections of business intelligence and data analytics.
            </p>
            <p style={{ marginTop: "12px" }}>
              My technical foundation spans across modern frontend frameworks like React and Next.js, combined with robust backend skills using Node.js and MongoDB. I strive to create responsive, user-friendly experiences.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-box">
              <h3>B.Tech CSE</h3>
              <p>Techno Int. Batanagar (2022-Present)</p>
            </div>
            <div className="stat-box">
              <h3>7.5</h3>
              <p>Current CGPA</p>
            </div>
            <div className="stat-box">
              <h3>65.8%</h3>
              <p>Class XII (Al-Hafeez College)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="role-title">AI Strategy Business Intelligence Intern</h3>
                <p className="company-name">IBM SkillsBuild & CSRBOX</p>
              </div>
              <span className="experience-date">Mar 2026 - Apr 2026</span>
            </div>
            <ul className="experience-list">
              <li><strong>IBM Internship:</strong> Completed a 6-week IBM SkillsBuild AI Strategy & Business Intelligence Internship conducted by CSRBOX in association with AICTE.</li>
              <li><strong>AI-Driven Strategies:</strong> Learned AI-driven decision making, business intelligence concepts, and data analytics fundamentals.</li>
              <li><strong>Data Analytics:</strong> Analyzed datasets and generated insights to support data-driven business strategies and decision making.</li>
              <li><strong>Digital Transformation:</strong> Explored the application of Artificial Intelligence in business operations, reporting, and digital transformation initiatives.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="skills-section">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <div className="category-header"><FaCode /> Languages & Core</div>
            <div className="tags">
              <span>Java</span><span>JavaScript</span><span>Python</span><span>SQL</span><span>Data Structures & Algorithms</span><span>OOPs</span><span>DBMS</span><span>Operating Systems</span><span>Computer Networks</span>
            </div>
          </div>
          <div className="skill-category">
            <div className="category-header"><FaServer /> Web Tech & Databases</div>
            <div className="tags">
              <span>HTML</span><span>CSS</span><span>React.js</span><span>Next.js</span><span>Tailwind CSS</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>Supabase</span><span>MySQL</span>
            </div>
          </div>
          <div className="skill-category">
            <div className="category-header"><FaTools /> Developer Tools</div>
            <div className="tags">
              <span>Git</span><span>GitHub</span><span>Postman</span><span>VS Code</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">Featured Engineering Projects</h2>
        <div className="grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-header">
              <span className="proj-badge">Full-Stack Platform</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="#" className="proj-link" title="Source Code"><FaGithub /></a>
              </div>
            </div>
            <h3>Price Tracker Platform</h3>
            <p>
              A robust full-stack price tracking application built to monitor product prices and maintain historical data for deep analysis.
              It features a responsive, user-friendly interface for seamless tracking across devices.
            </p>
            <div className="project-tags">
              <span>React</span><span>Next.js</span><span>Tailwind CSS</span><span>Supabase</span><span>Convex</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-header">
              <span className="proj-badge">Web Application</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="#" className="proj-link" title="Source Code"><FaGithub /></a>
              </div>
            </div>
            <h3>University Website</h3>
            <p>
              A comprehensive university portal featuring pages for admissions, courses, faculty, and student resources. Integrated with MongoDB to securely store and manage user inquiries and registration data.
            </p>
            <div className="project-tags">
              <span>HTML</span><span>CSS</span><span>JavaScript</span><span>MongoDB</span>
            </div>
          </div>
          {/* Project 3 */}
          <div className="project-card">
            <div className="project-header">
              <span className="proj-badge">E-Commerce</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="https://github.com/losskafi-jpg" target="_blank" rel="noreferrer" className="proj-link" title="Source Code"><FaGithub /></a>
                <a href="https://garib-nawaz-bangles.vercel.app/" target="_blank" rel="noreferrer" className="proj-link" title="Live Site"><FaExternalLinkAlt /></a>
              </div>
            </div>
            <h3>Bangles Verse Platform</h3>
            <p>
              A responsive storefront engineered with secure state-management, atomic payment integrations, 
              and optimized product indexing routines.
            </p>
            <div className="project-tags">
              <span>JavaScript</span><span>REST APIs</span><span>State Mgmt</span><span>Tailwind CSS</span>
            </div>
          </div>
        </div>
      </section>



      {/* Footer Element */}
      <footer>
        <p>© {new Date().getFullYear()} Faisal Adil. Crafted for performance.</p>
        <div className="footer-socials">
          <a href="https://github.com/losskafi-jpg" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="mailto:faisaladil724@gmail.com"><FaEnvelope /></a>
        </div>
      </footer>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="modal-overlay" onClick={() => setIsContactOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsContactOpen(false)}>
              <FaTimes />
            </button>
            <h2>Get In Touch</h2>
            <p className="modal-subtitle">Feel free to reach out for collaborations or just a friendly chat.</p>
            
            <div className="contact-links-grid">
              <a href="mailto:faisaladil724@gmail.com" className="contact-item">
                <div className="icon-wrapper mail-icon"><FaEnvelope /></div>
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">faisaladil724@gmail.com</span>
                </div>
              </a>
              
              <a href="tel:+918271888004" className="contact-item">
                <div className="icon-wrapper phone-icon"><FaPhoneAlt /></div>
                <div className="contact-details">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+91 82718 88004</span>
                </div>
              </a>

              <a href="https://github.com/losskafi-jpg" target="_blank" rel="noreferrer" className="contact-item">
                <div className="icon-wrapper github-icon"><FaGithub /></div>
                <div className="contact-details">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">losskafi-jpg</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}