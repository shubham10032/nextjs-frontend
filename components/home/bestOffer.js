import Image from 'next/image';
import Link from 'next/link';
const BestOffer = ({ status }) => {
    return (
        <section className="best-offer-section" id='bestofferSection'>
            {
                status == true && <div className="container">
                    <div className="row offer-row">
                        <div className="col-lg-12 col-md-12">

                            <div className="offer-heading-box-out">
                                <div className="offer-heading-box">
                                    <p className="subhedign"> <span className="design-br"></span> <b>Offers Of The Day</b> <span className="design-br"></span></p>
                                    <h2 className="heading-offer">
                                        Bringing You the Best of Finances
                                    </h2>
                                    <p>
                                        At ReferLoan, we understand that every Individual calls for a different need.
                                        Therefore, we offer you product suggestions that are tailored
                                        right according to your need and eligibility.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='boot-col'>
                            <ul className="nav nav-pills boot-nav" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active thm-btn feature-four__top-btn" id="pills-home-tab-cr" data-bs-toggle="pill" data-bs-target="#pills-home-cr" type="button" role="tab" aria-controls="pills-home-cr" aria-selected="true">Credit Card</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link thm-btn feature-four__top-btn" id="pills-pers-tabs" data-bs-toggle="pill" data-bs-target="#pills-pers" type="button" role="tab" aria-controls="pills-pers" aria-selected="false">Personal Loan</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link thm-btn feature-four__top-btn" id="pills-hm-tabs" data-bs-toggle="pill" data-bs-target="#pills-hm" type="button" role="tab" aria-controls="pills-hm" aria-selected="false">Home Loan</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link thm-btn feature-four__top-btn" id="pills-bs-tabs" data-bs-toggle="pill" data-bs-target="#pills-bs" type="button" role="tab" aria-controls="pills-bs" aria-selected="false">Buisness Loan</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link thm-btn feature-four__top-btn" id="pills-against-loan-id-btn" data-bs-toggle="pill" data-bs-target="#pills-against-loan-id" type="button" role="tab" aria-controls="pills-against-loan-id" aria-selected="false">Loan Against Property</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link thm-btn feature-four__top-btn" id="pills-gold-l-tab" data-bs-toggle="pill" data-bs-target="#pills-gold-l" type="button" role="tab" aria-controls="pills-gold-l" aria-selected="false">Gold Loan</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home-cr" role="tabpanel" aria-labelledby="pills-home-tab-cr" tabIndex="0">
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <Link href="/credit-card/yes-bank-credit-card"><a className='card-pill-wrap '>
                                                <div className="card-pill-img">
                                                    <Image src="/images/bank/yesfin.webp" className="blog_pic" alt="Yes Bank Card" layout="responsive" width={345} height={193} loading='lazy' />
                                                </div>
                                            </a>
                                            </Link>
                                        </div>
                                        <div className='col-md-4 home-loan-col'>
                                            <Link href="/credit-card/hdfc-bank-credit-card"><a className='card-pill-wrap '>
                                                <div className="card-pill-img">
                                                    <Image src="/images/bank/hdfcfin.webp" className="blog_pic" alt="Top 5 Investments" layout="responsive" width={345} height={193} loading='lazy' />
                                                </div>
                                            </a>
                                            </Link>
                                        </div>
                                        <div className='col-md-4 home-loan-col'>
                                            <Link href='/credit-card/indusind-bank-credit-card'><a className='card-pill-wrap '>
                                                <div className="card-pill-img">
                                                    <Image src="/images/bank/indusfin.webp" className="blog_pic" alt="Indusind Credit Card" layout="responsive" width={345} height={193} loading='lazy' />
                                                </div>
                                            </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-pers" role="tabpanel" aria-labelledby="pills-pers-tab" tabIndex="0">
                                <Link href="/loans/paysense-personal-loan"><a className='card-pill-wrap '>
                                    <div className="card-pill-img">
                                        <Image src="/images/bank/personal-1.webp" className="blog_pic" alt="paysense Personal Loan" layout="responsive" width={345} height={193} loading='lazy' />
                                    </div>
                                </a>
                                </Link>
                            </div>
                            <div className="tab-pane fade" id="pills-hm" role="tabpanel" aria-labelledby="pills-hm-tab" tabIndex="0">
                                <div className='row'>
                                    <div className='col-md-4 '>
                                        <Link href="/loans/hdfc-bank-home-loan"><a className='card-pill-wrap '>
                                            <div className="card-pill-img">
                                                <Image src="/images/bank/hdfc-home-loan.webp" className="blog_pic" alt="Hdfc Home Loan" layout="responsive" width={345} height={193} loading='lazy' />
                                            </div>
                                        </a>
                                        </Link>
                                    </div>
                                    <div className='col-md-4 home-loan-col'>
                                        <Link href="/loans/bank-of-india-home-loan"><a className='card-pill-wrap '>
                                            <div className="card-pill-img">
                                                <Image src="/images/bank/home-loan-bank-of-india.webp" className="blog_pic" alt="Bank of India Home Loan" layout="responsive" width={345} height={193} loading='lazy' />
                                            </div>
                                        </a>
                                        </Link>
                                    </div>
                                    <div className='col-md-4 home-loan-col'>
                                        <Link href="/loans/kotak-bank-home-loan"><a className='card-pill-wrap '>
                                            <div className="card-pill-img">
                                                <Image src="/images/bank/kotak-home-loan.webp" className="blog_pic" alt="Kotak Home Loan" layout="responsive" width={345} height={193} loading='lazy' />
                                            </div>
                                        </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-bs" role="tabpanel" aria-labelledby="pills-bs-tab" tabIndex="0">
                                <Link href="/loans/kotak-mahindra-business-loan"><a className='card-pill-wrap '>
                                    <div className="card-pill-img">
                                        <Image src="/images/bank/businees-loan-kotak.webp" className="blog_pic" alt="Buisness Loan" layout="responsive" width={345} height={193} loading='lazy' />
                                    </div>
                                </a>
                                </Link>
                            </div>
                            <div className="tab-pane fade" id="pills-against-loan-id" role="tabpanel" aria-labelledby="pills-against-loan-id-btn" tabIndex="0">
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <Link href="/loans/bank-of-india-loan-against-property"><a className='card-pill-wrap '>
                                            <div className="card-pill-img">
                                                <Image src="/images/bank/Loan-Against-BOI.webp" className="blog_pic" alt="Loan Against BOI" layout="responsive" width={345} height={193} loading='lazy' />
                                            </div>
                                        </a>
                                        </Link>
                                    </div>
                                    <div className='col-md-4 home-loan-col'>
                                        <Link href="#"><a className='card-pill-wrap '>
                                            <div className="card-pill-img">
                                                <Image src="/images/bank/Loan-Against-Canara.webp" className="blog_pic" alt="Loan Against Canara" layout="responsive" width={345} height={193} loading='lazy' />
                                            </div>
                                        </a>
                                        </Link>
                                    </div>
                                    <div className='col-md-4 home-loan-col'>
                                        <Link href="#"><a className='card-pill-wrap '>
                                            <div className="card-pill-img">
                                                <Image src="/images/bank/Loan-Against-SBI.webp" className="blog_pic" alt="Loan Against SBI" layout="responsive" width={345} height={193} loading='lazy' />
                                            </div>
                                        </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-gold-l" role="tabpanel" aria-labelledby="pills-gold-l-tab" tabIndex="0">
                                <Link href="/apply-gold-loan"><a className='card-pill-wrap'>
                                    <div className="card-pill-img">
                                        <Image src="/images/bank/goldloan.webp" className="blog_pic" alt="Gold Loan Loan" layout="responsive" width={345} height={193} loading='lazy' />
                                    </div>
                                </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="feature-four__top-btn-box ofer-btn">
                            <Link href="/best-offers">
                                <a className="thm-btn feature-four__top-btn " aria-label='submit' type="submit">View All</a>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </section >
    )
}

export default BestOffer