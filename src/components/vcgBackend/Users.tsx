import React from 'react';
import {BiPlus} from "react-icons/bi";
import {IoMdTrash} from "react-icons/io";
import { BsPencilFill } from "react-icons/bs";
import {RiArrowUpDownLine} from "react-icons/ri";
import "./style.css";
import Sidebar from '../../config/Sidebar';
import Header from '../../config/Header';

function Users() {
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
                            Users
                        </h3>
                        <div className='d-flex justify-content-end'>
                            <a href='/userAdd' className='btn btn-sm bg-white btn-icon-text-border'><BiPlus/>Add User</a>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-body p-2 overflow-hidden'>
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
                                    <thead className='table-info'>
                                        <tr>
                                        <th className='sorting' aria-controls='data-table' aria-sort='ascending'>Name
                                          <a href='/' className='text-dark ms-1'><RiArrowUpDownLine className='text-muted'/></a></th>
                                        <th className='sorting' aria-controls='data-table' aria-sort='ascending'>Email
                                          <a href='/' className='text-dark ms-1'><RiArrowUpDownLine className='text-muted'/></a></th>
                                        <th className='sorting' aria-controls='data-table' aria-sort='ascending'>Role/s
                                          <a href='/' className='text-dark ms-1'><RiArrowUpDownLine className='text-muted'/></a></th>
                                        <th className='sorting' aria-controls='data-table' aria-sort='ascending'>Statues
                                          <a href='/' className='text-dark ms-1'><RiArrowUpDownLine className='text-muted'/></a></th>
                                        <th className='sorting' aria-controls='data-table' aria-sort='ascending'></th>
                                        </tr>
                                    </thead>
                                    <thead>
                                      <tr>
                                        <th className='text-muted'><input type='text' className='form-control' placeholder='Search Name'/></th>
                                        <th className='text-muted'><input type="text" className='form-control' placeholder='Search Email'/></th>
                                        <th className='text-muted'><input type='text' className='form-control' placeholder='Search Role'/></th>
                                        <th className='text-muted'>
                                          <select className='form-select'>
                                            <option value='Select' selected>Select</option>
                                            <option value='Active'>Active</option>
                                            <option value='Active'>Inactive</option>
                                          </select>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Marhonda Gordon</td>
                                            <td>marhonda@vcgconsultants.com</td>
                                            <td><span className="badge badge-secondary text-dark">Administrator</span></td>
                                            <td><span className='badge badge-success'>Active</span></td>
                                            <td className='text-center'><a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-toggle='modal' data-target='#deleteModel'>
                                                <IoMdTrash/></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Jeff Bloom</td>
                                            <td>jeff@gmail.com</td>
                                            <td><span className="badge badge-secondary text-dark">Administrator</span></td>
                                            <td><span className='badge badge-success'>Active</span></td>
                                            <td className='text-center'><a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-toggle='modal' data-target='#deleteModel'>
                                                <IoMdTrash/></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Tina Johnson</td>
                                            <td>tina@yahoo.com</td>
                                            <td><span className="badge badge-secondary text-dark">Administrator</span> <span className="badge badge-secondary text-dark">Manager</span></td>
                                            <td><span className='badge badge-success'>Active</span></td>
                                            <td className='text-center'><a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-toggle='modal' data-target='#deleteModel'>
                                                <IoMdTrash/></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Derrick Cooper</td>
                                            <td>derrick@vcgconsultants.com</td>
                                            <td><span className="badge badge-secondary text-dark">Manager</span></td>
                                            <td><span className='badge badge-success'>Active</span></td>
                                            <td className='text-center'><a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-toggle='modal' data-target='#deleteModel'>
                                                <IoMdTrash/></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Johng Vang</td>
                                            <td>johne@gmail.com</td>
                                            <td><span className="badge badge-secondary text-dark">Team Member</span></td>
                                            <td><span className='badge badge-success'>Active</span></td>
                                            <td className='text-center'><a href='/' className='mr-2'><BsPencilFill/></a>  <a href='/' data-toggle='modal' data-target='#deleteModel'>
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
            </div>
        </div>
    </div> 
    </>
  )
}

export default Users
