import React from "react"
import header from "../../content/assets/images/18-05-06-Easkey-Left_Sligo_15.jpg"
import logo from "../../content/assets/images/logo-white.png"
import { FaFacebook, FaInstagram } from "react-icons/fa"

export default function index() {
  return (
    <div>
      <img src={header} alt="Snow" className="banner" />
      <div className="container  pt-5">
        <div className="row d-flex flex-column pt-3">
          <div className="mx-auto pt-3">
            <img src={logo} alt="Stingy Ring logo" className="text-center" />
          </div>
          <h1>Website Coming Soon...</h1>
          <div className="row d-flex justify-content-center">
            <div className="col-m-6">
              <div className="social-link m-4">
                <a href="https://www.facebook.com/stingyring/" target="__blank">
                  <FaFacebook />
                </a>
              </div>
            </div>
            <div className="social-link m-4">
              <div className="col-m-6">
                <a
                  href="https://www.instagram.com/stingyring/"
                  target="__blank"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
