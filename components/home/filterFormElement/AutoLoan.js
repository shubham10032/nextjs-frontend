import React from 'react'
import { useFormik } from 'formik'
import { useState } from 'react';
import { updateValue } from '../../../store/slices/filterSlice';
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import CurrencyInput from "react-currency-input-field";
import { cibil, car, heavyvehicle, twoWheeler, commercialVehicle, } from '../../constant/data';
import { autoLoanSchema } from '../../../utils';
import { useSelector } from "react-redux";
import dynamic from 'next/dynamic'
const AmountInput = dynamic(() => import('./AmountInput'));
function debounce(func, delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
const AutoLoan = ({ filterStatus, filterData }) => {

    const allFilterDatas = useSelector((state) => state.filter.allFilterData);
    const dispatch = useDispatch()
    const router = useRouter();
    let vehicleList = [];
    const [initialValue, setInitialValue] = useState({
        employee_type: '',
        employee_type: "salaried",
        turnover_unit: 'lakh',
        car_type: 'new',
        cibil: '',
        modal_year: '',
        pincode: '',
        vehicle_type: '',
        brand_name: '',
        age: '',
        salary: '',
        turnover: '',
        product_id: 17,
    })


    const { values, handleBlur, setFieldValue, handleChange, handleSubmit, errors, touched, setFieldTouched } =
        useFormik({
            initialValues: filterStatus === true ? filterData : initialValue,
            validationSchema: filterStatus === true ? '' : autoLoanSchema,
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
                        Shift Life into High Gear
                    </span>
                    <p>
                        With competitive interest rates, easy repayment terms, and a variety of options for new cars, trucks, or motorcycles, you can hit the road toward success with ease.
                    </p>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }}>
                    <div className="row frm-row">
                        <div className="col-md-6">
                            <div className="salary-type-box">

                                <div className="form-group salayried">
                                    <input type="radio" id="auto-salary" value={'salaried'} name="employee_type" onBlur={handleBlur}
                                        checked={values.employee_type === 'salaried'}
                                        onChange={(e) => {
                                            customHandleChange(e)
                                            setFieldValue("employee_type", "salaried")
                                        }} className="radioshow" />

                                    <label htmlFor="auto-salary">Salaried</label>



                                    {errors.employee_type && touched.employee_type ? (
                                        <div className='form-error'>{errors.employee_type}</div>
                                    ) : null}
                                </div>
                                <div className="form-group salayried">
                                    <input type="radio" id="auto-self" value={'self_employee'} checked={values.employee_type === 'self_employee'} onBlur={handleBlur}
                                        onChange={(e) => {
                                            customHandleChange(e)
                                            setFieldValue("employee_type", "self_employee")
                                        }} name="employee_type"
                                        className="radioshow" />
                                    <label htmlFor="auto-self">Self employed</label>
                                </div>
                                {errors.employee_type && touched.employee_type ? (
                                    <div className='form-error'>{errors.employee_type}</div>
                                ) : null}
                            </div>
                        </div>

                        {values.employee_type == 'self_employee' ?
                            <div className="col-md-6">
                                <div className="loanTypebtn check-box-card">
                                    <div className="form-check">
                                        <input className="form-check-input" onChange={(e) => setFieldValue("already_have_gstno", "yes")} type="checkbox" value=""
                                            id="GSTChecked" />
                                        <label className="form-check-label" htmlFor="GSTChecked">
                                            Do you have any GST Number ? ( <i>If yes</i> <div className='d-check'></div> )
                                        </label>
                                    </div>
                                </div>
                            </div> : null
                        }
                    </div>
                    <div id="auto-c-salary">
                        <div className="loanTypebtn salry-box-card dmt-account-box">
                            <p className="title du-title">Do you want loan for -</p>
                            <div className="demate-input-box  salary-type-box">
                                <div className="form-group salayried">
                                    <input type="radio" id="salarynew" name="car_type" onBlur={handleBlur} checked={values.car_type === 'new'}
                                        onChange={(e) => {
                                            customHandleChange(e)
                                            setFieldValue("car_type", "new")
                                        }} className="radioshow" />
                                    <label htmlFor="salarynew">New</label>
                                </div>


                                <div className="form-group salayried">
                                    <input type="radio" id="salaryUsed" name="car_type" onBlur={handleBlur} checked={values.car_type === 'used'}
                                        onChange={(e) => {
                                            customHandleChange(e)
                                            setFieldValue("car_type", "used")
                                        }} className="radioshow" />
                                    <label htmlFor="salaryUsed">Used</label>
                                </div>
                            </div>
                        </div>
                        <div className="row middile-row allshow1">




                            {values.employee_type == 'salaried' ?
                                <div className={`${values.car_type != 'new' ? 'col-lg-4 col-md-4' : 'col-lg-4 col-md-4'} `}>
                                    <div className="loanType ">
                                        <label htmlFor='net-sa'>Net Salary/Month</label>
                                        <div className="range-input-box input-amount">
                                            <CurrencyInput
                                                name="salary"
                                                id='net-sa'
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
                                :
                                <div className="col-lg-4 col-md-4">
                                    <div className="loanType ">

                                        <AmountInput label={'Annual Sale'} setFieldValue={setFieldValue} values={values} name='turnover' handleChange={handleChange} customHandleChange={customHandleChange} handleBlur={handleBlur} />
                                        {errors.turnover && touched.turnover ? (
                                            <div className='form-error'>{errors.turnover}</div>
                                        ) : null}
                                    </div>
                                </div>
                            }
                            <div className="col-lg-4 col-md-4 loantype-pad">
                                <div className="loanType">
                                    <label htmlFor='vehicle-t'> Type of Vehicle </label>
                                    <select className="cibli-select-input" required name='vehicle_type' id='vehicle-t' onBlur={handleBlur} value={values.vehicle_type} onChange={(e) => {
                                        customHandleChange(e)
                                        handleChange(e)
                                    }} >
                                        <option value={''}>-- Select Vehicle Type --</option>
                                        <option value="Car">Car</option>
                                        <option value="Light Vehicle">Light Vehicle</option>
                                        <option value="Heavy Vehicle">Heavy Vehicle </option>
                                        <option value="Two Wheeler">Two Wheeler</option>
                                        <option value="Commercial">Commercial</option>
                                    </select>
                                    {errors.vehicle_type && touched.vehicle_type ? (
                                        <div className='form-error'>{errors.vehicle_type}</div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 loantype-pad">
                                <div className="loanType">
                                    <label htmlFor='brand-n'>Brand name</label>
                                    <select onBlur={handleBlur} name="brand_name" id='brand-n'
                                        placeholder="Brand name" value={values.brand_name} required onChange={(e) => {
                                            customHandleChange(e)
                                            handleChange(e)
                                        }}>

                                        <option value={''}>-- Select Brand --</option>
                                        {
                                            values.vehicle_type == 'Car' ? car.map((item, key) => (
                                                <option value={item}>{item}</option>
                                            )) : null
                                        }
                                        {
                                            values.vehicle_type == 'Light Vehicle' || values.vehicle_type == 'Two Wheeler' ? twoWheeler.map((item, key) => (
                                                <option value={item}>{item}</option>
                                            )) : null
                                        }
                                        {
                                            values.vehicle_type == 'Heavy Vehicle' ? heavyvehicle.map((item, key) => (
                                                <option value={item}>{item}</option>
                                            )) : null
                                        }
                                        {
                                            values.vehicle_type == 'Commercial' ? commercialVehicle.map((item, key) => (
                                                <option value={item}>{item}</option>
                                            )) : null
                                        }


                                    </select>
                                    {errors.brand_name && touched.brand_name ? (
                                        <div className='form-error'>{errors.brand_name}</div>
                                    ) : null}
                                </div>
                            </div>

                            {
                                values.car_type != 'new' ?
                                    <div className="col-lg-4 col-md-6 loantype-pad">
                                        <div className="loanType " >
                                            <label htmlFor='model-y'>Model Year</label>
                                            <input type="text" placeholder="Year" onBlur={handleBlur} id='model-y' required name='modal_year' minLength={4} maxLength="4" value={values.modal_year} onChange={(e) => {
                                                customHandleChange(e)
                                                handleChange(e)
                                            }} />
                                        </div>
                                    </div>
                                    :
                                    null
                            }

                            <div className={`${values.car_type != 'new' ? 'col-lg-4 col-md-4 br-top' : 'col-lg-4 col-md-4 br-top'} loantype-pad`}>
                                <div className="loanType">
                                    <label htmlFor='pin-code'>Pincode</label>
                                    <input type="text" autoComplete="off" name="pincode" id='pin-code'
                                        placeholder="Pincode" pattern="[0-9]{6}" required minLength={6} maxLength={6} onBlur={handleBlur}
                                        title="six digit zip code" value={values.pincode} onChange={(e) => {
                                            customHandleChange(e)
                                            handleChange(e)
                                        }} />
                                    {errors.pincode && touched.pincode ? (
                                        <div className='form-error'>{errors.pincode}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 br-top loantype-pad">
                                <div className="loanType">
                                    <label htmlFor='date'>Age</label>
                                    <input type="date" name='age' id='date' onBlur={handleBlur} required value={values.age} onChange={(e) => {
                                        customHandleChange(e)
                                        handleChange(e)
                                    }} />
                                    {errors.age && touched.age ? (
                                        <div className='form-error'>{errors.age}</div>
                                    ) : null}

                                </div>
                            </div>
                            <div className={`${values.car_type == 'new' && values.employee_type == 'self_employee' ? 'col-lg-4' : values.employee_type == 'salaried' ? 'col-lg-4 col-md-4  br-top' : "col-lg-4 col-md-4  br-top"} loantype-pad`}>
                                <div className="loanType">
                                    <label htmlFor='cib-il'>Cibil</label>
                                    <select className="cibli-select-input" id='cib-il' onBlur={handleBlur} required name='cibil' value={values.cibil} onChange={(e) => {
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
                        </div>
                    </div>

                    <div className="row frm-row">
                        <div className="col-md-6 loantype-pad1 loantype-extra">
                            <div className="loanType-btn">
                                <div className="feature-four__top-btn-box"><button aria-label='submit'
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

export default AutoLoan