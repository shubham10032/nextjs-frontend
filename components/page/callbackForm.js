import axios from "axios";
import { useFormik } from 'formik'
import { useState } from "react";
import * as Yup from "yup";
import Image from "next/image";
const callbackForm = () => {
  const [active, setActive] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState()
  const initialValues = {
    name: '',
    email: '',
    phone_no: ''
  }

  const callbackSchema = Yup.object({
    name: Yup.string().min(2, 'Invalid name').required("Please enter your name "),
    email: Yup.string().email(),
    phone_no: Yup.string().min(10, 'Invalid phone number').max(10, 'Invalid phone number').required("Please enter your phone number").matches(/^\+?[6-9][0-9]{7,14}$/, "Invalid phone number"),
  });

  const { values, errors, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: callbackSchema,
      onSubmit: async (values, action) => {
        try {
          setActive(true)
          const res = await axios.post(`${process.env.APIHOST}/api/franchise_enquiry`, values);
          if (res.data.status) {
            setError(false)
            setActive(false)
            setMessage('Thank you for enquiry')
          } else {
            setError(false)
            setActive(false)
          }
        } catch (error) {
          setError(true)
          setActive(false)
          console.log("Message : ", error.message)
        }
      }
    });

  return (
    <>
      <div className="eligibility-form-box" >
       <div className="eligibility-form-heding-box">
        <div className="eligibility-circle"></div>
          <div className="hyno-fimg-box">
            <Image src="/images/icon/scheme/central-level-sub.webp" height={71} width={71} /></div>
          <h2>Get Partnership</h2>
       </div>
        

        <form onSubmit={(e) => { e.preventDefault(), handleSubmit() }} className="check-eligibility-form call-back-form">
        
          <div className="form-floating mb-3 input-wrapper form-group cef-group">
            <input type="text" name="name" autoComplete="off"   required onChange={handleChange} value={values.name} />

            <label htmlFor="floatingInput">Name</label>
            {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null}
          </div>

          <div className="form-floating mb-3 input-wrapper form-group cef-group">
            <input type="email" name="email" autoComplete="off" required onChange={handleChange} value={values.email} />
            <label htmlFor="floatingInput">Email</label>
            {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null}
          </div>
          <div className="form-floating mb-3 input-wrapper form-group cef-group">
            <input type="number" name="phone_no" autoComplete="off"   maxLength="10" required onChange={handleChange} value={values.phone_no} />
            <label htmlFor="floatingInput">Mobile No</label>
            {errors.phone_no && touched.phone_no ? (
              <p className="form-error">{errors.phone_no}</p>
            ) : null}
          </div>
          <span className="text-success">{message}</span>
          {error && <span className="text-danger">Something went wrong!</span>}

          <div className="search-button">
            <div className="search-button"><button className="lq-toggle-btn thm-btn feature-four__top-btn check-eligibilit-btn" disabled={active} type="submit" >{active ? <> Processing <i className="fa fa-spinner fa-spin"></i> </> : "Let’s Go!"}</button></div>

          </div>

        </form>
      
      </div>
    </>
  )
}

export default callbackForm