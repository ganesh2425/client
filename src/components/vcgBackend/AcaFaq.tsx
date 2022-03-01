/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Sidebar from '../../config/Sidebar';
import Header from '../../config/Header';
import {BiPlus} from "react-icons/bi";
import {FaArrowsAlt} from "react-icons/fa";
import {BsPencilFill} from "react-icons/bs";
import {IoMdTrash} from "react-icons/io";

function AcaFaq() {
  return (
    <>
    <div className='container-scroller'>
      <Sidebar/>
        <div className='container-fluid page-body-wrapper'>
        <Header/>
        <div className='main-panel'>
            <div className='content-wrapper pb-0'>
                <div className='page-header flex-wrap'>
                    <h3 className='mb-0'> ACA / FAQ</h3>
                    <div className='d-flex justify-content-end'>
                        <a href='/acaFaqAdd' className='btn btn-sm bg-white btn-icon-text'><BiPlus/> Add FAQ </a>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-body p-2 overflow-hidden '>
                        <div className='text-right mb-3 mt-3'><i>Click and drag symbol <FaArrowsAlt className='text-muted'/> to move up/down</i></div>

                        <div className='table-responsive'>
                            <table className='table table-sortable'>
                                <tbody>
                                    <tr draggable='true'>
                                        <td className='text-center align-top'><FaArrowsAlt className='text-muted'/></td>
                                        <td><span className='text-muted'>Why do I need information about my employer's health coverage to complete my Marketplace application?</span><br/>
                                            <p>Under the Affordable Care Act, certain individuals who apply for health coverage through a Health
                                                Insurance Marketplace are eligible for a government subsidy to help pay for that coverage.</p>
                                            <p>Individuals who are offered health coverage through an employer are eligible for a subsidy only if the
                                                employer's health coverage does not meet certain standards.&nbsp; Information about your employer's health
                                                coverage is required to determine whether or not your employer's coverage meets the established standards
                                                and, based on that finding, whether or not you are eligible for a subsidy.</p>
                                            <p>The information about your employer's health coverage that you include on your Marketplace application
                                                may be validated, so accuracy is essential.&nbsp; To avoid a potential delay in processing your
                                                Marketplace application, it's important that the employer coverage information is accurate.</p>
                                        </td>
                                        <td className='text-center align-top width=10%'><a href="javascript:;" className="mr-2"><BsPencilFill/></a> <a href="/" data-toggle="modal" data-target="#deleteModal"><IoMdTrash/></a></td>
                                    </tr>
                                    <tr draggable='true'>
                                        <td className='text-center align-top'><FaArrowsAlt className='text-muted'/></td>
                                        <td><span className='text-muted'>  Where can I find the Employer Health Coverage section of my application?</span><br/>
                                            <p>The employer health coverage information is located in the following sections of your state's
                                                application:&nbsp;</p>

                                                <table className='table table-sm table-borderless'>
                                                    <tbody>
                                                        <tr>
                                                            <td>California</td>
                                                            <td>Attachment C: Employer Insurance Form</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Colorado</td>
                                                            <td>Worksheet A: Health Coverage from Jobs</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Idaho</td>
                                                            <td>Appendix B: Health Coverage from Jobs</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Massachusetts</td>
                                                            <td>Supplement A: Health Coverage from Jobs</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Maryland</td>
                                                            <td>Appendix A: Health Coverage from Jobs</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Nevada</td>
                                                            <td>Addendum 2: Current Job/Employer Health Coverage</td>
                                                        </tr>
                                                        <tr>
                                                            <td>New York</td>
                                                            <td>Employer Sponsored Health Insurance Request Information</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Oregon</td>
                                                            <td>Appendix B: Employer Insurance Information</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rhode Island</td>
                                                            <td>Health Coverage Information</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Vermont</td>
                                                            <td>Appendix C: Employer Coverage Tool</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Washington</td>
                                                            <td>Part 2: Health Insurance Information</td>
                                                        </tr>
                                                        <tr>
                                                                <td>All Other States</td>
                                                                <td>&nbsp;Employer Coverage Tool</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                        </td>
                                        <td className='text-center align-top' width='10%'><a href='javascript:;' className='mr-2'><BsPencilFill/></a>  <a href='/' data-toggle='model' data-target='#deleteModel'><IoMdTrash/></a></td>
                                    </tr>
                                    <tr draggable='true'>
                                        <td className='text-center align-top '><FaArrowsAlt className='text-muted'/></td>
                                        <td><span className='text-muted'>Can I receive the required employer information over the phone?</span><br/>
                                            <p>You may contact VCG's Administration Services Group by telephone at 1.855.208.7036 Monday through Friday
                                                from 8:00 a.m. to 5:00 p.m. Eastern Time to initiate a request for information about your employer's
                                                health coverage.&nbsp; You will be asked to provide the information listed below under Required
                                                Information, so please have it handy when you call.&nbsp;</p>
                                            <p>Once we collect this information from you, our team must do research in order to provide accurate details
                                                about the health coverage offered to you by your employer.&nbsp; Therefore, we are unable to provide this
                                                information to you while you are on the telephone.&nbsp; We will process your request within five (5)
                                                business days and will deliver your information to you via either e-mail or First Class mail – depending
                                                on your preference.</p>
                                            <p>Required Information:</p>
                                            <ul>
                                                <li>Your employer</li>
                                                <li>The state in which you'll be applying for coverage</li>
                                                <li>Your name</li>
                                                <li>The names of any dependents you'll be covering (for New York applications only)</li>
                                                <li>Your Social Security number</li>
                                                <li>Your date of birth</li>
                                                <li>Your mailing address</li>
                                                <li>Your phone number</li>
                                                <li>Your e-mail address</li>
                                                <li>Your preferred contact method (a way for us to reach you if we have questions)</li>
                                                <li>How you would like to receive information about your employer's health coverage (You may choose from
                                                    e-mail or First Class mail.)</li>
                                            </ul>
                                        </td>
                                        <td className='text-center align-top' width='10%'><a href='javascript:;' className='mr-2'><BsPencilFill/></a>  <a href='/' data-toggle='model' data-target='#deleteModel'><IoMdTrash/></a></td>
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

export default AcaFaq
