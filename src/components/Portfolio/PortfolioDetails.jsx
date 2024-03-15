import React, { useState } from "react";
import "./portfoliodetails.css";
import data from "../../data";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import bg1 from "../../assets/project2/sc1.png";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const PortfolioDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  const filtered = data.find((item) => item.id == id);
  console.log(filtered);

  const imageLength = filtered.allimage ? filtered.allimage.length : 0;
  console.log(imageLength);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % imageLength);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + imageLength) % imageLength);
  };

  return (
    <>
      <div className="portfolio-details-1">
        <p className="close-port">
          <AiOutlineClose
            className="close-port1"
            onClick={() => navigate("/portfolio")}
          />
        </p>
        <div className="section-details">
          <div className="carousel">
            <div className="left-carousel">
              <span onClick={prevSlide}>
                <FiArrowLeft />
              </span>
            </div>
            {filtered.allimage &&
              filtered.allimage.map((img, idx) => (
                <img
                  key={idx}
                  className={
                    currentIndex === idx
                      ? "image-carousel"
                      : "image-carousel img_hiddenCarousel"
                  }
                  src={img}
                  alt=""
                />
              ))}
            <div className="right-carousel">
              <span onClick={nextSlide}>
                <FiArrowRight />
              </span>
            </div>
          </div>
          <div className="portfolio-content">
            <span className="project-name">{filtered.myname}</span>
            <span className="project-name1">{filtered.name}</span>
            <p className="desc-filtered">{filtered.description}</p>
            <p className="techstack">
              {filtered.techStack.map((skill, idx) => (
                <span className="techstack1" key={idx}>
                  {skill}
                </span>
              ))}
            </p>
            <div className="live-preview">
              <a
                className="a-link"
                href={filtered["project-link"]}
                target="blank"
              >
                Live Preview
              </a>
              <a
                className="a-link"
                href={filtered["source-code"]}
                target="blank"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetails;
