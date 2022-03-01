import React from 'react';
import vcgMini from "../assets/vcg-logo-mini.svg";
import vcgLogo from "../assets/vcg-logo.svg";
import {CgMenuGridR} from "react-icons/cg";
import {MdToday} from "react-icons/md";
import {RiQuestionnaireLine} from "react-icons/ri";
import { FaUserFriends,FaUserCircle,FaUser } from "react-icons/fa";
import { BsFileEarmarkTextFill,BsFileEarmarkBarGraphFill } from "react-icons/bs";
import "./Sidebar.css";

function Sidebar() {
  return (
    <>
    <nav className='sidebar sidebar-offcanvas' id='sidebar'>
        <div className='text-center sidebar-brand-wrapper d-flex align-items-center'>
          <a className='sidebar-brand brand-logo mt-0' href='/dashboard'><img src={vcgLogo} alt='/'/></a>
          <a className='sidebar-brand brand-logo-mini pl-4 pt-3' href='/dashboard'><img src={vcgMini} alt='/'/></a>
        </div>

        <ul className='nav'> 
          <li className='nav-item'>
            <a className='nav-link' href='/dashboard'>
              <CgMenuGridR/>
              <span className='menu-title'>Dashboard</span>
            </a>
          </li>
          <li><h5 className='px-3 py-0 mb-0'>QLE</h5>
            <li className='nav-item'>
              <a className='nav-link' href='/qle'>
              <MdToday/>
                <span className='menu-title'>QLEs</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/qleReports'>
                <BsFileEarmarkBarGraphFill/>
                <span className='menu-title'>Reports</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/qleFaq'>
                <RiQuestionnaireLine/>
                <span className='menu-title'>FAQs</span>
              </a>
            </li>
          </li>

          <li><h5 className='px-3 py-0 mb-0'>ACA</h5>
            <li className='nav-item'>
              <a className='nav-link' href='/applications'>
                <BsFileEarmarkTextFill/>
                <span className='menu-title'>Applications</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/acaReports'>
                <BsFileEarmarkBarGraphFill/>
                <span className='menu-title'>Reports</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/acaFaq'>
                <RiQuestionnaireLine/>
                <span className='menu-title'>FAQs</span>
              </a>
            </li>
          </li>

          <li><h5 className='px-3 py-3 mb-0 text-uppercase'><span className='title menu-title'>Settings</span></h5>
            <li className='nav-item'>
              <a className='nav-link' href='/roles'>
                <FaUser/>
                <span className='menu-title'>Roles</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/users'>
                <FaUserFriends/>
                <span className='menu-title'> Users</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/employers'>
                <FaUserCircle/>
                <span className='menu-title'>Employers</span>
              </a>
            </li>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Sidebar;
