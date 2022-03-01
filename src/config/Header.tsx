import React from 'react';
import face from "../assets/face1.jpg";
import vcgMini from "../assets/vcg-logo-mini.svg";
import "./Header.css"

function Header() {
  return (
    <>
        <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
          <div className="navbar-menu-wrapper d-flex align-items-stretch justify-content-between">
            <a className="navbar-brand brand-logo-mini align-self-center d-lg-none" href="/"><img src={vcgMini} alt="logo" /></a>
            <button className="navbar-toggler navbar-toggler align-self-center mr-2" type="button" data-toggle="minimize">
              <i className="fa fa-bars" aria-hidden='true'></i>
            </button>
           
            <ul className="navbar-nav navbar-nav-right ml-lg-auto">
             
              <li className="nav-item nav-profile dropdown border-0">
                <a className="nav-link dropdown-toggle" id="profileDropdown" href="/" data-bs-toggle="dropdown">
                  <img className="nav-profile-img mr-2" alt="" src={face}/>
                  <span className="profile-name">Henry Klein</span>
                </a>
                <div className="dropdown-menu navbar-dropdown w-100" aria-labelledby="profileDropdown">
                  <a className="dropdown-item" href="/profile">
                    <i className="fa fa-user" aria-hidden='true'></i> Profile </a>
                  <a className="dropdown-item" href="/login">
                    <i className="fa fa-sign-out" aria-hidden='true'></i> Signout </a>
                </div>
              </li>
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
              <span className="fa fa-bars"></span>
            </button>
          </div>
        </nav>
    </>
  )
}

export default Header
