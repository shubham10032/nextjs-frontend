import React from 'react'
import { useFormik } from 'formik'
import { useState } from 'react';
import { bussinessLoanSchema } from '../../../utils';
import { updateValue } from '../../../store/slices/filterSlice';
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';

import { itrList, firmType, cibil } from '../../constant/data';
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
const BussinessLoan = ({ filterStatus, filterData }) => {
    const dispatch = useDispatch()
    const router = useRouter();
    const allFilterDatas = useSelector((state) => state.filter.allFilterData);
    const [initialValue, setInitialValue] = useState({

        pincode: '',
        age: '',
        turnover: '',
        pincode: '',
        itr: '',
        cibil: '',
        firm_type: '',
        turnover_unit: 'lakh',
        product_id: 8,
    })


    const { values, handleBlur, setFieldValue, handleChange, handleSubmit, errors, touched, setFieldTouched } =
        useFormik({
            initialValues: filterStatus === true ? filterData : initialValue,
            validationSchema: filterStatus === true ? "" : bussinessLoanSchema,
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


    return (
        <>
            <div className="card-fom1">
                <div className="title-card-pills-tabcontent-heading-box">
                    <span className="title-card-pills-tabcontent">
                        Grow Your Business with the Right Financial Backing
                    </span>
                    <p>Get the right Business Loan to start your success journey.</p>



                    {
                        filterStatus != true && <div className='row'>
                            <div className="col-md-6"></div>
                            <div className="col-md-6">
                                <div className="loanTypebtn check-box-card">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id='GSTChecked' name='gst_number' onBlur={handleBlur} value={values.gst_number}
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
                        </div>
                    }
                </div>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }}>

                    {
                        filterStatus == true && <div className='row'>
                            <div className="col-md-6"></div>
                            <div className="col-md-6">
                                <div className="loanTypebtn check-box-card">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name='gst_number' htmlFor="GSTChecked" onBlur={handleBlur} value={values.gst_number}
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


                        </div>
                    }
                    <div className="row middile-row allshow2" id="for-self">


                        <div className="col-lg-3 col-md-6">
                            <div className='loanType'>


                                <AmountInput label={'Turnover-buisness'} setFieldValue={setFieldValue} values={values} name='turnover' handleChange={handleChange} customHandleChange={customHandleChange} handleBlur={handleBlur} />
                                {errors.turnover && touched.turnover ? (
                                    <div className='form-error'>{errors.turnover}</div>
                                ) : null}

                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 loantype-pad">
                            <div className="loanType">
                                <label htmlFor='firm'>Type of Firm</label>
                                <select className="cibli-select-input" onBlur={handleBlur} id="firm" value={values.firm_type} name='firm_type' onChange={(e) => {
                                    customHandleChange(e)
                                    handleChange(e)
                                }}>
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
                        {/* <div className="col-md-2 loantype-pad">
                            <div className="loanType">
                                <label>Nature Of Business</label>
                                <select name="bussiness_nature" required onBlur={handleBlur} value={values.bussiness_nature} onChange={(e) => {
                                    customHandleChange(e)
                                    handleChange(e)
                                }} >
                                    <option value="">--Select Bussiness nature--</option>
                                    <option value="Trader">Trader</option>
                                    <option value="Service Provider">Service Provider</option>
                                    <option value="Manufacturer">Manufacturer</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        */}
                        {
                            values.firm_type == 'Proprietorship' &&

                            <div className="col-lg-2 col-md-4 br-top loantype-pad">
                                <div className="loanType">
                                    <label htmlFor='d-age'>Age</label>
                                    <input type="date" name='age' id="d-age" onBlur={handleBlur} value={values.age} onChange={(e) => {
                                        customHandleChange(e)
                                        handleChange(e)
                                    }} />
                                    {errors.age && touched.age ? (
                                        <div className='form-error'>{errors.age}</div>
                                    ) : null}
                                </div>

                            </div>
                        }

                        <div className="col-lg-2 col-md-4 br-top-tab loantype-pad">
                            <div className="loanType">
                                <label htmlFor='itrs'>Last ITR Filed</label>
                                <select className="cibli-select-input" name='itr' onBlur={handleBlur} id="itrs" value={values.itr} onChange={(e) => {
                                    customHandleChange(e)
                                    handleChange(e)
                                }} >
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

                        <div className="col-lg-2 col-md-4 br-top-tab loantype-pad">
                            <div className="loanType">
                                <label htmlFor='cibils'>Cibil</label>
                                <select className="cibli-select-input" required name='cibil' id="cibils" onChange={(e) => {
                                    customHandleChange(e)
                                    handleChange(e)
                                }} onBlur={handleBlur} value={values.cibil}>
                                    <option value={""}>--Select Cibil--</option>
                                    {
                                        cibil.length > 0 && cibil.map((item, key) => (
                                            <option key={key} value={item}>{item}</option>
                                        ))
                                    }

                                    {errors.cibil && touched.cibil ? (
                                        <div className='form-error'>{errors.cibil}</div>
                                    ) : null}
                                </select>
                            </div>

                        </div>
                        <div className={`${values.firm_type == 'Proprietorship' ? 'col-lg-1 col-md-4 br-top-tab' : 'col-lg-3 col-md-4 br-top-tab'} loantype-pad`}>
                            <div className="loanType">
                                <label htmlFor='pincode'>Pincode</label>
                                <input type="text" autoComplete="off" onChange={(e) => {
                                    customHandleChange(e)
                                    handleChange(e)
                                }} name="pincode" id="pincode"
                                    placeholder="Pincode" pattern="[0-9]{6}" required minLength={6} maxLength={6}
                                    title="Five digit zip code" onBlur={handleBlur} value={values.pincode} />
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

export default BussinessLoan