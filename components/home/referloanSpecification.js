import Typed from 'react-typed';
import dynamic from 'next/dynamic'
import Image from 'next/image'
const VideoPopup = dynamic(() => import('./videopopup'),
    {
        // loading: () => <Loader />,
    })
const ReferloanSpecification = ({ status }) => {
    return (
        <>
            <section className="what-section" id='referloanSpecificationSection'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="why-referloan-content">
                                <h1 className="why-referloan-heading new-why-refer"><span>One India, </span>  <span>One Platform,</span>  <span>Endless Possibilities</span></h1>
                                <div className="type-text">
                                    <div>
                                        <Typed
                                            strings={[
                                                "Tired of Searching for Multiple Products at Multiple Platforms?",
                                                "Looking for a Wide Variety of Financial Products on a Single Platform?",
                                                "Want to Earn on Your Products?",
                                                "Want to Earn on Every Reference?",
                                            ]}
                                            typeSpeed={40}
                                            backSpeed={50}
                                            smartBackspace
                                            showCursor
                                            cursorChar="|"
                                            span="placeholder"
                                            loop >
                                            <span className="type refer-heading new-type"></span>
                                        </Typed>
                                    </div>
                                </div>

                                <div className="row mt-3">

                                    <div className='col-md-6'>
                                        <div className="boxCard">
                                            <div className="content">
                                                <div className="icon">
                                                    <Image src="/images/icon/pp.svg" height={40} width={40} loading='lazy' alt="paperless" />
                                                </div>
                                                <div className="text">
                                                    <p>100% Paperless Process</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 boxCard-spec'>
                                        <div className="boxCard">
                                            <div className="content">
                                                <div className="icon">
                                                    <Image src="/images/icon/md.svg" height={40} width={40} alt="min doc" />
                                                </div>
                                                <div className="text">
                                                    <p>Minimal Documentation</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 card-bot-spec'>
                                        <div className="boxCard">
                                            <div className="content">
                                                <div className="icon">
                                                    <Image src="/images/icon/ssp.webp" height={40} width={40} loading='lazy' alt="Secure Process" />
                                                </div>
                                                <div className="text">
                                                    <p>Simple &amp; Secure Process</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 card-bot-spec'>
                                        <div className="boxCard" >
                                            <div className="content">
                                                <div className="icon">
                                                    <Image src="/images/icon/cs.webp" height={40} width={40} loading='lazy' alt="Customer Support" />
                                                </div>
                                                <div className="text">
                                                    <p>24/7 Customer Support</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="why-referloan-content">
                                <div className="why-list-content">
                                    <h2>All Your Financial Solutions Served on a Single Platform!</h2>
                                    <div className="why-about-ul">
                                        <ul>
                                            <li key="physical-digital"><span className="why-list-check"></span>A Physical+Digital Fintech Platform</li>
                                            <li key="industry-experts"><span className="why-list-check"></span>Assistance from Industry Experts</li>
                                            <li key="real-time-tracking"><span className="why-list-check"></span>Real-Time Tracking</li>
                                        </ul>
                                        <ul>
                                            <li key="product-recommendations"><span className="why-list-check"></span>Customized Product Recommendations</li>
                                            <li key="financial-tools"><span className="why-list-check"></span>Financial Tools to Guide You Better</li>
                                            <li key="data-safety"><span className="why-list-check"></span>Data Safety and Transparency</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <VideoPopup />

        </>
    )
}

export default ReferloanSpecification