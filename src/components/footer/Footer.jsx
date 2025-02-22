
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import InstagramIcon from "../../assets/Instagram.png"
import FaceBookIcon from "../../assets/Facebook.png"
import LinkedinIcon from "../../assets/Linkedin.png"
import AppStoreIcon from "../../assets/appstore.png"
import GooglePlayIcon from "../../assets/googleplay.png";
import X from "../../assets/x.png"
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-log">
          <NavLink to="/" className="footer-brand">
            <img
              src="https://s3-alpha-sig.figma.com/img/3899/a9ac/b26db3d8864d81567b29198c4f788922?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sAsPh1rSdD0jqHaNngokkgNWPQh5F8pigmMMd4QJTfDHtWPrCVomug3d4ZhPwkZAbWdKCdsWnPZ6d~CW6FvLFGmDwUeZUVRDMrvrB6kimL0TtWXpk4Sq5HQ-4VpHFGawFbDDpo10JLJO9SOXKFodzLsb-66w-K2bvc2QPEBqPZZ~AYbmYVCjf6gjuzdrnynSazba4na8KUMqDinCfek9bgmfyn1PIZYRtPQLX4VvF2Uq77t~prJsfSVyDLtaxjDr9-5ShEohpdJ-3rLZ3svHhqA5vGsI5m7KKhIgEf5~ND6FM-YNTPR0G2hTd54Kh5zEbJWL9B4EtL6LdUlTXcoK-A__"
              alt="Techno RO"
              className="footer-logo"
            />
            Techno RO
          </NavLink>
        </div>
        <div className="footer-container">
          <div className="footer-section">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
              <li>
                <Link to="/terms&condition">Terms & conditions</Link>
              </li>
              <li>
                <NavLink to="/privacy">Privacy policy</NavLink>
              </li>
              <li>
                <NavLink to="/careers">Careers</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">For customers</h3>
            <ul className="footer-links">
              <li>
                <NavLink to="/contact">Contact us</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">For partners</h3>
            <ul className="footer-links">
              <li>
                <NavLink to="/register-for-professional">
                  Register as a professional
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Social links</h3>
            <ul className="footer-social-links socal-link">
              <li>
                <NavLink
                  to="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={X} alt="X" />
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={FaceBookIcon} alt="Facebook" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={InstagramIcon} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LinkedinIcon} alt="LinkedIn" />
                </NavLink>
              </li>
            </ul>
            <div className="footer-app-links">
              <NavLink
                to="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={AppStoreIcon} alt="App Store" />
              </NavLink>
              <NavLink
                to="https://play.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Replace with your Google Play link */}
                <img src={GooglePlayIcon} alt="Google Play" />{" "}
                {/* Replace with your badge path */}
              </NavLink>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; Copyright Techno RO. All rights reserved. | CIN:
            UID2584937HDR20250101
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
