import Link from "next/link"

const contact = () => {
    return (
        <>
            <section className="inner-hero-banner card-page">
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="in-hero-content-box">
                                <div className="inner-text">
                                    <div className="hero-anim">
                                        <img src="/images/debit-card.png" alt="" height="20" />
                                        <p><span className="circle-h"></span> Explore Your Self</p>
                                    </div>
                                    <h2 className="in-banner-heading">
                                        Get in touch<br /><b>To get Information</b>
                                    </h2>
                                    <p className="inb-subheading" />
                                    For more query you can connect with us with a call , message or go to link of our website refer loan.
                                    <div className="hero-btn-box">
                                        <div className="feature-four__top-btn-box">
                                            <Link href="/contact" ><a className="thm-btn feature-four__top-btn">Get in Touch</a></Link>
                                        </div>
                                        {/* <div className="play-btn inner-play-btn">
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
                        <div className="col-lg-6 col-md-12">
                            <div className="in-hBanner">
                                <img src="/images/contact-banner.png" alt="" height="550" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="card-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 col-md-12 col-xl-4 col-xs-12">
                            <div className="card-con">
                                <div className="cardcon-body">
                                    <div className="cardcon-image"><img src="/images/telephone.png" width="50px" /></div>
                                    <h5 className="cardcon-title">Telephone  011-43025308</h5>
                                    <p className="cardcon-text ">Your concerns have always been our priority,
                                        reach out to us at this toll-free number for any query. Lines will be open from 10am to 7pm</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-center col-lg-4 col-sm-12 col-md-12 col-xl-4 col-xs-12">
                            <div className="card-con">
                                <div className="cardcon-body">
                                    <div className="cardcon-image"><img src="/images/whatapp.png" width="50px" /></div>
                                    <h5 className="cardcon-title">Whatsapp +91 8851654201</h5>
                                    <p className="cardcon-text">If you are not a call person, you can reach out to us with a text via
                                        WhatsApp. Our experts will be there to solve any issue</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-lg-4 col-sm-12 col-md-12 col-xl-4 col-xs-12">
                            <div className="card-con">
                                <div className="cardcon-body">
                                    <div className="cardcon-image"><img src="/images/mail.png" width="50px" /></div>
                                    <h5 className="cardcon-title">Mail us info@referloan.in</h5>
                                    <p className="cardcon-text">If you need to ask anything related to our products or any general query,
                                        you can always drop us a mail. We will reach you back!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="contact-page-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <div className="mapPnl">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14008.011571123592!2d77.2753272!3d28.6296754!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdad4ea2be03%3A0x384d07855aba73d4!2sRefer%20Loan%20Private%20Limited!5e0!3m2!1sen!2sin!4v1682407214772!5m2!1sen!2sin"
                                    width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="addressAreaWrap">
                                <div className="addressArea">
                                    <h2>Our Location</h2>
                                    <p>Address: 1/25, Lalita Park, Laxmi Nagar, New Delhi, Delhi 110092</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default contact