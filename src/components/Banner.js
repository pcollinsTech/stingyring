import React from "react"
import surfer from "../../content/assets/18-05-06-Easkey-Left_Sligo_15.jpg"

const headingOne = "You've now entered Stringy Ring surf wax company"
const headingTwo =
  "Want to work with us or stock the product in your store, please get in touch"

export default function Banner({}) {
  return (
    <>
      <section
        id="banner"
        className="major"
        style={{ backgroundImage: `url(${surfer})` }}
      >
        <div className="inner">
          <header>
            <h1>{headingOne}</h1>
          </header>
        </div>
      </section>
    </>
  )
}
