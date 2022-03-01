import React from 'react';
import Header from '../../config/Header';
import Sidebar from '../../config/Sidebar';

function UserAdd() {
  return (
    <>
    <div className='container-scroller'>
      <Sidebar/>
        <div className='container-fluid page-body-wrapper'>
          <Header/>
            <div className='main-panel'>
              <div className='content-wrapper pb-0'>
                <div className='page-header flex-wrap'>
                  <h3 className='mb-0'> User
                  </h3>
                  <div className='d-flex'>
                  </div>
                </div>

                <div className='card'>
                  <div className='card-body overflow-hidden'>
                    <div className='form row'>
                      <div className='form-group col-md-4'>
                        <label>First Name</label>
                        <input
                          type='text'
                          className='form-control'
                          id=''
                          value=''
                          />
                      </div>
                      <div className='form-group col-md-4'>
                        <label>Middle Name</label>
                        <input
                          type='text'
                          className='form-control'
                          id=''
                          value=''
                          />
                      </div>
                      <div className='form-group col-md-4'>
                        <label>Last Name</label>
                        <input
                          type='text'
                          className='form-control'
                          id=''
                          value=''
                          />
                      </div>
                      <div className='form-group col-md-4'>
                        <label>Email Address</label>
                        <input
                          type='text'
                          className='form-control'
                          id=''
                          value=''
                          />
                      </div>
                      <div className='form-group col-md-1'>
                        <label>Active</label>
                        <div className='form-check row mb-0 ml-0'>
                            <label className="c-switch c-switch-label c-switch-primary">
                              <input className="c-switch-input" type="checkbox" checked/><span className="c-switch-slider" data-checked="Yes" data-unchecked="No"></span>
                                  </label>
                        </div>
                      </div>
                    </div>

                    <div className='row mt-4'>
                      <div className='col-5'>
                        <h5 className='text-center'>AVailable Roles</h5>
                        <select name='from[]' id='multiSelect' className='form-control' size={8}multiple>
                        <option value="1">Administrator</option>
                              <option value="2">QLE Manager</option>
                              <option value="2">ACA Manager</option>
                              <option value="3">QLE Team Member</option>
                              <option value="3">ACA Team Member</option>
                        </select>
                      </div>

                      <div className="col-2">
                        <h5 className="text-center">&nbsp;</h5>
                          <button type="button" id="multiSelect_rightAll" className="btn btn-secondary btn-block mt-2"><i className='fa fa-forward'></i></button>
                          <button type="button" id="multiSelect_rightSelected" className="btn btn-secondary btn-block mt-2"><i className='fa fa-chevron-right'></i></button>
                          <button type="button" id="multiSelect_leftSelected" className="btn btn-secondary btn-block mt-2"><i className='fa fa-chevron-left'></i></button>
                          <button type="button" id="multiSelect_leftAll" className="btn btn-secondary btn-block mt-2"><i className='fa fa-backward'></i></button>
                      </div>

                      <div className='col-5'>
                        <h5 className='text-center'>Selected Role/s</h5>
                        <select name='to[]' id='multiSelect_to' className='form-control' size={8}multiple></select>
                      </div>
                    </div>

                    <div className='d-flex justify-content-between mt-3'>
                      <div>
                      <p className="text-muted"><i>After save password will be sent to email id provided above. Please check email for password.</i></p>
                      </div>
                      <div>
                        <a href="/users" className="btn btn-secondary btn-comm-save "> Cancel </a> 
                        <a href="/users" className="btn btn-primary ml-3 ms-3"> Save </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
    </>
  )
}

export default UserAdd
