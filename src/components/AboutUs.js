import React from "react"
import hanstholm from "../../content/assets/images/elleyHanstholm.jpeg"
export default function AboutUs() {
  return (
    <div className="row my-5">
      <div class="imageHolder">
        <img src={hanstholm} alt="" />
        <div class="caption">
          <br />
          <h2>You've now entered Stringy Ring surf wax company</h2>
          <p>
            Want to work with us or stock the product in your store, please get
            in touch
          </p>
          <button className="btn btn-primary mt-4">Contact</button>
          <br />
        </div>
      </div>
      {/* <div className="col-sm-5  white_box">
        <div className="">
          <h2>ABOUT US</h2>
          <p>
            We are passionate about bees and our environment. We love the ocean
            and love getting out to surf. For years I used conventional wax,
            then I started to worry about what it was made from and wondered
            what it was doing to me and the ocean. With that thought, the idea
            of Board Balm was born, a 100% renewable, biodegradable natural surf
            wax. Kind on you, kind on the ocean. Read more to find out why we
            were driven to create a natural alternative.
          </p>
        </div>
      </div>
      <div className="col-sm-7">
        <img src={hanstholm} alt="" />
      </div> */}
    </div>
  )
}
