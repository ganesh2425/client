import React from 'react';
import Header from '../../config/Header';
import Sidebar from "../../config/Sidebar";

function EmployerAdd() {
  return (
    <>
    <div className='container-scroller'>
      <Sidebar/>
        <div className='container-fluid page-body-wrapper'>
        <Header/>
        <div className='main-panel'>
            <div className='content-wrapper pb-0'>
                <div className='page-header flex-wrap'>
                    <h3 className='mb-0'> Employer</h3>
                    <div className='d-flex'>

                    </div>
                </div>

                <div className='card'>
                    <div className='card-header'>
                        <ul className='nav nav-tabs card-header-tabs nav-fill'>
                            <li className='nav-item'>
                                <a className='nav-link active' id='nav-emp-tab' data-toggle='tab' href='/nav-emp'
                                    role="tab" aria-controls="nav-emp" aria-selected="true">Employer Information</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="nav-aca-tab" data-toggle="tab" href="/nav-aca" role="tab"
                                    aria-controls="nav-aca" aria-selected="false">ACA</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " id="nav-qle-tab" data-toggle="tab" href="/nav-qle" role="tab"
                                    aria-controls="nav-qle" aria-selected="false">QLE</a>
                            </li>
                        </ul>
                    </div>

                    <div className='card-body tab-content'>
                        <div className='tab-pane fade show active' id='nav-emp' role='tabpanel'
                            aria-labelledby='nav-emp-tab'>
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
                            <div className='form-group col-md-4'>
                                <label>URL Slug (Generated Automatically)</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id=''
                                    value=''
                                />
                            </div>
                            <div className='form-group col-md-4'>
                                <label>Employer Identification Number (EIN)</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id=''
                                    value=''
                                />
                            </div>
                            <div className='form-group col-md-5'>
                                <label>Address</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id=''
                                    value=''
                                />
                            </div>
                            <div className='form-group col-md-3'>
                                <label>City</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id=''
                                    value=''
                                />
                            </div>
                            <div className='form-group col-md-2'>
                                <label>State</label>
                                <select className='form-control form-select'>
                                        <option selected>Select State</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">District Of Columbia</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                </select>
                            </div>
                            <div className='form-group col-md-2'>
                                <label>Zip</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    value=''
                                />
                            </div>
                            <div className='form-group col-md-2'>
                                <label>Employer Phone</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    value=''
                                    id=''
                                />
                            </div>
                            <div className='form-group col-md-2'>
                                <label>Type</label>
                                <select className='form-select ' id='dwlRole'>
                                    <option value='0' selected disabled>Please Select</option>
                                    <option value='1'>Cell</option>
                                    <option value='2'>Home</option>
                                    <option value='3'>Work</option>
                                </select>
                            </div>
                            <div className='form-group col-md-1'>
                                <label>Active</label>
                                <div className='form-group row mb-0 ml-0'>
                                    <label className='c-switch c-switch-label c-switch-primary'>
                                        <input className='c-switch-input' type='checkbox' checked/><span
                                            className='c-switch-slider' data-checked='Yes'
                                            data-unchecked='No'></span>
                                    </label>
                                </div>
                            </div>
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

export default EmployerAdd
