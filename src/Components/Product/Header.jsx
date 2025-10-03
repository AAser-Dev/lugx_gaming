import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
    <div className='container-fluid bg-primary pt-5 rounded-bottom-5'>
            <div className='container text-center pb-2'>
                <h2 className="text-white fw-bold fs-1 pt-5"> Our Shop</h2>
                        <div className="container my-5">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb p-3 bg-primary rounded-3 justify-content-center fw-bold">
                                <li className="breadcrumb-item"><Link to={"/"} className='text-white'>Home</Link></li>
                                {/* <li className="breadcrumb-item"><Link href="#" className='text-white'> Our</Link></li> */}
                                <li className="breadcrumb-item active text-white" aria-current="page">Product</li>
                                </ol>
                            </nav>
                        </div>
            </div>
        </div>
        
    
    </>
  )
}
