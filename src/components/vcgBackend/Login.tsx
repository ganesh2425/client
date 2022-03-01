import React from 'react';
import * as Yup from "yup";
import {Formik, Form, FormikProps, Field} from "formik";
import {ILoginForm, IFormStatus, IFormStatusProps} from "../../interfaces/loginType";
import { Button } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";
import {LoginState} from "../../interfaces/types";
import { getLoginDetails } from '../../reducers/authReducer';
import StorageService from '../../services/Storage.service';
import { history } from '../../config/history';
import { commonAction } from '../../actions/configActions';
import { fetchLoginRequest } from '../../actions/authActions';
import loginLogo from "../../assets/login.svg"; 
import vcgLogo from "../../assets/vcg-logo.svg";
import captchaLogo from "../assets/recaptcha.png";
import "./Log.css";
import FetchLoginSaga from "../../sagas/authSaga";

// let history = useHistory();

const formStatusProps: IFormStatusProps = {
  success: {
    message: 'Access successful.',
    type: 'success',
  },
  error: {
    message: 'Incorrect details. Please try again.',
    type: 'error',
  },
}

// function login();
const Login: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [displayFormStatus, setDisplayFormStatus] = useState(false)
  const [loginData, setLoginData] = useState<LoginState>({
    pending: false,
    error: null,
    accessToken: ''
  });
  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: '',
    type: '',
  })
  
  const loginRes = useSelector(getLoginDetails);
  useEffect(()=>{
    if (loginRes.accessToken && !loginData.accessToken) {
      setLoginData(loginRes)
      setFormStatus(formStatusProps.success)
      StorageService.setCookies('accessToken', loginRes.accessToken)
      history.push('/dashboard');
      //window. location.reload();
      dispatch(commonAction({ entity_admin: false, entity_user: false }));
      // window. location.reload();
    } else if (loginRes.error === 'Unauthorized') {
      document.body.classList.remove("api-loading");
      // toast.error('Invalid login credentials, Please try again');
      setDisplayFormStatus(true)
      setFormStatus(formStatusProps.error)
    }
  }, [loginData.accessToken, loginRes]);

  const CheckLogin = (data: ILoginForm, _resetForm: () => void) => {
    //if (captchaResponse) {
      dispatch(fetchLoginRequest(data));
   // }
   // else {
    //  setCaptchaResponse("");
    //}
  }

  const [captchaResponse, setCaptchaResponse] = useState("");

  let isSubmitted = false;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const callback = function () {
    console.log('Done!!!!');
  };
  return (
    <>
    <div className='container-fluid'>
      <div className='main-panel' style={{display:"block",
    width:"82%",
    marginTop:"100px",
    marginLeft:"auto",
    marginRight:"auto",
    marginBottom:"50px",
    backgroundColor:"#eceff1"
    }}>   
        <div className='content-wrapper pb-0'>  
          <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 d-none d-lg-block'>
              <img src={loginLogo} alt="/" className='login'/>
            </div>
            <Formik 
              initialValues={{
                username:"",
                //email:"",
                password:"",
                //isCaptchaVerified: 0
              }}
              onSubmit={(values: ILoginForm, actions) =>{
                isSubmitted = true;
                CheckLogin(values, actions.resetForm)
                console.log(values);
                setTimeout(()=>{
                  actions.setSubmitting(false)
                }, 500)
              }}
              //validationSchema={Yup.object().shape({
                //email: Yup.string()
                //.email('Please enter valid email format')
                //.required('Please enter a valid email'),
                //password: Yup.string()
                //.required('Please enter valid password')
              //})}
              validateOnChange={false}
              validateOnBlur={false}
            >
            
            {(props: FormikProps<ILoginForm>) =>{
              const {
                values,
                touched,
                errors,
                handleBlur,
                handleChange,
                isSubmitting,
              } = props

              const verifyCallback = (response: any) => {
                setCaptchaResponse(response);
              }
              
              return (
              <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
              <Form 
                className='login-form shadow-sm'
                action='javascript;'
                method='post'
                >
                <div className='text-center mb-3'>
                  <img src={vcgLogo} alt='/'/>
                </div>
                <div className='form-group'>
                  <div className='input-group-icon right'>
                    <div className='input-icon'>
                      <i className='fa fa-envelope fa-sm'></i>
                    </div>
                    <Field
                      type='text'
                      name='username'
                      className='form-control'
                      placeholder='Username'
                      autoComplete='off'
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoFocus
                      />
                  </div>
                  <div className={!!(errors.username && touched.username) ? "error-span show" : "error-span"}>
                        {errors.username && touched.username ? errors.username : "Enter username"}
                      </div>
                </div>
                <div className='form-group mt-4'>
                  <div className='input-group-icon right'>
                    <div className='input-icon'>
                      <i className='fa fa-unlock-alt fa-sm'></i>
                    </div>
                    <input
                      type='password'
                      className='form-control'
                      name='password'
                      placeholder='Password'
                      autoComplete='off'
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      />
                  </div>
                  <div className={!!(errors.password && touched.password) ? "error-span show" : "error-span"}>
                        {errors.password && touched.password ? errors.password : "Enter password"}
                      </div>
                </div>
                <p className='mt-3'>
                  <a href='/' >Forgot Password</a>
                </p>
                <div className='text-center mt-4'>
                   
                </div>
                <div className="text-center mt-3">
                <Button
                    variant="primary"
                    className="btn btn-primary btn-block"
                    type="submit"
                    color="secondary"
                    disabled={isSubmitting}
                  >   Login
                </Button>
              </div>

              {displayFormStatus && (!errors.username || !errors.password) && (
                      <div className="formStatus">
                        {formStatus.type === 'error' ? (
                          <p>
                            {formStatus.message}
                          </p>
                        ) : formStatus.type ===
                          'success' ? (
                          <p>
                            {formStatus.message}
                          </p>
                        ) : null}
                      </div>
                    )}
              </Form>
              </div>
              )
            }}
            </Formik>
          </div>
        </div>
      </div> 
    </div>
    </>
  )
}

export default Login

