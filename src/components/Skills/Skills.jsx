
import "./skill.scss";
import { FaReact, FaNodeJs, FaGitAlt, FaGlobeAmericas } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss3, SiMongodb, SiPostgresql, SiWebpack, SiPostman } from "react-icons/si";

const Skills = () => {
  return (
    <section className="bento-skills" id="skills">
      <div className="skills-header">
        <span className="subtitle">My Expertise</span>
        <h2>What I&apos;m Best At</h2>
      </div>

      <div className="skills-bento-grid">

        {/* Main Frontend Stack */}
        <div className="bento-card tech-card frontend-card">
          <div className="card-header">
            <h3>Frontend Development</h3>
            <p>Building responsive, interactive user interfaces.</p>
          </div>
          <div className="icon-grid">
            <div className="tech-item"><SiJavascript className="icon js" /><span>JavaScript</span></div>
            <div className="tech-item"><FaReact className="icon react" /><span>React</span></div>
            <div className="tech-item"><SiHtml5 className="icon html" /><span>HTML5</span></div>
            <div className="tech-item"><SiCss3 className="icon css" /><span>CSS3/SCSS</span></div>
          </div>
        </div>

        {/* Core Competency Metric */}
        <div className="bento-card metric-card">
          <div className="progress-ring">
            <div className="circle">
              <span className="percentage">85%</span>
            </div>
          </div>
          <div className="metric-info">
            <h4>Frontend Affinity</h4>
            <p>Primary focus and deep expertise.</p>
          </div>
        </div>

        {/* Backend Stack */}
        <div className="bento-card tech-card backend-card">
          <div className="card-header">
            <h3>Backend & Database</h3>
            <p>Creating robust and scalable APIs.</p>
          </div>
          <div className="icon-grid smaller-grid">
            <div className="tech-item"><FaNodeJs className="icon node" /><span>Node.js</span></div>
            <div className="tech-item"><SiMongodb className="icon mongo" /><span>MongoDB</span></div>
            <div className="tech-item"><SiPostgresql className="icon pg" /><span>PostgreSQL</span></div>
          </div>
        </div>

        {/* Secondary Competency Metric */}
        <div className="bento-card metric-card secondary-metric">
          <div className="progress-ring alt-ring">
            <div className="circle">
              <span className="percentage">90%</span>
            </div>
          </div>
          <div className="metric-info">
            <h4>Responsive Design</h4>
            <p>Mobile-first approach to UI.</p>
          </div>
        </div>

        {/* Tools and Workflow */}
        <div className="bento-card tools-card">
          <div className="card-header">
            <h3>Workflow & Tools</h3>
          </div>
          <div className="tools-list">
            <div className="tool-row"><FaGitAlt className="tool-icon" /> Git / GitHub Version Control</div>
            <div className="tool-row"><SiWebpack className="tool-icon" /> Webpack / Babel</div>
            <div className="tool-row"><SiPostman className="tool-icon" /> Postman API Testing</div>
            <div className="tool-row"><FaGlobeAmericas className="tool-icon" /> GIS Programming (80%)</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
