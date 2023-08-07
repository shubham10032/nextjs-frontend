import React from 'react'
import BestOffer from '../components/home/bestOffer';
import dynamic from 'next/dynamic';
import LeaveQuestion from '../components/page/leaveQuestion';
import Image from 'next/image';


const Faq = dynamic(() => import('../components/page/faq'), { loading: () => <Loader />, })
const CreditScore = (props) => {
    return (
        <>


            <section className='cs-hero-banner cs-hero-banner-ban '>
                <div className='container'>
                    <div className='row'>
                        <h2 className='cs-banner-heading cs-banner-h'>
                            Get to Know Your Credit Score in Seconds!
                        </h2>
                    </div>
                    <div className='row'>
                        <div className='sc-form-box'>
                            <form className='cs-form'>

                                <div className='row form-row-cs'>
                                    <div className='col-lg-12'>
                                        <div className="salary-type-box">
                                            <div className="form-group salayried">
                                                <input type="radio" id="male" name="gender" className="radioshow" />
                                                <label for="male">Male</label>
                                            </div>
                                            <div className="form-group salayried">
                                                <input type="radio" id="Female" name="gender" className="radioshow" />
                                                <label for="Female">Female</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row cs-in-row'>
                                    <div className='col-lg-4 col-md-6 col-sm-6'>
                                        <div className='cs-form-input'>
                                            <label>Full Name</label>
                                            <div className='cs-input-box'>
                                                <input type='text' placeholder='As per your bank record' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-6'>
                                        <div className='cs-form-input'>
                                            <label>Date Of Birth</label>
                                            <div className='cs-input-box'>
                                                <input type='text' maxLength={10} placeholder='DD-MM-YYYY' />
                                                <span className='disc'>Digit Only</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-6'>
                                        <div className='cs-form-input'>
                                            <label>Pin Code</label>
                                            <div className='cs-input-box'>
                                                <input type='Number' maxlength="6" placeholder='As per your bank record' />
                                                <span className='disc'>0/6 Digits</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-6'>
                                        <div className='cs-form-input'>
                                            <label>PAN</label>
                                            <div className='cs-input-box'>
                                                <input type='text' placeholder='Permanent Account Number' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-6'>
                                        <div className='cs-form-input'>
                                            <label>Email Address</label>
                                            <div className='cs-input-box'>
                                                <input type='email' maxlength="10" placeholder='As per your bank' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-6'>
                                        <div className='cs-form-input'>
                                            <label>Mobile Number</label>
                                            <div className='cs-input-box'>
                                                <input type='text' placeholder='As per your bank' />
                                                <span className='disc'>0/10 Digits</span>
                                                <span className='note'>Note: Please Use the Mobile Number Registered with your Credit Card/Loan account</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-check cs-check-section">
                                            <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
                                            <label className="form-check-label cs-check-label" for="flexCheckChecked">I hereby appoint Referloan as my authorised representative to receive my credit information from Cibil / Equifax / Experian / CRIF Highmark (bureau).</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='whatsaap-row'>
                                    <div className='whats-content'>
                                        <i className="fab fa-whatsapp"></i> <span className='whats-text'>Get regular Credit Report updates via Whatsapp</span>
                                    </div>
                                    <div className="tg-list-item">
                                        <input className="tgl tgl-light" id="cb1" type="checkbox" />
                                        <label className="tgl-btn" for="cb1"></label>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="feature-four__top-btn-box cs-btn-box">
                                        <button className="thm-btn feature-four__top-btn cs-btn" type="submit">Get Free Credit Report</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='document-secure-box'>
                        <div className='secure-box'>
                            <Image src ='/images/icon/whiteIcon/dont-share.webp' alt = "Don't share" width={32} height={32} loading='lazy' />
                            <span className='secure-text'>Your Personal Information is 100% secured with us. We do not share your data with any third party.</span>
                        </div>
                </div>
                </div>
               
            </section>

            <section className='whats-cs-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12'>
                            <div className='whats-section-container'>
                                <h2>Referloan Credit Score</h2>
                                <p>
                                    Wondering why your Credit Card or Loan Application is getting rejected multiple times? Well,
                                    the answer might be your negligence toward your Credit Score. If you want to brighten your
                                    chance of getting your Loan or Credit Card Applications approved in one go or just want to
                                    build your credit score the right way - <b>ReferLoan’s Credit Score Calculator</b> is your way to go!!

                                </p>
                                <div className="feature-four__top-btn-box cs-btn-box"><button className="thm-btn feature-four__top-btn cs-btn" type="submit">Credit Report</button></div>
                            </div>
                        </div>
                        <div className='col-md-1'></div>
                        <div className='col-lg-5 col-md-12'>
                            <div className='csd-what-image-box'>
                                <Image src='/images/csd.webp' alt="Credit Score" height={600} width={450} loading='lazy' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>






            <section className='cs-emicalculator'>
                <div className="check-credit-box-out">
                    <div className="check-credit eni-calculator">
                        <div className='container'>
                            <div className="check-credit-card">
                                <Image src="/images/emi-cal-home.webp" alt="Emi-calculator" width={118} height={100} loading='lazy' />
                                <div className="check-link-c">
                                    <h4>EMI Calculators</h4>
                                    <div className="cibil-ul">
                                        <p>Find out exactly how much you need to pay for your next purchase</p>
                                    </div>
                                </div>
                                <div className="feature-four__top-btn-box financial-btn"><a className="thm-btn feature-four__top-btn" href="/calculator/emi-calculator" type="submit">Evaluate Now</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='cs-feature-section'>
                <div className='container'>
                    <div className='row scf-row'>
                        <div className='col-12'>
                            <div className='scf-heading-box'>
                                <h2>Perks of Using ReferLoan’s Credit Score Calculator </h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='cs-flex-card'>
                                <div className='cs-feture-card-box'>
                                    <div className='cs-feature-card'>
                                        <Image src='/images/icon/cs/approval.webp' alt="Quick Loan " height={64} width={64} loading='lazy'/>
                                        <div className='content-cs'>
                                            <h4>Quick Loan Approvals</h4>
                                            <p>Healthy Credit Score can help you bag quick and easy Loan Approvals</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='cs-feture-card-box'>
                                    <div className='cs-feature-card'>
                                        <Image src='/images/icon/cs/finance.webp' alt = "Priority"height={64} width={64} loading='lazy'/>
                                        <div className='content-cs'>
                                            <h4>Priority Loan Benefits</h4>
                                            <p>Not just quick approvals but a good Credit History can customize better interest rates and repayment tenure</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='cs-feture-card-box'>
                                    <div className='cs-feature-card'>
                                        <Image src='/images/icon/cs/Cibil-score.webp' alt ="Higher Credit "height={64} width={64} loading='lazy'/>
                                        <div className='content-cs'>
                                            <h4>Higher Credit Limit</h4>
                                            <p>A healthy credit limit can help you rope in higher credit limits in your loan process </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-12 cs-wrap-img'>
                            <div className='cs-feature-img'>
                                <Image src='/images/cs-feature.webp' alt="Benefits" height={500} width={400} loading='lazy'/>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div className='cs-flex-card'>
                                <div className='cs-feture-card-box'>
                                    <div className='cs-feature-card'>
                                        <Image src='/images/icon/cs/analytics.webp'  alt ="Analytic "height={64} width={64} loading='lazy'/>
                                        <div className='content-cs'>
                                            <h4>Manage Your Finances </h4>
                                            <p>Having a good credit score can help you make mindful decisions when it comes to finances</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='cs-feture-card-box'>
                                    <div className='cs-feature-card'>
                                        <Image src='/images/icon/cs/no-fee.webp' alt= "No Charges" height={64} width={64} loading='lazy'/>
                                        <div className='content-cs'>
                                            <h4>No Charges </h4>
                                            <p>The Best Part? Pay No charges to check your credit score</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='cs-feture-card-box'>
                                    <div className='cs-feature-card'>
                                        <Image src='/images/icon/cs/loan-cs.webp' alt = "Quick & Acccute" height={64} width={64} loading='lazy'/>
                                        <div className='content-cs'>
                                            <h4>Quick and Accurate </h4>
                                            <p>Get your Credit History Report within seconds without any room for error</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className='cs-best-offer'>
                <BestOffer />
            </section>

            <section className="faq-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <LeaveQuestion />
                        </div>
                        <div className="col-md-12">
                            <div className="col-md-12">
                                <div className="faqSetion cs-faq">
                                    <div className="faq_row">

                                        <div className="accordion faqAccordion" id="accordionExample">
                                            <div className="accordion-item my-accourdian-section ">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Why is a PAN card needed in order to check your credit score?
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        The PAN card is necessary to appropriately calculate the person's credit score.
                                                        The credit score can also be obtained by using other valid Proof of Identity (PoI)
                                                        in place of the PAN card. The PoI helps in identifying individuals in the database.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item my-accourdian-section ">
                                                <h2 className="accordion-header" id="headingtwo">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwo" aria-expanded="true" aria-controls="collapseOne">
                                                        Can inquiries on credit scores impact the score?
                                                    </button>
                                                </h2>
                                                <div id="collapsetwo" className="accordion-collapse collapse" aria-labelledby="headingtwo" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        No, the inquiry won't have an impact on your credit score. Your credit score may be
                                                        slightly impacted when you apply for a loan or credit card, but not when you check your credit score.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item my-accourdian-section ">
                                                <h2 className="accordion-header" id="heading3">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapseOne">
                                                        Is there a limitation on how many times you can access your credit score?
                                                    </button>
                                                </h2>
                                                <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        The ability to check your credit score is not restricted. You are free to check your credit score as much as time you wish.
                                                        The credit score inquiry is regarded as a soft check because only hard checks have the power to lower your credit score.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item my-accourdian-section ">
                                                <h2 className="accordion-header" id="heading4">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapseOne">
                                                        How do credit scores change?
                                                    </button>
                                                </h2>
                                                <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        The credit score is influenced by changes to the credit report; if and when these changes are made,
                                                        the credit score will change based on whether they have a positive or negative effect.
                                                        For instance, your credit record and score will be impacted, when you apply for
                                                        a credit card or loan and make payments on the credit.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item my-accourdian-section ">
                                                <h2 className="accordion-header" id="heading5">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapseOne">
                                                        Is there any charge to use ReferLoan’s Credit Score Calculator?
                                                    </button>
                                                </h2>
                                                <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        No, you won’t have to pay any charges to use ReferLoan’s Credit Score Calculator
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
        </>
    )
}

export default CreditScore