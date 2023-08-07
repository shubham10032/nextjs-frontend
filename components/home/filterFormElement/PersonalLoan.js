import React from 'react'
import { useFormik } from 'formik'
import { useState } from 'react';
import { personalLoanSchema } from '../../../utils';
import { addFilter, updateValue } from '../../../store/slices/filterSlice';
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import CurrencyInput from "react-currency-input-field";
import { ageList, cibil, firmType, employerType } from '../../constant/data';
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
const PersionalLoan = ({ filterStatus, filterData }) => {
    const dispatch = useDispatch()
    const router = useRouter();
    const allFilterDatas = useSelector((state) => state.filter.allFilterData);
    let debounceTimer;
    const [initialValue, setInitialValue] = useState({
        pincode: '',
        age: '',
        cibil: '',
        turnover_unit: 'Lakh',
        employer_type: '',
        salary: '',
        product_id: 7,
    })


    const { values, handleBlur, setFieldValue, handleChange, handleSubmit, errors, touched, setFieldTouched } =
        useFormik({
            initialValues: filterStatus === true ? filterData : initialValue,
            validationSchema: filterStatus === true ? '' : personalLoanSchema,
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
                        To Cater to All Your Personal Needs
                    </span>
                    <p>
                        With competitive rates and flexible repayment terms, Our
                        Personal Loan products offer you the funds you need to reach your goals.
                    </p>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }}>


                    <div className="row middile-row allshow1">
                        <div className="col-lg-4 col-md-6">
                            <div className="loanType ">
                                <label htmlFor='all_sal'>Net Salary/Month</label>
                                <div className="range-input-box input-amount">
                                    <CurrencyInput
                                        id='all_sal'
                                        name="salary"
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
                        </div>
                        <div className="col-lg-2 col-md-6 loantype-pad">
                            <div className="loanType">
                                <label htmlFor='emp_loantype'>Employer Type</label>
                                <select className="cibli-select-input" id='emp_loantype' required name='employer_type' onChange={(e) => {
                                    customHandleChange(e)
                                    handleChange(e)
                                }} value={values.employer_type}>
                                    <option value={""}>--Select Amount--</option>
                                    {
                                        employerType.length > 0 && employerType.map((curl1, key) => (
                                            <option key={key} value={curl1}>{curl1}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            {errors.employer_type && touched.employer_type ? (
                                <div className='form-error'>{errors.employer_type}</div>
                            ) : null}
                        </div>
                        <div className="col-lg-2 col-md-4 br-top-tab loantype-pad">
                            <div className="loanType">
                                <label htmlFor='loanpad-pin'>Current Pin code</label>
                                <input type="text" autoComplete="off" name="pincode" id='loanpad-pin'
                                    placeholder="Current Pincode" pattern="[0-9]{6}"
                                    title="Five digit zip code" required maxLength={6} minLength={6} onChange={(e) => {
                                        customHandleChange(e)
                                        handleChange(e)
                                    }} value={values.pincode} />
                            </div>
                            {errors.pincode && touched.pincode ? (
                                <div className='form-error'>{errors.pincode}</div>
                            ) : null}
                        </div>
                        <div className="col-lg-2 col-md-4 br-top-tab  loantype-pad">
                            <div className="loanType">
                                <label htmlFor='loanpad-age'>Age</label>

                                <input type="date" name='age' id='loanpad-age' value={values.age} required onChange={(e) => {
                                    customHandleChange(e)
                                    handleChange(e)
                                }} />
                                {errors.age ? (
                                    <div className='form-error'>{errors.age}</div>
                                ) : null}
                            </div>

                        </div>

                        <div className="col-lg-2 col-md-4 br-top-tab  loantype-pad">
                            <div className="loanType">
                                <label htmlFor='cib-loanpad'>Cibil</label>
                                <select className="cibli-select-input" required name='cibil' id="cib-loanpad" onChange={(e) => {
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
                            </div>
                            {errors.cibil && touched.cibil ? (
                                <div className='form-error'>{errors.cibil}</div>
                            ) : null}
                        </div>
                    </div>


                    <div className="row frm-row">

                        <div className="col-md-6 loantype-pad1 loantype-extra">
                            <div className="loanType-btn">
                                <div className="feature-four__top-btn-box"><button
                                    className="thm-btn feature-four__top-btn" type="submit" >Get
                                    Offers</button></div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default PersionalLoan