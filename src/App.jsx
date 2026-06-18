import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaCode, FaServer, FaTools, FaPhoneAlt, FaTimes, FaDownload, FaBars, FaTrophy, FaCertificate } from "react-icons/fa";
import profilePic from "../profile.png";
import resumePdf from "../resume/mdimranalam.pdf";

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
          IMRAN<span className="accent">.dev</span>
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
          <span className="badge">Full-Stack Developer</span>
          <h1>
            Building Modern <br />
            <span className="gradient-text">Web Applications</span>
          </h1>
          <p className="hero-subtitle">
            Hi, I'm <strong className="white">Md Imran Alam</strong>. I am a Full-Stack Developer specializing in React, Node.js, Next.js, MongoDB, and building enterprise-grade backend systems.
          </p>
          <div className="hero-actions">
            <button onClick={() => handleScroll("projects")} className="btn-primary">
              Explore My Work
            </button>
            <a href={resumePdf} download="Md_Imran_Alam_Resume.pdf" className="btn-secondary">
              <FaDownload /> Download Resume
            </a>
            <a href="https://github.com/mdimranalam1701" target="_blank" rel="noreferrer" className="btn-secondary">
              <FaGithub /> GitHub Profile
            </a>
          </div>
        </div>

        <div className="photo-wrapper">
          <div className="photo-frame">
            <img src={profilePic} alt="Md Imran Alam" className="profile-img" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-card">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a dedicated Full-Stack Developer with hands-on experience in building robust scalable systems. Currently pursuing my B.Tech in Computer Science Engineering at Techno International Batanagar.
            </p>
            <p style={{ marginTop: "12px" }}>
              I excel in full-stack web and mobile application development, implementing AI/ML powered features, and architecting seamless MVC designs, CI/CD pipelines, and robust authentication mechanisms.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-box">
              <h3>B.Tech CSE</h3>
              <p>Techno Int. Batanagar (2022-2026)</p>
            </div>
            <div className="stat-box">
              <h3>7.74</h3>
              <p>Current CGPA</p>
            </div>
            <div className="stat-box">
              <h3>Leader</h3>
              <p>Core Team @ Coding Club</p>
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
                <h3 className="role-title">Full-Stack Developer</h3>
                <p className="company-name">Million Tech Pvt. Ltd. | Kolkata</p>
              </div>
              <span className="experience-date">Apr 2026 - Present</span>
            </div>
            <ul className="experience-list">
              <li><strong>Enterprise-Grade Backend:</strong> Designed and deployed a robust monolithic backend using Node.js, Express, and MongoDB, serving as the central API hub for both a Super Admin web dashboard (React/Next.js) and a customer-facing mobile application.</li>
              <li><strong>Multi-Step KYC Engine:</strong> Developed a secure, 4-step identity verification pipeline using multer and Cloudinary to process driver's licenses, passports, and live selfies.</li>
              <li><strong>Scalable MVC Architecture:</strong> Enforced strict Controller-Service design patterns to handle complex multipart forms and data parsing, ensuring high testability and transactional safety.</li>
              <li><strong>Automated Notifications & Security:</strong> Integrated FCM and SMS gateways for real-time alerts. Built end-to-end authentication supporting JWT, role-based access, and secure bcrypt credential generation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="skills-section">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <div className="category-header"><FaCode /> Languages & Concepts</div>
            <div className="tags">
              <span>Java</span><span>JavaScript</span><span>Python</span><span>SQL</span><span>HTML</span><span>CSS</span><span>DSA</span><span>OOPs</span><span>DBMS</span><span>OS</span><span>Computer Networks</span><span>System Design</span>
            </div>
          </div>
          <div className="skill-category">
            <div className="category-header"><FaServer /> Frameworks & Databases</div>
            <div className="tags">
              <span>React.js</span><span>Next.js</span><span>Tailwind CSS</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>PostgreSQL</span><span>MySQL</span><span>Redis</span><span>Supabase</span><span>Gin</span>
            </div>
          </div>
          <div className="skill-category">
            <div className="category-header"><FaTools /> Tools & Cloud</div>
            <div className="tags">
              <span>Git</span><span>GitHub</span><span>Docker</span><span>AWS</span><span>GCP</span><span>Azure</span><span>Kubernetes</span><span>CI/CD</span><span>Kafka</span><span>RabbitMQ</span><span>gRPC</span><span>Postman</span>
            </div>
          </div>
        </div>

        {/* Achievements & Certifications */}
        <div className="skills-grid" style={{ marginTop: '20px' }}>
          <div className="skill-category" style={{ gridColumn: 'span 1' }}>
            <div className="category-header"><FaTrophy /> Achievements</div>
            <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '10px' }}>
              <li>TCS CodeVita Season 13 – Global Rank 2685 (2025)</li>
              <li>Winner, Smart Bengal Hackathon 2025</li>
              <li>Core Team Member at Coding Club, Techno India Group (Organized events for 100+ students)</li>
            </ul>
          </div>
          <div className="skill-category" style={{ gridColumn: 'span 2' }}>
            <div className="category-header"><FaCertificate /> Certifications</div>
            <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '10px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <li>Front-End Web Development (IBM SkillsBuild & CSRBOX, 2025)</li>
              <li>AI & Intelligent Agents (Google Cloud, 2025)</li>
              <li>Web Development Fundamentals (IBM SkillsBuild, 2025)</li>
            </ul>
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
              <span className="proj-badge">AI Surveillance</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="https://github.com/mdimranalam1701/safe-stree-latest" target="_blank" rel="noreferrer" className="proj-link" title="Source Code"><FaGithub /></a>
                <a href="https://safe-stree.netlify.app/" target="_blank" rel="noreferrer" className="proj-link" title="Live Site"><FaExternalLinkAlt /></a>
              </div>
            </div>
            <h3>Safe Stree</h3>
            <p>
              An AI-Powered Surveillance System using Computer Vision and Deep Learning. Achieved 92% gesture recognition accuracy for distress detection, featuring real-time monitoring and scalable APIs.
            </p>
            <div className="project-tags">
              <span>Python</span><span>Flask</span><span>OpenCV</span><span>Mediapipe</span><span>React.js</span><span>Node.js</span><span>MongoDB</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-header">
              <span className="proj-badge">E-Commerce</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="https://github.com/mdimranalam1701/bangles-varse" target="_blank" rel="noreferrer" className="proj-link" title="Source Code"><FaGithub /></a>
                <a href="https://garib-nawaz-bangles.vercel.app/" target="_blank" rel="noreferrer" className="proj-link" title="Live Site"><FaExternalLinkAlt /></a>
              </div>
            </div>
            <h3>BanglesVerse</h3>
            <p>
              A full-stack e-commerce platform offering user authentication, product catalogs, order management, and secure RESTful APIs for a seamless shopping experience.
            </p>
            <div className="project-tags">
              <span>React.js</span><span>Tailwind CSS</span><span>Node.js</span><span>Express</span><span>MongoDB</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-header">
              <span className="proj-badge">Real-time App</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="https://github.com/mdimranalam1701/SuperChats" target="_blank" rel="noreferrer" className="proj-link" title="Source Code"><FaGithub /></a>
              </div>
            </div>
            <h3>SuperChat</h3>
            <p>
              A robust real-time communication application with instant messaging capabilities, secure user authentication, and responsive web design.
            </p>
            <div className="project-tags">
              <span>React</span><span>Node.js</span><span>Socket.io</span><span>MongoDB</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Element */}
      <footer>
        <p>© {new Date().getFullYear()} Md Imran Alam. Crafted for performance.</p>
        <div className="footer-socials">
          <a href="https://github.com/mdimranalam1701" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/mdimranalam1701" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:mdimran.alam1701@gmail.com"><FaEnvelope /></a>
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
              <a href="mailto:mdimran.alam1701@gmail.com" className="contact-item">
                <div className="icon-wrapper mail-icon"><FaEnvelope /></div>
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">mdimran.alam1701@gmail.com</span>
                </div>
              </a>

              <a href="tel:+919330557542" className="contact-item">
                <div className="icon-wrapper phone-icon"><FaPhoneAlt /></div>
                <div className="contact-details">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+91 93305 57542</span>
                </div>
              </a>

              <a href="https://github.com/mdimranalam1701" target="_blank" rel="noreferrer" className="contact-item">
                <div className="icon-wrapper github-icon"><FaGithub /></div>
                <div className="contact-details">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">mdimranalam1701</span>
                </div>
              </a>

              <a href="https://linkedin.com/in/mdimranalam1701" target="_blank" rel="noreferrer" className="contact-item">
                <div className="icon-wrapper linkedin-icon" style={{ backgroundColor: '#0077B5', color: '#fff' }}><FaLinkedin /></div>
                <div className="contact-details">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">mdimranalam1701</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}