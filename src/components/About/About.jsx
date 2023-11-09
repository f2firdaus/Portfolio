import './about.scss'
// import img from '../../assets/bg.jpg'
import firdausnaseem from '../../assets/Firdaus_naseem.pdf'
// import { Link } from 'react-router-dom';
const About = () => {
    
    return (
        <>
            <div className="about-main">
                
                <div className="about-me">
                    <h1>ABOUT ME</h1>
                    
                    <div className="about-details">
                    Passionate and dedicated B.Tech graduate aspiring to make a mark in the world of Frontend Development. With a solid foundation in HTML, CSS, JavaScript, and React, I am driven by a deep curiosity for creating intuitive and visually captivating user experiences. My goal is to contribute to projects that not only showcase technical excellence but also prioritize user needs and satisfaction. As an enthusiastic learner, I actively seek opportunities to grow and refine my skills in web development while collaborating effectively within teams.
                    </div>
                    <div className="btn">
                        <button>
                            <a href={firdausnaseem} target='blank' download> Download Resume</a>
                        </button>
                 </div>
                </div>
            </div>
        </>
    )
}
export default About;