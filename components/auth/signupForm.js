import React, { useState } from 'react'
import Link from 'next/link';
import { setCustomerAccessToken, setUserProfile, signupSchema } from './../../utils'
import { useFormik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import VerifyOtp from './verifyOtp'
const signupForm = () => {
  const [registerStatus, setRegisterStatus] = useState();
  const [modal, setModal] = useState(false)
  const [active, setActive] = useState(false)
  const { values, errors, touched, setFieldValue, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        full_name: '',
        phone_no: '',
        pancard: '',
        pincode: '',
        dob: '',
      },
      validationSchema: signupSchema,
      onSubmit: async (values, action) => {
        try {
          setActive(true)
          const res = await axios.post(`${process.env.APIHOST}/api/generate-mobile-otp`, values);
          if (res.data.success) {
            setModal(true)
            setActive(false)
            setRegisterStatus(true)
            if (typeof window !== 'undefined') {
              localStorage.setItem("full_name", values.full_name);
              localStorage.setItem("phone", values.phone_no);
            }
            setUserProfile(values)
            setCustomerAccessToken(res.data.token)

          }
        } catch (error) {
          setRegisterStatus(false)
          setActive(false)
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

        }
      },
    });
  return (


    <>
    
    <ToastContainer />
    <form className="signup" onSubmit={handleSubmit}>
      <VerifyOtp registerStatus={registerStatus} values={values} phone={values.phone_no} modal={modal} setModal={setModal} />
      <div className="signup-box form-input-box">
        <div className="signup-title login-title form-title">
          <h2>Register Here</h2>
        </div>

        <div className='auth-form-row'>
          <div className="group group-in">
          <label>Fullname</label>
            <input type="text" name="full_name" placeholder="Fullname" onChange={handleChange} value={values.full_name} />
            <span className="highlight"></span>
            <span className="bar"></span>
            
            {errors.full_name && touched.full_name ? (
              <div className='form-error'>{errors.full_name}</div>
            ) : null}
          </div>
          <div className="group group-in">
          <label>Phone Number</label>
            <input type="text" name='phone_no' placeholder="Phone Number" onChange={handleChange} value={values.phone_no} required />
            <span className="highlight"></span>
            <span className="bar"></span>
            
            {errors.phone_no && touched.phone_no ? (
              <div className='form-error'>{errors.phone_no}</div>
            ) : null}
          </div>
        </div>
        <div className="group group-in">
        <label>Date of Birth</label>
          <input type="date" name='dob' placeholder="Date of Birth" onChange={handleChange} value={values.dob} required />
          <span className="highlight"></span>
          <span className="bar"></span>
         
          {errors.dob && touched.dob ? (
            <div className='form-error'>{errors.dob}</div>
          ) : null}
        </div>
        <div className='auth-form-row'>
          <div className="group group-in">
          <label>Pan Card</label>
            <input type="text" name='pancard' placeholder="Pan Card" onChange={handleChange} value={values.pancard} required />
            <span className="highlight"></span>
            <span className="bar"></span>
            
            {errors.pancard && touched.pancard ? (
              <div className='form-error'>{errors.pancard}</div>
            ) : null}
          </div>
          <div className="group group-in">
          <label>Pincode</label>
            <input type="text" name='pincode' placeholder="Pincode" onChange={handleChange} value={values.pincode} required />
            <span className="highlight"></span>
            <span className="bar"></span>
           
            {errors.pincode && touched.pincode ? (
              <div className='form-error'>{errors.pincode}</div>
            ) : null}
          </div>
        </div>
        <div className='login-page-btn'>
            <button type='submit' className="button button--aylen button--round-l button--text-thick" disabled={active}>Proceed {active ? <i className="fa fa-spinner fa-spin text-white"></i> : <i className="fas fa-paper-plane"></i>}</button>
        </div>
        <div className="chkbox-area form-check">
          <input id="otpCheckbox" name='policy' type="checkbox" required />
          <label htmlFor='otpCheckbox'>
           By submitting this form, you agree to ReferLoan's <Link href="terms-and-conditions"><a target="_blank"> Terms of Use  </a></Link> and <Link href="privacy-policy"><a target="_blank"> Privacy Policy </a></Link> and willingly provide your data to ReferLoan.
            
          </label>
        </div>
      </div>
    </form>
    </>
    

  )
}

export default signupForm