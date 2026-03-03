import "./contact.scss";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const formSubmit = (e) => {
    e.preventDefault();
    const phone = '919555044342';
    // Get form values
    const form = e.target;
    const name = form.elements.name.value;
    const subject = form.elements.subject.value;
    const msg = form.elements.message.value;

    const message = `Hi, I'm ${name}.\nSubject: ${subject}\n\n${msg}`;
    const encodedMsg = encodeURIComponent(message);

    const url = `https://wa.me/${phone}?text=${encodedMsg}`;
    window.open(url, '_blank');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="subtitle">Get In Touch</span>
          <h2>Contact Me</h2>
          <p className="description">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-cards">
            <div className="info-card">
              <div className="icon-wrapper">
                <FaPhoneAlt className="icon" />
              </div>
              <div className="info-text">
                <h3>Phone</h3>
                <p>+91 95550 44342</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-wrapper">
                <FaEnvelope className="icon" />
              </div>
              <div className="info-text">
                <h3>Email</h3>
                <p>firdausnaseem@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-wrapper">
                <FaLocationDot className="icon" />
              </div>
              <div className="info-text">
                <h3>Location</h3>
                <p>Pune, India</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={formSubmit} className="contact-form">
              <div className="form-group row">
                <div className="input-field">
                  <input type="text" name="name" id="name" required placeholder=" " />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className="input-field">
                  <input type="text" name="subject" id="subject" required placeholder=" " />
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>

              <div className="form-group">
                <div className="input-field">
                  <input type="email" name="email" id="email" required placeholder=" " />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>

              <div className="form-group">
                <div className="input-field textarea-field">
                  <textarea name="message" id="message" rows="5" required placeholder=" "></textarea>
                  <label htmlFor="message">Your Message</label>
                </div>
              </div>

              <button type="submit" className="submit-btn">
                Send Message via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
