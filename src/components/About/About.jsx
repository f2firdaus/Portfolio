import "./about.scss";
// import img from '../../assets/bg.jpg'
import firdausnaseem from "../../assets/firdaus_naseem1.pdf";
import { FaGraduationCap, FaCode } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-main" id="about">
      <div className="about-header">
        <span className="subtitle">Discover</span>
        <h1>About Me</h1>
      </div>

      <div className="about-bento-grid">
        {/* Main Bio Card */}
        <div className="bento-card bio-card">
          <h3>The Journey</h3>
          <p>
            Passionate and dedicated B.Tech graduate aspiring to make a mark in
            the world of Frontend Development. With a solid foundation in HTML,
            CSS, JavaScript, and React, I am driven by a deep curiosity for
            creating intuitive and visually captivating user experiences.
          </p>
          <p>
            My goal is to contribute to projects that not only showcase technical
            excellence but also prioritize user needs and satisfaction.
          </p>
        </div>

        {/* Education Card */}
        <div className="bento-card stat-card">
          <div className="icon-wrapper"><FaGraduationCap /></div>
          <div className="stat-content">
            <h4>B.Tech Graduate</h4>
            <p className="highlight">Computer Science</p>
            <p className="detail">Strong foundation in core concepts and algorithms.</p>
          </div>
        </div>

        {/* Focus Card */}
        <div className="bento-card stat-card">
          <div className="icon-wrapper"><FaCode /></div>
          <div className="stat-content">
            <h4>Current Focus</h4>
            <p className="highlight">Fullstack Development</p>
            <p className="detail">Building scalable, user-centric web applications.</p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="bento-card vision-card">
          <div className="vision-content">
            <h3>My Vision</h3>
            <p>
              As an enthusiastic learner, I actively seek opportunities to grow and
              refine my skills in web development while collaborating effectively
              within teams. I believe in writing clean, maintainable code that
              solves real-world problems.
            </p>
          </div>
          <a href={firdausnaseem} target="_blank" rel="noopener noreferrer" className="download-btn" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
