import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import { generateOtpSchema, setCustomerAccessToken, setUserProfile } from '../../utils'
import { Formik, Form, useFormik } from 'formik';
import axios from 'axios';
const VerifyOtp = dynamic(() => import('./verifyOtp'));


const loginForm = (props) => {
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(false)
  const { values, errors, touched, setFieldValue, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        full_name: '',
        phone_no: '',

      },
      validationSchema: generateOtpSchema,
      onSubmit: async (values, action) => {
        try {
          setActive(true)
          const res = await axios.post(`${process.env.APIHOST}/api/customer-login`, values);
          console.log(res);
          if (res.data.success) {
            setActive(false)
            setModal(true)
            if (typeof window !== 'undefined') {
              localStorage.setItem("full_name", values.full_name);
              localStorage.setItem("phone", values.phone_no);
            }

            setUserProfile(values)


          }

        } catch (error) {
          toast.error('Something Went Wrong!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setActive(false)
          console.log("Message:", error.message)
        }

      },
    });
  return (

    <>
    <ToastContainer />
    <form onSubmit={handleSubmit} className="logiform-tod">
      <VerifyOtp phone={values.phone_no} modal={modal} setModal={setModal} />
      <div className="loginlooing-box form-input-box">
        <div className="login-title form-title">
          <h2>Login Here</h2>
        </div>
        <div className='login-input-box-section-out'>
          <div className='login-input-box-section'>
            <div className="group group-in">
              <label>Name</label>
              <input type="text" name="full_name" placeholder="Fullname" required onChange={handleChange} value={values.full_name} />
              <span className="highlight"></span>
              <span className="bar"></span>
             
              {errors.full_name && touched.full_name ? (
                <div className='form-error'>{errors.full_name}</div>
              ) : null}
            </div>
            <div className='forget-box-in'>
              <div className="group group-in">
                <label>Phone Number</label>
                <input type="text" name='phone_no' placeholder="Phone Number" onChange={handleChange} value={values.phone_no} required />
                <span className="highlight"></span>
                <span className="bar"></span>
                {errors.phone_no && touched.phone_no ? (
                  <div className='form-error'>{errors.phone_no}</div>
                ) : null}
              </div>
              <div className="loanTypebtn check-box-card">
                <div className="form-check"><input className="form-check-input" name="already_credit_card" type="checkbox" id="flexCheckChecked" value="" /><label className="form-check-label" htmlFor="flexCheckChecked">Remember Me</label></div>
                <div>
                </div>
              </div>
            </div>
          </div>
          <div className='login-page-btn'>
            <button type='submit' className="button button--aylen button--round-l button--text-thick" disabled={active} >Proceed {active ? <i className="fa fa-spinner fa-spin text-white"></i> : <i className="fas fa-paper-plane"></i>}</button>
          </div>
        </div>

        <div className="chkbox-area form-check">
          <input id="otpCheckboxs" name='policy' type="checkbox" required />
          <label htmlFor='otpCheckboxs'>
           By submitting this form, you agree to ReferLoan's <Link href="terms-and-conditions"><a target="_blank"> Terms of Use  </a></Link> and <Link href="privacy-policy"><a target="_blank"> Privacy Policy </a></Link> and willingly provide your data to ReferLoan.
          </label>
        </div>


      </div>
    </form>
   
    </>

     



  )
}

export default loginForm