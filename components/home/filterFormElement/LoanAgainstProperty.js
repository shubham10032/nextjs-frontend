import React from 'react'
import { useFormik } from 'formik'
import { useState } from 'react';
import { updateValue } from '../../../store/slices/filterSlice';
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import CurrencyInput from "react-currency-input-field";
import { cibil } from '../../constant/data';
import { loanAgainstPropertySchema } from './../../../utils'
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
const LoanAgainstProperty = ({ filterStatus, filterData }) => {

    const dispatch = useDispatch()
    const router = useRouter();
    const allFilterDatas = useSelector((state) => state.filter.allFilterData);
    const [initialValue, setInitialValue] = useState({
        employee_type: "salaried",
        pincode: '',
        age: '',
        cibil: '',
        turnover_unit: 'lakh',
        turnover: '',
        salary: '',
        property_type: '',
        property_value: '',
        property_unit: 'lakh',
        value: '',
        product_id: 10,
    })

    const { values, handleBlur, setFieldValue, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues: filterStatus === true ? filterData : initialValue,
            validationSchema: filterStatus === true ? '' : loanAgainstPropertySchema,
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
            ...allFilterDatas,  
            [name]: value  
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
                        Unlock the Ideal Value of Your Property
                    </span>
                    <p>With low-interest rates and flexible repayment terms,
                        our loan against property options liberates you to leverage
                        the equity in your property to achieve the financing you
                        need for personal or business purposes.
                    </p>


                </div>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }}>
                    <div className="row frm-row">
                        <div className="col-md-6">
                            <div className="salary-type-box">

                                <div className="form-group salayried">
                                    <input type="radio" id="home-salary" name="employee_type"
                                        className="radioshow" value='salaried' checked={values.employee_type === 'salaried'}
                                        onChange={(e) => {
                                            customHandleChange(e)
                                            setFieldValue("employee_type", "salaried")
                                        }} />
                                    <label htmlFor="home-salary">Salaried</label>


                                </div>
                                <div className="form-group salayried">
                                    <input type="radio" id="home-self" name="employee_type" value='self_employed'
                                        className="radioshow" checked={values.employee_type === 'self_employed'}
                                        onChange={(e) => {
                                            customHandleChange(e)
                                            setFieldValue("employee_type", "self_employed")
                                        }} />
                                    <label htmlFor="home-self">Self employed</label>
                                </div>
                            </div>
                        </div>

                        {
                            values.employee_type === 'self_employed' && <div className="col-md-6">
                                <div className="loanTypebtn check-box-card">
                                    <div className="form-check">
                                        <input className="form-check-input" id='GSTChecked' type="checkbox" name='gst_number' value={values.gst_number}
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


                    <div className="row middile-row allshow2" id="for-lap-salaried">
                        {values.employee_type == 'salaried' ?
                            <div className="col-lg-3 col-md-4">
                                <div className="loanType ">
                                    <label htmlFor='total-sal'>Net Salary/Month</label>
                                    <div className="range-input-box input-amount">
                                        <CurrencyInput
                                            name="salary"
                                            prefix='₹ '
                                            data-number-to-fixed="2"
                                            data-number-stepfactor="100"
                                            value={values.salary}
                                            placeholder="Salary"
                                            id='total-sal'
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

                            :


                            <div className="col-lg-3 col-md-4">
                                <div className='loanType'>

                                    <AmountInput label={'turnover-loanp'} setFieldValue={setFieldValue} values={values} name='turnover' handleChange={handleChange} customHandleChange={customHandleChange} handleBlur={handleBlur} />
                                    {errors.turnover && touched.turnover ? (
                                        <div className='form-error'>{errors.turnover}</div>
                                    ) : null}
                                </div>
                            </div>




                        }
                        <div className="col-lg-2 col-md-4 loantype-pad">
                            <div className="loanType">
                                <label htmlFor='property-ty'>Property Type</label>
                                <select className="cibli-select-input" onBlur={handleBlur} id="property-ty" value={values.property_type} name='property_type' onChange={(e) => {
                                    customHandleChange(e)
                                    handleChange(e)
                                }} >
                                    <option value="Residential Built-up Property ">Residential
                                        Built-up Property </option>
                                    <option value="Commercial Built-up Property ">Commercial
                                        Built-up Property </option>
                                    <option value="Industrial Built-up Property ">Industrial
                                        Built-up Property </option>
                                    <option value="Industrial Plot  ">Industrial Plot </option>
                                    <option value="Commercial Plot ">Commercial Plot </option>
                                    <option value="Residential Plot ">Residential Plot </option>
                                    <option value="Agriculture Land">Agriculture Land</option>
                                    <option value="Other  ">Other </option>
                                </select>
                                {errors.property_type && touched.property_type ? (
                                    <div className='form-error'>{errors.property_type}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 loantype-pad">
                            <div className="loanType ">
                                <label htmlFor='pro-vale'>Property Value</label>
                                <div className="range-input-box input-amount">

                                    <CurrencyInput
                                        id='pro-vale'
                                        name="property_value"
                                        data-number-to-fixed="2"
                                        data-number-stepfactor="100"
                                        value={values.property_value}
                                        placeholder="Property value"

                                        onBlur={handleBlur}
                                        onValueChange={(value, name) => {
                                            salaryHandlechange(name, value)
                                            setFieldValue(name, value)
                                        }}
                                        disableAbbreviations
                                    />
                                    <span className="unit">INR </span>

                                </div>
                                {errors.property_value && touched.property_value ? (
                                    <div className='form-error'>{errors.property_value}</div>
                                ) : null}
                            </div>
                        </div>




                        <div className="col-lg-2 col-md-4 br-top-tab loantype-pad">
                            <div className="loanType">
                                <label htmlFor='lage'>Age</label>
                                <input type="date" name='age' id='lage' onBlur={handleBlur} required value={values.age} onChange={(e) => {
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
                                <label htmlFor='cibsel'>Cibil</label>
                                <select className="cibli-select-input" name='cibil' id='cibsel' onBlur={handleBlur} onChange={(e) => {
                                    customHandleChange(e)
                                    handleChange(e)
                                }} value={values.cibil} >
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
                                <label htmlFor='pinarea'> Pincode</label>
                                <input type="text" autoComplete="off" id='pinarea' onBlur={handleBlur} value={values.pincode} name="pincode" onChange={(e) => {
                                    customHandleChange(e)
                                    handleChange(e)
                                }}
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

export default LoanAgainstProperty