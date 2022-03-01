import React from 'react';
import "./Dash.css";
import { BsExclamationCircle,BsClockFill,BsCheckCircle } from "react-icons/bs";
import {IoIosRocket} from "react-icons/io";
import Header from '../../config/Header';
import Sidebar from '../../config/Sidebar';

function Dashboard() {
  const getYear = ()=>{
    const currentYear = new Date().getFullYear();
    return  currentYear;
}
  return (
    <>
    <div className='container-scroller'>
      <Sidebar/>
      <div className='container-fluid page-body-wrapper'>
        <Header/>
        <div className='main-panel'>
          <div className='content-wrapper pb-0'>
            <div className='page-header flex-wrap'>
              <h3 className='mb-0'> Hi, welcome back!</h3>
              <div className='d-flex'>

              </div>
            </div>

              <div className='card'>
                <div className='card-header'>
                  QLE - Qualifying Life Events
                </div>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-xl-3 col-md-3 stretch-card grid-margin grid-margin-sm-0 pb-sm-3'>
                      <div className='card status-pending'>
                        <a href='/qle'>
                          <div className='card-body px-3 py-4'>
                            <div className='d-flex justify-content-between align-items-start'>
                              <div className='color-card'>

                                <h2>25</h2>
                                <p className='mb-0 color-card-head'>Pending Review</p>
                              </div>
                              <BsClockFill className='text-muted'/>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className='col-xl-3 col-md-3 stretch-card grid-margin grid-margin-sm-0 pb-sm-3'>
                      <div className='card status-approved-pending'>
                        <a href='/qle'>
                          <div className='card-body px-3 py-4'>
                            <div className='d-flex justify-content-between align-items-start'>
                              <div className='color-card'>
                                
                                <h2>5</h2>
                                <p className='mb-0 color-card-head'>Approved/Pending</p>
                              </div>
                              <BsExclamationCircle className='text-muted'/>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className='col-xl-3 col-md-3 stretch-card grid-margin grid-margin-sm-0 pb-sm-3'>
                      <div className='card status-completed'>
                        <a href='/qle'>
                          <div className='card-body px-3 py-4'>
                            <div className='d-flex justify-content-between align-items-start'>
                              <div className='color-card'>
                                
                                <h2>10</h2>
                                <p className='mb-0 color-card-head'>Completed</p>
                              </div>
                              <BsCheckCircle className='text-muted'/>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='card mt-4'>
                <div className='card-header'>
                  ACA - Employer Health Coverage Request
                </div>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-xl-3 col-md-3 stretch-card grid-margin grid-margin-sm-0 pb-sm-3'>
                      <div className='card status-new'>
                        <a href='/applications'>
                          <div className='card-body px-3 py-4'>
                            <div className='d-flex justify-content-between align-items-start'>
                              <div className='color-card'>

                                <h2>25</h2>
                                <p className='mb-0 color-card-head'>New</p>
                              </div>
                              <IoIosRocket className='text-muted'/>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className='col-xl-3 col-md-3 stretch-card grid-margin grid-margin-sm-0 pb-sm-3'>
                      <div className='card status-info-required'>
                        <a href='/applications'>
                          <div className='card-body px-3 py-4'>
                            <div className='d-flex justify-content-between align-items-start'>
                              <div className='color-card'>

                                <h2>5</h2>
                                <p className='mb-0 color-card-head'>Information Required</p>
                              </div>
                              <BsExclamationCircle className='text-muted'/>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className='col-xl-3 col-md-3 stretch-card grid-margin grid-margin-sm-0 pb-sm-3'>
                      <div className='card status-revisit'>
                        <a href='/applications'>
                          <div className='card-body px-3 py-4'>
                            <div className='d-flex justify-content-between align-items-start'>
                              <div className='color-card'>

                                <h2>5</h2>
                                <p className='mb-0 color-card-head'>Revisit</p>
                              </div>
                              <i className='fa fa-indicator'></i>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className='col-xl-3 col-md-3 stretch-card grid-margin grid-margin-sm-0 pb-sm-3'>
                      <div className='card status-completed'>
                        <a href='/applications'>
                          <div className='card-body px-3 py-4'>
                            <div className='d-flex justify-content-between align-items-start'>
                              <div className='color-card'>

                                <h2>5</h2>
                                <p className='mb-0 color-card-head'>Completed</p>
                              </div>
                              <BsCheckCircle className='text-muted'/>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <footer className='footer'>
            <div className='d-sm-flex justify-content-center justify-content-sm-between'>
              <div>© Copyright <span>{getYear()}</span>. All Rights Reserved.</div>
            </div>
          </footer>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard
