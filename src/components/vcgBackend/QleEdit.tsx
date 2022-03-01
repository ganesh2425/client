import React from 'react';
import Header from '../../config/Header';
import Sidebar from "../../config/Sidebar";

function QleEdit() {
  return (
    <>
    <div className='container-scroller'>
      <Sidebar/>
      <div className='container-fluid page-body-wrapper'>
        <Header/>
        <div className='main-panel'>
            <div className='content-wrapper pb-0'>
                <div className='page-header flex-wrap'>

                    <h3 className='mb-0'> QLE / Anastasia Yershova <span className='badge status-pending text-white font-weight-normal'>Pending Review</span></h3>
                    <p className='text-muted'><strong>Event Type:</strong> I and/or members of my family lost other health coverage & want to enroll in Randstad coverage <br/>
                        <span className='ml-6'>Had coverage through spouse's/domestic partner's employer – spouse/domestic partner is no longer eligible for those benefits</span></p>
                    <div className='d-flex'>    
                    </div>
                </div>

                <div className='card text-center'>
                    <div className='card-header'>
                        <ul className='nav nav-tabs card-header-tabs'>
                            <li className='nav-item'>
                                <a className="nav-link active" id="nav-edit-tab" data-toggle="tab" href="#nav-edit" role="tab" aria-controls="nav-edit" aria-selected="true">Edit Information</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="nav-answers-tab" data-toggle="tab" href="#nav-answers" role="tab" aria-controls="nav-answers" aria-selected="false">Answers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="nav-files-tab" data-toggle="tab" href="#nav-files" role="tab" aria-controls="nav-files" aria-selected="false">Files</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="nav-notes-tab" data-toggle="tab" href="#nav-notes" role="tab" aria-controls="nav-notes" aria-selected="false">Notes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="nav-status-tab" data-toggle="tab" href="#nav-status" role="tab" aria-controls="nav-status" aria-selected="false">Send Status Email</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="nav-comm-tab" data-toggle="tab" href="#nav-comm" role="tab" aria-controls="nav-comm" aria-selected="false">Communications</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="nav-activity-tab" data-toggle="tab" href="#nav-activity" role="tab" aria-controls="nav-activity" aria-selected="false">Activity</a>
                            </li>
                        </ul>
                    </div>
                    <div className='card-body tab-content'>
                        <div className='tab-pane fade show active' id='nav-edit' role='tabpanel' aria-labelledby='nav-edit-tab'>
                            <div className='form row'>
                                <div className='form-group col-md-4'>
                                    <label>First Name</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id=''
                                        value='Anastasia'
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
                                        value='Yershova'
                                    />
                                </div>
                                <div className='form-group col-md-4'>
                                    <label>SSN</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='ssn'
                                        value='756260184'
                                        maxLength={9}
                                    />
                                </div>
                                <div className='form-group col-md-4'>
                                    <label>Email Address</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id=''
                                        value='anastasia.yershova@Randstadsourceright.com'
                                        disabled
                                    />
                                </div>
                                <div className='form-group col-md-4'>
                                    <label>Phone Number</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id=''
                                        value='123-456-7890'
                                        disabled
                                    />
                                </div>
                                <div className='form-group col-md-12'>
                                    <label>Event Type</label>
                                    <select className='form-select' id='dwlevent'>
                                        <option value='0' disabled>Please Select</option>
                                        <option value="1" selected>I and/or members of my family lost other health coverage & want to enroll in Randstad coverage</option>
                                        <option value="2">I and/or members of my family gained other health coverage & want to cancel Randstad coverage</option>
                                        <option value="3">Other qualifying life event</option>
                                    </select>
                                    <select className='form-select rounded-0 mt-2 selevent' id='dwl1'>
                                        <option value='' disabled>Please Select</option>
                                        <option selected>Had coverage through spouse's/domestic partner's employer – spouse/domestic partner is no longer eligible for those benefits</option>
                                        <option>Had coverage through spouse's/domestic partner's employer – now divorced/legally separated from spouse or lost domestic partnership</option>
                                        <option>Had coverage through spouse's/domestic partner's employer – spouse/domestic partner died</option>
                                        <option>Had coverage through Medicare, Medicaid, or a state children's health insurance program (CHIP) – no longer eligible for program</option> 
                                        <option>Had coverage through parent – no longer eligible for coverage under parent's plans</option>
                                        <option>Lost coverage when left home country</option>
                                        <option>Other loss of coverage</option>
                                    </select>
                                </div>
                                <div className='form-group col-md-4'>
                                    <label>Event Date</label>
                                    <input
                                        type='text'
                                        className='form-control datepicker'
                                        placeholder='MM-DD-YYYY'
                                        value='12-22-2021'
                                    />
                                </div>
                                <div className='form-group col-md-4'>
                                    <label>Status</label>
                                    <select className='form-select rounded-0'>
                                        <option selected disabled>Please Select</option>
                                        <option value="0">Initiated / Return to Step 2</option>
                                        <option value="1" selected>Pending Review</option>
                                        <option value="2">Additional Documentation Required</option>
                                        <option value="3">Approved / Pending Enrollment Changes</option>
                                        <option value="4">Enrolled/Complete</option>
                                        <option value="5">Denied</option>
                                        <option value="6">Duplicate</option>
                                    </select>
                                </div>
                                <div className='form-group col-md-4'>
                                    <label>Unique Link</label>
                                    <input className='form-control' value='https://www.qleservices.com/qle/resume/suzanne.chitty%40Randstadsourceright.com/4ba84f3f223851f604afcab51d39956c'/>
                                </div>
                            </div>

                            <div className='text-right'>
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

export default QleEdit
