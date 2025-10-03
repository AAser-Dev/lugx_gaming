import React, { useState } from "react"

const Features = () => {
  const cards = [
    { id: 1, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/featured-01.png", title: "FREE STORAGE" },
    { id: 2, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/featured-02.png", title: "USER MODE" },
    { id: 3, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/featured-03.png", title: "REPLY READY" },
    { id: 4, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/featured-04.png", title: "EASY LAYOUT" }
  ]

  const [hoveredId, setHoveredId] = useState(null)

  return (
    <div className="row g-4 w-75 m-auto text-center">
      {cards.map((card) => (
        <div className="col-lg-3 col-md-6 col-sm-12 pointer" key={card.id}
          onMouseEnter={() => setHoveredId(card.id)} onMouseLeave={() => setHoveredId(null)}>
          <div className="card border-0 shadow rounded-5 p-4 py-5 pb-3">
            <div className="imgaa m-auto mb-3 tra"
              style={{ backgroundColor: hoveredId === card.id ? "#ee626b" : "#0071f8" }}>
              <img src={card.img} className="card-img-top s tra"style={{ backgroundColor: hoveredId === card.id ? "#ee626b" : "#0071f8" }} alt={card.title} />
            </div>
            <div className="card-body">
              <h5 className="card-title fw-bold fs-5">{card.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Features
