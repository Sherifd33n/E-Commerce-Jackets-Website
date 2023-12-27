import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo.png";
import instagram_icon from "../Assets/icon-instagram.svg";
import pinterest_icon from "../Assets/icon-pinterest.svg";
import facebook_icon from "../Assets/icon-facebook.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest_icon} />
        </div>
        <div className="footer-icons-container">
          <img src={facebook_icon} />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ Sherifd33n - 2023 </p>
      </div>
    </div>
  );
};

export default Footer;
