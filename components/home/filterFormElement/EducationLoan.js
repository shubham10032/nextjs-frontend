import React from 'react'
import { useFormik } from 'formik'
import { useState } from 'react';
import { updateValue } from '../../../store/slices/filterSlice';
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import { cibil, firmType, employerType } from '../../constant/data';
import { country } from '../../constant/data';
import { educationLoanSchema } from './../../../utils'
import CurrencyInput from "react-currency-input-field";
import AmountInput from './AmountInput';
import { useSelector } from "react-redux";

function debounce(func, delay) {
    let timerId;

    return function (...args) {
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

const EducationLoan = ({ filterStatus, filterData }) => {
    const dispatch = useDispatch()
    const router = useRouter();
    let debounceTimer;
    const allFilterDatas = useSelector((state) => state.filter.allFilterData);
    const [initialValue, setInitialValue] = useState({
        education_type: "domestic",
        course: '',
        course_duration: '',
        college_name: '',
        cibil: '',
        pincode: '',
        country: '',
        turnover_unit: 'Lakh',
        course_unit: 'week',
        employee_type: "self_employed",
        product_id: 18,
    })

    const { values, handleBlur, setFieldValue, handleChange, handleSubmit, errors, touched, setFieldTouched } =
        useFormik({
            initialValues: filterStatus === true ? filterData : initialValue,
            validationSchema: filterStatus === true ? '' : educationLoanSchema,
            onSubmit: async (values, actions) => {
                try {

                    const queryParams = Object.keys(values)
                        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(values[key])}`)
                        .join('&');

                    router.push(`product-list?${queryParams}`)
                } catch (error) {
                    console.log('Message', error)
                }
            },
        });

    const debouncedHandleChange = debounce((e) => {
        const { name, value, type } = e.target;
        const updatedObj = {
            ...allFilterDatas,  // Copy existing properties
            [e.target.name]: e.target.value  // Update the value 
        };
        if (filterStatus === true && e.target.type !== 'checkbox') {
            dispatch(updateValue({ "key": e.target.name, "value": e.target.value }));
        } else if (filterStatus === true) {
            const newValue = type === 'checkbox' ? (filterData[name] === 'yes' ? '' : 'yes') : value;
            dispatch(updateValue({ "key": name, "value": newValue }));
        }

        if (filterStatus === true) {
            const queryParams = Object.keys(updatedObj)
                .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(updatedObj[key])}`)
                .join('&');

            router.push(`product-list?${queryParams}`);
        }
    }, 1000);

    function customHandleChange(e) {
        setFieldValue({ [e.target.name]: e.target.value });
        debouncedHandleChange(e);
    }

    const salaryHandlechange = (name, value) => {
        const updatedObj = {...allFilterDatas, [name]: value};
        filterStatus === true ? dispatch(updateValue({ "key": name, 'value': value })) : null
        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(() => {
            if (filterStatus === true) {
                const queryParams = Object.keys(updatedObj)
                    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(updatedObj[key])}`)
                    .join('&');
                router.push(`product-list?${queryParams}`)
            }
        }, 500);
    }
    return (
        <>
            <div className="card-fom1">
                <div className="title-card-pills-tabcontent-heading-box">
                    <span className="title-card-pills-tabcontent">
                        Education Loans to Fuel Your Ambition
                    </span>
                    <p>
                        From Low-Interest Rates to Flexible repayment tenure,
                        our Education Loans are the smartest way to invest in your bright Future.
                    </p>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }}>

                    <div className='row frm-row'>
                        <div className='col-md-5'>
                            <h4 className='co-borrow-title'>Co-Borrower </h4>
                            <div className='salary-type-box'>
                                <div className="form-group salayried">
                                    <input type="radio" id='salaried' name='employee_type' checked={values.employee_type == 'salaried'} onChange={(e) => {

                                        customHandleChange(e)
                                        setFieldValue("employee_type", "salaried")
                                    }} className="radioshow" />
                                    <label onClick={(e) => {
                                        customHandleChange(e)
                                        setFieldValue("employee_type", "salaried")
                                    }} htmlFor="salaried">Salaried</label>

                                </div>
                                <div className="form-group salayried">
                                    <input type="radio" id='self_employed' name="employee_type"
                                        onChange={(e) => {
                                            customHandleChange(e)
                                            setFieldValue("employee_type", "self_employed")
                                        }}
                                        className="radioshow" checked={values.employee_type == 'self_employed'} />
                                    <label htmlFor="self_employed"> Self employed</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row frm-row">
                        <div className="col-md-12">
                            <div className='dmt-account-box-edu'>
                                <div className="salary-type-box">

                                    <div className="form-group salayried">
                                        <input type="radio" id='Domestic' name='education_type' checked={values.education_type == 'domestic'} onChange={(e) => {

                                            customHandleChange(e)
                                            setFieldValue("education_type", "domestic")
                                        }} className="radioshow" />
                                        <label htmlFor="Domestic">Domestic Course</label>

                                    </div>
                                    <div className="form-group salayried">
                                        <input type="radio" id='International' name="education_type"
                                            onChange={(e) => {
                                                customHandleChange(e)
                                                setFieldValue("education_type", "international")
                                            }}
                                            className="radioshow" />
                                        <label htmlFor="International">International Course</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row middile-row allshow1" >

                        <div className="col-lg-4 col-md-6">
                            <div className="loanType">
                                <label htmlFor='cour'>Course</label>
                                <select className="cibli-select-input" id='cour' onBlur={handleBlur} onChange={(e) => {
                                    customHandleChange(e)
                                    handleChange(e)
                                }} name="course" value={values.course}>
                                    <option value={''}>-- Course --</option>
                                    {
                                        values.education_type == 'domestic' && <>
                                            <option value="Nursery – 5th Class">Nursery – 5th Class</option>
                                            <option value="6th – 10th Class">6th – 10th Class</option>
                                            <option value="11th – 12th Class">11th – 12th Class</option></>
                                    }
                                    <option value="Graduation">Graduation</option>
                                    <option value="Post-Graduation">Post-Graduation</option>
                                    <option value="Professional Course">Professional Course</option>
                                    <option value="Diploma Course">Diploma Course</option>
                                </select>
                                {errors.course && touched.course ? (
                                    <div className='form-error'>{errors.course}</div>
                                ) : null}
                            </div>


                        </div>
                        <div className="col-lg-4 col-md-6 loantype-pad">

                            <div className='loanType'>
                                <div className=' amout-title'>
                                    <label htmlFor='cour-dur'>Course Duration</label>
                                    <div className='rupay-box'  >
                                        {/* <div> */}
                                            <input role="button" id="inputId" checked={values.course_unit === 'week'} onChange={() => setFieldValue("course_unit", 'week')} type='radio' name='rupay' />
                                            <label htmlFor = "inputId">week/</label>
                                        {/* </div>
                                        <div> */}
                                            <input role="button" id="inId"  checked={values.course_unit === 'month'} onChange={() => setFieldValue("course_unit", 'month')} type='radio' name='rupay' />
                                            <label htmlFor = "inId">month/</label>
                                        {/* </div>
                                        <div> */}
                                            <input role="button" id="inpuId" checked={values.course_unit === 'year'} onChange={() => setFieldValue("course_unit", 'year')} type='radio' name='rupay' />
                                            <label htmlFor = "inpuId">year</label>
                                        {/* </div> */}
                                    </div>
                                </div>
                                <div className="input-amount">

                                    <input type="text" id='cour-dur' placeholder='Course duration ' value={values.course_duration} name="course_duration" onBlur={handleBlur} onChange={(e) => {
                                        customHandleChange(e)
                                        handleChange(e)
                                    }}
                                    />
                                    <span className="unit"> {values.course_unit} </span>
                                </div>

                                {errors.course_duration && touched.course_duration ? (
                                    <div className='form-error'>{errors.course_duration}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 br-top loantype-pad">
                            <div className="loanType">
                                <label htmlFor='insti'>Collage/Institute Name</label>
                                <input type="text" autoComplete="off" id="insti" value={values.college_name} onBlur={handleBlur} name="college_name" onChange={(e) => {
                                    customHandleChange(e)
                                    handleChange(e)
                                }}
                                    placeholder="Institution name" required />
                                {errors.college_name && touched.college_name ? (
                                    <div className='form-error'>{errors.college_name}</div>
                                ) : null}
                            </div>
                        </div>

                        {values.employee_type == 'salaried' ?
                            <div className="col-lg-3 col-md-6 br-top">
                                <div className="loanType ">
                                    <label htmlFor='co-bor'>Co-Borrower Net Salary/Month</label>
                                    <div className="range-input-box input-amount">

                                        <CurrencyInput
                                            name="salary"
                                            id='co-bor'
                                            prefix='₹ '
                                            data-number-to-fixed="2"
                                            data-number-stepfactor="100"
                                            value={values.salary}
                                            placeholder="Salary"

                                            onBlur={handleBlur}

                                            onValueChange={(value, name) => {
                                                salaryHandlechange(name, value)
                                                setFieldValue(name, value)
                                            }}

                                            disableAbbreviations
                                        />
                                        <span className="unit">INR </span>

                                    </div>
                                    {errors.salary && touched.salary ? (
                                        <div className='form-error'>{errors.salary}</div>
                                    ) : null}
                                </div>
                                {errors.salary && touched.salary ? (
                                    <div className='form-error'>{errors.salary}</div>
                                ) : null}
                            </div>

                            :
                            <div className="col-lg-3 col-md-6  loantype-pad br-top">
                                <div className="loanType">
                                    <AmountInput cobrower={'Co-Borrower'} label={'turnover-coborrow'} setFieldValue={setFieldValue} values={values} name='turnover' handleChange={handleChange} customHandleChange={customHandleChange} handleBlur={handleBlur} />
                                    {errors.turnover && touched.turnover ? (
                                        <div className='form-error'>{errors.turnover}</div>
                                    ) : null}
                                </div>
                            </div>
                        }

                        {values.employee_type == 'salaried' ?

                            <div className="col-lg-3 col-md-4 loantype-pad br-top">
                                <div className="loanType">
                                    <label htmlFor='co-emp-type'>Co-Borrower Employer Type</label>
                                    <select className="cibli-select-input" id='co-emp-type' required name='employer_type' onChange={(e) => {
                                        customHandleChange(e)
                                        handleChange(e)
                                    }} value={values.employer_type}>
                                        <option value={""}>--Select Amount--</option>
                                        {
                                            employerType.length > 0 && employerType.map((curl, key) => (
                                                <option key={key} value={curl}>{curl}</option>
                                            ))
                                        }
                                    </select>
                                    {errors.employer_type && touched.employer_type ? (
                                        <div className='form-error'>{errors.employer_type}</div>
                                    ) : null}
                                </div>
                            </div>

                            :
                            <div className="col-lg-3 col-md-4 loantype-pad br-top">
                                <div className="loanType">
                                    <label htmlFor='co-firm'>Co-Borrower Firm</label>
                                    <select className="cibli-select-input" id='co-firm' onBlur={handleBlur} required name='firm_type' value={values.firm_type} onChange={(e) => {
                                        customHandleChange(e)
                                        handleChange(e)
                                    }} >
                                        <option value={""}>--Select Firm--</option>
                                        {
                                            firmType.length > 0 && firmType.map((curl1, key) => (
                                                <option key={key} value={curl1}>{curl1}</option>
                                            ))
                                        }
                                    </select>
                                    {errors.firm_type && touched.firm_type ? (
                                        <div className='form-error'>{errors.firm_type}</div>
                                    ) : null}
                                </div>
                            </div>
                        }

                        <div className="col-lg-3 col-md-4 loantype-pad br-top">
                            <div className="loanType">
                                <label htmlFor='co-cib'>Co-Borrower Cibil</label>
                                <select className="cibli-select-input" id='co-cib' value={values.cibil} name="cibil" onBlur={handleBlur} onChange={(e) => {
                                    customHandleChange(e)
                                    handleChange(e)
                                }} >
                                    <option value={""}>--Select Cibil--</option>
                                    {
                                        cibil.length > 0 && cibil.map((item, key) => (
                                            <option key={key} value={item}>{item}</option>
                                        ))
                                    }
                                </select>

                                {errors.cibil && touched.cibil ? (
                                    <div className='form-error'>{errors.cibil}</div>
                                ) : null}
                            </div>
                        </div>


                        {

                            values.education_type == 'domestic' ?

                                <div className="col-lg-3 col-md-4 loantype-pad br-top">
                                    <div className="loanType">
                                        <label htmlFor='co-pin'>Co-Borrower Pincode</label>
                                        <input type="text" autoComplete="off" name="pincode" onBlur={handleBlur} id="co-pin"
                                            placeholder="Pincode" pattern="[0-9]{6}"
                                            title="Five digit zip code" required onChange={(e) => {
                                                customHandleChange(e)
                                                handleChange(e)
                                            }} value={values.pincode} />
                                        {errors.pincode && touched.pincode ? (
                                            <div className='form-error'>{errors.pincode}</div>
                                        ) : null}
                                    </div>
                                </div>

                                :
                                <div className="col-md-3  loantype-pad br-top">
                                    <div className="loanType">
                                        <label htmlFor='cntr'>Country</label>
                                        <select name="country" onBlur={handleBlur} id="cntr" onChange={(e) => {
                                            customHandleChange(e)
                                            handleChange(e)
                                        }} >

                                            {
                                                country.length > 0 && country.map((item, key) => {
                                                    return (
                                                        <option key={key} value={item}>{item}</option>
                                                    )
                                                })
                                            }

                                        </select>

                                        {errors.country && touched.country ? (
                                            <div className='form-error'>{errors.country}</div>
                                        ) : null}
                                    </div>
                                </div>
                        }

                    </div>

                    <div className="row frm-row">

                        <div className="col-md-6 loantype-pad1 loantype-extra">
                            <div className="loanType-btn">
                                <div className="feature-four__top-btn-box"><button
                                    className="thm-btn feature-four__top-btn" type="submit" aria-label='submit'>Get
                                    Offers</button></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EducationLoan