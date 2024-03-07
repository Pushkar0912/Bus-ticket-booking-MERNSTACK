import ReserveLogo from '../../assets/bus.png'
// import { Instagram, Facebook } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="content">
          <div className="logo">
          <img src={ReserveLogo} style={{height: 32, width: 32}}/>
            <p>RESERVE</p>
          </div>
          <p>When you have a Choice choose Reserve</p>
          <p style={{ margin: "15px 0" }}>
            Reserve offers bus tickets booking through its website, iOS and
            android mobile apps for all major cities
          </p>
          <p>reserve.bus@reserce.com</p>
        </div>
        <div className="footer-links">
          <div className="about">
            <span>About</span>
            <Link>About us</Link>
            <Link>Contact us</Link>
          </div>
          <div className="useful">
            <span>Useful links</span>
            <a href="#">Carrers</a>
            <a href="#">FAQ</a>
            <a href="#">T & C</a>
            <a href="#">Privacy policy</a>
            <a href="#">Blog</a>
          </div>
          <div className="social-links">
            <span>Follow us</span>
            <div className="social-icons">
              <a href="#">
                Instagram 
              </a>
              <a href="#">
                Facebook 
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Reserve, All Rights Reserved | Developed by Pushkar Patil
      </div>
    </div>
  );
};

export default Footer;
