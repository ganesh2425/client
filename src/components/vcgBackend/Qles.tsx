import React from 'react';
import { BsPencilFill } from "react-icons/bs";
import {IoMdTrash} from "react-icons/io";
import Header from '../../config/Header';
import Sidebar from '../../config/Sidebar';

function Qles() {
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
                            QLEs
                        </h3>
                        <div className='d-flex'></div>
                    </div>

                    <div className='card'>
                        <div className='card-body p-2 overflow-hidden'>
                            <div className='row'>
                                <div className='col-8'>
                                    <div className='alert alert-warning rounded-0'>
                                        <span className='text-muted'>Status:</span> <span className='selval'>Initiated</span>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <select className='form-select rounded-0 mt-1' id='dwlStatus'>
                                        <option value='Pending Review'>Pending Review</option>
                                        <option value='Approved/Pending'>Approved/Pending</option>
                                        <option value='Enrolled/Complete'>Enrolled/Complete</option>
                                        <option value='Initiated'>Initiated</option>
                                        <option value='Info Required'>Info Required</option>
                                        <option value='Danied'>Danied</option>
                                        <option value='Duplicate'>Duplicate</option>
                                        <option value='Archive'>Archive</option>
                                        <option value='All'>All</option>
                                    </select>
                                </div>
                            </div>

                            <div className='table-responsive'>
                            <div>
                                  <ul className="pagination justify-content-end">
                                    <li className="page-item">
                                      <a className="page-link text-muted" href='/'>Previous</a>
                                    </li>
                                    <li className="page-item active" aria-current="page">
                                      <span className="page-link">1</span>
                                    </li>
                                    <li className="page-item">
                                      <a className="page-link text-muted" href="/">Next</a>
                                    </li>
                                  </ul>
                                </div>
                                <table className='table table-striped table-hover' id='data-table'>
                                    <thead  className='table-primary'>
                                        <tr>
                                            <th style={{width:"150px"}}>Name</th>
                                            <th style={{width:"300px"}}>Event Type</th>
                                            <th>SSN</th>
                                            <th>Event Date</th>
                                            <th>Date Submitted</th>
                                            <th>Date Modified</th>
                                            <th style={{width:"50px"}}></th>
                                        </tr>
                                    </thead>
                                    <thead className='src'>
                                        <tr>
                                        <th className='text-muted'><input type='text' className='form-control' placeholder='Search Name'/></th>
                                        <th className='text-muted'><input type='text' className='form-control' placeholder='Search Event Type'/></th>
                                        <th className='text-muted'><input type='text' className='form-control' placeholder='Search SSN'/></th>
                                        <th className='text-muted'><input type='text' className='form-control' placeholder='Search Event Date'/></th>
                                        <th className='text-muted'><input type='text' className='form-control' placeholder='Search Date Submitted'/></th>
                                        <th className='text-muted'><input type='text' className='form-control' placeholder='Search Date Modified'/></th>   
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        <tr>
                                            <td>Arun kumar Thai</td>
                                            <td><span className='text-muted'>I and/or members of my family lost other health coverage & want to enroll in Randstad coverage</span>
                                            Had coverage through spouse's/domestic partner's employer – spouse/domestic partner is no longer eligible for those benefits</td>
                                            <td>389-92-8721</td>
                                            <td>10-24-2021</td>
                                            <td>01-10-2022</td>
                                            <td>01-10-2022</td>
                                            <td className='text-center'><a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-target='#daleteModel'>
                                                <IoMdTrash/></a></td>
                                        </tr>
                                        <tr>
                                            <td>Marhonda Gordon</td>
                                            <td><span className='text-muted'>I and/or members of my family lost other health coverage & want to enroll in Randstad coverage</span>
                                            Had coverage through spouse's/domestic partner's employer – spouse/domestic partner is no longer eligible for those benefits</td>
                                            <td>389-92-8721</td>
                                            <td>10-24-2021</td>
                                            <td>01-10-2022</td>
                                            <td>01-10-2022</td>
                                            <td className='text-center'><a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-target='#daleteModel'>
                                                <IoMdTrash/></a></td>
                                        </tr>
                                        <tr>
                                            <td>Timothy Captville-Domon</td>
                                            <td><span className='text-muted'>I and/or members of my family lost other health coverage & want to enroll in Randstad coverage</span>
                                            Had coverage through spouse's/domestic partner's employer – spouse/domestic partner is no longer eligible for those benefits</td>
                                            <td>389-92-8721</td>
                                            <td>10-24-2021</td>
                                            <td>01-10-2022</td>
                                            <td>01-10-2022</td>
                                            <td className='text-center'><a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-target='#daleteModel'>
                                                <IoMdTrash/></a></td>
                                        </tr>
                                        <tr>
                                            <td>Anastasia Yershova</td>
                                            <td><span className='text-muted'>I and/or members of my family lost other health coverage & want to enroll in Randstad coverage</span>
                                            Had coverage through spouse's/domestic partner's employer – spouse/domestic partner is no longer eligible for those benefits</td>
                                            <td>389-92-8721</td>
                                            <td>10-24-2021</td>
                                            <td>01-10-2022</td>
                                            <td>01-10-2022</td>
                                            <td className='text-center'><a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-target='#daleteModel'>
                                                <IoMdTrash/></a></td>
                                        </tr>
                                        <tr>
                                            <td>Sheri Stolz</td>
                                            <td><span className='text-muted'>I and/or members of my family lost other health coverage & want to enroll in Randstad coverage</span>
                                            Had coverage through spouse's/domestic partner's employer – spouse/domestic partner is no longer eligible for those benefits</td>
                                            <td>389-92-8721</td>
                                            <td>10-24-2021</td>
                                            <td>01-10-2022</td>
                                            <td>01-10-2022</td>
                                            <td className='text-center'><a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-target='#daleteModel'>
                                                <IoMdTrash/></a></td>
                                        </tr>
                                        <tr>
                                            <td>Suzanne chitty</td>
                                            <td><span className='text-muted'>I and/or members of my family lost other health coverage & want to enroll in Randstad coverage</span>
                                            Had coverage through spouse's/domestic partner's employer – spouse/domestic partner is no longer eligible for those benefits</td>
                                            <td>389-92-8721</td>
                                            <td>10-24-2021</td>
                                            <td>01-10-2022</td>
                                            <td>01-10-2022</td>
                                            <td className='text-center'><a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-target='#daleteModel'>
                                                <IoMdTrash/></a></td>
                                        </tr>
                                        <tr>
                                            <td>Manisha Ballaney</td>
                                            <td><span className='text-muted'>I and/or members of my family lost other health coverage & want to enroll in Randstad coverage</span>
                                            Had coverage through spouse's/domestic partner's employer – spouse/domestic partner is no longer eligible for those benefits</td>
                                            <td>389-92-8721</td>
                                            <td>10-24-2021</td>
                                            <td>01-10-2022</td>
                                            <td>01-10-2022</td>
                                            <td className='text-center'><a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-target='#daleteModel'>
                                                <IoMdTrash/></a></td>
                                        </tr>
                                        <tr>
                                            <td>Johne Vang</td>
                                            <td><span className='text-muted'>I and/or members of my family lost other health coverage & want to enroll in Randstad coverage</span>
                                            Had coverage through spouse's/domestic partner's employer – spouse/domestic partner is no longer eligible for those benefits</td>
                                            <td>389-92-8721</td>
                                            <td>10-24-2021</td>
                                            <td>01-10-2022</td>
                                            <td>01-10-2022</td>
                                            <td className='text-center'><a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-target='#daleteModel'>
                                                <IoMdTrash/></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div>
                                  <ul className="pagination justify-content-end">
                                    <li className="page-item">
                                      <a className="page-link text-muted" href='/'>Previous</a>
                                    </li>
                                    <li className="page-item active" aria-current="page">
                                      <span className="page-link">1</span>
                                    </li>
                                    <li className="page-item">
                                      <a className="page-link text-muted" href="/">Next</a>
                                    </li>
                                  </ul>
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

export default Qles
