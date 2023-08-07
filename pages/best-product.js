import React from 'react'
import dynamic from 'next/dynamic';
import { useState, Fragment } from 'react';
import CurrencyInput from "react-currency-input-field";
import { useFormik } from 'formik'
import { cibil, firmType, itrList, employerType } from '../components/constant/data';
const AmountInput = dynamic(() => import('../components/home/filterFormElement/AmountInput'))
import Pagination from '@mui/material/Pagination';

import { useSelector } from "react-redux";
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { addFilter } from '../store/slices/filterSlice';
const BestProduct = () => {
    const BusinessLoanListLayout = dynamic(
        () => import('../components/product-list/BusinessLoan').then((module) => module.BusinessLoanListLayout)
    );

    const CarLoanListLayout = dynamic(
        () => import('../components/product-list/CarLoan').then((module) => module.CarLoanListLayout)
    );

    const CreditCardListLayout = dynamic(
        () => import('../components/product-list/CreditCard').then((module) => module.CreditCardListLayout)
    );

    const EducationLoanListLayout = dynamic(
        () => import('../components/product-list/EducationLoan').then((module) => module.EducationLoanListLayout)
    );

    const HomeLoanListLayout = dynamic(
        () => import('../components/product-list/HomeLoan').then((module) => module.HomeLoanListLayout)
    );

    const LapListLayout = dynamic(
        () => import('../components/product-list/Lap').then((module) => module.LapListLayout)
    );

    const LoanAgainstSecurityListLayout = dynamic(
        () => import('../components/product-list/LoanAgainstSecurity').then((module) => module.LoanAgainstSecurityListLayout)
    );

    const PersonalLoanListLayout = dynamic(
        () => import('../components/product-list/PersonalLoan').then((module) => module.PersonalLoanListLayout)
    );
    const dispatch = useDispatch()
    const [perPage, setPerPage] = useState(5)
    const [Page, setPage] = useState(1);
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const filterData = useSelector((state) => state.filter.jsonData);
    const [initialValuess, setInitialValuess] = useState({
        employee_type: "salaried",
        car_loan: false,
        msme: false,
        mf: false,
        credit_card: false,
        car_loan: false,
        startup_register: false,
        property_loan: false,
        turnover_unit: 'lakh',
        loan_unit: 'lakh',
        loan_amt: '',
    })
    const searchProduct = async () => {
        try {

            const { data } = await axios.post(`${process.env.APIHOST}/api/banks/best-product`, filterData);
            if (data.success) {
                setProduct(data);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };


    const { values, handleBlur, setFieldValue, handleChange, handleSubmit, errors, touched, setFieldTouched } =
        useFormik({
            initialValues: filterData != null && Object.keys(filterData).length > 0 ? filterData : initialValuess,
            validationSchema: '',
            onSubmit: async (values, actions) => {
                try {
                    dispatch(addFilter(values))

                } catch (error) {
                    console.log('Message', error)
                }
            },
        });

    useEffect(() => {
        searchProduct()
    }, [filterData])

    // pagination 
    const startIndex = (Page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const sliceData = products.success == true ? (products.data).slice(startIndex,endIndex) : [];
    const handlePageChange = (event, value) => {
        console.log(value)
        setPage(value);
    };
  
    return (
        <>

            <section className='cs-hero-banner best-pro-section'>
                <div className='container'>
                    <div className='row best-pro-box'>
                        <h2 className='cs-banner-heading'>
                            Financial Products Tailored Right According to Your Needs.
                        </h2>
                    </div>

                    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }} className="find-best-pro-form">
                        <div className="row best-pro-row middle-row">
                            <div className="col-md-12">
                                <div className="income-box">
                                    <label className="question"> Employee Type </label>
                                    <div className="salary-type-box">
                                        <div className="form-group ">
                                            <input onChange={() => setFieldValue("employee_type", "salaried")} type="radio" id="auto-salary1" name="employee_types"
                                                checked={values.employee_type === 'salaried'}
                                                className="radioshow" />
                                            <label onClick={() => setFieldValue("employee_type", "salaried")} htmlFor="auto-salary">Salaried</label>
                                        </div>
                                        <div className="form-group ">
                                            <input type="radio" id="auto-self1" onChange={() => setFieldValue("employee_type", "self_employee")} checked={values.employee_type === 'self_employee'}
                                                name="employee_types"
                                                className="radioshows" />
                                            <label onClick={() => setFieldValue("employee_type", "self_employee")} htmlFor="auto-self">Self employed</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row pin-row'>
                            <div className="col-lg-2 col-md-4">
                                {values.employee_type == 'salaried' ?
                                    <>

                                        <div className="Cibil">
                                            <label className='question'>Net Salary/Month</label>
                                            <div className="range-input-box input-amount">

                                                <CurrencyInput
                                                    name="salary"
                                                    data-number-to-fixed="2"
                                                    data-number-stepfactor="100"
                                                    value={values.salary}
                                                    placeholder="Salary"
                                                    onBlur={handleBlur}
                                                    onChange={(e) => {
                                                        e.preventDefault();

                                                        const { value = "" } = e.target;
                                                        const parsedValue = value.replace(/[^\d.]/gi, "");
                                                        setFieldValue("salary", parsedValue);
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
                                        <div className="Cibil">
                                            <AmountInput label={'turnover'} setFieldValue={setFieldValue} values={values} name='turnover' handleChange={handleChange} handleBlur={handleBlur} />
                                            {errors.turnover && touched.turnover ? (
                                                <div className='form-error'>{errors.turnover}</div>
                                            ) : null}
                                        </div>
                                    </>


                                }



                            </div>
                            <div className="col-lg-2 col-md-4">
                                {values.employee_type == 'salaried' ?
                                    <div className="Cibil">
                                        <label className='question'>Employer Type</label>
                                        <select className="cibli-select-input" name='employer_type' onBlur={handleBlur} onChange={handleChange} value={values.employer_type}>
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

                                    <div className="Cibil">
                                        <label className='question'>Business Start From</label>
                                        <input type='text' name='bussiness_start_year' placeholder="Year of bussiness start" onBlur={handleBlur} value={values.bussiness_start_year} onChange={(e) => {

                                            handleChange(e)
                                        }} maxLength="4" minLength="4" />
                                        {errors.bussiness_start_year && touched.bussiness_start_year ? (
                                            <div className='form-error'>{errors.bussiness_start_year}</div>
                                        ) : null}
                                    </div>
                                }
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="question-box-perpose">
                                    <label className="question">Purpose of Loan</label>
                                    <div className="Cibil">
                                        <select name='loan_purpose' value={values.loan_purpose} onChange={(e) => {
                                            handleChange(e)
                                        }} >
                                            <option value="">-- Choose --</option>
                                            <option value="Education">Education</option>
                                            <option value="Home Refinance">Home Refinance</option>
                                            <option value="Home Purchase">Home Purchase</option>
                                            <option value="Personal">Personal</option>
                                            <option value="Vehicle Purchase">Vehicle Purchase</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <div className="question-box-cibil">
                                    <label className="question">PIN Code</label>
                                    <div className="Cibil">
                                        <input type="text" placeholder='-- PIN Code --' name='pincode' value={values.pincode} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <div className="question-box-cibil">
                                    <label className="question">Category</label>
                                    <div className="Cibil">
                                        <select className="Catogery cibli-select-input" name='caste' value={values.caste} onChange={handleChange}>
                                            <option>-- Category --</option>
                                            <option>General</option>
                                            <option>OBC </option>
                                            <option>SC</option>
                                            <option>ST</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="question-box-cibil">
                                    <label className="question">Cibil Score</label>
                                    <div className="Cibil">
                                        <select className="cibli-select-input" name='cibil' value={values.cibil} onChange={(e) => {
                                            handleChange(e)
                                        }} >
                                            <option value={""}>--Select Cibil--</option>
                                            {
                                                cibil.length > 0 && cibil.map((item, key) => (
                                                    <option key={key} value={item}>{item}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {
                            values.employee_type != 'salaried' ? <div className='row self-row'>
                                <div className='col-md-6 col-sm-6'>
                                    <div className="question-box-cibil">
                                        <label className="question">Last ITR Filed</label>
                                        <div className="Cibil">
                                            <select className="cibli-select-input" name='itr' value={values.itr} onChange={(e) => {

                                                handleChange(e)
                                            }} id="itr">
                                                <option value={""}>--Select Last Itr--</option>
                                                {
                                                    itrList.length > 0 && itrList.map((items, key) => (
                                                        <option key={key} value={items}>{items}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 col-sm-6'>
                                    <div className="question-box-cibil">
                                        <label className="question">Type of Firm</label>
                                        <div className="Cibil">
                                            <select className="cibli-select-input" value={values.firm_type} name='firm_type' id="itr" onChange={(e) => {

                                                handleChange(e)
                                            }}>
                                                <option value={""}>--Select Firm--</option>
                                                {
                                                    firmType.length > 0 && firmType.map((curl1, key) => (
                                                        <option key={key} value={curl1}>{curl1}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="question-box">
                                        <input type="checkbox" checked={values.msme === true} className="form-check-input" id="pr-MSME" name='msme' value='yes' onChange={handleChange} />
                                        <label htmlFor="pr-MSME" className="question-1">MSME Registered ?</label>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="question-box">
                                        <input type="checkbox" className="form-check-input" id="pr-Startup" name='startup_register' value='yes' onChange={handleChange} />
                                        <label htmlFor="pr-Startup" className="question-1">Startup Registered ?</label>
                                    </div>
                                </div>
                            </div> : null
                        }
                        <div className="best-pro-row row do-any-box">
                            <div className="col-md-12">
                                <div className="question-check-box">
                                    <p className="question">Do you have any following ?</p>
                                </div>
                            </div>
                            <div className='col-check-row'>

                                <div className="col-check">
                                    <div className="question-box">
                                        <input type="checkbox" className="form-check-input" checked={values.credit_card === true} id="pro-credit" name='credit_card' value={values.credit_card} onChange={handleChange} />
                                        <label className=" question-1" htmlFor="pro-credit">Credit Card</label>
                                    </div>
                                </div>

                                <div className="col-check">
                                    <div className="question-box">
                                        <input type="checkbox" className="form-check-input" id="pro-car" checked={values.car_loan === true} name='car_loan' onChange={handleChange} value={values.car_loan} />
                                        <label className=" question-1" htmlFor="pro-car">CAR</label>
                                    </div>
                                </div>
                                <div className="col-check">
                                    <div className="question-box">
                                        <input type="checkbox" className="form-check-input" id="pro-share" checked={values.mf === true} name='mf' value={values.mf} onChange={handleChange} />
                                        <label className=" question-1" htmlFor="pro-share">Share/Mutual Funds</label>
                                    </div>
                                </div>
                                <div className="col-check">
                                    <div className="question-box">
                                        <input type="checkbox" className="form-check-input" id="pro-Property" name='property_loan' value={values.property_loan} onChange={handleChange} checked={values.property_loan === true} />
                                        <label className=" question-1" htmlFor="pro-Property">Property</label>
                                    </div>
                                </div>

                                <div className="col-check">
                                    <div className="question-box">
                                        <input type="checkbox" className="form-check-input" id="pro-Jewelry" name='gold_loan' checked={values.gold_loan === true} value={values.gold_loan} onChange={handleChange} />
                                        <label className=" question-1" htmlFor="pro-Jewelry">Gold</label>
                                    </div>
                                </div>
                                <div className="col-check">
                                    <div className="question-box">
                                        <input type="checkbox" className="form-check-input" id="pro-FD" name='fd' checked={values.fd === true} value={values.fd} onChange={handleChange} />
                                        <label className=" question-1" htmlFor="pro-FD">Fixed Deposit</label>
                                    </div>
                                </div>



                            </div>

                        </div>

                        <div className="feature-four__top-btn-box financial-br ">
                            <button tipe="submit" className="thm-btn feature-four__top-btn" type="submit">Let's Find Best Product</button>
                        </div>
                    </form>
                </div>

            </section>


            <section className="become-partner-section xloan-part main-prod-best">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 col-md-12">
                            {products.success == true && products.data.length > 0 && sliceData.map((item, key) => (
                                <Fragment key={key}>
                                    {
                                        Number(item.ProductId) === 7 && <PersonalLoanListLayout item={item} />
                                    }
                                    {
                                        Number(item.ProductId) === 8 && <BusinessLoanListLayout item={item} />
                                    }
                                    {
                                        Number(item.ProductId) === 15 && <CreditCardListLayout item={item} />
                                    }
                                    {
                                        Number(item.ProductId) === 6 && <HomeLoanListLayout item={item} />
                                    }
                                    {
                                        Number(item.ProductId) === 10 && <LapListLayout item={item} />
                                    }
                                    {
                                        Number(item.ProductId) === 18 && <EducationLoanListLayout item={item} />
                                    }
                                    
                                    {
                                        Number(item.ProductId) === 17 && <CarLoanListLayout item={item} />
                                    }
                                    {
                                        Number(item.ProductId) === 128 && <LoanAgainstSecurityListLayout item={item} />
                                    }

                                </Fragment>
                            ))

                            }


                            {products.data && Array.isArray(products.data) && products.data.length>0 &&
                                <div className='pagination-container mt-3 mx-5 mb-3'>
                                    
                                    <Pagination
                                        count={Math.ceil((products.data).length / perPage)}
                                        onChange={handlePageChange}
                                        shape="rounded"
                                        color="primary"
                                        size="large"
                                        variant="outlined"
                                        className='pagination'
                                    />
                                </div>}


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BestProduct

