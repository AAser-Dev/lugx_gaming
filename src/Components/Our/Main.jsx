import './Our.css'
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from 'react'
export default function Main() {
     const trendcards = [
            { id: 1, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-02.jpg", price: 44, discount: false, discountvalue: 0, type: "Racing" },
            { id: 2, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-01.jpg", price: 28, discount: true, discountvalue: 8 , type: "Adventure"},
            { id: 3, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-03.jpg", price: 64, discount: true, discountvalue: 20, type: "Action" },
            { id: 4, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-04.jpg", price: 32, discount: false, discountvalue: 0, type: "Strategy" },
            { id: 5, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-02.jpg", price: 44, discount: false, discountvalue: 0, type: "Adventure" },
            { id: 6, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-03.jpg", price: 64, discount: true, discountvalue: 20, type: "Action" },
            { id: 7, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-01.jpg", price: 28, discount: true, discountvalue: 8 , type: "Adventure"},
            { id: 8, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-02.jpg", price: 44, discount: false, discountvalue: 0, type: "Action" },
            { id: 9, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-01.jpg", price: 28, discount: true, discountvalue: 8 , type: "Strategy"},
            { id: 10, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-03.jpg", price: 64, discount: true, discountvalue: 20, type: "Racing" },
            { id: 11, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-02.jpg", price: 44, discount: false, discountvalue: 0, type: "Adventure" },
            { id: 12, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-01.jpg", price: 28, discount: true, discountvalue: 8 , type: "Action"},
            { id: 13, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-02.jpg", price: 44, discount: false, discountvalue: 0, type: "Strategy" },
            { id: 14, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-01.jpg", price: 28, discount: true, discountvalue: 8 , type: "Adventure"},
            { id: 15, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-04.jpg", price: 32, discount: false, discountvalue: 0, type: "Action" },
            { id: 16, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-03.jpg", price: 64, discount: true, discountvalue: 20, type: "Adventure" },
            { id: 17, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-02.jpg", price: 44, discount: false, discountvalue: 0, type: "Racing" },
            { id: 18, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-04.jpg", price: 32, discount: false, discountvalue: 0, type: "Racing" },
            { id: 19, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-04.jpg", price: 32, discount: false, discountvalue: 0, type: "Action" },
            { id: 20, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-03.jpg", price: 64, discount: true, discountvalue: 20, type: "Strategy" },
            { id: 21, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-04.jpg", price: 32, discount: false, discountvalue: 0, type: "Adventure" },
            { id: 22, img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-01.jpg", price: 28, discount: true, discountvalue: 8 , type: "Action" },
        ]
        const [filter, setFilter] = React.useState("All")
  return (
    
    <>
    
    <div className="container mt-5 pt-5 mb-5">
               <div className=" d-flex gap-3 justify-content-center pb-5 ">
            <button type="button" class="btn btn-primary rounded-5 px-3 fw-bold"onClick={()=> setFilter("All")}>Show All</button>
            <button type="button" class="btn btn-primary rounded-5 px-3 fw-bold"onClick={()=> setFilter("Adventure")}>Adventure</button>
            <button type="button" class="btn btn-primary rounded-5 px-3 fw-bold"onClick={()=> setFilter("Strategy")}>Strategy</button>
            <button type="button" class="btn btn-primary rounded-5 px-3 fw-bold"onClick={()=> setFilter("Racing")}>Racing</button>
                </div>


      <div className="row g-4 pt-4">
        {trendcards
        .filter((tcard)=> filter === "All" || tcard.type === filter)
        .map((tcard) => (
          <motion.div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" 
          initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4 }}
          key={tcard.id}>
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
                <h5 className="card-title fs-6 fw-normal text-body-tertiary">{tcard.type}</h5>
                <p className="card-text fw-bold fs-5 par d-flex justify-content-center justify-content-xl-start align-items-center gap-2">
                  Assassin Creed
                  <a href="#" className="aa d-flex align-items-center justify-content-center">
                    <i className="colore bi-cart-check-fill p-1 px-2 rounded-circle text-white"></i>
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
       <nav aria-label="Page navigation example">
  <ul className="pagination d-flex justify-content-center mt-5 border-0 gap-3">
    <li className="page-item border-0">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true" classname="bg-primary text-white rounded-circle py-2 px-3">«</span>
      </a>
    </li>
    <li className="page-item"><a className="page-link border-0 bg-primary text-white rounded-circle py-2 px-3" href="#">1</a></li>
    <li className="page-item"><a className="page-link border-0 bg-primary text-white rounded-circle py-2 px-3" href="#">2</a></li>
    <li className="page-item"><a className="page-link border-0 bg-primary text-white rounded-circle py-2 px-3" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link border-0 " href="#" aria-label="Next">
        <span aria-hidden="true" classname="bg-primary text-white rounded-circle py-2 px-3 ">»</span>
      </a>
    </li>
  </ul>
</nav>

      </div>
    </div>
    
    </>
  )
}
