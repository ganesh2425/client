/* eslint-disable no-script-url */
import React from 'react';
import loginLogo from "../assets/login.svg";
import vcgLogo from "../assets/vcg-logo.svg";
import captcha from "../assets/recaptcha.png";
import "./Log.css";

function Index() {
  return (
    <>
    <div className='container-fluid page-body-wrapper'>
        
        <div className='main-panel'>
            <div className='content-wrapper pb-0'>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 d-none d-lg-block'>
                        <img src={loginLogo} alt='/'/>
                    </div>

                    <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                        <form className="login-form shadow-sm" action="javascript:;" method="post">
                            <div className='text-center mb-3'>
                                <img src={vcgLogo} alt='logo'/>
                            </div>
                            <div className='form-group mt-4'>
                                <div className='input-group-icon right'>
                                    <div className='input-icon'><i className='fa fa-envelope'></i></div>
                                    <input
                                        type='email'
                                        className='form-control'
                                        name='email'
                                        placeholder='Email'
                                        autoComplete='off'
                                        autoFocus
                                    />
                                </div>
                            </div>
                            <div className='form-group mt-4'>
                                <div className='input-group-icon right'>
                                    <div className='input-icon'><i className='fa fa-lock-open-alt'></i></div>
                                    <input
                                        type='password'
                                        className='form-control'
                                        name='password'
                                        placeholder='Password'
                                        autoComplete='off'
                                        autoFocus
                                    />
                                </div>
                            </div>
                            <p className='mt-3'>
                                <a href='/' >Forgot Password</a>
                            </p>
                            <div className="mb-3 text-center">
                                <img src={captcha} className="" alt='/'/>
                            </div>
                     
                            <div className="form-group">
                                <a href="/dashboard" className="btn-block btn btn-primary">Login</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Index
