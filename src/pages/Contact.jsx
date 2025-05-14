import React, { useState } from "react";
import "./Contact.css";
import { FaHome, FaMobileAlt, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
      {/* first section */}
      <section className="blogs-section5">
        <div className="blogs-container5">
          <div className="blogs-content-one5">
            <div className="blogs-content5">
              <h1>Contact</h1>
            </div>
          </div>
          <div className="blogs-image"></div>
        </div>
      </section>
      {/* end of first section */}























      <section className="contact-section">
        <div className="contact-container">
          {/* Contact Form */}
          <div className="contact-form">
            <h2>Get in Touch</h2>

            <form onSubmit={handleSubmit}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <div className="form-group">
                <input
                  type="text"
                  name="message"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn">Send </button>
            </form>
          </div>



          {/* Contact Information Panel */}
          <div className="contact-info-box">
            <div className="info-item">
              <FaHome className="icon" />
              <div>
                <strong>Buttonwood, California.</strong>
                <p>Rosemead, CA 91770</p>
              </div>
            </div>

            <div className="info-item">
              <FaMobileAlt className="icon" />
              <div>
                <strong>+1 253 565 2365</strong>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>

            <div className="info-item">
              <FaEnvelope className="icon" />
              <div>
                <strong>support@colorlib.com</strong>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
