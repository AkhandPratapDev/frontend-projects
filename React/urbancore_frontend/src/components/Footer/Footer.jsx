import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-links">
          <div>
            <h4>Trending Wear</h4>
            <ul>
              <li>Hoodies</li>
              <li>Jackets</li>
              <li>Shirts</li>
            </ul>
          </div>

          <div>
            <h4>Men's Wear</h4>
            <ul>
              <li>Hoodies</li>
              <li>Jackets</li>
              <li>Shirts</li>
            </ul>
          </div>

          <div>
            <h4>Account</h4>
            <ul>
              <li>My Orders</li>
              <li>Wishlist</li>
              <li>Track Order</li>
            </ul>
          </div>

          <div>
            <h4>Policies</h4>
            <ul>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div>
            <h4>Get in Touch</h4>
            <ul>
              <li>Phone: +91 9876543210</li>
              <li>Email: support@menwear.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer-social-media-links">
          <p className="rights">All Writes are Reservd by me.</p>
          <div>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={assets.x_icon} alt="Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src={assets.youtube_icon} alt="Twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src={assets.instagram_icon} alt="LinkedIn" />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
