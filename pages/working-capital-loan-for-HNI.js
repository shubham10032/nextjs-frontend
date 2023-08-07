import React, { useState } from "react";
import Image from "next/image";
// import Link from "next/link"; 
const workingCapital = () => {

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        phoneNum: '',
        profile: ''
    });

    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
          ...prevData,
          [field]: value
        }));
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Form submission logic (e.g., send data to server)
        // Reset form fields
        setFormData({
            email: '',
            name: '',
            phoneNum: '',
            profile: ''
        });
        setShowSuccess(true);
    };

    const formValidation = () => {
        // Form validation
        if (!formData.email || !formData.name || !formData.phoneNum || !formData.profile) {
            alert('Please fill in all the required fields.');
            return false;
        }
        else {
            return true;
        }
    };


    return (
        <>
            <section className="associate-page-main privateEquity">
                <section className="associate-hero-section associate-he-sec" >
                    <div className="container">
                        <div className="associate-content">
                            <div className="associate-row gap-row">
                                <div className="associate-content-box as-content-mb">
                                    <div className="associate-content-box-top associate-content-top ">
                                        <h1>BIG loan to <br /><span>Big clients!</span></h1>
                                        <p>Your business might be running okay today but what about it lacking the right
                                            fund availability? Such phases can take a toll on the performance of your
                                            business. But worry not, to avoid such a financial crisis you can always rely
                                            on Working Capital Options available at ReferLoan’s Digital Lending Platform.
                                            Working Capital can streamline your work process and make it more lucrative
                                            for better returns.
                                        </p>
                                    </div>
                                    <div className="asso-btn">
                                        <div className="feature-four__top-btn-box">
                                            <button className="thm-btn feature-four__top-btn" aria-label="submit" type="submit">Get
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="working-form">
                                    <div className="cs-form">
                                        <form className = "working-inner-fome" onSubmit={handleSubmit} >
                                            <div className="col-md-12">
                                                <div className="EF-form-group mb-wc">
                                                    <label htmlFor="name">First Name<span className="require">*</span></label>
                                                    <input type="text" autoComplete="off" name="name" id="name"
                                                        placeholder="Name" value={formData.name}
                                                        onChange={(event) => handleChange('name', event.target.value)} required />
                                                </div>

                                                <div className='EF-form-group mb-wc'>
                                                    <label htmlFor='email'>Email<span className='require'>*</span></label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={(event) => handleChange('email', event.target.value)}
                                                        placeholder="Email"
                                                        required
                                                    />
                                                </div>

                                                <div className="EF-form-group mb-wc">
                                                    <label htmlFor="phoneCode">Phone Number<span className="require">*</span></label>
                                                    {/* <div className="rcflex"> */}
                                                        <div className='coldflex'>
                                                            <input type="text" id="phoneNum" name="phoneNum" placeholder="Phone Number" value={formData.phoneNum}
                                                                onChange={(event) => handleChange('phoneNum', event.target.value)} required />
                                                        </div>
                                                    {/* </div> */}
                                                </div>

                                                <div className='EF-form-group mb-wc'>
                                                    <label htmlFor='profile'>What is Your Profile ?<span className='require'>*</span></label>
                                                    <select className="cibli-select-input" required="" id="profile" value={formData.profile}
                                                         onChange={(event) => handleChange('profile', event.target.value)} name="profile">
                                                        <option value=''>-- Select Your Profile --</option>
                                                        <option value='profile1'>Profile 1</option>
                                                        <option value='profile2'>Profile 2</option>
                                                        <option value='profile3'>Profile 3</option>
                                                        <option value='profile4'>Profile 4</option>
                                                        <option value='profile5'>Profile 5</option>
                                                        <option value='profile6'>Profile 6</option>
                                                        <option value='profile7'>Profile 7</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="work-sub">
                                                <div className="feature-four__top-btn-box">
                                                    <button className="thm-btn feature-four__top-btn " 
                                                    aria-label="submit" type="submit">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="equity-invest-wrap">
                    <div className="container">
                        <div className="oppertunity-title">Noteworthy Facts </div>
                        <div className="why-about-ul equity_border">
                            <ul>
                                <li>
                                    <span className="why-list-equity"></span>
                                    A working capital loan generally carries an interest rate of 12% to 16% and may vary from one bank to another.
                                </li>
                                <li><span className="why-list-equity"></span>The average lifespan of the working capital is
                                    12 months and comes with flexible collateral options.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>


                <section className="working-sea">
                    <div className="container">
                        <div className="associates-form-box ">
                            <div className="working-cap">
                                <div>
                                    <h4 className="oppertunity-title pb-3">When You Might Wish to Consider a Working Capital Loan</h4>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <div className="eqip-main-ad-list">
                                            Seasonal Sales Cycles
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12 margin-tab">
                                        <div className="eqip-main-ad-list">
                                            Cash Crunches
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12 margin-form">
                                        <div className="eqip-main-ad-list">
                                            Non-Steady Cash Flow
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12 margin-form">
                                        <div className="eqip-main-ad-list">
                                            To Seize an Opportunity
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="work-table">
                                    <div className="table-responsive">
                                        <table className="table table-border">
                                            <thead>
                                                <th colSpan="2" className="text-center">Features of Working Capital Offered by ReferLoan </th>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row" className="working-priv">Location </th>
                                                    <td>PAN India </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="working-priv">Assisted Amount</th>
                                                    <td><span>From Rs. 10 Cr. to Rs. 100 Cr.</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="working-priv">Interest Rates</th>
                                                    <td><span>Customized based on the borrower's credit profile and the purpose of the loan</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="working-priv">Negative Profile</th>
                                                    <td><span>Rs. 3,000 (NIL for Burgundy Clients)</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="working-priv">Property Preference</th>
                                                    <td><span>Funding on any property</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="working-priv">Collateral </th>
                                                    <td><span>Not Required</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="working-priv">Prepayment Charges</th>
                                                    <td><span>NIL</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="working-priv">USP</th>
                                                    <td><span>Structure Funding to ultra HNI Clint’s.
                                                        Funding to builders on ready-to-move-in inventory (Residential and Commercial projects)</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="working-priv">Prepayment Charges</th>
                                                    <td><span>NIL</span></td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2} className="text-center"><span>Easy documentation process</span></td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2} className="text-center" ><span>Quick Loan Approval</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="equity-invest-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="oppertunity-title">Eligibility to Apply for Working Capital at ReferLoan</div>
                                <div className="why-about-ul equity_border">
                                    <ul>
                                        <li>
                                            <span className="why-list-equity"></span>
                                            The Business vintage must be at least 3 years
                                        </li>
                                        <li><span className="why-list-equity"></span>Must bring the latest Income Tax returns information</li>
                                        <li><span className="why-list-equity"></span>
                                            Businesses should not be blacklisted
                                        </li>
                                        <li><span className="why-list-equity"></span>
                                            The business location should not be in a negative location list
                                        </li>
                                        <li><span className="why-list-equity"></span>
                                            Trust, small businesses, and NGOs are not eligible
                                        </li>
                                        <li><span className="why-list-equity"></span>
                                            You will probably be asked to provide more information to prove that your business exists.

                                        </li>
                                        <li><span className="why-list-equity"></span>
                                            If a customer was NPA/SMA-2 in the past now he is out of NPA KMBL
                                        </li>
                                        <li><span className="why-list-equity"></span>
                                            Funding for SMA 0 - SMA 1 clients can be considered
                                        </li>
                                        <li><span className="why-list-equity"></span>
                                            Profile base funding to BIG clients.
                                        </li>
                                        <li><span className="why-list-equity"></span>
                                            Funding from NCLT purchase
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">

                                <div className="associates-form-box ">
                                    <div className="workingbox">
                                        <div>
                                            <h4 className="oppertunity-title">Types of Working Capital</h4>
                                        </div>
                                        <div className="row mt-4 mb-3">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="eqip-main-ad-list">
                                                    Working Capital Loans
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 margin-tap ">
                                                <div className="eqip-main-ad-list">
                                                    Overdrafts
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 equip_ad_pad">
                                                <div className="eqip-main-ad-list">
                                                    Line of Credit
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 equip_ad_pad">
                                                <div className="eqip-main-ad-list">
                                                    Invoice Discounting
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="oppertunity-title pt-3">Required Documents to Apply for Working Capital </div>
                                <div className="why-about-ul equity_border">
                                    <ul>
                                        <li>
                                            <span className="why-list-equity"></span>
                                            KYC documents
                                        </li>
                                        <li><span className="why-list-equity"></span>
                                            Proof of business ownership
                                        </li>
                                        <li><span className="why-list-equity"></span>
                                            Income tax returns filed for the last 1 year
                                        </li>
                                        <li><span className="why-list-equity"></span>
                                            Profit and loss statements and balance sheets for the previous 2 years
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                <section className="faq-section dsa-faq-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="faq-content-section">
                                    <div className="faq-content-heading">
                                        <span className="title-img">
                                            <Image src="/images/icon/faqicon.webp" height={72} width={72} loading="lazy" alt="Leave Your Question" />
                                        </span>
                                        <h2 className="mb-2">FREQUENTLY ASKED QUESTIONS</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="faqSetion" itemScope="" itemType="https://schema.org/FAQPage">
                                    <div className="faq_row">
                                        <div className="accordion accordion-flush faqAccordion" id="accordionFlushExample">
                                            <div className="accordion-item my-accourdian-section " itemScope=""
                                                itemProp="mainEntity" itemType="https://schema.org/Question">
                                                <h2 className="accordion-header" id="flush-heading0" itemProp="name"><button
                                                    className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapse0"
                                                    aria-expanded="false" aria-controls="flush-collapse0">What is Working Capital?
                                                </button></h2>
                                                <div id="flush-collapse0" className="accordion-collapse collapse"
                                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body" itemScope="" itemProp="acceptedAnswer"
                                                        itemType="https://schema.org/Answer">
                                                        <div>
                                                            <div itemProp="text">
                                                                <p>Working capital financing allows businesses with an inconsistent cash
                                                                    flow to meet their day-to-day operating and payroll expenses by borrowing
                                                                    money instead of purchasing equipment or making other large investments.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item my-accourdian-section " itemScope=""
                                                itemProp="mainEntity" itemType="https://schema.org/Question">
                                                <h2 className="accordion-header" id="flush-heading1" itemProp="name"><button
                                                    className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapse1"
                                                    aria-expanded="false" aria-controls="flush-collapse1">What are the implemented charges on working capital?</button></h2>
                                                <div id="flush-collapse1" className="accordion-collapse collapse"
                                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body" itemScope="" itemProp="acceptedAnswer"
                                                        itemType="https://schema.org/Answer">
                                                        <div>
                                                            <div itemProp="text">
                                                                <p>Besides the interest rate on the sanctioned loan amount,
                                                                    you will have to pay processing fees, documentation charges, and
                                                                    other fees like cheque or EMI bounce charges, in case of missed payments.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item my-accourdian-section " itemScope=""
                                                itemProp="mainEntity" itemType="https://schema.org/Question">
                                                <h2 className="accordion-header" id="flush-heading2" itemProp="name"><button
                                                    className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapse2"
                                                    aria-expanded="false" aria-controls="flush-collapse2">
                                                    What types of businesses can apply for a working capital loan?
                                                </button>
                                                </h2>
                                                <div id="flush-collapse2" className="accordion-collapse collapse"
                                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body" itemScope="" itemProp="acceptedAnswer"
                                                        itemType="https://schema.org/Answer">
                                                        <div>
                                                            <div itemProp="text">
                                                                <p>Some lenders have different requirements, but here are some of the types of companies
                                                                    that can apply for a working capital loan:
                                                                </p>
                                                                <ul className="faq-limit">
                                                                    <li>Private limited company</li>
                                                                    <li>Sole proprietorship firm</li>
                                                                    <li>Partnership firm</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item my-accourdian-section " itemScope=""
                                                itemProp="mainEntity" itemType="https://schema.org/Question">
                                                <h2 className="accordion-header" id="flush-heading3" itemProp="name"><button
                                                    className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapse3"
                                                    aria-expanded="false" aria-controls="flush-collapse3">Do working capital loans have a fixed interest rate?
                                                </button></h2>
                                                <div id="flush-collapse3" className="accordion-collapse collapse"
                                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body" itemScope="" itemProp="acceptedAnswer"
                                                        itemType="https://schema.org/Answer">
                                                        <div>
                                                            <div itemProp="text">
                                                                <p>While the interest rates on these loans vary from
                                                                    lender to lender, you can generally expect a floating
                                                                    interest rate. You can find more information about
                                                                    these loans on your potential lender's official
                                                                    website.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item my-accourdian-section " itemScope=""
                                                itemProp="mainEntity" itemType="https://schema.org/Question">
                                                <h2 className="accordion-header" id="flush-heading4" itemProp="name"><button
                                                    className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapse4"
                                                    aria-expanded="false" aria-controls="flush-collapse4">Can I apply for a Working Capital Loan for an NGO?                                                    ?</button></h2>
                                                <div id="flush-collapse4" className="accordion-collapse collapse"
                                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body" itemScope="" itemProp="acceptedAnswer"
                                                        itemType="https://schema.org/Answer">
                                                        <div>
                                                            <div itemProp="text">
                                                                <p>No, you can’t apply for a Working Capital Loan for an NGO.</p>
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
                </section>

            </section >
        </>
    )
}

export default workingCapital 