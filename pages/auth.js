import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
const SignupForm = dynamic(() => import('../components/auth/signupForm'))
const SigninForm = dynamic(() => import('../components/auth/signinForm'))
const VerifyOtp = dynamic(() => import('./../components/auth/verifyOtp'))
import { getCustomerAccessToken } from '../utils';
import Router from 'next/router';
import Image from 'next/image';
const login = () => {
  const [formType, setFormType] = useState('login')

  useEffect(() => {
    if (getCustomerAccessToken()) {
      Router.push('/');
    }
  }, [])
  
  return (
    <>
      <Head>
        <link href={'/css/login.css'} rel={'stylesheet'} />
      </Head>
      <VerifyOtp />
      <section className='auth-login-section-refer'>
        <div className="wrapper">
          <div className="form-container container">

            <div className='row form-lo-row'>
              <div className='col-lg-7 col-md-6'>
                <div className='login-left-content'>
                  <div className='login-left-content-in'>
                    <div className='left-content-login-heading'>
                      <h3>You're Almost Done!!</h3>
                      <h4>One Step Closer to the Best offers and Financial Products</h4>
                    </div>
                    <div className='left-content-login'>
                      <div className='login-product-list'>
                        <div className='prod-list-lp'>
                          <div className='icon-pro-list'>
                            <Image src="/images/icon/Cards-feature/cashback.png" alt="emi-calculator" width={35} height={35} />
                          </div>
                          <div className='lp-content'>
                            <h4>Loan</h4>
                            <p>Borrow Quickly Pay Easily</p>
                          </div>
                        </div>
                        <div className='prod-list-lp'>
                          <div className='icon-pro-list'>
                            <Image src="/images/icon/Cards-feature/card-2-card.png" alt="emi-calculator" width={35} height={35} />
                          </div>
                          <div className='lp-content'>
                            <h4>Credit Card</h4>
                            <p>Get a Card That Fits Your Need</p>
                          </div>
                        </div>
                        <div className='prod-list-lp'>
                          <div className='icon-pro-list'>
                            <Image src="/images/icon/Cards-feature/paylater.webp" alt="emi-calculator" width={35} height={35} />
                          </div>
                          <div className='lp-content'>
                            <h4>Emi Calculator</h4>
                            <p>Plan How You Need to Repay</p>
                          </div>
                        </div>
                        <div className='prod-list-lp'>
                          <div className='icon-pro-list'>
                            <Image src="/images/icon/Cards-feature/built-credit.png" alt="emi-calculator" width={35} height={35} />
                          </div>
                          <div className='lp-content'>
                            <h4>Credit score Calculator</h4>
                            <p>Keep the Right Track of Your Credit Score</p>
                          </div>
                        </div>
                      </div>
                      <div className='login-page-app'>
                        <div className="feature-four__top-btn-box why-refer-btn">
                          <a href="#" className="thm-btn feature-four__top-btn login-app-btn " type="submit">
                            <span>
                              <Image src="/images/icon/playstore.webp" alt="Download" width={15} height={15} />
                            </span>
                            Download App
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-5 col-md-6'>
                <div className="form-inner ">
                  {
                    formType == 'login' ? <div className='login-form-toggle'>
                      <div className="loginform-box logform form-outer">
                        <SigninForm />

                      </div>
                      <div className='toggle-form-btn' >
                        <p>
                          <span>Not a member? </span> <span className='tagle-span' onClick={() => setFormType('register')}>Signup now</span>
                        </p>
                      </div>
                    </div> : null
                  }
                  {
                    formType == 'register' ? <div className='register-form-toggle' >
                      <div className="signup-box loginform-box form-outer">
                        <SignupForm />
                      </div>
                      <div className='toggle-form-btn' >
                        <p>
                          <span>Already Signup</span> <span className='tagle-span' onClick={() => setFormType('login')} >Login now</span>
                        </p>
                      </div>

                    </div> : null
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default login