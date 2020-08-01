import React from "react"
import hanstholm from "../../content/assets/images/elleyHanstholm.jpeg"
import { Container } from "reactstrap"
export default function AboutUs() {
  return (
    <Container>
      <div className="row my-5 py-5">
        <div class="col-sm-8">
          <img src={hanstholm} alt="" />
        </div>
        <div class="col-sm-4 white text-center">
          <br />
          <h2 className="pb-5">
            You've now entered Stringy Ring surf wax company
          </h2>
          <p className="pb-5">
            Want to work with us or stock the product in your store, please get
            in touch
          </p>
          <button className="btn btn-primary mt-4">Contact</button>
          <br />
        </div>
      </div>
    </Container>
  )
}
