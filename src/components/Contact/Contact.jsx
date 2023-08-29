import { useEffect } from 'react'
import './contact.scss'
import {FaPhoneAlt,FaEnvelope} from 'react-icons/fa'
import {FaLocationDot} from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
    const navigate=useNavigate()
    const formSubmit = (e) => {
        e.preventDefault();
        navigate('/about')
    }

    
    return (
        <>
            <div className="main-contact">
                <div className="contact-me">
                    Contact Me
                </div>
                <div className="queries">
                    <p>If you have any questions , don't hesitate to contact me</p>
                </div>
                <div className="table-details">
                    <div className="main-contact">
                        <div className="call">
                            <FaPhoneAlt className='icon-size' />
                            <p>+91-9555044342</p>
                        </div>
                        <div className="message">
                            <FaEnvelope className='icon-size' />
                            <p>firdausnaseem@gmail.com</p>
                        </div>
                        <div className="location">
                            <FaLocationDot className='icon-size' />
                        <p>Pune, India</p>
                        </div>
                    </div>
                    <div className="form" >
                        <form onSubmit={formSubmit} className='form-main' action="">
                            <div className="form-input">
                        <input type="text" className='input' placeholder='Name*' required />
                                <input type="text" className='input' placeholder='Subject*' required />
                                </div>
                        <input type="email" className='email' placeholder='Email*'  required/>
                            <textarea placeholder='Message*' name="" id="" cols="20" rows="6" required></textarea>
                            <div className="btn">
                        <button >Send Message</button>
                 </div>   
                        </form>
                        
                </div>
               
                 </div>
            </div>
          
        </>
    )
}
export default Contact;