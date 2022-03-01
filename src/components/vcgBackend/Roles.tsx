import React from 'react';
import {useState, useEffect} from "react";
import { IFormStatusProps } from '../../interfaces/loginType';
import {useDispatch, useSelector} from "react-redux";
import StorageService from '../../services/Storage.service';
import {RiQuestionnaireLine, RiArrowUpDownLine} from "react-icons/ri";
import {BiPlus} from "react-icons/bi";
import {getRoleEnteredDetails} from "../../reducers/roleReducer";
import { fetchROLERequest } from '../../actions/roleActions';
import Sidebar from '../../config/Sidebar';
import Header from "../../config/Header";
import {RoleState} from "../../interfaces/types";

function Roles() {

  const dispatch = useDispatch()

  const [loginData, setLoginData] = useState<RoleState>({
    pending: false,
    error: null,
    JSON:[]
  });

  const roleSuccess: any = useSelector(getRoleEnteredDetails);

  const data = {
    accessToken: StorageService.getCookies("accessToken"),
  }

  useEffect(()=>{
    dispatch(fetchROLERequest(data));
    if(roleSuccess){
     console.log(roleSuccess)
   }
}, [loginData,roleSuccess])


  return (
    <>
    <div className='container-scroller'> 
      <Sidebar/>
      <div className='container-fluid page-body-wrapper'>
        <Header/>
        <div className='main-panel'>
          <div className='content-wrapper pb-0'>
            <div className='page-header flex-wrap'>
              <h3 className='mb-0'> Roles </h3>
              <div className='d-flex justify-content-end'>
                <a href='/rolesAdd' className='btn btn-sm bg-white btn-icon-text border'><BiPlus/> Add Role </a>
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
                            <div className='table-responsive'>
                            <table className='table table-striped table-hover' id='data-table'>
                          <thead className='table-info'>
                      <tr>
                        <th className='sorting' aria-controls='data-table' aria-sort='ascending'>Name
                        <a href='/' className='text-dark ms-1'><RiArrowUpDownLine className='text-muted'/></a></th>
                        <th className='sorting' aria-controls='data-table' aria-sort='ascending'>Description
                        <a href='/' className='text-dark ms-1'><RiArrowUpDownLine className='text-muted'/></a></th>
                        <th className='sorting' aria-controls='data-table' aria-sort='ascending'>Previlege
                        <a href='/' className='text-dark ms-1'><RiArrowUpDownLine className='text-muted'/></a></th>
                        <th className='sorting' aria-controls='data-table' aria-sort='ascending'></th>
                      </tr>
                    </thead>
                    <thead>
                      <tr>
                        <th className='text-muted'><input type='text' className='form-control' placeholder='Search Name'/></th>
                        <th className='text-muted'><input type="text" className='form-control' placeholder='Search Description'/></th>
                        <th className='text-muted'><input type='text' className='form-control' placeholder='Search Previlege'/></th>
                      </tr>
                    </thead>
                      <tbody>
                      {/*{roleSuccess.length > 0 && roleSuccess.map((role1: any  ) => (
        <div key={role1.id} role={role1.id} />
                      ))}*/}
                      </tbody>
                    </table>
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

export default Roles
