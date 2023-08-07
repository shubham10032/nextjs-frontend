import React, { useState } from 'react'
import axios from 'axios'
import { getUserProfile, getUserUtm } from '../../utils'
import { useFormik } from 'formik';
import { useEffect } from 'react'
import { useSelector } from "react-redux";
import FormData from 'form-data';
import { toast, ToastContainer } from 'react-toastify';
import Image from 'next/image';
const Profile = () => {
    const [user, setUser] = useState(getUserProfile() ? JSON.parse(getUserProfile()) : null)
    const [userInfo, setUserInfo] = useState([])
    const userDetails = useSelector((state) => state.filter.userInfo);
    const loancount = userInfo.data && userInfo.data.length > 0 && userInfo.data.filter((elem, i) => {
        return elem.categories_id === 2
    })
    const cardCount = userInfo.data && userInfo.data.length > 0 && userInfo.data.filter((elem, i) => {
        return elem.categories_id === 1
    })

    const [initialValue, setInitialValue] = useState({
        // Initial values without userData

        full_name: '',
        mobile_no: '',
        dob: '',
        employee_type: 'salaried',
        cibil: '',
        pincode: '',
        salary: '',
        turnover: '',
        employer_type: '',
        house_number: '',
        street_name: '',
        city: '',
        district: '',
        state: '',
        aadhaar_document: '',
        aadhaar: '',
        pan_document: '',
        pan: '',
        salary_slip: '',
        bank_statement: '',
    });
    const { values, handleBlur, setFieldValue, handleChange, handleSubmit, errors, touched, setFieldTouched } =
        useFormik({
            initialValues: initialValue,
            validationSchema: '',
            onSubmit: async (values, actions) => {
                try {
                    const data = new FormData();
                    for (const property in values) {
                        data.append(property, values[property]);
                    }
                    const headers = {
                        'Content-Type': 'multipart/form-data',
                    };

                    const res = await axios.post(`${process.env.APIHOST}/api/profile`, data, { headers });

                    if (res.data.status) {
                        toast.success(`${res.data.message}`, {
                            position: 'top-right',
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'light',
                        });
                    }
                } catch (error) {
                    toast.error(`Something went wrong`, {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                    console.log('Message', error);
                }
            },
        });
    const getuserData = async () => {

        try {
            if (userDetails.customer_id !== undefined) {
                const { data } = await axios.post(`${process.env.APIHOST}/api/profile/get-user-date`, { customer_id: userDetails.customer_id });
                if (data.status) {
                    if (data.customer_data != null || data.customer_data != undefined) {
                        setInitialValue(data.customer_data)
                    }

                }
            }

        } catch (error) {
            console.log("Message get user data : ", error)
        }


    }
    useEffect(() => {
        if (userDetails.customer_id !== 'undefined') {
            setFieldValue('id', userDetails.customer_id)
            getuserData();
        }

    }, [userDetails])

    return (
        <>
            <ToastContainer />
            <section className='applicant-profile-page'>
                <div className='applicatni-detail-probox'>
                    <div className='applicant-name-image'>
                        <div className="profile-image-edit">
                            <div className='applicant-img-box'>
                                <Image src="/images/profile.png" className='applicant-img' width={47} height={47} />
                            </div>
                            <div className='edit-profile'>
                                <label className="image-uploader"><p><i className="fas fa-edit"></i> <span>Change</span></p>
                                    <input name="myImage" type="file" accept="image/*" />
                                </label>
                            </div>
                        </div>
                        <div className='user-detail-pr-box'>
                            <div className='usuer-name_designation'>
                                <h2 className="applicant-name"> {user ? user.full_name : "User"} </h2>
                                <p className='designation'>Applicant Designation / Current Occupation</p>
                            </div>
                            <div className='Applicant-mobile'>
                                {user ? <h2 className="applicant-Phone"> <i className="fas fa-mobile-alt"></i> <span>{user.phone_no}</span> </h2> : null}
                            </div>
                            <div className='loan-card-cibi'>
                                <div className='pro-loan-card' >
                                    <div className='pro-loan-card-icont '>
                                        <Image src='/images/icon/Cards-feature/card-2-card.png' alt='cibil score' width={36} height={36} />
                                    </div>
                                    <div className='pro-cibil-text-box'>
                                        <p>
                                            Card
                                        </p>
                                        <span className='cp'>{cardCount ? cardCount.length : 0}</span>
                                    </div>
                                </div>
                                <div className='pro-loan-card'>
                                    <div className='pro-loan-cardicont'>
                                        <Image src='/images/icon/Cards-feature/cashback.png' alt='cibil score' width={36} height={36} />
                                    </div>
                                    <div className='pro-cibil-text-box'>
                                        <p>
                                            Loan
                                        </p>
                                        <span className='cp'>{loancount ? loancount.length : 0}</span>
                                    </div>
                                </div>
                                <div className='pro-loan-card'>
                                    <div className='pro-loan-card-icont'>
                                        <Image src='/images/icon/creditbycard/check-eligiblity.png' alt='cibil score' width={36} height={36} />
                                    </div>
                                    <div className='pro-cibil-text-box'>
                                        <p>Cibil Score</p>
                                        <span>750</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='profile-user-section'>

                    <form className='user-form' onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }}>
                        <div className='row user-basic'>
                            <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                                <div className="group group-in">
                                    <label>Name</label>
                                    <input type="text" name="full_name" placeholder="Full Name" value={values.full_name || initialValue.full_name} onChange={handleChange} />
                                    <span className="highlight"></span><span className="bar"></span>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                                <div className="group group-in">
                                    <label>Mobile number</label>
                                    <input type="number" name="mobile_no" placeholder="000 0000 000" value={values.mobile_no || initialValue.mobile_no} onChange={handleChange} />
                                    <span className="highlight"></span><span className="bar"></span>
                                </div>
                            </div>


                            <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                                <div className="group group-in">
                                    <label>Cibil</label>
                                    <select className="cibli-select-input" name="cibil" value={values.cibil || initialValue.cibil} onChange={handleChange}>
                                        <option value="">--Select Cibil--</option>
                                        <option value="Dont know">Dont know</option>
                                        <option value="-1 CIBIL">-1 CIBIL</option>
                                        <option value="Less than 650">Less than 650</option>
                                        <option value="650-675">650-675</option>
                                        <option value="675-700">675-700</option>
                                        <option value="700-750">700-750</option>
                                        <option value="More than 750">More than 750</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                                <div className="group group-in">
                                    <label>Date Of Birth</label>
                                    <input type="date" name="dob" placeholder="DD/MM/YYYY" value={values.dob || initialValue.dob} onChange={handleChange} />
                                    <span className="highlight"></span><span className="bar"></span>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-3 col-md-3'>
                                <div className="salary-type-box user-profile-salary-box">
                                    <div className="form-group salayried">
                                        <input type="radio" id="salary" name="employee_type" className="radioshow"
                                            checked={values.employee_type === 'salaried' || initialValue.employee_type === 'salaried'}
                                            onChange={(e) => {
                                                setFieldValue("employee_type", "salaried")
                                            }}
                                        />
                                        <label htmlFor="salary">Salaried</label>
                                    </div>
                                    <div className="form-group salayried">
                                        <input type="radio" id="self" name="employee_type" className="radioshow"
                                            checked={values.employee_type === 'self_employed' || initialValue.employee_type === 'self_employed'}
                                            onChange={(e) => {

                                                setFieldValue("employee_type", "self_employed")
                                            }}
                                        />
                                        <label htmlFor="self">Self employed</label>
                                    </div>
                                </div>
                            </div>

                            {initialValue.employee_type === 'salaried' && (
                                <>
                                    <div className='col-12 col-lg-4 col-md-4'>
                                        <div className="group group-in">
                                            <label>Net Salary/Month</label>
                                            <div className='input-inr'>
                                                <input type="text" name="salary" placeholder="salary" value={values.salary || initialValue.salary} onChange={handleChange} />
                                                <span>INR</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-12 col-lg-4 col-md-4'>
                                        <div className="group group-in">
                                            <label>Employer Type</label>
                                            <select className="cibli-select-input" name="employer_type" value={values.employer_type || initialValue.employer_type} onChange={handleChange} >
                                                <option value="">--Select Employer--</option>
                                                <option value="Proprietorship">Proprietorship</option>
                                                <option value="Partnership Firm/LLP">Partnership Firm/LLP</option>
                                                <option value="Listed Company">Listed Company</option>
                                                <option value="Non Listed Company">Non Listed Company</option>
                                                <option value="Government">Government</option>
                                                <option value="Other">Other</option>
                                            </select>

                                        </div>
                                    </div>
                                </>

                            )}
                            {initialValue.employee_type === 'self_employed' && (

                                <>
                                    <div className='col-12 col-lg-3 col-md-3'>
                                        <div className="group group-in">
                                            <label>Annual Turnover</label>
                                            <div className='input-inr'>
                                                <input type="text" name="annual_turnover" placeholder="Annual Turnover" value={values.annual_turnover || initialValue.annual_turnover} onChange={handleChange} />
                                                <span>INR</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-3 col-md-3'>
                                        <div className="group group-in">
                                            <label>Type of Firm</label>
                                            <select className="cibli-select-input" name="firm_type" value={values.firm_type || initialValue.firm_type} onChange={handleChange} >
                                                <option value="">--Select Firm--</option>
                                                <option value="Proprietorship">Proprietorship</option>
                                                <option value="Partnership Firm/LLP">Partnership Firm/LLP</option>
                                                <option value="Listed Company">Listed Company</option>
                                                <option value="Non Listed Company">Non Listed Company</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-3 col-md-3'>
                                        <div className="group group-in">
                                            <label>Last ITR Filed</label>
                                            <select className="cibli-select-input" name="itr" value={values.itr || initialValue.itr} onChange={handleChange} >
                                                <option value="">--Select Last Itr--</option>
                                                <option value="Not Filed">Not Filed</option>
                                                <option value="Less Than 2.5 Lakh">Less Than 2.5 Lakh</option>
                                                <option value="2.5 Lakh- 3.5 Lakh">2.5 Lakh- 3.5 Lakh</option>
                                                <option value="3.5 Lakh- 5 Lakh">3.5 Lakh- 5 Lakh</option>
                                                <option value="5 Lakh - 10 Lakh">5 Lakh - 10 Lakh</option>
                                                <option value="10 Lakh- 1 Crore">10 Lakh- 1 Crore</option>
                                                <option value="1 Crore- 10 Crore">1 Crore- 10 Crore</option>
                                                <option value="More than 10 Crore">More than 10 Crore</option>
                                            </select>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='type-of-entry'>
                                    <h5 className='user-address'>Address</h5>
                                    <div className='divider'></div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-6 col-12'>
                                <div className="group group-in">
                                    <label>House number</label>
                                    <input type="text" autoComplete="off" name="house_number" placeholder="House number" value={values.house_number || initialValue.house_number} onChange={handleChange} />
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-6 col-12'>
                                <div className="group group-in">
                                    <label>Street name / Area</label>
                                    <input type="text" autoComplete="off" name="street_name" placeholder="Street Name" value={values.street_name || initialValue.street_name} onChange={handleChange} />
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-6 col-12'>
                                <div className="group group-in">
                                    <label>City/town</label>
                                    <input type="text" autoComplete="off" name="city" value={values.city || initialValue.city} onChange={handleChange} placeholder="City or town" />
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-6 col-12'>
                                <div className="group group-in">
                                    <label>District </label>
                                    <input type="text" autoComplete="off" name="district" value={values.district || initialValue.district} onChange={handleChange} placeholder="District" />
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-6 col-12'>
                                <div className="group group-in">
                                    <label>State / Union Territory</label>
                                    <input type="text" autoComplete="off" name="state" value={values.state || initialValue.state} onChange={handleChange} placeholder="State" />
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-2 col-sm-6 col-12'>
                                <div className="group group-in">
                                    <label>Pincode</label>
                                    <input type="text" autoComplete="off" name="pincode" value={values.pincode || initialValue.pincode} onChange={handleChange} placeholder="000000" />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='type-of-entry'>
                                    <h5 className='user-address'>Document</h5>
                                    <div className='divider'></div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                                <label className="image-uploader document-uploader">
                                    <p><span>Upload Adhar Card</span></p>
                                    <input name="aadhaar_document" type="file" accept="image/*" onChange={(event) => {

                                        setFieldValue("aadhaar_document", event.currentTarget.files[0]);
                                    }} />
                                </label>
                                <p className='or-para'>OR Adhar Number</p>
                                <div className="group group-in">
                                    <input type="text" autoComplete="off" value={values.aadhaar || initialValue.aadhaar} onChange={handleChange} name="aadhaar" placeholder="Adhar Card" />
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                                <label className="image-uploader document-uploader">
                                    <p><span>Upload PAN Card</span></p>
                                    <input name="pan_document" type="file" accept="image/*" onChange={(event) => {
                                        setFieldValue("pan_document", event.currentTarget.files[0]);
                                    }} />
                                </label>
                                <p className='or-para'>OR PAN Number</p>
                                <div className="group group-in">
                                    <input type="text" autoComplete="off" name="pan" value={values.pan || initialValue.pan} onChange={handleChange} placeholder="Pan Card" />
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                                <label className="image-uploader document-uploader"><p>  <span>6 month Salary Slip</span></p>
                                    <input name="salary_slip" type="file" accept="image/*" onChange={(event) => {
                                        setFieldValue("salary_slip", event.currentTarget.files[0]);
                                    }} />
                                </label>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                                <label className="image-uploader document-uploader"><p>  <span>6 month Bank Statement</span></p>
                                    <input name="bank_statement" type="file" accept="image/*" onChange={(event) => {
                                        setFieldValue("bank_statement", event.currentTarget.files[0]);
                                    }} />
                                </label>
                            </div>
                            <div className='row'>
                                <div className='col-md-2'>
                                    <button className='thm-btn feature-four__top-btn' type='submit'>Update</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Profile