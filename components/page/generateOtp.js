import TextField from '@material-ui/core/TextField';
import { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from 'formik'
import * as Yup from "yup";
import Loader from "./loader";
import { useRouter } from 'next/router';
import Link from 'next/link';
import ResponsiveDialog from './dialogBox';
import { setAccessToken, getAccessToken, generateOtpSchema } from './../../utils'
import Router from 'next/router';
const GenerateOtp = ({ setToken, setUserValues, data, setServerSideMsg, setServerSideStatus, serversidemsg, serversideStatus, utmData, setUtmForm, setStep }) => {

  const router = useRouter()
  let utmId = '';
  const { utm_campaign, utm_id, utm_medium, utm_source } = router.query
  if (utm_id === undefined) {
    utmId = utm_campaign
  } else {
    utmId = utm_id;
  }


  const [otpStatus, setOtpStatus] = useState(false);
  const [active, setActive] = useState(false)
  const [loading, setLoading] = useState(true)
  const [resendActive, setResendActive] = useState(true)
  const [bank_product_id, setBankProductId] = useState('');
  const [time, setTime] = useState(0)
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState()
  const [resendOtpMessage, setResendOtpMessage] = useState(false)
  const [genOtpData, setGenOtpData] = useState({
    "full_name": '',
    "phone_no": '',
    "otp": '',
    "bank_product_id": ''
  })

  const verifyOtp = async (e) => {
    e.preventDefault();
    setServerSideStatus(true)
    try {

      const { phone_no, otp } = values;
      const data = {
        phone_no, otp, bank_product_id, utm_campaign, utm_id: utmId, utm_medium, utm_source, offer: ""
      }
      if (otp) {
        const res = await axios.post(`${process.env.APIHOST}/api/verify-otp`, data);
        if (res.data.status) {

          setServerSideStatus(true)
          setTimeout(() => {
            if (typeof window !== 'undefined') {
              window.localStorage.removeItem("token");
              window.localStorage.removeItem("full_name");
              window.localStorage.removeItem("phone");
            }
          }, 1200000);

          if (utmData && utmData[0].param_name == 'redirect') {



            if (typeof window !== 'undefined') {
              localStorage.setItem("full_name", values.full_name);
              localStorage.setItem("phone", values.phone_no);
              localStorage.setItem("token", JSON.stringify(res.data.token));
            }
            setToken(window.localStorage.getItem("token"))
            setUtmForm(true)




          } else {
            if (typeof window !== 'undefined') {
              localStorage.setItem("full_name", values.full_name);
              localStorage.setItem("phone", values.phone_no);
              localStorage.setItem("token", JSON.stringify(res.data.token));
            }
            setStep(0)
            setToken(window.localStorage.getItem("token"))
          }

        } else {
          setServerSideStatus(false)
          setServerSideMsg(res.data.message)
        }
      }

    } catch (error) {
      setServerSideStatus(false)
      setServerSideMsg('Something Went Wrong')
      console.log("message", error.message);
    }
  }

  const OtpSchema = Yup.object({
    full_name: Yup.string().min(2, 'Invalid name').required("Please enter your name "),
    phone_no: Yup.string().min(10, 'Invalid phonenumber').max(10, 'Invalid phone number').required("Please enter your phone number").matches(/^\+?[6-9][0-9]{7,14}$/, "Invalid phone number"),
  });

  const { values, errors, touched, setFieldValue, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: genOtpData,
      validationSchema: generateOtpSchema,
      onSubmit: async (values, action) => {
        setServerSideStatus(true)
        try {

          setUserValues(values)
          const { phone_no, full_name } = values;
          const data = {
            phone_no, full_name, bank_product_id, utm_campaign, utm_id: utmId, utm_medium, utm_source, offer: ""
          }
          setActive(true)
          const res = await axios.post(`${process.env.APIHOST}/api/generate-otp`, data);
          if (res.data.success) {
            setOtpStatus(true)
            setGenOtpData({ ...genOtpData, full_name: values.full_name, phone_no: values.phone_no })
            setActive(false)
            // action.resetForm()
            setTimeout(() => {
              if (typeof window !== 'undefined') {
                setResendActive(false)
              }
            }, 30000);

            let timeleft = 30;
            var downloadTimer = setInterval(function () {
              timeleft--;
              setTime(timeleft)
              if (timeleft <= 0)
                clearInterval(downloadTimer);
            }, 1000);
          } else {
            setServerSideStatus(false)
            setServerSideMsg(res.data.message)
          }
        } catch (error) {
          setActive(false)
          setServerSideStatus(false)
          setServerSideMsg('Something went wrong!')
          console.log("message", error.message);
        }
      },
    });


  const checkEligibility = async () => {
    try {
      const res = await axios.get(`${process.env.APIHOST}/api/productsections/form/${data.bank_product_id}`);
      if (res.data[0]) {
        setOpen(true)
        setResponse(res.data[0])
      }

    } catch (error) {
      console.log('Message: ' + error.message);
    }
  }

  const resendOtp = async () => {
    try {
      const { phone_no, full_name } = values;
      const data = {
        phone_no, full_name, bank_product_id, utm_campaign, utm_id: utmId, utm_medium, utm_source, offer: ""
      }
      const res = await axios.post(`${process.env.APIHOST}/api/generate-otp`, data);
      if (res.data.success) {
        setOtpStatus(true)
        setResendOtpMessage(true)
        setTimeout(() => {
          if (typeof window !== 'undefined') {
            setResendActive(false)
          }
        }, 30000);

        let timeleft = 30;
        var downloadTimer = setInterval(function () {
          timeleft--;
          setTime(timeleft)
          if (timeleft <= 0)
            clearInterval(downloadTimer);
        }, 1000);
      } else {
        setServerSideStatus(false)
        setServerSideMsg(res.data.message)
      }
    } catch (error) {
      console.log("Message : ", error.message)
    }
  }


  useEffect(() => {
    setStateProperty()

    return () => {
      setLoading({});
      setBankProductId({});
      setResendOtpMessage({});
      setOtpStatus({});

    };
  }, [data])

  const setStateProperty = () => {
    setLoading(false)
    setBankProductId(data.bank_product_id)
    setResendOtpMessage(false)
    setOtpStatus(false)


  }

  return (
    <>

      {loading && <Loader />}
      {open && <ResponsiveDialog {...{ setOpen, open, response, data }} />}

      {!otpStatus ?
        <form onSubmit={handleSubmit} id="formdata">
          <TextField value={values.full_name} required name="full_name" fullWidth label="Full Name" variant="standard" onChange={handleChange} onBlur={handleBlur} />
          {errors.full_name && touched.full_name ? (
            <p className="form-error">{errors.full_name}</p>
          ) : null}

          <TextField type="number" value={values.phone_no} required name="phone_no" fullWidth label="Phone Number" variant="standard" onChange={handleChange} onBlur={handleBlur} onWheel={(e) => e.target.blur()} />
          {errors.phone_no && touched.phone_no ? (
            <p className="form-error">{errors.phone_no}</p>
          ) : null}

          <div className="chkbox-area">
            <input id="otpCheckbox" type="checkbox" required />
            <div className='check-privacy'>
              <span>
                By submitting this form, you have read and agree to the Credit Report
                Terms of Use,
              </span>
              <Link href="terms-and-conditions" passHref>
                <a target="_blank"> Terms of Use </a>
              </Link>

              <Link href="privacy-policy" passHref>
                <a target="_blank"> Privacy Policy </a>
              </Link>
            </div>
          </div>
          <div className="feature-four__top-btn-box">
            <button className="thm-btn feature-four__top-btn" type="submit" disabled={active} >Generate OTP {active ? <i className="fa fa-spinner fa-spin"></i> : ''}</button>
          </div>
        </form> :

        <form onSubmit={verifyOtp}>
          <span> Enter the OTP sent to <span className='fw-bold'>+91-{values.phone_no}</span></span>
          {resendOtpMessage ? <div className='text-success mt-2'>Resend OTP Successfully</div> : ''}
          <TextField type='text' inputProps={{ pattern: "[0-9]{4}", title: "OTP must be 4 digit" }} value={values.otp} required name="otp" fullWidth label="OTP" variant="standard" onChange={handleChange} />
          {errors.otp && touched.otp ? (
            <p className="form-error">{errors.otp}</p>
          ) : null}
          {(resendActive || time != 0) ? <div className='mt-4'> Dont receive the OTP ?   <span id="verifiBtn"> {time != 0 ? 'in ' + time + ' Seconds' : ''}  </span></div>
            : <div className='mt-4 mb-4'><a className={`resendBtn`} onClick={resendOtp} >RESEND OTP</a></div>
          }

          <div className="feature-four__top-btn-box mt-4">
            <button className="thm-btn feature-four__top-btn" type="submit" >verify OTP</button>
          </div>
        </form>
      }
    </>
  )
}

export default GenerateOtp
