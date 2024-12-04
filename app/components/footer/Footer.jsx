import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding Section */}
        <div className="footer-branding">
          <h3 className="footer-title"> DCR</h3>
          <p className="footer-description">
            Empowering education through technology. Unlock your learning
            potential with us.
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-links-section">
          <div className="footer-column">
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              <li>
                <a href="/courses" className="footer-link">
                  Browse Courses
                </a>
              </li>
              <li>
                <a href="/student-portal" className="footer-link">
                  Student Portal
                </a>
              </li>
              <li>
                <a href="/instructor-resources" className="footer-link">
                  Instructor Resources
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li>
                <a href="/help-desk" className="footer-link">
                  Help Desk
                </a>
              </li>
              <li>
                <a href="/faq" className="footer-link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li>
                <a href="/privacy-policy" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="footer-link">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="footer-link">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h4 className="footer-heading">Connect With Us</h4>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DCR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
