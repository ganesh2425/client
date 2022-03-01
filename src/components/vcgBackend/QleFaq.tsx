/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaArrowsAlt } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";
import { BiPlus } from 'react-icons/bi';
import { IoMdTrash } from 'react-icons/io';
import Sidebar from '../../config/Sidebar';
import Header from '../../config/Header';

function QleFaq() {
  return (
    <>
    <div className='container-scroller'>
      <Sidebar/>
      <div className='container-fluid page-body-wrapper'>
        <Header/>
          <div className='main-panel'>
            <div className='content-wrapper pb-0'>
              <div className='page-header flex-wrap'>
                <h3 className='mb-0'> QLE / FAQ </h3>
                <div className='d-flex justify-content-end'>
                  <a href='/qleFaqAdd' className='btn btn-sm bg-white btn-icon-text border'><BiPlus/> Add FAQ</a>
                </div>
              </div>

              <div className='card'>
                <div className='card-body p-2 overflow-hidden'>
                  <div className='text-right mb-3 mt-3'><i>Click and drag symbol <FaArrowsAlt className='text-muted'/> to move up/down</i></div>

                  <div className='table-responsive'>
                    <table className='table table-sortable'>
                      <tbody>
                        <tr draggable='true'>
                          <td className='text-center align-top'><FaArrowsAlt className='text-muted'/></td>
                            <td><span className='text-muted'>What is a QLE?</span><br/>
                            <p className="mb-0">A qualified life event (QLE) is an event in your life that qualifies you to make changes to your employee benefits outside of an Annual Enrollment period.</p>
                          </td>
                          <td className="text-center align-top" width="10%"><a href="javascript:;" className="mr-2"><BsPencilFill/></a> <a href="/" data-toggle="modal" data-target="#deleteModal"><IoMdTrash/></a></td>
                        </tr>
                        <tr draggable='true'>
                          <td className='text-center align-top'><FaArrowsAlt className='text-muted'/></td>
                          <td><span className='text-muted'> What is considered a qualifying life event?</span><br/>
                          <p className="mb-0">Under Randstad’s plan, a qualifying life event can be one of the following:</p>
                          <ul>
                              <li>marriage</li>
                              <li>birth of a child</li>
                              <li>adoption of a child</li>
                              <li>divorce or separation</li>
                              <li>death in your family</li>
                              <li>change in eligibility</li>
                              <li>loss of other coverage</li>
                              <li>gaining other coverage</li>
                              <li>significant increase in the cost of coverage</li>
                          </ul>
                          <p>For a complete list of qualifying life events covered under Randstad’s plan, refer to the plan documents on the benefits portal at&nbsp;<a href="https://staffing.benefitsnow.com/" target="_blank">https://staffing.benefitsnow.com</a></p>
                          </td>
                          <td className="text-center align-top" width="10%"><a href="javascript:;" className="mr-2"><BsPencilFill/></a> <a href="/" data-toggle="modal" data-target="#deleteModal"><IoMdTrash/></a></td>
                        </tr>
                        <tr draggable='true'>
                        <td className="text-center align-top"><FaArrowsAlt className='text-muted'/></td>
                        <td><span className='text-muted'>How long do I have to submit my QLE?</span><br/>
                        <p className="mb-0">Under Randstad’s plan, you must complete your QLE enrollment within 60 days of your event date. Completing your QLE incudes initiating and submitting all required documentation within 60 days. Failure to complete your QLE within 60 days of your event date will result in your QLE being denied.</p>
                        </td>
                        <td className="text-center align-top" width="10%"><a href="javascript:;" className="mr-2"><BsPencilFill/></a> <a href="/" data-toggle="modal" data-target="#deleteModal"><IoMdTrash/></a></td>
                        </tr>
                      </tbody>
                    </table>
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

export default QleFaq
