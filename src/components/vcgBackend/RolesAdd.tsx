import React from 'react';
import Sidebar from '../../config/Sidebar';
import Header from "../../config/Header";

function RolesAdd() {
  return (
    <>
    <div className='container-scroller'>
    <Sidebar/>
      <div className='container-fluid page-body-wrapper'>
        <Header/>
          <div className='main-panel'>
            <div className='content-wrapper pb-0'>
              <div className='page-header flex-wrap'>
                <h3 className='mb-0'> Role</h3>
                <div className='d-flex justify-content-end'>

                </div>
              </div>

              <div className='card'>

                <div className='card-body overflow-hidden'>
                  <div className='form row'>
                    <div className='form-group col-md-4'>
                      <label>Name</label>
                      <input
                      type='text'
                      className='form-control'
                      id=''
                      value=''
                      />
                    </div>
                    <div className='form-group col-md-8'>
                      <label>Description</label>
                      <textarea typeof='text' className='form-control' id=''></textarea>
                    </div>
                  </div>

                  <div className='row'>
                      <div className="col-5">
                        <h5 className="text-center">Available Previleges</h5>
                          <select name="from[]" id="multiSelect" className="form-control" size={8}multiple>
                               {/* <option value="1">QLE</option>
                              <option value="2">ACE</option> */}
                              <option value="2">QLE Update</option>
                              <option value="3">QLE Delete</option>
                              <option value="3">QLE Reports</option>
                              <option value="3">QLE FAQ</option>
                              <option value="3">ACA Update</option>
                              <option value="3">ACA Delete</option>
                              <option value="3">ACA Reports</option>
                              <option value="3">ACA FAQ</option>
                              <option value="3">Roles</option>
                              <option value="3">Users</option>
                              <option value="3">Employers</option>
                          </select>
                      
                      </div>

                      <div className="col-2">
                        <h5 className="text-center">&nbsp;</h5>
                          <button type="button" id="multiSelect_rightAll" className="btn btn-secondary btn-block mt-2"><i className="fa fa-forward"></i></button>
                          <button type="button" id="multiSelect_rightSelected" className="btn btn-secondary btn-block mt-2"><i className="fa fa-chevron-right"></i></button>
                          <button type="button" id="multiSelect_leftSelected" className="btn btn-secondary btn-block mt-2"><i className="fa fa-chevron-left"></i></button>
                          <button type="button" id="multiSelect_leftAll" className="btn btn-secondary btn-block mt-2"><i className="fa fa-backward"></i></button>
                      </div>

                      <div className="col-5">
                        <h5 className="text-center">Selected Previlege/s</h5>  
                          <select name="to[]" id="multiSelect_to" className="form-control" size={8} multiple></select>
                      </div>
                  </div>

                    <div className='d-flex justify-content-between mt-5'>
                      <div>
                    
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

export default RolesAdd
