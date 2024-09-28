import React from 'react'
import Logo from "../../assets/logo.png"

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
  <div className="container">
    <img src={Logo} alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-black fw-medium" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item  mx-sm-0 mx-lg-5">
          <a className="nav-link text-black fw-medium" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black fw-medium"href="#" aria-disabled="true">Contact Us</a>
        </li>
      </ul>
      <div className='d-flex flex-column flex-md-row flex-lg-row'>
        <button className="btn fw-medium">Login</button>
        <button className="btn btn-warning fw-medium text-white py-2 rounded-5">Book Scooter</button>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
