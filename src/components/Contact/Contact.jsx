
import "./contact.scss";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
 
  const formSubmit = (e) => {
    e.preventDefault();
      const phone = '919555044342';
      const message='Hi'
      // Your WhatsApp number (with country code)
    const encodedMsg = encodeURIComponent(message); // Make message URL safe

    const url = `https://wa.me/${phone}?text=${encodedMsg}`;

    // Open WhatsApp in new tab
    window.open(url, '_blank');
  };

  return (
    <>
      <div className="main-contact">
        <div className="contact-me">Contact Me</div>
        <div className="queries">
          <p>If you have any questions, don&apos;t hesitate to contact me</p>
        </div>
        <div className="table-details">
          <div className="main-contact">
            <div className="call">
              <FaPhoneAlt className="icon-size" />
              <p>+91-9555044342</p>
            </div>
            <div className="message">
              <FaEnvelope className="icon-size" />
              <p>firdausnaseem@gmail.com</p>
            </div>
            <div className="location">
              <FaLocationDot className="icon-size" />
              <p>Pune, India</p>
            </div>
          </div>
          <div className="form">
            <form onSubmit={formSubmit} className="form-main">
              <div className="form-input">
                <input
                  type="text"
                  className="input"
                  placeholder="Name*"
                  required
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Subject*"
                  required
                />
              </div>
              <input
                type="email"
                className="email"
                placeholder="Email*"
                required
              />
              <textarea
                placeholder="Message*"
                cols="20"
                rows="6"
                required
              ></textarea>

              <div className="btn">
          
     
      <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
