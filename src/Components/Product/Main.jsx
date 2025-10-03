import React from 'react'

export default function Main() {
  return (
    <>
   <div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6"> <img src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/single-game.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" /> </div>
    <div className="col-lg-6 ps-5">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 fs-3">Call of Duty®: Modern Warfare® II</h1>
      <p className='pb-5'><span className='text-decoration-line-through text-secondary fw-bold pe-2'> $28 </span><span className='text-primary fs-3 fw-bold'>$22</span></p>
      <p className="lead fw-normal lh-lg text-secondary-emphasis fs-6 pb-5">LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you.</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start"> 
        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button> 
        <button type="button" className="btn btn-outline-secondary btn-lg px-4 rounded-5"><i class="bi bi-cart-fill pe-3"></i>Add To Cart</button> 
        </div>
        <div className="pt-5">
            <p><span className="text-body-tertiary pe-5">Game ID:</span><span className="text-primary">COD MMII</span> </p>
            <p><span className="text-body-tertiary pe-5">Genre: </span><span className="text-primary">Action, Team, Single</span></p>
            <p><span className="text-body-tertiary pe-5">Multi-tags:</span> <span className="text-primary">War, Battle, Royal</span></p>
        </div>
    </div>
  </div>
</div>
<hr className='container w-75 ' />

    
    </>
  )
}
