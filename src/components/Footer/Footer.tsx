import { FCTitle } from "..";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="max-width">
        <FCTitle text="Contact Us" />
        <div className="footer__top">
          <div>
            <h2 className="footer__title">
              Have a project in mind? Let's make it happen
            </h2>
          </div>

          <div className="footer__info">
            <a href="/" className="footer__info-address">
              22 Street Name, Suburb, 8000, <br />
              Cape Town, South Africa
            </a>
            <a className="footer__info-telephone" href="tel:27214310001">
              +27 21 431 0001
            </a>
            <a
              className="footer__info-email"
              href="mailto:nquirie@website.co.za"
            >
              enquirie@website.co.za
            </a>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__links-container">
            <a href="/">Terms of service</a>
            <a href="/">Privacy policy</a>
            <a href="/">Impressum</a>
          </div>
          <div className="footer__links-container">
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">Twitter</a>
          </div>
          <div className="footer__links-container">
            <a href="/">Github</a>
            <a href="/">Linkedin</a>
            <a href="/">Teams</a>
          </div>
          <div className="footer__links-container">
            <a href="/">Youtube</a>
            <a href="/">Behance</a>
            <a href="/">Dribble</a>
          </div>

          <div className="footer__links-container">
            <a href="/">Explore open jobs</a>

            <p>©2000—{new Date().getFullYear()} Company Name</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
