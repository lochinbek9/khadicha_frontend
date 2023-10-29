import React from "react";
import { Link } from "react-router-dom";
import {
  BsLinkedin,
  BsGithub,
  BsYoutube,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";
function Footer() {
  return (
    <>
      <footer className="footer py-4">
        <div className="container-xxl">
          <div className="row align-items-center  ">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="./images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for News Letter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-l"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  aria-describedby="basic-addon2"
                />
                <button className="input-group-text p-2" id="basic-addon2">
                  <a href="#contact">Subscribe</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white">Contact Us</h4>
              <div>
                <address className="text-white my-4 fs-6 footer-address">
                  Respublic Uzbekistan, <br /> Tashkent City, <br /> Chilonzor
                  Discrit, <br /> Farkhod street
                </address>
                <a href="tel:+998992807576" className="mb-1 d-block text-white">
                  +998 (99) 280 - 75 - 76
                </a>
                <a
                  href="mailto:lochinbeksetor@gmail.com"
                  className="d-block text-white"
                >
                  lochinbeksetor@gmail.com
                </a>
                <div className="social_icons d-flex align-items gap-15">
                  <a
                    href="https://www.instagram.com/"
                    className="text-white fs-4"
                  >
                    <BsInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    className="text-white fs-4"
                  >
                    <BsLinkedin />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    className="text-white fs-4"
                  >
                    <BsFacebook />
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    className="text-white fs-4"
                  >
                    <BsYoutube />
                  </a>
                  <a href="https://github.com/" className="text-white fs-4">
                    <BsGithub />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privecy Police</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablet</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-13">
              <p className="text-center text-white">
                &copy; {new Date().getFullYear()} POWERED BY LODE - X
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
