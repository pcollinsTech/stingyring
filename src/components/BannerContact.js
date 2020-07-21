import React from "react"
import surfer from "../../content/assets/18-05-06-Easkey-Left_Sligo_15.jpg"
const BannerContact = ({ small, headingOne, headingTwo }) => (
  <section id="banner" className="major">
    <div className="inner mt-5">
      <div className="row mt-5">
        <div className="container contact_section">
          <img src={surfer} alt="surfer" />
          <div className="contact_section_info">
            <div className="col-sm-6 text-left contact_section_left">
              <h1>Denmark</h1>
              <p>
                Hanstholmvej <br />
                Thisted <br />
              </p>
              <div className="contact_links mb-5">
                <h3>
                  <a href="tel:004522437060">0045 2243 7060</a>
                </h3>
                <h3>
                  <a href="mailto:buzzin@stingyring.com" className="my-5">
                    buzzin@stingyring.com
                  </a>
                </h3>
              </div>
            </div>
            <div className="col-sm-6 text-right contact_section_right ">
              <form
                className="form"
                name="contact"
                method="post"
                data-netlify="true"
                data-netify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group mb-2 text-left">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="form-group mb-2">
                  <textarea
                    className="mt-3"
                    placeholder="Message"
                    name="message"
                  />
                  <button type="submit" className="mt-3 px-3">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default BannerContact
