import React from 'react'
import { useFormik } from 'formik'
import { useState } from 'react';
import { updateValue } from '../../../store/slices/filterSlice';
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import CurrencyInput from "react-currency-input-field";
import { cibil, firmType, itrList, employerType } from '../../constant/data';
import { bankList } from '../../constant/data';
import AmountInput from './AmountInput';
import { CreditCardSchema } from './../../../utils';
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
const CreditCard = ({ filterStatus, filterData }) => {
    const allFilterDatas = useSelector((state) => state.filter.allFilterData);

    const dispatch = useDispatch()
    const router = useRouter();
    const [initialValue, setInitialValue] = useState({
        employee_type: "salaried",
        turnover_unit: 'lakh',
        already_credit_card: '',
        product_id: 15,
    })


    const { values, handleBlur, setFieldValue, handleChange, handleSubmit, errors, touched, setFieldTouched } =
        useFormik({
            initialValues: (filterStatus === true && filterData != null)? filterData : initialValue,
            validationSchema: filterStatus === true ? '' : CreditCardSchema,
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
            <div className="card-fom1 credit-card-form">
                <div className="title-card-pills-tabcontent-heading-box">
                    <span className="title-card-pills-tabcontent">
                        Credit Card That Fits Your Lifestyle
                    </span>
                    <p>
                        Get to choose from a wide variety of credit card options that offer rewards,
                        convenience, and financial flexibility to fit your needs.
                    </p>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }} >
                    <div className="row frm-row">
                        <div className="col-md-6">
                            <div className="salary-type-box">

                                <div className="form-group salayried">
                                    <input type="radio" id="salary" value={'salaried'} name="employee_type"
                                        className="radioshow"
                                        checked={values.employee_type === 'salaried'}
                                        onChange={(e) => {
                                            customHandleChange(e)
                                            setFieldValue("employee_type", "salaried")
                                        }}
                                    />
                                    <label htmlFor="salary">Salaried</label>

                                </div>
                                <div className="form-group salayried">
                                    <input type="radio" id="self" name="employee_type"
                                        className="radioshow" checked={values.employee_type === 'self_employed'}
                                        onChange={(e) => {
                                            customHandleChange(e)
                                            setFieldValue("employee_type", "self_employed")
                                        }} />
                                    <label htmlFor="self">Self employed</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6   loantype-extra ">
                            <div className="loanTypebtn check-box-card">
                                <div className="form-check">
                                    <input className="form-check-input" name="already_credit_card" value={values.already_credit_card} onChange={(e) => {
                                        customHandleChange(e)
                                        setFieldValue("already_credit_card", values.already_credit_card == "yes" ? '' : "yes")
                                    }} type="checkbox"
                                        checked={values.already_credit_card === 'yes'}
                                        id="flexCheckChecked" />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        Do you have any Credit Card ?
                                    </label>
                                </div>

                            </div>
                        </div>

                    </div>
                    {
                        values.already_credit_card == 'yes' ? <div className='row middile-row allshow1'>
                            <div className={`${values.bank_name == 'Other' ? 'col-md-3' : 'col-md-4'}`}>
                                <div className="loanType">
                                    <label htmlFor='Employee_name'>Bank Name</label>

                                    <select name='bank_name' id="Employee_name" required value={values.bank_name} onChange={(e) => {
                                        customHandleChange(e)
                                        handleChange(e)
                                    }}>
                                        <option>--Select Bank--</option>
                                        {
                                            bankList.map((curlElem, key) => {
                                                return (
                                                    <option key={key} value={curlElem}>{curlElem}</option>
                                                );
                                            })
                                        }
                                    </select>
                                    {errors.bank_name && touched.bank_name ? (
                                        <div className='form-error'>{errors.bank_name}</div>
                                    ) : null}
                                </div>

                            </div>

                            {
                                values.bank_name == 'Other' &&
                                <div className={`col-md-3 loantype-pad`} >
                                    <div className="loanType">
                                        <label htmlFor='other-bank'>Other Bank Name</label>
                                        <input type="text" name='other_bank_name' placeholder='Enter bank name' id="other-bank" value={values.other_bank_name} onChange={(e) => {
                                            customHandleChange(e)
                                            handleChange(e)
                                        }} />


                                    </div>

                                </div>

                            }
                            <div className={`${values.bank_name == 'Other' ? 'col-md-3 loantype-pad' : 'col-md-4 loantype-pad'}`}>
                                <div className="loanType">
                                    <label htmlFor='card_vin'>Card Vintage <small>(Month)</small></label>
                                    <input type="text" name='card_vintage' id='card_vin' required placeholder='Card vintage' value={values.card_vintage} onChange={(e) => {
                                        customHandleChange(e)
                                        handleChange(e)
                                    }} />
                                    {errors.card_vintage && touched.card_vintage ? (
                                        <div className='form-error'>{errors.card_vintage}</div>
                                    ) : null}

                                </div>
                            </div>
                            <div className={`${values.bank_name == 'Other' ? 'col-md-3 loantype-pad' : 'col-md-4 loantype-pad'}`}>
                                <div className="loanType">
                                    <label htmlFor='card_lim'>Card Limit</label>
                                    <input type="text" name='card_limit' required placeholder='Card limit' id="card_lim" value={values.card_limit} onChange={(e) => {
                                        customHandleChange(e)
                                        handleChange(e)
                                    }} />
                                </div>
                            </div>
                        </div>
                            :
                            <>

                                <div className="row middile-row allshow1" id="for-salary">

                                    {values.employee_type == 'salaried' ?
                                        <div className="col-lg-4 col-md-6">
                                            <div className="loanType ">
                                                <label htmlFor='net-sal-month'>Net Salary/Month</label>
                                                <div className="range-input-box input-amount" >
                                                    <CurrencyInput
                                                        name="salary"
                                                        prefix='₹ '
                                                        id='net-sal-month'
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
                                        <div className="col-md-6 col-lg-4">
                                            <div className='loanType amount-loantype'>

                                                <AmountInput label={'turnover-credit'} setFieldValue={setFieldValue} values={values} name='turnover' handleChange={handleChange} customHandleChange={customHandleChange} handleBlur={handleBlur} />
                                                {errors.turnover && touched.turnover ? (
                                                    <div className='form-error'>{errors.turnover}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                    }

                                    {values.employee_type == 'salaried' ?

                                        <div className="col-lg-2 col-sm-6 loantype-pad">
                                            <div className="loanType">
                                                <label htmlFor='emp_type'>Employer Type</label>
                                                <select className="cibli-select-input" id='emp_type' required name='employer_type' onChange={(e) => {
                                                    customHandleChange(e)
                                                    handleChange(e)
                                                }} value={values.employer_type}>
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
                                        </div>

                                        :
                                        <div className="col-lg-2 col-sm-6  loantype-pad-card loantype-pad">
                                            <div className="loanType">
                                                <label htmlFor='firmtype'>Type of Firm</label>
                                                <select className="cibli-select-input" onBlur={handleBlur} id='firmtype' required name='firm_type' value={values.firm_type} onChange={(e) => {
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




                                    {
                                        values.employee_type == 'self_employed' && values.firm_type == 'Proprietorship' ? <div className="col-lg-2 col-md-4 col-sm-6 loantype-pad-card loantype-pad">
                                            <div className="loanType">
                                                <label htmlFor='age'>Age</label>
                                                <input type="date" name='age' id="age" onBlur={handleBlur} required value={values.age} onChange={(e) => {
                                                    customHandleChange(e)
                                                    handleChange(e)
                                                }} />

                                                {errors.age && touched.age ? (
                                                    <div className='form-error'>{errors.age}</div>
                                                ) : null}
                                            </div>
                                        </div> :
                                            null
                                    }

                                    {
                                        values.employee_type == 'salaried' ? <div className="col-lg-2 col-md-4 col-sm-6 loantype-pad-card loantype-pad">
                                            <div className="loanType">
                                                <label htmlFor='age'>Age</label>
                                                <input type="date" name='age' id='age' onBlur={handleBlur} required value={values.age} onChange={(e) => {
                                                    customHandleChange(e)
                                                    handleChange(e)
                                                }} />
                                                {errors.age && touched.age ? (
                                                    <div className='form-error'>{errors.age}</div>
                                                ) : null}

                                            </div>
                                        </div> :
                                            null
                                    }

                                    {
                                        values.employee_type != 'salaried' ?



                                            <div className="col-lg-2 col-md-4 col-sm-6 loantype-pad-card loantype-pad">
                                                <div className="loanType">
                                                    <label htmlFor='last_itr'>Last ITR Filed</label>
                                                    <select className="cibli-select-input" id="last_itr" required name='itr' value={values.itr} onChange={(e) => {
                                                        customHandleChange(e)
                                                        handleChange(e)
                                                    }}>
                                                        <option value={""}>--Select Last Itr--</option>
                                                        {
                                                            itrList.length > 0 && itrList.map((items, key) => (
                                                                <option key={key} value={items}>{items}</option>
                                                            ))
                                                        }

                                                    </select>

                                                    {errors.itr && touched.itr ? (
                                                        <div className='form-error'>{errors.itr}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            : null
                                    }

                                    <div className={`col-lg-2 col-md-4 col-sm-6 loantype-pad-card loantype-pad`}>
                                        <div className="loanType">
                                            <label htmlFor='cibil-s'>Cibil</label>
                                            <select className="cibli-select-input" required id='cibil-s' name='cibil' value={values.cibil} onChange={(e) => {
                                                customHandleChange(e)
                                                handleChange(e)
                                            }}>
                                                <option value={""}>--Select Cibil--</option>
                                                {
                                                    cibil.length > 0 && cibil.map((item, key) => (
                                                        <option key={key} value={item}>{item}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    <div className={`${values.employee_type == 'salaried' ? 'col-lg-2 col-md-4 col-sm-6' : values.firm_type == 'Proprietorship' ? 'col-md-1' : 'col-lg-2 col-md-4 col-sm-6'} loantype-pad-card loantype-pad`}>
                                        <div className="loanType">
                                            <label htmlFor='pin'>Pincode</label>
                                            <input type="text" autoComplete="off" name="pincode" id='pin'
                                                placeholder="Pincode" pattern="[0-9]{6}" required minLength={6} maxLength={6}
                                                title="six digit zip code" value={values.pincode} onChange={(e) => {
                                                    customHandleChange(e)
                                                    handleChange(e)
                                                }} />
                                        </div>
                                    </div>
                                </div>
                            </>
                    }






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

export default CreditCard