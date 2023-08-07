import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { addFilter, updateValue } from "../../../store/slices/filterSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { cibil } from "../../constant/data";
import CurrencyInput from "react-currency-input-field";
import { loanAgainstSecuritySchema } from './../../../utils'
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
const LoanAgianstSecurity = ({ filterStatus, filterData }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const allFilterDatas = useSelector((state) => state.filter.allFilterData);
    const [initialValue, setInitialValue] = useState({
        assets: "gold",
        demate_account: "yes",
        gold_value: '',
        gold_weight: '',
        fd_amt: '',
        mutul_fund: '',
        pincode: '',
        cibil: '',
        tenure: '',
        yessecurity: 'yes',
        mutual_fund_quantity: '',
        age: '',
        product_id: 28,
    });

    const {
        values,
        handleBlur,
        setFieldValue,
        handleChange,
        handleSubmit,
        errors,
        touched,
    } = useFormik({
        initialValues: filterStatus === true ? filterData : initialValue,
        validationSchema: filterStatus === true ? '' : loanAgainstSecuritySchema,
        onSubmit: async (values, actions) => {
            try {

                const queryParams = Object.keys(values)
                    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(values[key])}`)
                    .join('&');

                router.push(`product-list?${queryParams}`)
            } catch (error) {
                console.log("here", error);
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
                        Get Your Funding Without Losing Your Asset
                    </span>
                    <p>
                        Want to get funded without the fear of letting go of your assets? Loan Against Security is your way to Go!
                    </p>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }}>
                    <div className="row frm-row">
                        <div className="col-md-12">
                            <div className="doyou-have">
                                <p className="du-title">Do you have any ?</p>
                                <div className="salary-type-box">
                                    <div className="form-group salayried">
                                        <input
                                            type="radio"
                                            id="gold"
                                            name="assets"
                                            value="gold"
                                            onBlur={handleBlur}
                                            checked={values.assets === "gold"}
                                            onChange={(e) => {
                                                customHandleChange(e)
                                                setFieldValue("assets", "gold")
                                            }}
                                            className="radioshow"
                                        />
                                        <label htmlFor="gold">Gold</label>
                                    </div>
                                    <div className="form-group salayried">
                                        <input
                                            type="radio"
                                            id="fd"
                                            name="assets"
                                            value="fd"
                                            onBlur={handleBlur}
                                            checked={values.assets === "fd"}
                                            onChange={(e) => {
                                                customHandleChange(e)
                                                setFieldValue("assets", "fd")
                                            }}
                                            className="radioshow"
                                        />
                                        <label htmlFor="fd">Fixed Deposit (FD)</label>
                                    </div>
                                    <div className="form-group salayried">
                                        <input
                                            type="radio"
                                            id="mf"
                                            name="assets"
                                            value="md"
                                            onBlur={handleBlur}
                                            checked={values.assets === "md"}
                                            onChange={(e) => {
                                                customHandleChange(e)
                                                setFieldValue("assets", "md")
                                            }}
                                            className="radioshow"
                                        />
                                        <label htmlFor="mf">Mutual Fund/Shares</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {values.assets == "md" ? (
                        <div className="dmt-account-box">
                            <p className="du-title">Do you have Demat Account :</p>
                            <div className="demate-input-box salary-type-box">
                                <div className="form-group salayried">
                                    <input
                                        type="radio"
                                        id="dyes"
                                        name="yessecurity"
                                        onBlur={handleBlur}
                                        value="yes"
                                        checked={values.demate_account === "yes"}
                                        onChange={(e) => {
                                            customHandleChange(e)
                                            setFieldValue("demate_account", "yes")
                                        }}

                                        className="radioshow"
                                    />


                                    <label htmlFor="dyes">Yes</label>
                                </div>
                                <div className="form-group salayried">
                                    <input
                                        type="radio"
                                        value="no"
                                        name="nosecurity"
                                        onBlur={handleBlur}
                                        id="dno"
                                        checked={values.demate_account === "no"}

                                        onChange={(e) => {
                                            customHandleChange(e)
                                            setFieldValue("demate_account", "no")
                                        }}

                                        className="radioshow"
                                    />


                                    <label htmlFor="dno">No</label>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="row middile-row " id="gold-box">
                            {values.assets == "gold" ? (
                                <>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="loanType ">
                                            <label htmlFor="gold-weight">Gold Weight</label>
                                            <div className="range-input-box input-amount">
                                                <input
                                                    id="gold-weight"
                                                    type="number"
                                                    onBlur={handleBlur}
                                                    placeholder="Quantity"
                                                    name="gold_weight"
                                                    onChange={(e) => {
                                                        customHandleChange(e)
                                                        handleChange(e)
                                                    }}
                                                    value={values.gold_weight}
                                                />
                                                <span className="unit">GM</span>
                                            </div>

                                            {errors.gold_weight && touched.gold_weight ? (
                                                <div className='form-error'>{errors.gold_weight}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6 loantype-pad">
                                        <div className="loanType ">
                                            <label htmlFor="gold-value">Gold Value</label>


                                            <CurrencyInput
                                                id="gold-value"
                                                required
                                                prefix='₹ '
                                                name="gold_value"
                                                data-number-to-fixed="2"
                                                data-number-stepfactor="100"
                                                value={values.gold_value}
                                                onBlur={handleBlur}
                                                placeholder="Gold Value"
                                                // intlConfig={{ locale: 'en-IN', currency: 'INR' }}
                                                onValueChange={(value, name) => {
                                                    salaryHandlechange(name, value)
                                                    setFieldValue(name, value)
                                                }}
                                                disableAbbreviations
                                            />

                                            {errors.gold_value && touched.gold_value ? (
                                                <div className='form-error'>{errors.gold_value}</div>
                                            ) : null}
                                           
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="col-lg-2 col-md-4">
                                        <div className="loanType ">
                                            <label htmlFor="bank-name">Bank Name</label>
                                            <input type="text" placeholder="--Bank Name --" id="bank-name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 loantype-pad">
                                        <div className="loanType ">
                                            <label htmlFor="fdamount">FD Amount</label>
                                            <div className="range-input-box input-amount">
                                                <CurrencyInput
                                                    required
                                                    id="fdamount"
                                                    prefix='₹ '
                                                    name="fd_amt"
                                                    data-number-to-fixed="2"
                                                    data-number-stepfactor="100"
                                                    onBlur={handleBlur}
                                                    value={values.fd_amt}
                                                    onValueChange={(value, name) => {
                                                        salaryHandlechange(name, value)
                                                        setFieldValue(name, value)
                                                    }}
                                                    disableAbbreviations
                                                />
                                                <span className="unit">INR</span>
                                            </div>
                                            {errors.fd_amt && touched.fd_amt ? (
                                                <div className='form-error'>{errors.fd_amt}</div>
                                            ) : null}

                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 loantype-pad">
                                        <div className="loanType ">
                                            <label htmlFor="tenu">Tenure - ( Year )</label>
                                            <select name="tenure"
                                                id="tenu"
                                                onBlur={handleBlur}
                                                onChange={(e) => {
                                                    customHandleChange(e)
                                                    handleChange(e)
                                                }}
                                                required
                                                value={values.tenure}>
                                                <option value="0-1">0-1</option>
                                                <option value="1-2 ">1-2 </option>
                                                <option value="2-3 ">2-3 </option>
                                                <option value="3-5 ">3-5 </option>
                                                <option value="5+ ">5+ </option>
                                            </select>
                                            {errors.tenure && touched.tenure ? (
                                                <div className='form-error'>{errors.tenure}</div>
                                            ) : null}
                                        </div>

                                    </div>
                                </>
                            )}

                            <div className="col-lg-2 col-md-4 br-top-tab loantype-pad">
                                <div className="loanType">
                                    <label htmlFor="pinLoantype">Current Pin code</label>
                                    <input type="text" autoComplete="off" name="pincode" id="pinLoantype" required onBlur={handleBlur}
                                        placeholder="Current Pincode" pattern="[0-9]{6}" minLength={6} maxLength={6}
                                        title="six digit zip code" value={values.pincode} onChange={(e) => {
                                            customHandleChange(e)
                                            handleChange(e)
                                        }} />
                                    {errors.pincode && touched.pincode ? (
                                        <div className='form-error'>{errors.pincode}</div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 br-top-tab loantype-pad">
                                <div className="loanType">
                                    <label htmlFor="loantypeage">Age</label>
                                    <input type="date" id="loantypeage" name='age' required onBlur={handleBlur} value={values.age} onChange={(e) => {
                                        customHandleChange(e)
                                        handleChange(e)
                                    }} />
                                    {errors.age && touched.age ? (
                                        <div className='form-error'>{errors.age}</div>
                                    ) : null}


                                </div>
                            </div>

                            <div className={values.assets == "gold" ? 'col-lg-3  col-md-4 br-top-tab  loantype-pad' : 'col-lg-2 col-md-4 br-top-tab  loantype-pad'}>
                                <div className="loanType ">
                                    <label htmlFor="ciblo">Cibil</label>
                                    <select className="cibli-select-input" id="ciblo" required onBlur={handleBlur} name="cibil"
                                        onChange={(e) => {
                                            customHandleChange(e)
                                            handleChange(e)
                                        }}
                                        value={values.cibil} >
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
                    )}

                    <div id="mf-box" >
                        {values.demate_account == "no" && values.assets == 'md' ? (
                            <div
                                className="row middile-row "
                                id="opps-box"

                            >
                                <div className="opps-no-mf">
                                    <h3>Oops!</h3>
                                    <h5>We Found You are Not Eligible for this</h5>
                                    <p>
                                        But changing your collateral asset might help you. Check
                                        your eligibility with either Gold or Fixed Deposit options
                                        to know further.
                                    </p>
                                </div>
                            </div>
                        ) : values.demate_account == "yes" && values.assets == 'md' ? (
                            <div className="row middile-row " id="mf-form-box">
                                <div className="col-lg-3 col-md-6">
                                    <div className="loanType ">
                                        <label htmlFor="name-share">Name of Shares/Mutual Fund</label>
                                        <input
                                            id="name-share"
                                            type="number" onBlur={handleBlur}
                                            placeholder="Name of Shares/Mutual Fund"
                                            name="mutual_fund_quantity"
                                            onChange={(e) => {
                                                customHandleChange(e)
                                                handleChange(e)
                                            }}
                                            required
                                            value={values.mutual_fund_quantity}
                                        />
                                        {errors.mutual_fund_quantity && touched.mutual_fund_quantity ? (
                                            <div className='form-error'>{errors.mutual_fund_quantity}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 loantype-pad">
                                    <div className="loanType ">
                                        <label htmlFor="mutual-share">Mutual Fund/Shares Value</label>
                                        <CurrencyInput
                                            id="mutual-share"
                                            prefix="₹ "
                                            name="mutul_fund"
                                            onBlur={handleBlur}
                                            data-number-to-fixed="2"
                                            data-number-stepfactor="100"
                                            value={values.mutul_fund}

                                            placeholder="Mutual Fund/Shares Value"
                                            onValueChange={(value, name) => {
                                                salaryHandlechange(name, value)
                                                setFieldValue(name, value)
                                            }}
                                            disableAbbreviations
                                        />
                                        {errors.mutul_fund && touched.mutul_fund ? (
                                            <div className='form-error'>{errors.mutul_fund}</div>
                                        ) : null}

                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 br-top-tab loantype-pad">
                                    <div className="loanType">
                                        <label htmlFor="typepin">Current Pin code</label>
                                        <input type="text" autoComplete="off" id="typepin" required name="pincode" onBlur={handleBlur}
                                            placeholder="Current Pincode" pattern="[0-9]{6}" minLength={6} maxLength={6}
                                            title="six digit zip code" value={values.pincode} onChange={(e) => {
                                                customHandleChange(e)
                                                handleChange(e)
                                            }} />
                                        {errors.pincode && touched.pincode ? (
                                            <div className='form-error'>{errors.pincode}</div>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-4 br-top-tab loantype-pad">
                                    <div className="loanType">
                                        <label htmlFor="typeage">Age</label>
                                        <input type="date" onBlur={handleBlur} required name='typeage' id="age" value={values.age} onChange={(e) => {
                                            customHandleChange(e)
                                            handleChange(e)
                                        }} />
                                        {errors.age && touched.age ? (
                                            <div className='form-error'>{errors.age}</div>
                                        ) : null}


                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-4 br-top-tab  loantype-pad">
                                    <div className="loanType ">
                                        <label htmlFor="cibtype">Cibil</label>
                                        <select className="cibli-select-input" required id="cibtype" onBlur={handleBlur} name="cibil" onChange={(e) => {
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
                        )

                            : null
                        }


                    </div>

                    <div className="row frm-row">
                        <div className="col-md-6 loantype-pad1 loantype-extra">
                            <div className="loanType-btn">
                                <div className="feature-four__top-btn-box">
                                    <button
                                        className="thm-btn feature-four__top-btn"
                                        aria-label="submit"
                                        type="submit"
                                    >
                                        Get Offers
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LoanAgianstSecurity;
