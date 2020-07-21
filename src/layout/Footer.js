import React from "react"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { Link } from "gatsby"
import logo from "../../content/assets/logo.png"
import moment from "moment"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="row inner">
        <div className="container footer_container">
          <div className="col-md-3 footer_item text-left">
            <h5>Stingy Ring</h5>
            <p className="mt-2">
              Hanstholmvej <br />
              Thisted
              <br />
              Denmark
            </p>
            <div className="contact_links mt-3">
              <a href="tel:004522437060">
                <h5>0045 2243 7060</h5>
              </a>
              <a href="mailto:buzzin@stingyring.com" className="my-5">
                <h5>buzzin@stingyring.com</h5>
              </a>
            </div>
          </div>
          <div className="col-md-6 footer_item">
            <h5>Subscribe to our newsletter</h5>
            <form className="form-inline mt-2">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <button type="submit px-3">Subscribe</button>
            </form>
            <p>
              In accordance with our GDPR obligations we seek your consent to
              receive our (funny, clever, witty) newsletters. You may withdraw
              your consent at any time in the future. You can view our privacy
              policy <Link to="/privacy-policy"> here.</Link>
            </p>
            <ul className="copyright text-center mt-5">
              <li>
                <Link to="/terms">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>&copy; Stingy Ring {moment().format("YYYY")}</li>
            </ul>
          </div>
          <div className="col-md-3 footer_item ">
            <h5>Follow us</h5>
            <ul className="container icons mt-2">
              <li>
                <a href="https://www.facebook.com/stingyring/" target="__blank">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/stingyring/"
                  target="__blank"
                  className="icon fa-instagram"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
            <Link to="/" className="logo">
              <img src={logo} alt="logo white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
