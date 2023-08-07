import React from 'react'
import { useFormik } from 'formik'
import { useState } from 'react';
import { updateValue } from '../../../store/slices/filterSlice';
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import CurrencyInput from "react-currency-input-field";
import { cibil, employerType } from '../../constant/data';
import { homeLoanSchema } from './../../../utils'
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
const HomeLoan = ({ filterStatus, filterData }) => {

    const dispatch = useDispatch()
    const router = useRouter();
    const allFilterDatas = useSelector((state) => state.filter.allFilterData);
    const [initialValue, setInitialValue] = useState({
        employer_type: '',
        employee_type: "salaried",
        pincode: '',
        age: '',
        cibil: '',
        turnover_unit: 'lakh',
        loan_unit: 'lakh',
        loan_amt: '',
        bussiness_start_year: '',
        turnover: '',
        salary: '',
        product_id: 6,
    })


    const { values, handleBlur, setFieldValue, handleChange, handleSubmit, errors, touched, setFieldTouched } =
        useFormik({
            initialValues: filterStatus === true ? filterData : initialValue,
            validationSchema: filterStatus === true ? '' : homeLoanSchema,
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

    // Event handler
    function customHandleChange(e) {
        setFieldValue({ [e.target.name]: e.target.value });
        debouncedHandleChange(e);
    }
    const debouncedSalaryHandlechange = debounce((name, value) => {
        const updatedObj = {
            ...allFilterDatas,  // Copy existing properties
            [name]: value  // Update the value 
        };
        if (filterStatus === true) {
            const queryParams = Object.keys(updatedObj)
                .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(updatedObj[key])}`)
                .join('&');

            router.push(`product-list?${queryParams}`);
        }
    }, 1000);

    const salaryHandlechange = (name, value) => {
        filterStatus === true ? dispatch(updateValue({ "key": name, "value": value })) : null;
        debouncedSalaryHandlechange(name, value);
    };

    return (
        <>
            <div className="card-fom1">
                <div className="title-card-pills-tabcontent-heading-box">
                    <span className="title-card-pills-tabcontent">
                        Unlock the Door to Your Dream Home
                    </span>
                    <p>
                        Whether you're a first-time homebuyer or looking to upgrade, we have got a
                        vast variety of Home loans with attractive interest rates and flexible repayment options.
                    </p>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }}>
                    <div className="row frm-row">
                        <div className="col-md-6">
                            <div className="salary-type-box">
                                <div className="form-group salayried">
                                    <input type="radio" id="home-salaried" name="employee_type" value={'salaried'} checked={values.employee_type === 'salaried'}
                                        onChange={(e) => {
                                            customHandleChange(e)
                                            setFieldValue("employee_type", "salaried")
                                        }}
                                        className="radioshow" />
                                    <label htmlFor="home-salaried">Salaried</label>
                                </div>
                                <div className="form-group salayried">
                                    <input type="radio" id="self_emplyee" value={'self_employed'} name="employee_type" checked={values.employee_type === 'self_employed'}
                                        onChange={(e) => {
                                            customHandleChange(e)
                                            setFieldValue("employee_type", "self_employed")
                                        }}
                                        className="radioshow" />
                                    <label htmlFor="self_emplyee">Self employed</label>
                                </div>

                            </div>
                        </div>
                        {
                            values.employee_type === 'self_employed' && <div className="col-md-6">
                                <div className="loanTypebtn check-box-card">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name='gst_number' value={values.gst_number}
                                            onChange={(e) => {
                                                customHandleChange(e)
                                                handleChange(e)
                                            }}
                                        />
                                        <label className="form-check-label" htmlFor="GSTChecked">
                                            Do you have any GST Number ? ( <i>If yes</i> <div className='d-check'></div> )
                                        </label>
                                    </div>
                                </div>
                            </div>

                        }
                    </div>

                    <div className="row middile-row allshow1" id="home-c-salary">
                        <div className="col-lg-3 col-md-4">
                            {values.employee_type == 'salaried' ?
                                <>

                                    <div className="loanType ">
                                        <label htmlFor='tot-sal'>Net Salary/Month</label>
                                        <div className="range-input-box input-amount">

                                            <CurrencyInput
                                                name="salary"
                                                prefix='₹ '
                                                id='tot-sal'
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

                                </>
                                :
                                <>
                                    <div className="loanType ">
                                        <AmountInput label={'turnover-home'} setFieldValue={setFieldValue} values={values} name='turnover' handleChange={handleChange} customHandleChange={customHandleChange} handleBlur={handleBlur} />
                                        {errors.turnover && touched.turnover ? (
                                            <div className='form-error'>{errors.turnover}</div>
                                        ) : null}
                                    </div>
                                </>


                            }



                        </div>

                        <div className="col-lg-2 col-md-4 loantype-pad">
                            <div className="loanType ">
                                <label htmlFor='l-amount'>Loan Amount</label>
                                <div className=" input-amount">

                                    <CurrencyInput
                                        name="loan_amt"
                                        id='l-amount'
                                        data-number-to-fixed="2"
                                        data-number-stepfactor="100"
                                        value={values.loan_amt}
                                        placeholder="Loan amount"
                                        onBlur={handleBlur}
                                        onValueChange={(value, name) => {
                                            salaryHandlechange(name, value)
                                            setFieldValue(name, value)
                                        }}
                                        disableAbbreviations
                                    />
                                    <span className="unit">INR </span>

                                </div>
                                {errors.loan_amt && touched.loan_amt ? (
                                    <div className='form-error'>{errors.loan_amt}</div>
                                ) : null}
                            </div>
                            {/* {errors.salary && touched.salary ? (
                                                <div className='form-error'>{errors.salary}</div>
                                            ) : null} */}
                        </div>


                        <div className="col-lg-2 col-md-4 loantype-pad">
                            {values.employee_type == 'salaried' ?
                                <div className="loanType">
                                    <label htmlFor='emtype'>Employer Type</label>
                                    <select className="cibli-select-input" name='employer_type' id="emtype" onBlur={handleBlur} onChange={handleChange} value={values.employer_type}>
                                        <option value={""}>--Select Employer--</option>
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

                                :

                                <div className="loanType">
                                    <label htmlFor='buis-start'>Business Start From</label>
                                    <input type='text' name='bussiness_start_year' id='buis-start' placeholder="Year of bussiness start" onBlur={handleBlur} value={values.bussiness_start_year} onChange={(e) => {
                                        customHandleChange(e)
                                        handleChange(e)
                                    }} maxLength="4" minLength="4" />
                                    {errors.bussiness_start_year && touched.bussiness_start_year ? (
                                        <div className='form-error'>{errors.bussiness_start_year}</div>
                                    ) : null}
                                </div>
                            }
                        </div>


                        <div className="col-lg-2 col-md-4 br-top-tab loantype-pad">
                            <div className="loanType">
                                <label htmlFor='dateage'>Age</label>
                                <input type="date" name='age' value={values.age} id='dateage' onBlur={handleBlur} onChange={(e) => {
                                    customHandleChange(e)
                                    handleChange(e)
                                }} />

                                {errors.age && touched.age ? (
                                    <div className='form-error'>{errors.age}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4  br-top-tab loantype-pad">
                            <div className="loanType">
                                <label htmlFor='ciblab'>Cibil</label>
                                <select className="cibli-select-input" id="ciblab" name='cibil' onBlur={handleBlur} onChange={(e) => {
                                    customHandleChange(e)
                                    handleChange(e)
                                }} value={values.cibil}>
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

                        <div className="col-lg-1 col-md-4  br-top-tab  loantype-pad">
                            <div className="loanType">
                                <label htmlFor='code'> Pincode</label>
                                <input type="text" autoComplete="off" name="pincode" id='code' onBlur={handleBlur} onChange={(e) => {
                                    customHandleChange(e)
                                    handleChange(e)
                                }} value={values.pincode}
                                    placeholder="Pincode" pattern="[0-9]{6}"
                                    title="Five digit zip code" required />

                                {errors.pincode && touched.pincode ? (
                                    <div className='form-error'>{errors.pincode}</div>
                                ) : null}
                            </div>
                        </div>
                    </div>


                    <div className="row frm-row">

                        <div className="col-md-6 loantype-pad1 loantype-extra">
                            <div className="loanType-btn">
                                <div className="feature-four__top-btn-box"><button
                                    className="thm-btn feature-four__top-btn" aria-label='submit' type="submit" >Get
                                    Offers</button></div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default HomeLoan