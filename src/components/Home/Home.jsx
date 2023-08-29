
import { useNavigate } from 'react-router-dom';
import './home.scss'
import { FaLinkedin,FaGithub,FaTwitter,FaInstagram } from "react-icons/fa";
const Home = () => {

  const navigate=useNavigate()
  return (
      <>
      <div className="main-home">
        <div className="fullname">
          <h1>firdaus naseem</h1>
          
            <p className='details'>i am a software engineer and a fullstack developer</p>
          <div className="btn">
            <button  onClick={()=>navigate('/contact')}>contact me</button>
          </div>  
        </div>
        <div className='bottom-link'>
          <a href="https://www.linkedin.com/in/firdausnaseem/" target='blank'><FaLinkedin/></a>
          <a href="https://www.github.com/f2firdaus" target='blank'><FaGithub/></a>
          <a href="https://twitter.com/12F_NNN" target='blank'><FaTwitter/></a>
          <a href="https://twitter.com/12F_NNN" target='blank'><FaInstagram/></a>
        </div>
      </div>
       
    </>
  )
}

export default Home