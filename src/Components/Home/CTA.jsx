import React from "react"

const CTA = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row justify-content-center align-items-center g-4">

        {/* left card */}
        <div className="col-12 col-lg-4">
          <div className="card border-0 shadow rounded-4 p-4 text-start h-100">
            <h6 className="text-danger fw-bold">OUR SHOP</h6>
            <h2 className="fw-bold">
              Go Pre-Order Buy <br />
              & Get Best <span className="text-primary">Prices</span> <br /> For You!
            </h2>
            <p className="text-muted">Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.</p>
            <button className="btn btn-danger rounded-5 px-4 py-2 fw-bold mt-3">SHOP NOW</button>
          </div>
        </div>

        {/* center image */}
        <div className="col-12 col-lg-4 d-flex justify-content-center">
          <img
            src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/cta-bg.jpg"
            alt="center"
            className="img-fluid rounded-4 shadow"
          />
        </div>

        {/* right card */}
        <div className="col-12 col-lg-4">
          <div className="card border-0 shadow rounded-4 p-4 text-start h-100">
            <h6 className="text-danger fw-bold">NEWSLETTER</h6>
            <h2 className="fw-bold">
              Get Up To $100 Off <br />
              Just Buy <span className="text-primary">Subscribe</span> Newsletter!
            </h2>
            <div className="input-group mt-3">
              <input type="email" className="form-control rounded-start-5" placeholder="Your email..." />
              <button className="btn btn-danger rounded-end-5 fw-bold">SUBSCRIBE NOW</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CTA
