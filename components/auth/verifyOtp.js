import React, { useState } from 'react'
import Link from 'next/link';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import OtpInput from "react-otp-input";
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import Router from 'next/router'
import { useDispatch } from 'react-redux'
import { loginStatus, userInfo } from '../../store/slices/filterSlice';
import { setAccessToken, getAccessToken, setCustomerAccessToken, setUserProfile, setUserUtm } from './../../utils';

const verifyOtp = ({ values, registerStatus = false, phone, modal, setModal }) => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [otp, setOtp] = useState("");
  const [token, setToken] = useState(getAccessToken());
  const [otpError, setOtpError] = useState(false)
  const handleChange = (otp) => setOtp(otp);

  const verifyOtp = async () => {
    try {

      const data = {
        phone_no: phone, otp
      }

      if (otp) {
        const res = await axios.post(`${process.env.APIHOST}/api/verify-mobile-otp`, data);
        if (res.data.status) {
          setOtpError(false)
          setUserUtm(res.data.utm_details);
          dispatch(userInfo(res.data))
          if (typeof window !== 'undefined') {
            localStorage.setItem("Utm", JSON.stringify(res.data.utm_id));
          }

          setCustomerAccessToken(res.data.token);
          if (registerStatus) {
            try {
              const headers = {
                'Authorization': "Bearer " + res.data.token
              }
              const updateResponse = await axios.post(`${process.env.APIHOST}/api/customers/update-mobile-details`, values, { headers });
              setUserProfile(values)

            } catch (error) {
              console.log("Message:", error.message)
            }
          }

          setModal(false)
          dispatch(loginStatus({ status: true }))
          Router.push('/user-auth');
        } else {
          setOtpError(true)
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
      console.log("message", error.message);
    }
  }
  return (
<>
<ToastContainer />
    <Dialog open={modal ? true : false}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      hideBackdrop
      className='otp-popup-box'
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "80%",
            maxWidth: "500px",  // Set your width here
          },
        },
      }}>

      <Box className="dialogwrapper"  >

        <div className='rightContent' >
          <div className='verifyOtp'>
            <DialogTitle id="responsive-dialog-title" >
              OTP sent successfully on your  <b>Mobile Number!</b>
            </DialogTitle>
            <div className='input-otp-box' >
              <div>
                <span className='verifyOtpTitle'><span className='fw-bold'>+91-{phone}</span></span>
                <div className="otpInputWrapper">
                  <label>Please enter your OTP</label>
                  <OtpInput
                    value={otp}
                    onChange={(e) => {
                      setOtpError(false)
                      handleChange(e)
                    }}
                    numInputs={4}
                    separator={<span style={{ width: "8px" }}></span>}
                    isInputNum={true}
                    shouldAutoFocus={true}
                    inputStyle={{
                      border: "0",
                      borderBottom: "1px solid #212529",
                      borderRadius: "0",
                      width: "45px",
                      height: "30px",
                      fontSize: "15px",
                      color: "#000",
                      fontWeight: "500",
                      caretColor: "blue"
                    }}
                    focusStyle={{
                      borderBottom: "1px solid #212529",
                      outline: "none"
                    }}
                  />

                  {
                    otpError && <div className='otp-error mt-2'>Please enter valid OTP</div>
                  }
                  <button type='submit' onClick={verifyOtp} className="verifyBtn button mt-3 button--aylen button--round-l button--text-thick">Verify OTP</button>
                  <p className='not-recieved'>Not Recieved OTP{' '}<Link href='#'><a className='resend'>Resend OTP</a></Link></p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </Box>

    </Dialog>

    </>
  )
}

export default verifyOtp