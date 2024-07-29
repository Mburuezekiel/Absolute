import React, { useEffect, useState } from 'react';
import axios from 'axios';
import sell from '../assets/CONTACT.jpeg'; // Adjust the path if necessary
import { Link } from 'react-router-dom';
//import './Contact.css';

const Contact = () => {
  const [slideIn, setSlideIn] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Trigger the slide-in animation after the component mounts
    setSlideIn(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/send', formData)
      .then((response) => {
        setMessage('Email sent successfully');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        setMessage('Failed to send email');
        console.error('There was an error!', error);
      });
  };

  return (
    <div className={`cardbody${slideIn ? 'slide-in' : ''}`}>
        <hr />
        <h2 className="intro-text text-center">
          Contact <span style={{ color: 'orange' }}>ABSO</span><span style={{ color: 'red' }}>LUTE</span>
        </h2>
        <hr />
      <div className="contact-header">
      
      </div>

      <div className="contact-container">
       

        <div className="contact-form">
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          {message && <p>{message}</p>}
        </div>
        
        <div className="contact-info">
        <div className="zigzag-item">
                <div className="zigzag-description">
                <h1> </h1>
            <p>Have any questions or need assistance? We're here to help. Get in touch with us now!</p>
          
                  <Link to="tel:0115812700">
              <li className="btn btn-get-started"><i className="bi bi-telephone"></i> Call Us Now</li>
            </Link>
                  
                </div>
                <img src={sell} alt="Sell Item 1" className="zigzag-img" />
              </div>
        </div>
      
        <div className="contact-map">
          <h3>Our Location</h3>
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31714.51313371896!2d36.84118911563074!3d-1.2855692781126977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173bd76c002f%3A0x92c54d0fba31de2b!2sGithunguri%2C%20Kiambu%20County!5e0!3m2!1sen!2ske!4v1607950789650!5m2!1sen!2ske"
            width="100%"
            height="300"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>

        <div className="contact-support-team">
          <h3>Support Team</h3>
          <ul>
            <li>Ezekiel Eric NJuguna- Customer Support Manager</li>
            <li>Zack Njenga - Technical Support Specialist</li>
            <li>Mitchell Muraya- Sales Support</li>
          </ul>
          <p>
            Address: <strong>Githunguri, Kiambu</strong>
         
            Phone: <strong>0115 812700</strong> <br />
            Business Hours: <strong>24/7 services</strong> <br />
            <strong>
              <a href="mailto:knightsavermall@gmail.com">knightsavermall@gmail.com</a> <br />
              <Link to="/about"><i className="bi bi-question-circle"></i> About</Link>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
