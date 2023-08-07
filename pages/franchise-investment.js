
import Image from "next/image"
import { useEffect } from "react";
import { useState } from "react";
import CallbackForm from "../components/page/callbackForm";
function FranchiseInquiry() {
    const [secondSection, setSecondSection] = useState(false);
    const [thirdSection, setThirdSection] = useState(false);
    const [checkFranchise, setCheckFranchise] = useState(false);
    const [fourthSection, setFourthSection] = useState(false);
    const [fivthSection, setFivthSection] = useState(false);
    const [sixSection, setSixSection] = useState(false);
    const [seventhSection, setSeventhSection] = useState(false);
    const [eightSection, setEightSection] = useState(false);


    useEffect(() => {
        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const targetId = entry.target.id;
                    switch (targetId) {
                        case 'secondSection':
                            setSecondSection(true);
                            break;
                        case 'thirdSection':
                            setThirdSection(true);
                            break;
                        case 'check-franchise':
                            setCheckFranchise(true);
                            break;
                        case 'fourthSection':
                            setFourthSection(true);
                            break;
                        case 'fivthSection':
                            setFivthSection(true);
                            break;
                        case 'sixSection':
                            setSixSection(true);
                            break;
                        case 'seventhSection':
                            setSeventhSection(true);
                            break;
                        case 'eightSection':
                            setEightSection(true);
                            break;
                        default:
                            break;
                    }
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observerRef = new IntersectionObserver(handleIntersection, observerOptions);

        const observeElement = (elementId) => {
            const targetElement = document.getElementById(elementId);
            if (targetElement) {
                observerRef.observe(targetElement);
            }
        };

        observeElement('secondSection');
        observeElement('thirdSection');
        observeElement('check-franchise');
        observeElement('fourthSection');
        observeElement('fivthSection');
        observeElement('sixSection');
        observeElement('seventhSection');
        observeElement('eightSection');

        return () => {
            observerRef.disconnect();
        };
    }, []);

    return (
        <>
            <section className="inner-hero-banner card-page">
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="in-hero-content-box">
                                <div className="inner-text">
                                    <div className="hero-anim">
                                        <Image src="/images/debit-card.png" height={20} width={20} />
                                        <p><span className="circle-h"></span> Explore Your Options</p>
                                    </div>
                                    <h2 className="in-banner-heading">
                                        Franchise <b>Partner</b>
                                    </h2>
                                    <h5 className="h-subheading">Let's start with something Big.</h5>
                                    <p className="inb-subheading">
                                        ReferLoan introduced a franchise model which allows
                                        you to grow your business at zero investment and risk-free life.
                                    </p>
                                    <div className="hero-btn-box">
                                        <div className="feature-four__top-btn-box">
                                            <a href="#check-franchise" className="lq-toggle-btn thm-btn feature-four__top-btn">Partner</a>
                                        </div>
                                        <div className="leave-question partner-form">
                                            <div className="lq-heading-box">
                                                <Image src="/icon/Cards-feature/faq.png" width={600} height={490} />
                                                <h2>Get Partnership</h2>
                                            </div>
                                            <form className="lq-form" id="lq-form">
                                                <div className="input-wrapper form-group">
                                                    <input type="text" id="name" required />
                                                    <label htmlFor="user">Your Name</label>
                                                </div>
                                                <div className="input-wrapper form-group">
                                                    <input type="emial" id="emial" required />
                                                    <label htmlFor="user">Your Email</label>
                                                </div>
                                                <div className="input-wrapper form-group">
                                                    <input type="tel" id="phone" required />
                                                    <label htmlFor="user">Your Phone</label>
                                                </div>
                                                <div className="success-box">
                                                    <p className="s-title">
                                                        Our Customer Support will Contact you soon...
                                                    </p>
                                                </div>
                                                <a href="#check-franchise" type="submit" className="btn thm-btn feature-four__top-btn">Get
                                                    Partnership</a>
                                            </form>
                                        </div>
                                        {/* <div className="play-btn">
                                            <a id="play-video" className="video-play-button" href="#" data-bs-toggle="modal"
                                                data-bs-target="#how-to-play" aria-label="Play Video">
                                                <span aria-hidden="true"></span>
                                            </a>
                                            <span className="htp">How To Apply</span>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 in-hBanner-col">
                            <div className="in-hBanner franchaise-banner-image">
                                <Image src="/images/partnerbanner.png" height={490} width={600} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ourp-section" id="secondSection">
                {
                    secondSection == true && <div className="container">
                        <div className="row counter-row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="counter-container">
                                    <div className="counter" data-target="345">345</div>
                                    <div className="wdr"></div>
                                    <span>Financial Products</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="counter-container">
                                    <div className="counter" data-target="175">175</div>
                                    <div className="wdr"></div>
                                    <span>Banks/NBFCs tie-ups</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="counter-container">
                                    <div className="counter" data-target="40">40</div>
                                    <div className="wdr"></div>
                                    <span>Franchise Openings</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">


                                <div className="counter-container">
                                    <div className="counter" data-target="100">PAN</div>
                                    <div className="wdr"></div>
                                    <span>India Presence</span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </section>
            <section className="what-section" id="thirdSection">
                {
                    thirdSection && <div className="container">
                        <div className="row what-first">
                            <div className="col-lg-6 col-md-12">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="what-car-section what-car-section-1">
                                            <div className="what-card light-yellow">
                                                <div className="what-card-in">
                                                    <div className="wc-img-box">
                                                        <Image src="/images/icon/garanty.png" height={52} width={52} loading="lazy" alt="quarranty" /></div>
                                                    <div className="wc-content">
                                                        <h4>Guarantee</h4>
                                                        <p> With our association you will be having high returns, guaranteed</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="what-card light-pink">
                                                <div className="what-card-in">
                                                    <div className="wc-img-box">
                                                        <Image src="/images/icon/speed.png" height={52} width={52} loading="lazy" alt="speed" /></div>
                                                    <div className="wc-content">
                                                        <h4>No-Risk</h4>
                                                        <p>Without any fear of losing something, you can earn big and get a stable business too. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="what-car-section what-car-section-2">
                                            <div className="what-card light-blue">
                                                <div className="what-card-in">
                                                    <div className="wc-img-box"><Image src="/images/icon/reliability.png" height={52} width={52} loading="lazy" alt="reliability" />
                                                    </div>
                                                    <div className="wc-content">
                                                        <h4>Reliability</h4>
                                                        <p>Connected with  175+ banks and NBFCs along with 345+ Financial Verticals.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="what-card light-green">
                                                <div className="what-card-in">
                                                    <div className="wc-img-box">
                                                        <Image src="/images/icon/experience.png" height={52} width={52} loading="lazy" alt="experience" />
                                                    </div>
                                                    <div className="wc-content">
                                                        <h4>Experience</h4>
                                                        <p>We have got years of industry expertise and experience, that you can certainly count on.  </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="what-heading">
                                    <Image src="/images/icon/Cards-feature/Artboard 1 copy 23.png" height={40} width={40} loading="lazy" alt="why choose us" />
                                    <span className="sub-heaidng">The Breakthrough You Have Been Waiting For!</span>
                                    <h2 className="">Why people <b>choose us</b></h2>
                                    <div className="wdr"></div>
                                    <p>
                                        ReferLoan is a leading fintech company with more than 175+ banks and NBFCs along with 345+ Financial Verticals.
                                        Get a Free ReferLoan Franchise and become your own boss – with ReferLoan Franchise. Our products are for everyone and 1000s of people seek –
                                        loans, Credit cards, Insurance, and Investments each day, so your business is not going in the wrong direction anytime soon.
                                    </p>
                                </div>

                                <div className="why-choose-img-box">
                                    <Image src="/images/partner-why.png" height={274} width={505} loading="lazy" alt="partner" />
                                </div>
                            </div>

                        </div>
                    </div>
                }

            </section>
            <section className="franchise-form-secrtion" id="check-franchise">
                {
                    checkFranchise && <div className="container">
                        <div className="row franchise-page-row">
                            <div className="col-lg-5 col-md-6">
                                <CallbackForm />
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="get-parner-content">
                                    <h3>Waiting for That One <br />
                                        <b>BIG Opportunity?</b></h3>
                                    <span>Your wait is over because ReferLoan Franchise Model is Here</span>
                                    <div className="detail-list">
                                        <ul className="detail-ul detail-ul-1">
                                            <li>40+ Franchise Openings</li>
                                            <li>Zero Investment</li>
                                            <li>Get Returns Without Any Risk</li>
                                            <li>Full Digital Trainings of Products</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </section>
            <section className="become-partner-section" id="fourthSection">
                {
                    fourthSection && <div className="become-container container">
                        <div className="bps-top-section">
                            <div className="title-img">
                                <Image src="/images/icon/meet.png" height={71} width={71} loading="lazy" alt="meet" /></div>
                            <div className="bps-heading-box">
                                <h2 className="bps-heading"> Do You want to Become Entrepreneur ?</h2>
                                <span className="bps-sub-heading">Kickstart a New Journey to a Secure Future!</span>
                                <div className="wdr"></div>
                                <p>
                                    Most people want to start working for themselves and become their own boss.
                                    Some want to make more money, while some want freedom. Whatever your reasons are, there is a wide range
                                    of choices but one of the smartest investments you could make is by associating yourself with ReferLoan Franchise.
                                </p>
                            </div>
                        </div>
                        <div className="partner-ul-box">
                            <ul className="partner-ul">

                                <li className="prli">
                                    <div className="li-dots"></div>

                                    <div className="ul-div">
                                        <div className="ul-div-in">
                                            <div className="ul-img">
                                                <Image src="/images/entrepreneur-img.png" height={80} width={103} loading="lazy" alt="Entrepreneur" />
                                            </div>
                                            <div className="content-ul-div">
                                                <h3>A successful entrepreneur?</h3>
                                                <p>
                                                    We get many ideas and innovations every day to become successful entrepreneurs and also have a dream to do so, isn’t it?
                                                </p>
                                                <a href="" className="ul-div-link">learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="prli">
                                    <div className="li-dots"></div>

                                    <div className="ul-div">
                                        <div className="ul-div-in">
                                            <div className="ul-img">
                                                <Image src="/images/boss-img.png" height={80} width={104} loading="lazy" alt="own boss" />
                                            </div>
                                            <div className="content-ul-div">
                                                <h3>Become your own Boss?</h3>
                                                <p>
                                                    Work on your flexible timings without any pressure from anyone because you are the boss of your own business
                                                </p>
                                                <a href="" className="ul-div-link">learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="prli">
                                    <div className="li-dots"></div>

                                    <div className="ul-div">
                                        <div className="ul-div-in">
                                            <div className="ul-img">
                                                <Image src="/images/earn-money.png" height={80} width={90} loading="lazy" alt="earn money" />
                                            </div>
                                            <div className="content-ul-div">
                                                <h3>Earn huge money</h3>
                                                <p>
                                                    As many startups need to invest at first and then after the successful
                                                    setup, you start getting profit but not anymore with the ReferLoan franchise model.
                                                </p>
                                                <a href="" className="ul-div-link">learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="prli">
                                    <div className="li-dots"></div>

                                    <div className="ul-div">
                                        <div className="ul-div-in">
                                            <div className="ul-img">
                                                <Image src="/images/growing-img.png" height={80} width={132} loading="lazy" alt="grow" />
                                            </div>
                                            <div className="content-ul-div">
                                                <h3>Growing and Stressful life</h3>
                                                <p>
                                                    Everyone wants to grow their business to the next level with easy and calming life.
                                                </p>
                                                <a href="" className="ul-div-link">learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                }

            </section>
            <section className="card-section" id="fivthSection">

                {
                    fivthSection && <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="have-money-card">
                                    <div className="dhm-dot"></div>
                                    <Image src="/images/no-money.png" alt="dhm" className="dhm-money" height={201} width={194} loading="lazy" />
                                    <div className="wdr-dhm"></div>
                                    <div className="dhm-content">
                                        <h2>Don’t Have Money to invest in your business?</h2>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem ipsa optio exercitationem in cupiditate ipsum quidem ab, accusantium qui commodi deserunt at est a mollitia, provident tenetur beatae, doloremque hic.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="have-money-card">
                                    <div className="dhm-dot"></div>
                                    <Image src="/images/risk-img.png" className="dhm-money" height={201} width={194} loading="lazy" alt="risk" />
                                    <div className="wdr-dhm"></div>
                                    <div className="dhm-content">
                                        <h2>Afraid of high risk of business failure</h2>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem ipsa optio exercitationem in cupiditate ipsum quidem ab, accusantium qui commodi deserunt at est a mollitia, provident tenetur beatae, doloremque hic.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </section>
            <section className="fra-benefits-section" id="sixSection">
                {
                    sixSection && <div className="container">
                        <div className="bps-top-section">
                            <div className="title-img">
                                <Image src="/images/icon/meet.png" height={71} width={71} loading="lazy" alt="meet" /></div>
                            <div className="bps-heading-box">
                                <h2 className="bps-heading">get ReferLoan Franchise</h2>
                                <span className="bps-sub-heading">Yes, this is the truth and to get ReferLoan Franchise you just need</span>
                                <div className="wdr"></div>
                            </div>
                        </div>
                        <div className="row fra-bene-row">
                            <div className="col-12 col-lg-6">
                                <div className="img-box">
                                    <Image src="/images/frPartner.png" height={480} width={480} loading="lazy" alt="partnership" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="franchise-bene">
                                    <ul className="franchise-bene-ul">
                                        <li>Office with a minimum of 100 sq. ft.</li>
                                        <li>Team of 5 to 20 persons.</li>
                                        <li>Existing DSA running a business in 2 - 3 Verticals.</li>
                                        <li>Minimal computer knowledge of e-mail and Excel.</li>
                                        <li>Bankers who want to start their own business.</li>
                                        <li>Professionals</li>
                                        <li>Chartered Accountant .</li>
                                        <li>Company secretary .</li>
                                        <li>Cost and work accountant .</li>
                                        <li>Self-employed .</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </section>
            <section className="mobile-section" id="seventhSection">
                {
                    seventhSection && <div className="container">
                        <div className="m-row">
                            <div className="mobile-content">
                                <div className="heaidng-mobile">
                                    <h2>
                                        Zero Investment
                                        <br />
                                        <b>High Growth</b>
                                    </h2>
                                    <div className="feature-four__top-btn-box">
                                        <a href="#check-franchise" className="thm-btn feature-four__top-btn">Partner</a>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-img">
                                <Image src="/images/highrish.png" height={408} width={304} loading="lazy" alt="mobile" />
                            </div>
                        </div>
                    </div>
                }

            </section>
            <section className="fra-benefits-section" id="eightSection">
                {
                    eightSection && <div className="container">
                        <div className="bps-top-section">
                            <div className="title-img">
                                <Image src="/images/icon/meet.png" height={71} width={71} loading="lazy" alt="meet" /></div>
                            <div className="bps-heading-box">
                                <h2 className="bps-heading">ReferLoan Franchise Benefits</h2>
                                <span className="bps-sub-heading">The REFERLOAN FRANCHISE MODEL is here for you with HUGE and UNLIMITED Benefits.</span>
                                <div className="wdr"></div>
                            </div>
                        </div>
                        <div className="row fra-bene-row">

                            <div className="col-12 col-lg-6">
                                <div className="franchise-bene">
                                    <ul className="franchise-bene-ul">
                                        <li> Be your own boss</li>
                                        <li> Less operating cost with a higher growth rate.</li>
                                        <li> Rapid expansion with brand recognition.</li>
                                        <li> Connect with a huge marketplace.</li>
                                        <li> Connect directly all financial products and Banks/NBFCs.</li>
                                        <li> Start your business from the first day.</li>
                                        <li> Full digital training of products.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="img-box">
                                    <Image src="/images/knowledge-banner.png" height={490} width={600} loading="lazy" alt="knowledge banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </section>
        </>
    )

}
export default FranchiseInquiry