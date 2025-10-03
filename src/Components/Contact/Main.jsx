import React from 'react'

export default function Main() {
  return (
    <>
      <div className='container my-5 pb-5 pt-5'>
        <div className='row g-4 mb-5 pb-5'>
          
          {/* العمود الأول - المعلومات */}
          <div className='col-12 col-lg-6'>
            <div className='bg-body-tertiary rounded-5 h-100'>
              <div className="p-5">
                <h2 className='fs-6 fw-bold text-danger-emphasis'>Contact Us</h2>
                <h1 className='fw-bold pt-3'>Say Hello!</h1> 
                <p className='pt-4 fs-6 lh-lg text-secondary'>
                  LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. 
                  This template is provided by TemplateMo and it is suitable for your gaming shop 
                  ecommerce websites. Feel free to use this for any purpose. Thank you.
                </p>
              </div>
              <div className='px-5 pb-5'>
                <h4 className='fs-5'>Address</h4>
                <p className='text-secondary fs-6'>Sunny Isles Beach, FL 33160, United States</p>
                
                <h4 className='fs-5 pt-3'>Phone</h4>
                <p className='text-secondary fs-6'>+123 456 7890</p>
                
                <h4 className='fs-5 pt-3'>Email</h4>
                <p className='text-secondary fs-6'>lugx@contact.com</p>
              </div>
            </div>
          </div>

          {/* العمود الثاني - الخريطة والفورم */}
          <div className='col-12 col-lg-6'>
            <div className='mb-4'>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" 
                width="100%" 
                height="300" 
                frameBorder={0} 
                style={{border: 0, borderRadius: 23}} 
                allowFullScreen 
                title="map"
              />
            </div>

            <div className='d-grid gap-3'>
              <input className="form-control rounded-5 py-2 px-3" type="text" placeholder="Your Name" />
              <input className="form-control rounded-5 py-2 px-3" type="text" placeholder="Your Last Name" />
              <input className="form-control rounded-5 py-2 px-3" type="email" placeholder="E-mail" />
              <input className="form-control rounded-5 py-2 px-3" type="text" placeholder="Subject" />
              
              <textarea className="form-control rounded-5 p-3" placeholder="Your Message" rows="3"></textarea>
              
              <button className='btn btn-primary w-100 rounded-5 fw-bold'>
                Send Message Now!
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
