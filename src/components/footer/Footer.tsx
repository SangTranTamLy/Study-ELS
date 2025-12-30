import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* BRAND */}
        <div className="footer-brand">
          <h4>Study ELS</h4>
          <p>Learn English smarter every day.</p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li>Home</li>
            <li>Lessons</li>
            <li>Practice</li>
            <li>Dictionary</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="footer-support">
          <h4>Support</h4>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
      </div>
        <div className="footer-line"></div>
      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Study ELS. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
