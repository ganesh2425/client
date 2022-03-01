import React from 'react';
import Sidebar from '../../config/Sidebar';
import Header from '../../config/Header';


function ApplicationEdit() {
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
                            ACA / Vanessa Y V Vargas <span className='badge status-pending text-warning font-weight-normal'>New</span>
                        </h3>

                        <div className='d-flex'>
                        


                        </div>
                    </div>

                    <div className='card-text-center'>
                        <div className='card-header'>
                            <ul className='nav nav-tabs card-header-tabs'>
                                <li className='nav-item'>
                                    <a className='nav-link active' id='nav-edit-tab' data-toggle='tab' href='/'
                                        role='tab' aria-controls='nav-employer' aria-selected='true'>Edit Information</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link active' id='nav-edit-tab' data-toggle='tab' href='/'
                                        role='tab' aria-controls='nav-employer' aria-selected='false'>Employer</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link active' id='nav-edit-tab' data-toggle='tab' href='/'
                                        role='tab' aria-controls='nav-employer' aria-selected='false'>Health Plan</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link active' id='nav-edit-tab' data-toggle='tab' href='/'
                                        role='tab' aria-controls='nav-employer' aria-selected='false'>Eligibility</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link active' id='nav-edit-tab' data-toggle='tab' href='/'
                                        role='tab' aria-controls='nav-employer' aria-selected='false'>Communications</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link active' id='nav-edit-tab' data-toggle='tab' href='/'
                                        role='tab' aria-controls='nav-employer' aria-selected='false'>Activity</a>
                                </li>
                            </ul>
                        </div>
                        <div className='card-body tab-content'>
                            <div className='tab-pane fade show active' id='nav-edit' role='tabpanel'
                                aria-labelledby='nav-edit-tab'>
                                <div className='form row'>
                                    <div className='form-group col-md-4'>
                                        <label>First name</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id=''
                                            value='Vanessa'
                                        />
                                    </div>
                                    <div className='form-group col-md-3'>
                                        <label>Middle name</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id=''
                                            value='Y V'
                                        />
                                    </div>
                                    <div className='form-group col-md-3'>
                                        <label>Last name</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id=''
                                            value='Vargas'
                                        />
                                    </div>
                                    <div className='form-group col-md-2'>
                                        <label>Suffix</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id=''
                                            maxLength={9}
                                            value='756260184'
                                        />
                                    </div>
                                    <div className='form-group col-md-2'>
                                        <label>SSN</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id=''
                                            value='04-07-1972'
                                            placeholder='MM-DD-YYYY'
                                        />
                                    </div>
                                    <div className='form-group col-md-2'>
                                        <label>Date of Birth</label>
                                        <div className='input-group'>
                                            <input type="date" className="form-control datepicker" placeholder="MM-DD-YYYY" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append"></div>
                                        </div>
                                    </div>
                                    <div className='form-group col-md-5'>
                                        <label>Address</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id=''
                                            value='2 Willow Street, Suite #201'
                                        />
                                    </div>
                                    <div className='form-group col-md-3'>
                                        <label>City</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id=''
                                            value='Southborough'
                                        />
                                    </div>
                                    <div className='form-group col-md-2'>
                                        <label>State</label>
                                        <select className='form-control'>
                                            <option selected>SELECT YOUR STATE</option>
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
                                            <option value="MA" selected>Massachusetts</option>
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
                                            value='01745'
                                        />
                                    </div>
                                    <div className='form-group col-md-5'>
                                        <label>Email Address</label>
                                        <input 
                                            type='text'
                                            className='form-control'
                                            id=''
                                            value='anastasia.yershova@Randstadsourceright.com'
                                            disabled
                                        />
                                    </div>
                                    <div className='form-group col-md-3'>
                                        <label>Phone Number</label>
                                        <input 
                                            type='text'
                                            className='form-control'
                                            id=''
                                            value='123-456-7890'
                                            disabled
                                        />
                                    </div>
                                    <div className='form-group col-md-4'>
                                        <label>Preferred Contact Number</label>
                                        <select className='form-select'>
                                            <option selected disabled>Please Select</option>
                                            <option>Email</option>
                                            <option>Phone</option>
                                        </select>
                                    </div>
                                    <div className='form-group col-md-5'>
                                        <label>How Employee would like to receive their form back</label>
                                        <select className='form-select'>
                                            <option selected disabled>Please Select</option>
                                            <option>Email</option>
                                            <option>First Class Mail</option>
                                        </select>
                                    </div>
                                    <div className='form-group col-md-3'>
                                        <label>Status</label>
                                        <select className='form-select'>
                                            <option value='0' selected>New</option>
                                            <option value='1'>Information Required</option>
                                            <option value='2'>Revisit</option>
                                            <option value='3'>Completed</option>
                                            <option value='4'>Cancelled</option>
                                        </select>
                                    </div>
                                </div>

                                <h4>Dependents Information</h4>
                                <hr/>
                                <div className='form row'>
                                    <div className='form-group col-md-3'>
                                        <label>Dependant</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id=''
                                            placeholder='Name'
                                        />
                                    </div>
                                    <div className='form-group col-md-3'>
                                        <label>Dependant</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id=''
                                            placeholder='Name'
                                        />
                                    </div>
                                    <div className='form-group col-md-3'>
                                        <label>Dependant</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id=''
                                            placeholder='Name'
                                        />
                                    </div>
                                    <div className='form-group col-md-3'>
                                        <label>Dependant</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id=''
                                            placeholder='Name'
                                        />
                                    </div>
                                </div>

                                <div className='text-end'>
                                    <button type='button' className='btn btn-primary mt-4'> Save Changes </button>
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

export default ApplicationEdit
