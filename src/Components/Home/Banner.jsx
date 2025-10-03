import React from "react"
import "./Home.css"

const Banner = () => {
  return (
    <div className="imaga">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

          <div className="col-10 col-sm-8 col-lg-6 position-relative">
            <span className="badge text-bg-primary fs-4 rounded-5 position-absolute pos">$22</span>
            <span className="badge bg-secondary fs-4 rounded-circle position-absolute pos1 p-4">-40%</span>
            <img
              src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/banner-image.jpg"
              className="d-block mx-lg-auto img-fluid rounded-4"
              alt="Banner"
              loading="lazy"
            />
          </div>

          <div className="col-lg-6">
            <p className="fs-5 text-light">Welcome to LUGX</p>
            <h1 className="display-5 fw-bold text-light lh-1 mb-3">BEST GAMING SITE EVER!</h1>
            <p className="lead text-light">
              LUGX Gaming is free Bootstrap 5 HTML CSS website template for your
              gaming websites. You can download and use this layout for commercial
              purposes. Please tell your friends about TemplateMo.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-5">
              <form className="d-flex" role="search">
                <input className="form-control rounded-4 pe-5 ps-4 py-2" type="search" placeholder="Type Something" />
                <button className="btn btn-outline-info w-50 rounded-4" type="submit">SEARCH NOW</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
