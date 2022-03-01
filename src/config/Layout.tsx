import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "../components/vcgBackend/Login";
import Dashboard from '../components/vcgBackend/Dashboard';
import Qles from "../components/vcgBackend/Qles";
import QleFaq from '../components/vcgBackend/QleFaq';
import QleEdit from '../components/vcgBackend/QleEdit';
import QleFaqAdd from '../components/vcgBackend/QleFaqAdd';
import Applications from '../components/vcgBackend/Applications';
import AcaFaq from '../components/vcgBackend/AcaFaq';
import ApplicationEdit from '../components/vcgBackend/ApplicationEdit';
import AcaFaqAdd from '../components/vcgBackend/AcaFaqAdd';
import Roles from "../components/vcgBackend/Roles";
import RolesAdd from '../components/vcgBackend/RolesAdd';
import Users from '../components/vcgBackend/Users';
import UserAdd from '../components/vcgBackend/UserAdd';
import Employers from '../components/vcgBackend/Employers';
import EmployerAdd from '../components/vcgBackend/EmployerAdd';
import Profile from '../components/vcgBackend/Profile';

function Layout() {
  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/qle' element={<Qles/>}/>
        <Route path='/qleFaq' element={<QleFaq/>}/>
        <Route path='/qleEdit' element={<QleEdit/>}/>
        <Route path='/qleFaqAdd' element={<QleFaqAdd/>}/>
        <Route path='/applications' element={<Applications/>}/>
        <Route path='/acaFaq' element={<AcaFaq/>}/>
        <Route path='/applicationEdit' element={<ApplicationEdit/>}/>
        <Route path='/acaFaq' element={<AcaFaq/>}/>
        <Route path='/acaFaqAdd' element={<AcaFaqAdd/>}/>
        <Route path='/roles' element={<Roles/>}/>
        <Route path='/rolesAdd' element={<RolesAdd/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/userAdd' element={<UserAdd/>}/>
        <Route path='/employers' element={<Employers/>}/>
        <Route path='/employerAdd' element={<EmployerAdd/>}/>
        <Route path='/profile' element={<Profile/>}/>
        
      

      </Routes>

    </BrowserRouter> 
    </>
  )
}

export default Layout
