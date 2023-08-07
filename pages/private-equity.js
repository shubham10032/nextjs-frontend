import React, { useState } from "react";
import PrivateEquityFormButton from "./private-equity-form";
import Image from "next/image";
import Link from "next/link";
const privateEquity = () => {



    return (
        <>

            <section className="associate-page-main privateEquity">
                <section className="associate-hero-section associate-hero1-section ">
                    <div className="container">
                        <div className="associate-content">
                            <div className="associate-row">
                                <div className="associate-content-box">
                                    <div className="associate-content-box-top associate-content-top ">
                                        <h1>Fund Your Business <br /><span>with Prominent Investors!!</span></h1>
                                    </div>
                                    <div className="asso-btn">
                                        <div className="feature-four__top-btn-box">
                                            <Link href ="/private-equity-form">
                                                <button className="thm-btn feature-four__top-btn" aria-label="submit"
                                                    type="submit" >Get
                                                    Apply Now
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="associate-image-hero">
                                    <span><Image src="/images/privateindian.png" width={314} height={300} loading="lazy" alt="Private Loan" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <PrivateEquityForm /> */}

                <section className="associates-form-section">
                    <div className="container">
                        <div className="associates-form-box">
                            <div className="associates-form ass-fom-wrap">
                                <h2 className="associate-head">Major Types of Funding for Start-Ups</h2>
                                <div className="ass-img-col">
                                    <ul className="equity-fund">
                                        <li>
                                            <Link href="#" >
                                                <a>
                                                    <div className="pri-icon-img">
                                                        <div className="pri-color-img">
                                                            <Image src="/images/icon/private/eguity-fin.webp" height={32} width={32} alt="Equity Financing" loading='lazy' />
                                                        </div>
                                                    </div>
                                                    <div className="private-icon-txt">Equity Financing</div>
                                                    <p>In this method of raising capital, the company sells a portion of its equity to market investors to receive capital support in return. </p>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" >
                                                <a>
                                                    <div className="pri-icon-img">
                                                        <div className="pri-color-img">
                                                            <Image src="/images/icon/private/debt-fin.webp" height={32} width={32} alt="Debt Financing" loading='lazy' />
                                                        </div>
                                                    </div>
                                                    <div className="private-icon-txt">Debt Financing</div>
                                                    <p>In this method of Financing, the company raises funds by borrowing money from Banks and NBFCs to address their business needs. </p>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" >
                                                <a>
                                                    <div className="pri-icon-img">
                                                        <div className="pri-color-img">
                                                            <Image src="/images/icon/private/grant.webp" height={32} width={32} alt="grants" loading='lazy' />
                                                        </div>
                                                    </div>
                                                    <div className="private-icon-txt">Grants</div>
                                                    <p>Grants are sorts of awards or concessions that are given by the Government, foundations, trusts, or corporations to a company to fulfill their business goals.</p>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="private-insu pt-5  pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="opportunity-heading-box pb-3">
                                <div className="oppertunity-title" style={{ textAlign: 'center' }}>Type of Private Equity </div>
                            </div>
                        </div>
                        <div className="insurance-list-box">
                            <div className="insurance-list-in">
                                <ul className="insurance-list">
                                    <li className="insurance-item">
                                        <a href="#" className="insurance-link-box">
                                            <div className="insurance-img-box">
                                                <Image src="/images/icon/private/fdi.png" height={60} width={70} className="insurance-img" alt="Foreign Direct Investment" />
                                            </div>
                                            <div className="insurance-title">
                                                <h5>Foreign Direct Investment</h5>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="insurance-item">
                                        <a href="#" className="insurance-link-box">
                                            <div className="insurance-img-box">
                                                <Image src="/images/icon/private/preferantial.png"height={70} width={67} className="insurance-img" alt="Preferential Shares" />
                                            </div>
                                            <div className="insurance-title">
                                                <h5>Preferential Shares</h5>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="insurance-item">
                                        <a href="#" className="insurance-link-box">
                                            <div className="insurance-img-box">
                                                <Image src="/images/icon/private/ncd.png"height={70} width={70} class="insurance-img" alt="Non-Convertible Debentures" />
                                            </div>
                                            <div className="insurance-title">
                                                <h5>Non-Convertible Debentures</h5>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="insurance-item">
                                        <a href="#" className="insurance-link-box">
                                            <div className="insurance-img-box">
                                                <Image src="/images/icon/private/ccd.png"height={70} width={70}  className="insurance-img" alt="Compulsory Convertible Debenture" />
                                            </div>
                                            <div className="insurance-title">
                                                <h5>Compulsory Convertible Debenture</h5>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="insurance-item">
                                        <a href="#" className="insurance-link-box">
                                            <div className="insurance-img-box">
                                                <Image src="/images/icon/private/equityshare.png"height={70} width={73}  className="insurance-img" alt="Equity Shares" />
                                            </div>
                                            <div className="insurance-title">
                                                <h5>Equity Shares</h5>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="insurance-item">
                                        <a href="#" className="insurance-link-box">
                                            <div className="insurance-img-box">
                                                <Image src="/images/icon/private/venture.png" height={60} width={70}  className="insurance-img" alt="Term Life Plan" />
                                            </div>
                                            <div className="insurance-title">
                                                <h5>Venture Capital</h5>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="insurance-item">
                                        <a href="#" className="insurance-link-box">
                                            <div className="insurance-img-box">
                                                <Image src="/images/icon/private/growth.png" height={70} width={70}  className="insurance-img" alt="Growth Equity" />
                                            </div>
                                            <div className="insurance-title">
                                                <h5>Growth Equity</h5>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="insurance-item">
                                        <a href="#" className="insurance-link-box">
                                            <div className="insurance-img-box">
                                                <Image src="/images/icon/private/buyout.png" height={70} width={70}  className="insurance-img" alt="Distressed Private Equity" />
                                            </div>
                                            <div className="insurance-title">
                                                <h5>Distressed Private Equity</h5>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ass_equity">
                    <div className="container">
                        <div className="associates-form-box ">
                            <div className="associates-form">
                                <div>
                                    <h4 className="oppertunity-title">Required Documents </h4>
                                </div>
                                <div className="row mt-4 mb-3">
                                    <div className="col-md-4">
                                        <div className="eqip-main-ad-list">
                                            Investor Deck
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="eqip-main-ad-list">
                                            Financial Projections
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="eqip-main-ad-list">
                                            Valuation Report
                                        </div>
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

                                <div className="oppertunity-title">What are the Benefits of Getting Private Equity for Your Business?</div>
                                <div className="why-about-ul equity_border">
                                    <ul>
                                        <li><span className="why-list-equity"></span>Capital Infusion</li>
                                        <li><span className="why-list-equity"></span>Access to Networks and Expertise </li>
                                        <li><span className="why-list-equity"></span>Validation and Credibility </li>
                                        <li><span className="why-list-equity"></span>Long-Term Partnerships with Renown Names</li>
                                        <li><span className="why-list-equity"></span>Operational Supports</li>
                                        <li><span className="why-list-equity"></span>Financial Stability</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 list-eli">
                                <div className="why-list-content">
                                    <div className="oppertunity-title">Who Is Eligible to Get Investment</div>
                                    <div className="why-about-ul equity_border">
                                        <ul>
                                            <li><span className="why-list-equity"></span>The company must be in the later stages of development, beyond the startup phase</li>
                                            <li><span className="why-list-equity"></span>The company should have a compelling growth story and a clear market strategy</li>
                                            <li><span className="why-list-equity"></span>The Company should demonstrate a track record of financial performance and positive cash flow</li>
                                            <li><span className="why-list-equity"></span>Applicants must have well-prepared financial statements, including income statements, balance sheets, and cash flow statements.</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="eqip_note">Don't miss out on the opportunity to be part of the private equity revolution. Unlock the potential for high returns and diversify your investment portfolio with ReferLoan’s Private Equity Service.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="EquityEligibility pt-5 pb-5" style={{ background: '#eefaf970' }}>
                    <div className="container">
                        <div className="row">
                            <div className="opportunity-heading-box pb-3">
                                <div className="oppertunity-title" style={{ textAlign: 'center' }}>Stages of Start-Ups with Suitable Funding </div>
                            </div>
                            <div className="row">
                          
                            <div className="col-md-6 idea-topic ">
                                    <div className="oppor-stage">
                                        <div className="oppor-stage-head">VALIDATION</div>
                                        {/* <div className="oppor-main head">Description</div> */}
                                        <p>After the initial idea has been validated by the team, a startup needs to
                                            validate the potential demand for its product or service, after which comes
                                            the big market launch. This stage is also called the seed stage.</p>
                                        <div className="oppor-stage-ul">
                                            <div className="oppor-stage-ul-head">Suitable Fundings</div>
                                            <ul>
                                                <li>Incubators</li>
                                                <li>Government Loan Schemes</li>
                                                <li>Angel Inveslirs</li>
                                                <li>Crowdfunding</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="private-idea">
                                        <img src="/images/validation.png" alt="ideation" />
                                    </div>
                                </div>

                                <div className="col-md-6 idea-top">
                                    <div className="private-ides ">
                                        <img src="/images/private-ideation.png" alt="ideation" />
                                    </div>
                                </div>
                                <div className="col-md-6 idea-top idea-topic ">
                                    <div className="oppor-stage">
                                        <div className="oppor-stage-head">IDEATION</div>
                                        {/* <div className="oppor-main head">Description</div> */}
                                        <p>We can call this a Pre-seed stage where the business owners are just trying to
                                            bring their idea to life. The requirement of capital in this stage is generally
                                            nil to a small amount only</p>
                                        <div className="oppor-stage-ul">
                                            <div className="oppor-stage-ul-head">Suitable Fundings</div>
                                            <ul>
                                                <li>Bootstrapping/Self-financing</li>
                                                <li>Friends or Family</li>
                                                <li>Business Plans/Pitching Events</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                          
                      
                                <div className="col-md-6 idea-topic ">
                                    <div className="oppor-stage pt-5">
                                        <div className="oppor-stage-head">EARLY TRACTION</div>
                                        {/* <div className="oppor-main head">Description</div> */}
                                        <p>This is the stage where the product of the company is launched in the market,
                                            and the key performance indicators of the brand become a crucial part here.</p>
                                        <div className="oppor-stage-ul">
                                            <div className="oppor-stage-ul-head">Suitable Fundings</div>
                                            <ul>
                                                <li>Venture Capital Funds</li>
                                                <li>Banks/Non-Banking Financial</li>
                                                <li>Companies (NBFCs)</li>
                                                <li>ligel Investors</li>
                                                <li>Venture Debt Funds</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 idea-top">
                                    <div className="private-idea">
                                        <img src="/images/early-traction.png" alt="ideation" />
                                    </div>
                                </div>

                                <div className="col-md-6 idea-top">
                                    <div className="private-ides">
                                        <img src="/images/exiting-option.png" alt="ideation" />
                                    </div>
                                </div>
                                <div className="col-md-6 idea-topic ">
                                    <div className="oppor-stage pt-5">
                                        <div className="oppor-stage-head">EXITING OPTIONS</div>
                                        {/* <div className="oppor-main head">Description</div> */}
                                        <p>An exit option is a clause within a business plan that allows a company to discontinue the
                                            plan without incurring significant financial penalties.</p>
                                        <div className="oppor-stage-ul">
                                            <div className="oppor-stage-ul-head">Suitable Fundings</div>
                                            <ul>
                                                <li>Mergers & Acquisitions</li>
                                                <li>Initial Public Offering (IPO)</li>
                                                <li>Selling Shares</li>
                                                <li>Buybacks</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 idea-topic ">
                                    <div className="oppor-stage pt-5">
                                        <div className="oppor-stage-head">SCALING</div>
                                        {/* <div className="oppor-main head">Description</div> */}
                                        <p>Now this is the stage where the company is getting the right traction and
                                            market growth along with impressive revenues.</p>
                                        <div className="oppor-stage-ul">
                                            <div className="oppor-stage-ul-head">Suitable Fundings</div>
                                            <ul>
                                                <li>Venture Capital Funds</li>
                                                <li>Banks/Non-Banking Financial</li>
                                                <li>Companies (NBFCs)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 idea-top">
                                    <div className="private-idea">
                                        <img src="/images/scaling.png" alt="ideation" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                <section className="associates-form-section school-ass">
                    <div className="container">
                        <div className="associates-form-box ">
                            <div className="associates-form ass-fom-wrap">
                                <div>
                                    <h4 className="oppertunity-title">What Factors Do Investors Consider When
                                        Evaluating a Startup?</h4>
                                </div>
                                <div className="row mt-4 mb-3">
                                    <div className="col-md-4">
                                        <div className="eqip-main-ad-list">
                                            Objective and Problem-Solving
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="eqip-main-ad-list">
                                            Management & Team
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="eqip-main-ad-list">
                                            Market Landscape
                                        </div>
                                    </div>
                                    <div className="col-md-4 equip_ad_pad">
                                        <div className="eqip-main-ad-list">
                                            Scalability & Sustainability
                                        </div>
                                    </div>
                                    <div className="col-md-4 equip_ad_pad">
                                        <div className="eqip-main-ad-list">
                                            Customers & Suppliers
                                        </div>
                                    </div>
                                    <div className="col-md-4 equip_ad_pad">
                                        <div className="eqip-main-ad-list">
                                            Competitive Analysis
                                        </div>
                                    </div>
                                    <div className="col-md-4 equip_ad_pad">
                                        <div className="eqip-main-ad-list">
                                            Sales & Marketing
                                        </div>
                                    </div>
                                    <div className="col-md-4 equip_ad_pad">
                                        <div className="eqip-main-ad-list">
                                            Financial Assessment
                                        </div>
                                    </div>
                                    <div className="col-md-4 equip_ad_pad">
                                        <div className="eqip-main-ad-list">
                                            Exit Avenues
                                        </div>
                                    </div>
                                </div>

                                <p className="mt-4">
                                    <b>Now that we know about the major types of financing in the market. Let’s move
                                        to the star product that we are here to talk about: </b>
                                </p>
                            </div>
                        </div>
                    </div>

                </section>


                <section className="opportunity-con-sect">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="equipment-img-opp">
                                    <Image src="/images/Private-handshake.png" height={301} width={451} alt="equipment loan" loading="lazy" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="opportunity-content-box opportunity-content-box-box">
                                    <div className="opportunity-content-box-in">
                                        <div className="opportunity-heading-box">
                                            <h2 className="oppertunity-title">What is Private Equity?</h2>
                                        </div>
                                        <div className="oppertunity-text oppor-text">
                                            <p>Private equity is a type of funding that involves holding ownership stakes
                                                in high-profile private ventures. On the bright side, private firms are
                                                not listed on the stock market like public companies. This offers a
                                                unique opportunity for companies to rope in quality investors and receive
                                                the right Capital support. Private equity investments are generally chosen
                                                by institutional investors, high-net-worth individuals, and accredited
                                                investors who seek significant returns by funding prominent businesses.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="EquityEligibility pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="opportunity-content-equip">
                                <div className="opportunity-heading-box">
                                    <div className="oppertunity-title">Why Choose ReferLoan to Get Private Equity?</div>
                                </div>
                                <div className="eqip-in equity-eqip">
                                    <ul className="equip-box-list">
                                        <li className="equip-list">
                                            <div className="equiplist-content">
                                                Exclusive Access to High-Quality Deals
                                            </div>
                                        </li>
                                        <li className="equip-list">
                                            <div className="equiplist-content">
                                                Tailored options based on Market Research
                                            </div>
                                        </li>
                                        <li className="equip-list">
                                            <div className="equiplist-content">
                                                Expertise and Due Diligence
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="equip-box-list">
                                        <li className="equip-list">
                                            <div className="equiplist-content">
                                                Wide Range of Investors
                                            </div>
                                        </li>
                                        <li className="equip-list">
                                            <div className="equiplist-content">
                                                Market Networking
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="equip-box-list">
                                        <li className="equip-list">
                                            <div className="equiplist-content">
                                                Tailored Investor Options
                                            </div>
                                        </li>
                                        <li className="equip-list">
                                            <div className="equiplist-content">
                                                Transparent and Secure Process
                                            </div>
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
                                                    aria-expanded="false" aria-controls="flush-collapse0">What is Private Equity?

                                                </button></h2>
                                                <div id="flush-collapse0" className="accordion-collapse collapse"
                                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body" itemScope="" itemProp="acceptedAnswer"
                                                        itemType="https://schema.org/Answer">
                                                        <div>
                                                            <div itemProp="text">
                                                                <p>Private equity is a type of investment that involves holding ownership stakes in high-profile private ventures.
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
                                                    aria-expanded="false" aria-controls="flush-collapse1">What is the minimum required investment in Private Equity?</button></h2>
                                                <div id="flush-collapse1" className="accordion-collapse collapse"
                                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body" itemScope="" itemProp="acceptedAnswer"
                                                        itemType="https://schema.org/Answer">
                                                        <div>
                                                            <div itemProp="text">
                                                                <p>Investing in Private Equity requires a high barrier and asks for a hefty amount of investment to put in. The amount could start from $ 25 Million.</p>
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
                                                    What is Liquidity in Investment?

                                                </button>
                                                </h2>
                                                <div id="flush-collapse2" className="accordion-collapse collapse"
                                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body" itemScope="" itemProp="acceptedAnswer"
                                                        itemType="https://schema.org/Answer">
                                                        <div>
                                                            <div itemProp="text">
                                                                <p>In simple language, Liquidity is a term in investment that measures the ease at which an investor can get in or out of investments.

                                                                </p>
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
                                                    aria-expanded="false" aria-controls="flush-collapse3">Can I invest in Private equity funds if I am a Student?
                                                </button></h2>
                                                <div id="flush-collapse3" className="accordion-collapse collapse"
                                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body" itemScope="" itemProp="acceptedAnswer"
                                                        itemType="https://schema.org/Answer">
                                                        <div>
                                                            <div itemProp="text">
                                                                <p>No, you can’t invest in Private Equity as a student as it requires a strong experience and profile as an investor. </p>
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
                                                    aria-expanded="false" aria-controls="flush-collapse4">What are AML Regulations?</button></h2>
                                                <div id="flush-collapse4" className="accordion-collapse collapse"
                                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body" itemScope="" itemProp="acceptedAnswer"
                                                        itemType="https://schema.org/Answer">
                                                        <div>
                                                            <div itemProp="text">
                                                                <p>Adherence to anti-money laundering (AML) regulations is a document that’s mandatory to start investing in Private Equity.                                                          </p>
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

export default privateEquity