import { useState } from "react";
import "./portfoliodetails.css";
import data from "../../data";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";

const PortfolioDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  const filtered = data.find((item) => item.id == id);

  if (!filtered) {
    return (
      <div className="portfolio-details-modal">
        <div className="error-message">Project not found</div>
      </div>
    );
  }

  const imageLength = filtered.allimage ? filtered.allimage.length : 0;

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % imageLength);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + imageLength) % imageLength);
  };

  return (
    <div className="portfolio-details-modal">
      <div className="modal-backdrop" onClick={() => navigate("/portfolio")}></div>
      <div className="modal-content">
        <button
          className="close-button"
          onClick={() => navigate("/portfolio")}
          aria-label="Close details"
        >
          <AiOutlineClose />
        </button>

        <div className="details-layout">
          <div className="carousel-container">
            {imageLength > 1 && (
              <button className="nav-btn prev-btn" onClick={prevSlide}>
                <FiArrowLeft />
              </button>
            )}

            <div className="image-track">
              {filtered.allimage && filtered.allimage.map((img, idx) => (
                <div
                  key={idx}
                  className={`slide ${currentIndex === idx ? 'active' : ''}`}
                >
                  <img src={img} alt={`Slide ${idx + 1}`} />
                </div>
              ))}
            </div>

            {imageLength > 1 && (
              <button className="nav-btn next-btn" onClick={nextSlide}>
                <FiArrowRight />
              </button>
            )}

            {imageLength > 1 && (
              <div className="slide-indicators">
                {filtered.allimage.map((_, idx) => (
                  <span
                    key={idx}
                    className={`dot ${currentIndex === idx ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                  ></span>
                ))}
              </div>
            )}
          </div>

          <div className="info-container">
            <span className="project-category">{filtered.name}</span>
            <h2 className="project-title">{filtered.myname}</h2>

            <div className="project-description">
              <p>{filtered.description}</p>
            </div>

            <div className="tech-stack">
              <h3>Technologies</h3>
              <div className="tags">
                {filtered.techStack.map((skill, idx) => (
                  <span className="tag" key={idx}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="action-links">
              {filtered["project-link"] && (
                <a className="btn primary-btn" href={filtered["project-link"]} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink className="btn-icon" /> Live Preview
                </a>
              )}
              {filtered["source-code"] && (
                <a className="btn secondary-btn" href={filtered["source-code"]} target="_blank" rel="noopener noreferrer">
                  <FiGithub className="btn-icon" /> Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
