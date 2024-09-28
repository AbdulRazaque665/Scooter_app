import React from 'react'
import Scooter from '../../assets/scooter-image.png'
import Circle from '../../assets/Ellipse.png'

const Herosection = () => {
  return (
    <>
    <div className='container'>
      <div className='row align-items-center justify-content-between'>
        <div className='col-sm-12 col-md-6 col-lg-6 mt-5 mt-md-0 mt-lg-0'>
          <img className='position-absolute m-position d-none d-md-block' src={Circle} alt="circle" />
          <div className='position-relative'>
          <h3 className='fs-1 fw-normal text-dark'>Fair price ride</h3>
          <h1 className='heading-size fw-bold text-dark'>Rent our <span className='text-warning'>Scooter</span></h1>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          </div>
        </div>
        <div className='col-md-5 col-lg-5 d-none d-md-block text-center text-sm-center'>
          <img src={Scooter} className='img-fluid' alt="Scooter image" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Herosection
