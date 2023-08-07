import { useState, useEffect } from 'react';
import { useFormik } from 'formik'
import { cibil, employerType, firmType, itrList, states, district } from '../components/constant/data';
import AmountInput from '../components/home/filterFormElement/AmountInput';
import CurrencyInput from "react-currency-input-field";
import axios from 'axios';
import Pagination from '@mui/material/Pagination';



const Subsidies = () => {
    const [initialValue, setInitialValue] = useState({
        turnover_unit: 'lakh',
        product_id: 15,
        employee_type: "salaried",
        gender: "male",
        category: "GEN",

    })
    const [sidebarClass, setclass] = useState('');
    const incentivecalc = async () => {
        try {
            const { data } = await axios.post(`${process.env.APIHOST}/api/banks/incentives`);
            if (data.status == 200) {
                setincometax(data.data.incomeTax)
                setSubsidy(data.data.subsidies)
            }
        }
        catch (error) {
            console.log('Message', error)
        }
    };

    const [incometax, setincometax] = useState([]);
    const [subsidy, setSubsidy] = useState([]);
    const subsidyItemsPerPage = 5;
    const incomeTaxItemsPerPage = 10;
    const [subsidyPage, setSubsidyPage] = useState(1);
    const [incomeTaxPage, setIncomeTaxPage] = useState(1);
    const subsidyStartIndex = (subsidyPage - 1) * subsidyItemsPerPage;
    const subsidyEndIndex = subsidyStartIndex + subsidyItemsPerPage;
    const currentSubsidyData = subsidy.slice(subsidyStartIndex, subsidyEndIndex);

    const incomeTaxStartIndex = (incomeTaxPage - 1) * incomeTaxItemsPerPage;
    const incomeTaxEndIndex = incomeTaxStartIndex + incomeTaxItemsPerPage;
    const currentIncomeTaxData = incometax.slice(incomeTaxStartIndex, incomeTaxEndIndex);

    // const currentPageSubsidyData = subsidy.length > 0 ? subsidy.slice(startIndex, endIndex) : [];
    // const currentPageIncomeTaxData  = incometax.slice(startIndex, endIndex);



    const { values, handleBlur, setFieldValue, handleChange, handleSubmit, errors, touched, setFieldTouched } =
        useFormik({
            initialValues: initialValue,
            validationSchema: '',
            onSubmit: async (values, actions) => {
                try {
                    // dispatch(addFilter(values))
                    // router.push('product-list')
                } catch (error) {
                    console.log('Message', error)
                }
            },
        });

    useEffect(() => {
        incentivecalc()
    }, [])

    // const handlePageChange = (event, value) => {
    //     setPage(value);
    // };

    const handleSubsidyPageChange = (event, value) => {
        setSubsidyPage(value);
    };

    const handleIncomeTaxPageChange = (event, value) => {
        setIncomeTaxPage(value);
    };
    return (
        <>

            <section className='subsidy-hero-banner'>
                <div className='container'>
                    <div className='subsidy-form'>
                        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }} className="check-incentive-form call-back-form">
                            <div className="subsidy-form-content">
                                <div className='row'>
                                    <div className="salary-type-box subsidy-radio en-radio">
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
                                </div>
                                {
                                    values.employee_type === 'self_employed' ?
                                        <>
                                            <div className='row'>
                                                <div className="col-md-4 col-lg-2">
                                                    <div className="incentive-floating en-name">
                                                        <label htmlFor="floatingInput">Name</label>
                                                        <input type="text" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} placeholder="-- Your Name --" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-lg-2">
                                                    <div className="incentive-floating en-phone">
                                                        <label htmlFor="floatingInput">Phone No.</label>
                                                        <input type="text" name="address" placeholder="-- Phone No. --" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-lg-2">
                                                    <div className="incentive-floating en-phone">
                                                        <AmountInput label={'turnover'} setFieldValue={setFieldValue} values={values} name='turnover' handleChange={handleChange} handleBlur={handleBlur} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3 col-lg-2">
                                                    <div className="incentive-floating en-phone">

                                                        <label>Type of Firm</label>
                                                        <select className="cibli-select-input" onBlur={handleBlur} required name='firm_type' value={values.firm_type} onChange={(e) => {

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
                                                <div className="col-md-4 col-lg-2">
                                                    <div className="incentive-floating en-pin">
                                                        <label htmlFor="floatingInput">Pin Code</label>
                                                        <input type="text" autoComplete="off" name="pincode"
                                                            placeholder="Pincode" pattern="[0-9]{6}" required minLength={6} maxLength={6}
                                                            title="six digit zip code" value={values.pincode} onChange={(e) => {

                                                                handleChange(e)
                                                            }} />

                                                    </div>
                                                </div>

                                                <div className="col-md-4 col-lg-2">
                                                    <div className=" incentive-floating en-phone range-input-box input-amount">
                                                        <label>Age</label>
                                                        <input type="text" name='age' value={values.age} onBlur={handleBlur} onChange={(e) => {
                                                            handleChange(e)
                                                        }} />

                                                        {errors.age && touched.age ? (
                                                            <div className='form-error'>{errors.age}</div>
                                                        ) : null}
                                                        <span className="unit">YEARS</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                        : null
                                }
                                {

                                    values.employee_type === 'salaried' ?
                                        <>
                                            <div className='row'>

                                                <div className="col-md-4 col-lg-2">
                                                    <div className="incentive-floating en-name">
                                                        <label htmlFor="floatingInput">Name</label>
                                                        <input type="text" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} placeholder="-- Your Name --" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-lg-2">
                                                    <div className="incentive-floating en-phone">
                                                        <label>Net Salary/Month</label>
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
                                                    </div>
                                                </div>
                                                <div className='col-sm-6 col-md-2'>
                                                    <div className="incentive-floating en-pin">
                                                        <label>Cibil</label>
                                                        <select className="cibli-select-input" required name='cibil' value={values.cibil} onChange={(e) => {

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
                                                <div className="col-md-4 col-lg-2">
                                                    <div className="incentive-floating en-phone">
                                                        <label htmlFor="floatingInput">Phone No.</label>
                                                        <input type="text" name="address" placeholder="-- Phone No. --" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-lg-2">
                                                    <div className="incentive-floating en-pin">
                                                        <label htmlFor="floatingInput">Location</label>
                                                        <input type="text" autoComplete="off" name="pincode"
                                                            placeholder="Pincode" pattern="[0-9]{6}" required minLength={6} maxLength={6}
                                                            title="six digit zip code" value={values.pincode} onChange={(e) => {
                                                                handleChange(e)
                                                            }} />
                                                    </div>
                                                </div>


                                                <div className="col-md-4 col-lg-2">
                                                    <div className=" incentive-floating en-phone range-input-box input-amount">
                                                        <label>Age</label>
                                                        <input type="text" name='age' value={values.age} onBlur={handleBlur} onChange={(e) => {
                                                            handleChange(e)
                                                        }} />

                                                        {errors.age && touched.age ? (
                                                            <div className='form-error'>{errors.age}</div>
                                                        ) : null}
                                                        <span className="unit">YEARS</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </>


                                        : null
                                }


                            </div>

                            <div className="search-button">
                                <div className="search-button-in">
                                    <button className="lq-toggle-btn thm-btn feature-four__top-btn check-eligibilit-btn"
                                        type="submit">Let's Go!
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>




            <section className='subsidy-list-section'>
                <div className='container'>
                    <div className='subsidy-dashbord'>
                        <div className='mobile-filter'>
                            <div className="filter-btn-box"><button className="filter-btn" onClick={() => setclass(sidebarClass == 'open' ? '' : 'open')} ><i className="fas fa-sort-amount-up-alt"></i> <span>Filter</span></button></div>
                        </div>
                        <div className={`subsidy-sidebar ${sidebarClass}`}>
                            <div className='sidebar'>
                                <h2>Filter</h2>
                            </div>
                            <div className='subsidy-filter-form'>
                                <div className="incentive-floating">
                                    <label>State</label>
                                    <select name="state" id="state">
                                        <option value={""}>--Select State--</option>
                                        {states.length > 0 && states.map((curl1, key) => (
                                            <option key={key} value={curl1}>{curl1}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="incentive-floating">
                                    <label>District</label>
                                    <select>
                                        <option value="">-- Select District --</option>
                                        {district.length > 0 && district.map((curl, key) => (
                                            <option key={key} value={curl}>{curl}</option>
                                        ))}
                                        { }
                                    </select>
                                </div>

                                <div className='msme-box'>
                                    {
                                        values.employee_type === 'self_employed' ?
                                            <>
                                                <div className="form-check subsidy-check">
                                                    <input type="checkbox" name="Are_you_a_start-up" id="Are_you_a_start-up" className="form-check-input" value="" />
                                                    <label for="Are_you_a_start-up">Are You A Start-up</label>
                                                </div>
                                                <div className="form-check subsidy-check">
                                                    <input type="checkbox" name="Are_you_a_Msme" id="Are_you_a_Msme" className="form-check-input" value="" />
                                                    <label for="Are_you_a_Msme">Are You A Msme</label>
                                                </div>
                                            </>
                                            : null
                                    }
                                    <div className="form-check subsidy-check">
                                        <input type="checkbox" name="Are_you_BPL" id="Are_you_BPL" className="form-check-input" value="" />
                                        <label for="Are_you_BPL">Are You BPL</label>
                                    </div>
                                </div>


                                <div className='insutry-subsidy-box'>
                                    <div className='filter-group Assessee'>
                                        <p>Industry  Type</p>

                                        <div className="form-check subsidy-check">
                                            <input className="form-check-input" name="Manufacture" type="checkbox" id="Manufacture" />
                                            <label className="form-check-label" htmlFor="Manufacture">Manufacture</label>
                                        </div>
                                        <div className="form-check subsidy-check">
                                            <input className="form-check-input" name="society" type="checkbox" id="Trader" />
                                            <label className="form-check-label" htmlFor="Trader">Trader</label>
                                        </div>
                                        <div className="form-check subsidy-check">
                                            <input className="form-check-input" name="Service" type="checkbox" id="Service" />
                                            <label className="form-check-label" htmlFor="Service">Service Provide</label>
                                        </div>
                                        <div className="form-check subsidy-check">
                                            <input className="form-check-input" name="LLP" type="checkbox" id="Exporter" />
                                            <label className="form-check-label" htmlFor="Exporter"> Exporter</label>
                                        </div>
                                        <div className="form-check subsidy-check">
                                            <input className="form-check-input" name="Importer" type="checkbox" id="Importer" />
                                            <label className="form-check-label" htmlFor="Importer">Importer</label>
                                        </div>
                                    </div>
                                    <div className="incentive-floating">
                                        <label>Industry</label>
                                        <select>
                                            <option value="">-- Select One --</option>
                                            <option value="">Agriculture</option>

                                        </select>
                                    </div>
                                </div>
                                <div className='incentive-floating'>
                                    <label>Assessee Type</label>
                                    <select name="Assessee  Type">
                                        <option value="Individual">Individual</option>
                                        <option value="Hindu Undivided Family">Hindu Undivided Family</option>
                                        <option value="Society">Society</option>
                                        <option value="Proprietorship">Proprietorship</option>
                                        <option value="Partnership Firm/LLP"> Partnership Firm/LLP</option>
                                        <option value="Listed Company">Listed Company</option>
                                        <option value="Non Listed Company">NGO</option>
                                    </select>
                                </div>

                                <div className='filter-group gender-box'>
                                    <p>Gender</p>
                                    <div className="salary-type-box">
                                        <input type="radio" id="male" name="gender" className="radioshow" checked={values.gender === 'male'}
                                            onChange={(e) => {
                                                setFieldValue("gender", "male")
                                            }} />
                                        <label for="male">Male</label>
                                    </div>
                                    <div className="salary-type-box">
                                        <input type="radio" id="female" name="gender" className="radioshow" checked={values.gender === 'Female'}
                                            onChange={(e) => {
                                                setFieldValue("gender", "Female")
                                            }} />
                                        <label for="female">Female</label>
                                    </div>
                                    <div className="salary-type-box">
                                        <input type="radio" id="other" name="gender" className="radioshow" checked={values.gender === 'other'}
                                            onChange={(e) => {
                                                setFieldValue("gender", "other")
                                            }} />
                                        <label for="other">Other</label>
                                    </div>
                                </div>

                                <div className='filter-group gender-box'>
                                    <p>Category</p>
                                    <div className="salary-type-box">
                                        <input type="radio" id="GEN" name="category" className="radioshow" checked={values.category === 'GEN'}
                                            onChange={(e) => {
                                                setFieldValue("category", "GEN")
                                            }} />
                                        <label for="GEN">GEN</label>
                                    </div>
                                    <div className="salary-type-box">
                                        <input type="radio" id="obc" name="category" className="radioshow" checked={values.category === 'obc'}
                                            onChange={(e) => {
                                                setFieldValue("category", "obc")
                                            }} />
                                        <label for="obc">OBC</label>
                                    </div>
                                    <div className="salary-type-box">
                                        <input type="radio" id="sc" name="category" className="radioshow" checked={values.category === 'sc'}
                                            onChange={(e) => {
                                                setFieldValue("category", "sc")
                                            }} />
                                        <label for="sc">SC/ST</label>
                                    </div>

                                </div>
                                <div className='filter-group benefits-box'>
                                    <p>Benefits</p>
                                    <div className="form-check subsidy-check">
                                        <input className="form-check-input" name="tax" type="checkbox" id="tax" />
                                        <label className="form-check-label" htmlFor="tax">Income Tax</label>
                                    </div>
                                    <div className="form-check subsidy-check">
                                        <input className="form-check-input" name="GST" type="checkbox" id="GST" />
                                        <label className="form-check-label" htmlFor="GST">GST</label>
                                    </div>
                                    <div className="form-check subsidy-check">
                                        <input className="form-check-input" name="VAT" type="checkbox" id="VAT" />
                                        <label className="form-check-label" htmlFor="VAT"> VAT</label>
                                    </div>
                                    <div className="form-check subsidy-check">
                                        <input className="form-check-input" name="Excise" type="checkbox" id="Excise" />
                                        <label className="form-check-label" htmlFor="Excise"> Excise Duty</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='subsidy-list'>
                            <div className='heading-subsidy-title-list'>
                                <h3>Available Benefits Based on Your Needs</h3>
                            </div>

                            <div className='schme-card'>
                                <div className='scheme-card-heading table-header'>
                                    <div className='srn-sc sc-pd'>S.N.</div>
                                    <div className='name-sc sc-pd'>Scheme</div>
                                    <div className='location-sc sc-pd'>Location</div>
                                    <div className='fas-sc sc-pd'>Financial Assistance</div>
                                    <div className='eligibility-sc sc-pd'>Eligibility</div>
                                </div>
                                {currentSubsidyData.map((value, index) => (
                                    <div className='scheme-card-heading scheme-card-heading-card' key={index}>
                                        <div className='srn-sc sc-pd'>{subsidyStartIndex +index + 1}</div>
                                        <div className='name-sc sc-pd'>
                                            <h3 className='des-hide'>Scheme</h3>
                                            <p><span>{value.scheme}</span> </p>
                                        </div>
                                        <div className='location-sc sc-pd'>
                                            <span className='des-hide'>Location :</span>
                                            <p>{value.location}</p>
                                        </div>
                                        <div className='fas-sc sc-pd'>
                                            <h3 className='des-hide'>Financial Assistance</h3>
                                            <div dangerouslySetInnerHTML={{ __html: value.financial_assistance }}></div>
                                        </div>
                                        <div className='eligibility-sc sc-pd'>
                                            <h3 className='des-hide'>Eligibility</h3>
                                            <div className='eligibility-box-sch'>
                                                <h5>Eligible Individual: </h5>
                                                <p className='eli-top'>
                                                    <div dangerouslySetInnerHTML={{ __html: value.eligibility }}></div>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className='pagination-container mt-3 mx-5 mb-3'>
                                    <Pagination
                                        count={Math.ceil(subsidy.length / subsidyItemsPerPage)}
                                        page={subsidyPage}
                                        onChange={handleSubsidyPageChange}
                                        shape="rounded"
                                        color="primary"
                                        size="large"
                                        className='pagination'
                                    />
                                </div>
                            </div>
                            <div className='subsidy-list-tax'>
                                <div className='heading-subsidy-title-list'>
                                    <h3> Income Tax Exemptions </h3>
                                </div>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead className="table-dark">
                                            <tr>
                                                <th>S.N</th>
                                                <th>Section</th>
                                                <th>Particulars </th>
                                                <th>Location</th>
                                                <th>Amount</th>
                                                <th>Eligible Person</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentIncomeTaxData.map((value, index) => (
                                                <tr key={index}>
                                                    <td>{incomeTaxStartIndex + index + 1}</td>
                                                    <td>{value.section}</td>
                                                    <td>{value.particulars}</td>
                                                    <td>{value.location}</td>
                                                    <td>
                                                        <div dangerouslySetInnerHTML={{ __html: value.amount }}></div>
                                                    </td>
                                                    <td>
                                                        <div dangerouslySetInnerHTML={{ __html: value.eligibility }}></div>
                                                    </td>
                                                </tr>
                                            ))}
                                            <div className="pagination">
                                                <Pagination
                                                    count={Math.ceil(incometax.length / incomeTaxItemsPerPage)}
                                                    page={incomeTaxPage}
                                                    onChange={handleIncomeTaxPageChange}
                                                    shape="rounded"
                                                    color="primary"
                                                />
                                            </div>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Subsidies    