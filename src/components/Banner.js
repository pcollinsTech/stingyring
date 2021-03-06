import React from "react"

export default function Banner({ img, title }) {
  return (
    <section
      id="banner"
      className="major"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "ceneter bottom",
      }}
    >
      <div className="inner">
        <header>{title}</header>
      </div>
    </section>
  )
}
