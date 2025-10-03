import React from "react"

const Trending = () => {
  const trendcards = [
    { id: 1, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-01.jpg", price: 28, discount: true, discountvalue: 8 },
    { id: 2, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-02.jpg", price: 44, discount: false, discountvalue: 0 },
    { id: 3, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-03.jpg", price: 64, discount: true, discountvalue: 20 },
    { id: 4, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-04.jpg", price: 32, discount: false, discountvalue: 0 }
  ]

  return (
    <div className="container mt-5 pt-5 mb-5">
      <h2 className="text-danger-emphasis fs-5 fw-bold">Trending</h2>
      <h3 className="pt-3 fw-bold text-black fs-1 d-flex flex-wrap align-items-center">
        Trending Games
        <button className="btn btn-danger rounded-5 px-4 py-2 ms-3 mt-2 mt-md-0">View All</button>
      </h3>

      <div className="row g-4 pt-4">
        {trendcards.map((tcard) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" key={tcard.id}>
            <div className="card border-0 bg-body-secondary p-0 rounded-5 flex-fill">
              <div className="position-relative">
                {tcard.discount ? (
                  <span className="badge text-bg-primary fs-6 rounded-5 position-absolute pos2">
                    <span className="text-decoration-line-through me-2">{tcard.price}$</span>
                    {tcard.price - tcard.discountvalue}$
                  </span>
                ) : (
                  <span className="badge text-bg-primary fs-6 rounded-5 position-absolute pos2">{tcard.price}$</span>
                )}
                <img src={tcard.img} className="card-img-top rounded-5 w-100" alt="game" />
              </div>
              <div className="card-body mb-3 mt-1 text-center text-xl-start">
                <h5 className="card-title fs-6 fw-normal text-body-tertiary">Action</h5>
                <p className="card-text fw-bold fs-5 par d-flex justify-content-center justify-content-xl-start align-items-center gap-2">
                  Assassin Creed
                  <a href="#" className="aa d-flex align-items-center justify-content-center">
                    <i className="colore bi-cart-check-fill p-1 px-2 rounded-circle text-white"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trending
