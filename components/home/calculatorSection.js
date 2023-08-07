import { useFormik } from 'formik'
import { useState } from 'react';
import { cibil, employerType, firmType, itrList } from '../constant/data';
import AmountInput from './filterFormElement/AmountInput';
import CurrencyInput from "react-currency-input-field";
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
const CalculatorSection = ({status}) => {
    const router = useRouter();
    const [initialValue, setInitialValue] = useState({
        turnover_unit: 'lakh',
        product_id: 15,
        employee_type: "salaried",

    })
    const { values, handleBlur, setFieldValue, handleChange, handleSubmit, errors, touched, setFieldTouched } =
        useFormik({
            initialValues: initialValue,
            validationSchema: '',
            onSubmit: async (values, actions) => {
                try {
                    router.push('subsidies')
                } catch (error) {
                    console.log('Message', error)
                }
            },
        });

    return (

        <section className="credit-section calculaterSection"  id='calculaterSection'>
           <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="financial-heading">
                                    <h3>Financial Tools to Simplify Your Journey</h3>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="check-credit-box-out">
                                    <div className="check-credit">
                                        <div className="check-credit-card">
                                            <Image
                                                src={'/images/cibil-score-home.webp'}
                                                alt="cibil-score"
                                                width={150}
                                                height={120}
                                                loading='lazy'
                                            />
                                            <div className="check-link-c">
                                                <div className='check-c'>Check your credit score <b>for free</b>.</div>
                                                <div className="cibil-ul">
                                                    <p>
                                                        Know what your score is and what you can do to improve it
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="feature-four__top-btn-box financial-btn">
                                                <Link href="/credit-score"><a >
                                                    <button className="thm-btn feature-four__top-btn" aria-label='submit' type="submit">Evaluate
                                                        Now</button>
                                                </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="check-credit-box-out">

                                    <div className="check-credit eni-calculator">

                                        <div className="check-credit-card">
                                            <Image
                                                src={'/images/emi-cal-home.webp'}
                                                alt="EMI Calculator"
                                                width={150}
                                                height={120}
                                                loading='lazy'
                                            />
                                            <div className="check-link-c">
                                                <div className='check-c'>EMI Calculators</div>
                                                <div className="cibil-ul">

                                                    <p>Find out exactly how much you need to pay for your next purchase</p>
                                                </div>
                                            </div>
                                            <div className="feature-four__top-btn-box financial-btn">

                                                <Link href="/calculator/emi-calculator" >
                                                    <a className="thm-btn feature-four__top-btn" aria-label='submit'
                                                        type="submit">Evaluate Now
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">

                        <div className="incentive-form-box-out">
                            <div className="incentive-form-box">
                                <div className="incentive-form-heding-box">
                                    <div className='inc-hrad'>Incentive Calculator</div>
                                    <p>Your Ideal Incentive is Just a Step Away!</p>
                                </div>
                                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }} className="check-incentive-form call-back-form">

                                    <div className="input-boxes">
                                        <div className='row'>
                                            <div className='col-sm-6'>
                                                <div className="incentive-floating en-name">
                                                    <label htmlFor="floatingInput">Name</label>
                                                    <input type="text" id='floatingInput' name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} placeholder="-- Your Name --" />
                                                </div>
                                            </div>
                                            <div className='col-sm-6'>
                                                <div className="incentive-floating en-phone">
                                                    <label htmlFor="floatingAddress">Phone No.</label>
                                                    <input type="text" name="address" id='floatingAddress' placeholder="-- Phone No. --" />
                                                </div>
                                            </div>
                                            <div className='col-sm-6'>
                                                <div className="incentive-floating en-pin">
                                                    <label htmlFor="floatingPin">Pin Code</label>
                                                    <input type="text" autoComplete="off" name="pincode" id='floatingPin'
                                                        placeholder="Pincode" pattern="[0-9]{6}" required minLength={6} maxLength={6}
                                                        title="six digit zip code" value={values.pincode} onChange={(e) => {

                                                            handleChange(e)
                                                        }} />

                                                </div>
                                            </div>
                                            <div className='col-sm-6'>
                                                <div className="incentive-floating en-pin">
                                                    <label htmlFor='cibfloat'>Cibil</label>
                                                    <select className="cibli-select-input" id='cib' required name='cibilfloat' value={values.cibil} onChange={(e) => {

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
                                        </div>

                                        <div className="salary-type-box incentive-radio en-radio">
                                            <div className="form-group salayried">
                                                <input type="radio" id="inc-salary" checked={values.employee_type === 'salaried'}
                                                    onChange={(e) => {

                                                        setFieldValue("employee_type", "salaried")
                                                    }} name="salary-type" className="radioshow" />
                                                <label htmlFor="inc-salary">Salaried</label>
                                            </div>
                                            <div className="form-group salayried">
                                                <input type="radio" id="inc-self" name="salary-type" checked={values.employee_type === 'self_employed'}
                                                    onChange={(e) => {
                                                        setFieldValue("employee_type", "self_employed")
                                                    }} className="radioshow" />
                                                <label htmlFor="inc-self">Self employed</label>
                                            </div>
                                        </div>

                                        {
                                            values.employee_type === 'self_employed' ?
                                                <>
                                                    <div className='row encentive-row'>
                                                        <div className='col-sm-12'>
                                                            <div className="loanType loanType-1">
                                                                <AmountInput label={'turnover'} setFieldValue={setFieldValue} values={values} name='turnover' handleChange={handleChange} handleBlur={handleBlur} />
                                                            </div>
                                                        </div>
                                                        <div className='col-sm-12 col-md-6'>
                                                            <div className="loanType loanType-1">

                                                                <label htmlFor='firmtype'>Type of Firm</label>
                                                                <select className="cibli-select-input" id='firmtype' onBlur={handleBlur} required name='firm_type' value={values.firm_type} onChange={(e) => {

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
                                                        <div className='col-sm-12  col-md-6'>
                                                            <div className="loanType loanType-1">
                                                                <label htmlFor='lastFill'>Last ITR Filed</label>
                                                                <select className="cibli-select-input" id='lastFill' required name='itr' value={values.itr} onChange={(e) => {

                                                                    handleChange(e)
                                                                }}>
                                                                    <option value={""}>--Select Last Itr--</option>
                                                                    {
                                                                        itrList.length > 0 && itrList.map((items, key) => (
                                                                            <option key={key} value={items}>{items}</option>
                                                                        ))
                                                                    }

                                                                </select>

                                                                {errors.itrList && touched.itr ? (
                                                                    <div className='form-error'>{errors.itr}</div>
                                                                ) : null}
                                                            </div>

                                                        </div>
                                                    </div>
                                                </>
                                                : null
                                        }

                                        {

                                            values.employee_type === 'salaried' ?
                                                <>

                                                    <div className="loanType">
                                                        <label htmlFor='salm'>Net Salary/Month</label>
                                                        <div className="range-input-box input-amount">

                                                            <CurrencyInput
                                                                id='salm'
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
                                                    </div>
                                                </>
                                                : null
                                        }


                                    </div>
                                    <div className="search-button">
                                        <div className="search-button-in">
                                            <button className="lq-toggle-btn thm-btn feature-four__top-btn check-eligibilit-btn"
                                                aria-label='submit' type="submit">Let’s Go!
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
           
        </section>
    )
}
export default CalculatorSection