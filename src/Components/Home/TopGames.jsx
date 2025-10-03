import React from "react"

const TopGames = () => {
  const topcards = [
    { id:1, img:"https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-01.jpg" },
    { id:2, img:"https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-02.jpg" },
    { id:3, img:"https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-03.jpg" },
    { id:4, img:"https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-04.jpg" },
    { id:5, img:"https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-05.jpg" },
    { id:6, img:"https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-06.jpg" }
  ]

  return (
    <div className="container-fluid mt-5 pt-5 bg-body-tertiary rounded-5 mb-5">
      <div className="container">
        <h2 className="text-danger-emphasis fs-5 fw-bold">TOP GAMES</h2>
        <h3 className="pt-3 fw-bold text-black fs-1 d-flex flex-wrap align-items-center">
          Most Played
          <button className="btn btn-danger rounded-5 px-4 py-2 ms-3 mt-2 mt-md-0">View All</button>
        </h3>

        <div className="row g-4 pb-5">
          {topcards.map((card) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 d-flex pb-5" key={card.id}>
              <div className="card rounded-5 border-0 flex-fill d-flex flex-column align-items-center text-center">
                <img src={card.img} className="card-img-top rounded-5" alt="top game" />
                <div className="card-body d-flex flex-column align-items-center text-center">
                  <h5 className="card-title text-body-tertiary fs-6">Adventure</h5>
                  <p className="card-text fw-bold fs-5">Assassin Creed</p>
                  <button className="btn btn-outline-primary rounded-5 fw-bolder px-3">EXPLORE</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopGames
