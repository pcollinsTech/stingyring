import React from "react"

export default function FullscreenBanner({ img, title }) {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="full_screen_banner"
    >
      <div className="container">
        <div className="row">
          <div className="m-5 p-5 mx-auto">
            <header>{title}</header>
          </div>
        </div>
      </div>
    </div>
  )
}
