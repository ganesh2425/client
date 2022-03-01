import React from 'react';
import "./Dash.css";
import {BiPlus} from "react-icons/bi"
import {IoMdTrash} from "react-icons/io";
import { BsPencilFill } from "react-icons/bs";
import Header from '../../config/Header';
import Sidebar from '../../config/Sidebar';

function Employers() {
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
                            Employers
                        </h3>
                        <div className='d-flex justify-content-end'>
                            <a href='/employerAdd' className='btn btn-sm bg-white btn-icon-text border'>
                                <BiPlus/>Add Employer
                            </a>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-body p-2 overflow-hidden'>
                            <div className='table-responsive'>
                                <table className='table table-striped table-hover' id='data-table'>
                                    <thead className='table-info'>
                                        <tr>
                                            <th>Name</th>
                                            <th>Identification Number (EIN)</th>
                                            <th>Address</th>
                                            <th>Status</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Randstad Technologies LLC</td>
                                            <td>26-3305132</td>
                                            <td>One Overton Park 3625 Cumberland Blvd SE<br/>Atlanta, GA - 30339</td>
                                            <td><span className='badge badge-success'>Active</span></td>
                                            <td className='text-center'>
                                                <a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-toggle='modal' data-target='#deleteModel'>
                                                <IoMdTrash/></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Randstad</td>
                                            <td>26-5132330</td>
                                            <td>One Overton Park 3625 Cumberland Blvd SE<br/>Atlanta, GA - 30339</td>
                                            <td><span className='badge badge-success'>Active</span></td>
                                            <td className='text-center'>
                                                <a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-toggle='modal' data-target='#deleteModel'>
                                                <IoMdTrash/></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>TempForce</td>
                                            <td>55-2330513</td>
                                            <td>One Overton Park 3625 Cumberland Blvd SE<br/>Atlanta, GA - 30339</td>
                                            <td><span className='badge badge-success'>Active</span></td>
                                            <td className='text-center'>
                                                <a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-toggle='modal' data-target='#deleteModel'>
                                                <IoMdTrash/></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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

export default Employers
