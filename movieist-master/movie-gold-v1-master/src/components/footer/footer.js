import React from 'react';
import './footer.css'; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-content">
          <h3>University Economic and Finance</h3>
          <p>* Trụ sở 141 - 145 Điện Biên Phủ, Phường 15, Quận Bình Thạnh, TP.HCM</p>
          <p>* Cơ sở 276 - 282 Điện Biên Phủ, Phường 17, Quận Bình Thạnh, TP.HCM</p>
        </div>
      </div>
      <div className="footer-section">
        <div className="footer-content">
          <h4>Contact</h4>
          <p>Phone: (+84) 369-572-672</p>
          <p>Email: nghiabd21@uef.edu.vn</p>
          <p>Email: longdd221@uef.edu.vn</p>
          <p>Email: vinhnh21@uef.edu.vn</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 UEF. REVIEW FILM FAMABOYS.</p>
      </div>
    </footer>
  );
};

export default Footer;
