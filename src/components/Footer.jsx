import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer_b">
      <div className="footer-container_b">
        <div className="footer-grid_b">
          {/* About Agrially */}
          <div>
            <h2 className="footer-title_b">About Agrially</h2>
            <p className="footer-text_b">
              Agrially is a platform dedicated to empowering farmers with tools,
              resources, and a community-driven marketplace to enhance
              productivity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="footer-title_b">Quick Links</h2>
            <ul className="footer-links_b">
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/forum">Community Forum</a>
              </li>
              <li>
                <a href="/lms">LMS</a>
              </li>
              <li>
                <a href="/shop">E-Commerce</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="footer-title_b">Contact Us</h2>
            <p className="footer-text_b">Email: support@agrially.com</p>
            <p className="footer-text_b">Phone: +1 234 567 890</p>
            <p className="footer-text_b">Location: Adelaide, Australia</p>
          </div>

          {/* Newsletter & Socials */}
          <div>
            <h2 className="footer-title_b">Stay Updated</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="footer-input"
            />
            <button className="footer-button_b">Subscribe</button>

            <div className="footer-socials_b">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom_b">
          <p>
            &copy; {new Date().getFullYear()} Agrially. All Rights Reserved.
          </p>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
