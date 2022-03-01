import React from 'react';
import face from "../../assets/face1.jpg";
import Header from '../../config/Header';
import Sidebar from '../../config/Sidebar';

function Profile() {
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
                  <h3 className='mb-0'>
                    Profile
                  </h3>
                  <div className='d-flex'></div>
                </div>

                <div className='row'>
                  <div className='col-sm-12 col-md-6'>
                    <div className='card'>
                      <div className='card-body overflow-hidden'>
                        <div className='card-title font-weight-medium'>Personal Information</div>
                        <div className='form-row'>
                          <div className='form-group col-md-3'>
                            <img src={face} className="ima-fluid" alt='/'/> 
                          </div>
                          <div className='form-group'>
                            <input
                              type='file'
                              name='img[]'
                              className='file-upload-default'
                              />
                              <div className='input-group col-xs-12'>
                                <input
                                  type='text'
                                  className='form-control file-upload-info'
                                  placeholder='Upload Image'
                                  disabled
                                  />
                                  <span className='input-group-append'>
                                    <button className='file-upload-browse btn btn-primary' type='button'> Upload </button>
                                  </span>
                              </div>
                          </div>
                        </div>


                        <div className='form-group'>
                          <label>First Name</label>
                          <input
                            type='text'
                            className='form-control'
                            id=''
                            value='Henry'
                            />
                        </div>
                        <div className='form-group'>
                          <label>Middle Name</label>
                          <input
                            type='text'
                            className='form-control'
                            id=''
                            value=''
                            />
                        </div>
                        <div className='form-group'>
                          <label>Last Name</label>
                          <input
                            type='text'
                            className='form-control'
                            id=''
                            value=''
                            />
                        </div>
                        <div className='form-group'>
                          <label>Email Address</label>
                          <input
                            type='text'
                            className='form-control'
                            id=''
                            value='henry_k@vcgconsultants.com'
                            disabled
                            />
                        </div>
                        <div className='text-right'>
                          <a href='/' className='btn btn-primary mt-4'> Save Updates </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-sm-12 col-md-6'>
                    <div className='card'>
                      <div className='card-body overflow-hidden'>
                        <div className='card-title font-weight-medium'>
                          Change Password
                        </div>
                        <div className='form-group'>
                          <label>Password</label>
                          <div className='input-group' id='show_hide_password'>
                            <input className='form-control' type='password'/>
                            <div className='input-group-append'>
                              <button className='btn btn-outline-secondary' type='button' id='button-addon2'>
                                <i className='fa fa-eye-slash' aria-hidden='true'></i>
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className='form-group'>
                          <label>Confirm Password</label>
                          <div className='input-group' id='show_hide_password'>
                            <input className='form-control' type='password'/>
                            <div className='input-group-append'>
                              <button className='btn btn-outline-secondary' type='button' id='button-addon2'>
                                <i className='fa fa-eye-slash' aria-hidden='true'></i>
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className='text-right'>
                          <a href='/' className='btn btn-primary mt-4'>Update Password</a>
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

export default Profile
