import React from 'react';

import { BsPencilFill } from "react-icons/bs";

import {IoMdTrash} from "react-icons/io";

import Sidebar from '../../config/Sidebar';
import Header from '../../config/Header';

function Applications() {
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
                    <h3 className='mb-0'>Applications</h3>
                    <div className='d-flex'>

                    </div>
                </div>

                <div className='card'>

                        <div className='card-body p-2 overflow-hidden'>

                            <div className='row'>
                                <div className='col-8'>
                                    <div className='alert alert-warning rounded-0'>
                                        <span className='text-muted'>Status:</span> <span className='selval'>All</span>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <select className='custom-select rounded-0 mt-1' id='dwlStatus'>
                                        <option value='New'>New</option>
                                        <option value='In-Progress'>Information Required</option>
                                        <option value='In Review'>Revisit</option>
                                        <option value='Completed'>Competed</option>
                                        <option value='Cancelled'>Cancelled</option>
                                        <option value='Archive'>Archived</option>
                                        <option value='All' selected>All</option>
                                    </select>
                                </div>
                            </div>
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

                            <div className='table-responsive'>
                                <table className='table table-striped table-hover' id='data-table'>
                                    <thead className='table-info'>
                                        <tr>
                                            <th>Date Received</th>
                                            <th>Name</th>
                                            <th>Employer</th>
                                            <th>Date of Birth</th>
                                            <th>Conf #</th>
                                            <th>SSN</th>
                                            <th>Status</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <thead className='src'>
                                        <tr>
                                        <th className='text-muted'><input type='text' className='form-control' placeholder='Search Date Rece'/></th>
                                        <th className='text-muted'><input type="text" className='form-control' placeholder='Search Name'/></th>
                                        <th className='text-muted'><input type='text' className='form-control' placeholder='Search Employer'/></th>
                                        <th className='text-muted'><input type='text' className='form-control' placeholder='Search Date of'/></th>
                                        <th className='text-muted'><input type="text" className='form-control' placeholder='Search Conf #'/></th>
                                        <th className='text-muted'><input type='text' className='form-control' placeholder='Search SSN'/></th>
                                        <th className='text-muted'><input type='text' className='form-control' placeholder='Search'/></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>10-24-2021</td>
                                            <td>Vanessa Yv Vargas</td>
                                            <td>Randstad</td>
                                            <td>04-07-1972</td>
                                            <td>VCG-6181b6ef043ac</td>
                                            <td>389-92-8721</td>
                                            <td><div className='badge status-new text-white font-weight-normal'>New</div></td>
                                            <td className='text-center'>
                                                <a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-toggle='modal' data-target='#deleteModel'>
                                                    <IoMdTrash/></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12-27-2021</td>
                                            <td>Marhonda Gordon</td>
                                            <td>Randstad</td>
                                            <td>    06-03-1977</td>
                                            <td>    VCG-6189593a723f7</td>
                                            <td>389-92-8721</td>
                                            <td><div className='badge status-new text-white font-weight-normal'>New</div></td>
                                            <td className='text-center'>
                                                <a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-toggle='modal' data-target='#deleteModel'>
                                                <IoMdTrash/></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12-27-2021</td>
                                            <td>
                                                Timothy Captville-Domon</td>
                                            <td>Randstad</td>

                                            <td>01-26-1998</td>
                                            <td>VCG-6189593a723f7</td>
                                            <td>389-92-8721</td>
                                            <td><div className='badge status-new text-white font-weight-normal'>New</div></td>
                                            <td className='text-center'>
                                                <a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-toggle='modal' data-target='#deleteModel'>
                                                <IoMdTrash/></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12-27-2021</td>
                                            <td>Jacob Ev Gryphon</td>
                                            <td>Randstad</td>
                                            <td>03-17-1980</td>
                                            <td>VCG-6189593a723f7</td>
                                            <td>389-92-8721</td>
                                            <td><div className='badge status-new text-white font-weight-normal'>New</div></td>
                                            <td className='text-center'>
                                                <a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-toggle='modal' data-target='#deleteModel'>
                                                <IoMdTrash/></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>10-24-2021</td>
                                            <td>Sheri Stolz</td>
                                            <td>Randstad</td>
                                            <td>07-17-1967</td>
                                            <td>VCG-6189593a723f7</td>
                                            <td>389-92-8721</td>
                                            <td><div className='badge status-new text-white font-weight-normal'>New</div></td>
                                            <td className='text-center'>
                                                <a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-toggle='modal' data-target='#deleteModel'>
                                                <IoMdTrash/></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12-24-2021</td>
                                            <td>Manisha Ballaney</td>
                                            <td>Randstad</td>
                                            <td>04-18-1998</td>
                                            <td>VCG-6181b6ef043ac</td>
                                            <td>389-92-8721</td>
                                            <td><div className='badge status-new text-white font-weight-normal'>New</div></td>
                                            <td className='text-center'>
                                                <a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-toggle='modal' data-target='#deleteModel'>
                                                <IoMdTrash/></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12-27-2021</td>
                                            <td>Suzanna chitty</td>
                                            <td>Randstad</td>
                                            <td>12-14-1986</td>
                                            <td>VCG-6181b6ef043ac</td>
                                            <td>389-92-8721</td>
                                            <td><div className='badge status-new text-white font-weight-normal'>New</div></td>
                                            <td className='text-center'>
                                                <a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-toggle='modal' data-target='#deleteModel'>
                                                <IoMdTrash/></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12-27-2021</td>
                                            <td>Johne Vang</td>
                                            <td>Randstad</td>
                                            <td>06-03-1977</td>
                                            <td>VCG-6181b6ef043ac</td>
                                            <td>389-92-8721</td>
                                            <td><div className='badge status-new text-white font-weight-normal'>New</div></td>
                                            <td className='text-center'>
                                                <a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-toggle='modal' data-target='#deleteModel'>
                                                    <IoMdTrash/></a>
                                            </td>
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

export default Applications
