import { useNavigate } from 'react-router-dom';
import './home.scss'
import { FaLinkedin, FaGithub, FaTwitter, FaReact, FaNodeJs, FaLocationArrow } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiNextdotjs, SiTailwindcss, SiJavascript } from "react-icons/si";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="bento-home" id="home">
      <div className="bento-grid">

        {/* Intro Card (Top Left, Large) */}
        <div className="bento-card intro-card">
          <div className="intro-content">
            <span className="badge">Available for work</span>
            <h1>Hi, I&apos;m Firdaus.</h1>
            <h2 className="role">Software Engineer & Fullstack Developer</h2>
            <p>I build exceptional digital experiences with modern web technologies. Transforming ideas into robust, scalable applications.</p>
          </div>
          <div className="action-buttons">
            <button className="primary-bento-btn" onClick={() => navigate('/contact')}>Let&apos;s Connect</button>
            <button className="secondary-bento-btn" onClick={() => navigate('/portfolio')}>View Projects</button>
          </div>
        </div>

        {/* Stack/Skills Marquee Card */}
        <div className="bento-card stack-card" onClick={() => navigate('/skills')}>
          <h3>My Tech Stack</h3>
          <div className="stack-grid">
            <div className="stack-icon" title="React"><FaReact /></div>
            <div className="stack-icon" title="Next.js"><SiNextdotjs /></div>
            <div className="stack-icon" title="Node.js"><FaNodeJs /></div>
            <div className="stack-icon" title="JavaScript"><SiJavascript /></div>
            <div className="stack-icon" title="Tailwind CSS"><SiTailwindcss /></div>
            <div className="stack-icon" title="MongoDB"><SiMongodb /></div>
            <div className="stack-icon" title="PostgreSQL"><SiPostgresql /></div>
          </div>
          <div className="card-overlay">
            <span>View All Skills →</span>
          </div>
        </div>

        {/* Location / Current State Card */}
        <div className="bento-card location-card">
          <div className="globe-icon"><FaLocationArrow /></div>
          <div>
            <h3>Based in</h3>
            <p className="highlight">Hyderabad, India</p>
          </div>
          <div className="time-indicator">
            <span className="pulsing-dot"></span> Remote Work Friendly
          </div>
        </div>

        {/* Social Links Card */}
        <div className="bento-card social-card">
          <h3>Follow Me</h3>
          <div className="social-links-bento">
            <a href="https://www.linkedin.com/in/firdausnaseem/" target="_blank" rel="noopener noreferrer" className="social-pill linkedin"><FaLinkedin /> LinkedIn</a>
            <a href="https://www.github.com/f2firdaus" target="_blank" rel="noopener noreferrer" className="social-pill github"><FaGithub /> GitHub</a>
            <a href="https://twitter.com/12F_NNN" target="_blank" rel="noopener noreferrer" className="social-pill twitter"><FaTwitter /> Twitter</a>
          </div>
        </div>

        {/* Featured Work Card */}
        <div className="bento-card project-card" onClick={() => navigate('/portfolio')}>
          <div className="project-preview"></div>
          <div className="project-info">
            <h3>Featured Projects</h3>
            <p>Dive into my latest work and applications built from scratch.</p>
          </div>
          <div className="card-overlay">
            <span>Explore Portfolio →</span>
          </div>
        </div>

        {/* Experience/About Mini Card */}
        <div className="bento-card experience-card" onClick={() => navigate('/about')}>
          <h3>Experience</h3>
          <p className="exp-text">Bringing <span className="highlight">years of coding experience</span> to the table, solving complex problems with clean, scalable code.</p>
          <div className="card-overlay">
            <span>Read More →</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home;