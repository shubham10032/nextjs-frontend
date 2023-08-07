import React, { useState } from 'react'

const ForgetPassword = () => {
    const [inputValue, setInputValue] = useState("");
    const [mobile, setMobile] = useState(false);
    const [passwordM, setPassword] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);

    };
    function validateMobileNumber(mobileNumber) {
        const pattern = /^[0-9]{10}$/; // regular expression pattern for a 10-digit mobile number
        return pattern.test(mobileNumber);
      }
    const validatemobilenumber = (() => {
         const numberError = document.getElementById('match-error')
        if (inputValue.trim() !== '') {
            if(!validateMobileNumber(inputValue)){
                numberError.style.display = "block";
                setMobile(false)
            }
            else{
                numberError.style.display = "none";
                console.log('Input value is not blank:', inputValue);
                setMobile(true)
            }
          } else {
            // handle blank input value
            // console.log('Input value is blank');
            numberError.style.display = "block";
            setMobile(false)
          }

    })
    const handleButtonClick = () => {
        const NewPassword = document.querySelector("input[name='New_password']").value;
        const Cpaa = document.querySelector("input[name='Confirm_password']").value;
        const matchError = document.querySelector("span.matchError");
            
        if(NewPassword === Cpaa){
            setPassword(true)
            matchError.style.display = "none";
        }else{
            matchError.style.display = "block";
        }
    };
    return (
        <>
            <form>
                <div className="loginform-box logform form-outer forgate-forms">

                    <div className="loginlooing-box form-input-box">
                        <div className="login-title form-title">
                            <h2>Forget Password</h2>
                        </div>
                        {
                            !mobile ? <div className='mobile-number-inter'>
                                <div className="login-input-box-section-out">
                                    <div className="login-input-box-section" style={{ "marginTop": "40px" }}>
                                        <div className="group group-in">
                                            <label>Phone Number</label>
                                            <input type="text" name="Mobile_Number" value={inputValue} onChange={handleInputChange} style={{ "marginBottom": "0" }} placeholder="Please enter your registered Mobile number" required="required" />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <span className='matchError' id='match-error' style={{ "display": "none" }}>Please Enter Valid Mobile Number</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="login-page-btn">
                                    <p onClick={validatemobilenumber} className="button button--aylen button--round-l button--text-thick">Proceed <i className="fas fa-paper-plane"></i></p>
                                </div>
                            </div> :<div>
                            {
                                !passwordM?<div className='create-password'>
                                    <div className="login-input-box-section-out">
                                        <div className="login-input-box-section" style={{ "marginTop": "40px" }}>
                                            <div className="group group-in">
                                                <label>New Password</label>
                                                <input type="text" name="New_password" style={{ "marginBottom": "0" }} placeholder="Create New Password" />
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="login-input-box-section-out">
                                        <div className="login-input-box-section">
                                            <div className="group group-in">
                                                <label>Confirm  Password</label>
                                                <input type="text" name="Confirm_password" style={{ "marginBottom": "0" }} placeholder="Confirm Password" />
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <span className='matchError' style={{ "display": "none" }}>Both Password Must be same</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="login-page-btn">
                                        <p type="submit" onClick={handleButtonClick} className="button button--aylen button--round-l button--text-thick">Create Password</p>
                                    </div>
                                </div>:<div className='pass-done'>
                                       <div className='pass-done-heading'>
                                       <h2>Password Created</h2>
                                       </div>
                                </div>
                            }
                            </div>
                        }




                    </div>

                </div>
            </form>
        </>
    )
}

export default ForgetPassword