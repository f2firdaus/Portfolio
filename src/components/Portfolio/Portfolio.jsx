import "./portfolio.scss";

import { Link } from "react-router-dom";
import data from "../../data";

const Portfolio = () => {  // Helper to determine bento grid class size based on index
  const getBentoClass = (index) => {
    if (index === 0) return 'bento-large'; // First item is always large
    if (index === 1 || index === 2) return 'bento-medium'; // Next two are medium
    return 'bento-small'; // Rest are small
  }

  return (
    <section className="bento-portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <span className="subtitle">My Work</span>
          <h2>Selected Projects</h2>
        </div>

        <div className="portfolio-bento-grid">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`bento-card project-card ${getBentoClass(index)}`}
            >
              <Link to={`/portfolio/${item.id}`} className="portfolio-link">
                <div className="image-wrapper">
                  <img
                    src={item.image}
                    alt={item.myname || "Portfolio Project"}
                    className="portfolio-img"
                  />

                  <div className="project-info-overlay">
                    <div className="text-content">
                      <span className="project-category">{item.name}</span>
                      <h3>{item.myname}</h3>
                    </div>
                    <div className="tech-tags">
                      {item.techStack && item.techStack.slice(0, 3).map((tech, i) => (
                        <span key={i} className="tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="hover-action">
                    <span className="view-btn">View Case Study</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
