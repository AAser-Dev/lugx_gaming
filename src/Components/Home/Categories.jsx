import React from "react"

const Categories = () => {
  const catcards = [
    { id:1, img:"https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-01.jpg" },
    { id:2, img:"https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-02.jpg" },
    { id:3, img:"https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-03.jpg" },
    { id:4, img:"https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-04.jpg" },
    { id:5, img:"https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-05.jpg" }
  ]

  return (
    <div className="container text-center mb-5">
      <h2 className="fs-5 fw-bold color">Categories</h2>
      <h1 className="fw-bold mb-4">Top Categories</h1>

      <div className="row g-4 justify-content-center">
        {catcards.map((card) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex" key={card.id} style={{ minWidth: "16.5rem" }}>
            <div className="card bg-primary border-0 rounded-5 flex-fill text-center">
              <p className="card-text text-white fw-bold mt-3 fs-5">Action</p>
              <div className="card-body p-0 overflow-hidden">
                <img src={card.img} className="card-img-top rounded-5" alt="category" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories