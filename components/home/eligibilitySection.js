import { useState } from 'react';
import Carousel from 'react-slick';
import { useFormik } from 'formik'
import { cibil, firmType, itrList } from '../constant/data';
import { addFilter } from '../../store/slices/filterSlice';
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import CurrencyInput from 'react-currency-input-field';
import AmountInput from './filterFormElement/AmountInput';
import Link from 'next/link';
import Image from 'next/image';

const EligibilitySection = ({status}) => {
    const dispatch = useDispatch()
    const router = useRouter()
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
    })
    const { values, handleBlur, setFieldValue, handleChange, handleSubmit, errors, touched, setFieldTouched } =
        useFormik({
            initialValues: initialValuess,
            validationSchema: '',
            onSubmit: async (values, actions) => {
                try {

                    dispatch(addFilter(values))
                    router.push('best-product')
                } catch (error) {
                    console.log('Message', error)
                }
            },
        });

    // console.log(values)
    return (
        <>
            <section className="no-risk" id='eligibilitySection'>
                {
                    status == true && <div className="container">
                    <div className="row no-risk-row">
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <div className="best-pro-question-box">
                                <div className="best-pro-question-box-heading">
                                    <h3>Let's Find The Best Products</h3>
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
                                                        <label onClick={() => setFieldValue("employee_type", "salaried")} htmlFor="auto-salary1">Salaried</label>
                                                    </div>
                                                    <div className="form-group ">
                                                        <input type="radio" id="auto-self1" checked={values.employee_type === 'self_employee'}
                                                            name="employee_types"
                                                            className="radioshows" onChange={() => setFieldValue("employee_type", "self_employee")} />
                                                        <label onClick={() => setFieldValue("employee_type", "self_employee")} htmlFor="auto-self1">Self employed</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row pin-row'>
                                        <div className='col-md-12 mb-2'>
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
                                        <div className='col-md-6'>
                                            <div className="question-box-cibil">
                                                <label className="question" htmlFor='ques-pin'>PIN Code</label>
                                                <div className="Cibil">
                                                    <input type="text" placeholder='-- PIN Code --' name='pincode' id='ques-pin' value={values.pincode} onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className="question-box-cibil">
                                                <label className="question" htmlFor='ques-cate'>Category</label>
                                                <div className="Cibil">
                                                    <select className="Catogery cibli-select-input" id='ques-cate' name='caste' value={values.caste} onChange={handleChange}>
                                                        <option>-- Category --</option>
                                                        <option>General</option>
                                                        <option>OBC </option>
                                                        <option>SC</option>
                                                        <option>ST</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        values.employee_type != 'salaried' ? <div className='row self-row'>
                                            <div className='col-md-6'>
                                                <div className="question-box-cibil">
                                                    <label className="question" htmlFor='ques-itr'>Last ITR Filed</label>
                                                    <div className="Cibil">
                                                        <select className="cibli-select-input" name='itr' id='ques-itr' value={values.itr} onChange={(e) => {

                                                            handleChange(e)
                                                        }} >
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
                                            <div className='col-md-6'>
                                                <div className="question-box-cibil">
                                                    <label className="question" htmlFor='ques-firm'>Type of Firm</label>
                                                    <div className="Cibil">
                                                        <select className="cibli-select-input" value={values.firm_type} name='firm_type' id="ques-firm" onChange={(e) => {

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
                                            <div className="col-md-6">
                                                <div className="question-box">
                                                    <input type="checkbox" className="form-check-input" id="pr-MSME" checked={values.msme === true} name='msme' value={values.msme} onChange={handleChange} />
                                                    <label htmlFor="pr-MSME" className="question-1">MSME Registered ?</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="question-box">
                                                    <input type="checkbox" className="form-check-input" id="pr-Startup" name='startup_register' value={values.startup_register} checked={values.startup_register === true} onChange={handleChange} />
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
                                                    <input type="checkbox" className="form-check-input" id="pro-credit" checked={values.credit_card === true} name='credit_card' value={values.credit_card} onChange={handleChange} />
                                                    <label className=" question-1" htmlFor="pro-credit">Credit Card</label>
                                                </div>
                                            </div>

                                            <div className="col-check">
                                                <div className="question-box">
                                                    <input type="checkbox" className="form-check-input" checked={values.car_loan === true} id="pro-car" name='car_loan' onChange={handleChange} value={values.car_loan} />
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
                                                    <input type="checkbox" className="form-check-input" checked={values.property_loan === true} id="pro-Property" name='property_loan' value={values.property_loan} onChange={handleChange} />
                                                    <label className=" question-1" htmlFor="pro-Property">Property</label>
                                                </div>
                                            </div>

                                            <div className="col-check">
                                                <div className="question-box">
                                                    <input type="checkbox" className="form-check-input" id="pro-Jewelry" name='gold_loan' value={values.property_loan} onChange={handleChange} />
                                                    <label className=" question-1" htmlFor="pro-Jewelry">Gold</label>
                                                </div>
                                            </div>
                                            <div className="col-check">
                                                <div className="question-box">
                                                    <input type="checkbox" className="form-check-input" id="pro-FD" checked={values.fd === true} name='fd' value={values.fd} onChange={handleChange} />
                                                    <label className=" question-1" htmlFor="pro-FD">Fixed Deposit</label>
                                                </div>
                                            </div>



                                        </div>

                                    </div>


                                    <div className="row best-pro-row ">
                                        <div className="col-md-6">
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
                                        <div className="col-md-6">
                                            <div className="question-box-perpose">
                                                <label className="question">Purpose of Loan</label>
                                                <div className="Cibil">
                                                    <select name='loan_purpose' value={values.loan_purpose} onChange={(e) => {
                                                        handleChange(e)
                                                    }} >
                                                        <option value="Education">-- Choose --</option>
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
                                    </div>
                                    <div className="feature-four__top-btn-box financial-br ">
                                        <button tipe="submit" className="thm-btn feature-four__top-btn" aria-label='submit' type="submit">Let's Find Best Product</button>
                                    </div>
                                </form>
                            </div>
                        </div>


                        <div className="col-lg-7 col-md-12 col-sm-12">
                            <div className="best-refer-text-wrap">

                                <div className="product-slider-box">
                                    <div className="swiper product-slider swiper-initialized swiper-horizontal swiper-backface-hidden">

                                        <div className="swiper-wrapper" id="swiper-wrapper-104103e9e83e6fcdb" aria-live="off" >
                                            <div className="row elegibility">
                                                <div className="col-md-6">
                                                    <div className="pro-card">
                                                        <div className="best-offer-bank">
                                                            <Link href="/credit-card"><a>
                                                                <div className="offer-card-top">
                                                                    <Image src="/images/icon/blackIcon/card1.webp" alt="creditcards" height={32} width={32} loading='lazy' />
                                                                    <div className='ico'>Card</div>
                                                                    <div className='ico-h5'>Let's Find You The Best Credit Card</div>
                                                                </div>

                                                                <span className="Know-more">Know More</span>
                                                            </a></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="pro-card">
                                                        <div className="best-offer-bank">
                                                            <Link href="/loans/personal-loan" ><a>
                                                                <div className="offer-card-top">
                                                                    <Image src="/images/icon/blackIcon/pl.webp" alt="personalloans" height={32} width={32} loading='lazy' />
                                                                    <div className='ico'>Personal Loan</div>
                                                                    <div className='ico-h5'>Let's Find Your Best Personal Loan</div>
                                                                </div>

                                                                <span className="Know-more">Know More</span>
                                                            </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="pro-card">
                                                        <div className="best-offer-bank">
                                                            <Link href="/loans/home-loan"><a>
                                                                <div className="offer-card-top">
                                                                    <Image src="/images/icon/blackIcon/home.webp" alt="homesloan" height={32} width={32} loading='lazy' />
                                                                    <div className='ico'>Home Loan</div>
                                                                    <div className='ico-h5'>Let's Find Your Best Home Loan</div>
                                                                </div>
                                                                <span className="Know-more">Know More</span>
                                                            </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="pro-card">
                                                        <div className="best-offer-bank">
                                                            <Link href="/loans/business-loan" ><a>
                                                                <div className="offer-card-top">
                                                                    <Image src="/images/icon/blackIcon/bl.webp" alt="businessloans" height={32} width={32} loading='lazy' />
                                                                    <div className='ico'>Business Loan</div>
                                                                    <div className='ico-h5'>Let's Find Your Best Business Loan</div>
                                                                </div>


                                                                <span className="Know-more">Know More</span>
                                                            </a>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </section>
        </>
    )
}
export default EligibilitySection