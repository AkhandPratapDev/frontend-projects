import React, { useState, useEffect, useRef } from "react";
import "./ContactFormPopup.css";

const ContactFormPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    reason: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const popupRef = useRef(null);

  // Close popup on scroll
  useEffect(() => {
    const handleScroll = () => {
      onClose();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose(); // auto close popup after submit
    }, 2000);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container" ref={popupRef}>
        <button className="popup-close" onClick={onClose}>
          ✖
        </button>

        <div className="popup-content">
          {/* Left: Form */}
          <div className="popup-form-section">
            {!submitted ? (
              <>
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit} className="popup-form">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="contact"
                    placeholder="Contact Number"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    name="reason"
                    placeholder="Reason for contacting us..."
                    value={formData.reason}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <button type="submit" className="submit-btn">Submit</button>
                </form>
              </>
            ) : (
              <p className="thank-you">✅ Thank you! Our team will contact you soon.</p>
            )}
          </div>

          {/* Right: Image */}
          <div className="popup-image-section">
            <img
              src="https://cdn-icons-png.flaticon.com/512/295/295128.png"
              alt="Contact Illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormPopup;
