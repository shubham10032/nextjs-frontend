import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import CreditCard from './filterFormElement/CreditCard'
import Link from 'next/link'
import Slider from 'react-slick';
const PersonalLoan = dynamic(() => import('./filterFormElement/PersonalLoan'))
const BussinessLoan = dynamic(() => import('./filterFormElement/BussinessLoan'))
const LoanAgainstProperty = dynamic(() => import('./filterFormElement/LoanAgainstProperty'))
const HomeLoan = dynamic(() => import('./filterFormElement/HomeLoan'))
const LoanAgianstSecurity = dynamic(() => import('./filterFormElement/LoanAgianstSecurity'))
const AutoLoan = dynamic(() => import('./filterFormElement/AutoLoan'))
const EducationLoan = dynamic(() => import('./filterFormElement/EducationLoan'))
const MoreQuery = dynamic(() => import('./MoreQuery'))

import Image from 'next/image';

const ProductSection = ({ status }) => {
    const [screenSize, setScreenSize] = useState([0, 0]);
    useEffect(() => {
        function handleResize() {
            setScreenSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767, // Adjust the breakpoint value as per your needs
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 500, // Adjust the breakpoint value as per your needs
                settings: {
                    slidesToShow: 3,
                }
            }
        ],
        prevArrow: <button className="slick-prev slick-controls"> </button>,
        nextArrow: <button className="slick-next slick-controls"> </button>,
    };



    if (screenSize[0] >= 768) {
        return (
            <section className="best-rel-pro desktop-pro home-best-rel-pro">
                <div className="container">
                    <div className="row">
                        <div>
                            <div className="best-pro-nav">
                                <ul className="nav nav-pills" id="pills-tab" role="tablist">

                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                            aria-selected="true">
                                            <div className="best-icon-img ">
                                                <div className="color-img">
                                                    <Image src="/images/icon/newicon/card.webp" alt="credit card" height={32} width={32} loading='lazy' />
                                                </div>
                                                <div className="white-icon" >
                                                    <Image src="/images/icon/newicon/cardWhite.webp" alt="credit card apply" height={32} width={32} loading='lazy' />
                                                </div>
                                            </div>
                                            <div className="best-icon-txt">Cards</div>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation"  >
                                        <Link href="/loans/personal-loan" >
                                            <a className='nav-link'>
                                                <div className="best-icon-img">
                                                    <div className="color-img">
                                                        <Image src="/images/icon/newicon/personal.webp" height={32} width={32} alt="personal loan" loading='lazy' />
                                                    </div>
                                                    <div className="white-icon" >
                                                        <Image src="/images/icon/newicon/persoanlWhite.webp" alt="personal-loan" height={32} width={32} loading='lazy' />
                                                    </div>
                                                </div>
                                                <div className="best-icon-txt">Loan</div>
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item" role="presentation"  >
                                        <Link href="/other-product/investment" >
                                            <a className='nav-link'>
                                                <div className="best-icon-img">
                                                    <div className="color-img">
                                                        <Image src="/images/icon/newicon/investNew.png" height={32} width={32} alt="personal loan" loading='lazy' />
                                                    </div>
                                                    <div className="white-icon" >
                                                        <Image src="/images/icon/newicon/investNewWhite.png" alt="personal-loan" height={32} width={32} loading='lazy' />
                                                    </div>
                                                </div>
                                                <div className="best-icon-txt">Investment</div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item" role="presentation"  >
                                        <Link href="/private-equity" >
                                            <a className='nav-link'>
                                                <div className="best-icon-img">
                                                    <div className="color-img">
                                                        <Image src="/images/icon/newicon/privateNew.png" height={32} width={32} alt="personal loan" loading='lazy' />
                                                    </div>
                                                    <div className="white-icon" >
                                                        <Image src="/images/icon/newicon/privateNewWhite.png" alt="personal-loan" height={32} width={32} loading='lazy' />
                                                    </div>
                                                </div>
                                                <div className="best-icon-txt">Private Equity</div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item" role="presentation"  >
                                        <Link href="/other-product/insurance" >
                                            <a className='nav-link'>
                                                <div className="best-icon-img">
                                                    <div className="color-img">
                                                        <Image src="/images/icon/newicon/investNew.png" height={32} width={32} alt="personal loan" loading='lazy' />
                                                    </div>
                                                    <div className="white-icon" >
                                                        <Image src="/images/icon/newicon/investNewWhite.png" alt="personal-loan" height={32} width={32} loading='lazy' />
                                                    </div>
                                                </div>
                                                <div className="best-icon-txt">Insurance</div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-more-tab" data-bs-toggle="pill"
                                            data-bs-target="#more" type="button" role="tab" aria-controls="pills-contact"
                                            aria-selected="false">
                                            <div className="best-icon-img">
                                                <div className="color-img">
                                                    <Image src="/images/icon/newicon/more.webp" height={32} width={32} alt="other Loan" loading='lazy' />
                                                </div>
                                                <div className="white-icon" >
                                                    <Image src="/images/icon/newicon/moreWhite.webp" alt="other-Loan" height={32} width={32} loading='lazy' />
                                                </div>
                                            </div>
                                            <div className="best-icon-txt">Others</div>
                                        </button>

                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                        aria-labelledby="pills-home-tab">
                                        <CreditCard />
                                    </div>

                                    <div className="tab-pane fade" id="more" role="tabpanel">
                                        <MoreQuery />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        )
    } else {
        return (
            <section className="best-rel-pro mobile-pro home-best-rel-pro">
                <div className="container">
                    <div className="row">
                        <div>
                            <div className="best-pro-nav">
                                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                    <Slider  {...settings}>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                                aria-selected="true">
                                                <div className="best-icon-img ">
                                                    <div className="color-img">
                                                        <Image src="/images/icon/newicon/card.webp" alt="credit card" height={32} width={32} loading='lazy' />
                                                    </div>
                                                    <div className="white-icon" >
                                                        <Image src="/images/icon/newicon/cardWhite.webp" alt="credit card apply" height={32} width={32} loading='lazy' />
                                                    </div>
                                                </div>
                                                <div className="best-icon-txt">Cards</div>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation"  >
                                            <Link href="/loans/personal-loan" >
                                                <a className='nav-link'>
                                                    <div className="best-icon-img">
                                                        <div className="color-img">
                                                            <Image src="/images/icon/newicon/personal.webp" height={32} width={32} alt="personal loan" loading='lazy' />
                                                        </div>
                                                        <div className="white-icon" >
                                                            <Image src="/images/icon/newicon/persoanlWhite.webp" alt="personal-loan" height={32} width={32} loading='lazy' />
                                                        </div>
                                                    </div>
                                                    <div className="best-icon-txt">Loan</div>
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item" role="presentation"  >
                                            <Link href="/other-product/investment" >
                                                <a className='nav-link'>
                                                    <div className="best-icon-img">
                                                        <div className="color-img">
                                                            <Image src="/images/icon/newicon/investNew.png" height={32} width={32} alt="personal loan" loading='lazy' />
                                                        </div>
                                                        <div className="white-icon" >
                                                            <Image src="/images/icon/newicon/investNewWhite.png" alt="personal-loan" height={32} width={32} loading='lazy' />
                                                        </div>
                                                    </div>
                                                    <div className="best-icon-txt">Investment</div>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation"  >
                                            <Link href="/private-equity" >
                                                <a className='nav-link'>
                                                    <div className="best-icon-img">
                                                        <div className="color-img">
                                                            <Image src="/images/icon/newicon/privateNew.png" height={32} width={32} alt="personal loan" loading='lazy' />
                                                        </div>
                                                        <div className="white-icon" >
                                                            <Image src="/images/icon/newicon/privateNewWhite.png" alt="personal-loan" height={32} width={32} loading='lazy' />
                                                        </div>
                                                    </div>
                                                    <div className="best-icon-txt">Private Equity</div>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation"  >
                                            <Link href="/other-product/insurance" >
                                                <a className='nav-link'>
                                                    <div className="best-icon-img">
                                                        <div className="color-img">
                                                            <Image src="/images/icon/newicon/investNew.png" height={32} width={32} alt="personal loan" loading='lazy' />
                                                        </div>
                                                        <div className="white-icon" >
                                                            <Image src="/images/icon/newicon/investNewWhite.png" alt="personal-loan" height={32} width={32} loading='lazy' />
                                                        </div>
                                                    </div>
                                                    <div className="best-icon-txt">Insurance</div>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-more-tab" data-bs-toggle="pill"
                                                data-bs-target="#more" type="button" role="tab" aria-controls="pills-contact"
                                                aria-selected="false">
                                                <div className="best-icon-img">
                                                    <div className="color-img">
                                                        <Image src="/images/icon/newicon/more.webp" height={32} width={32} alt="other Loan" loading='lazy' />
                                                    </div>
                                                    <div className="white-icon" >
                                                        <Image src="/images/icon/newicon/moreWhite.webp" alt="other-Loan" height={32} width={32} loading='lazy' />
                                                    </div>
                                                </div>
                                                <div className="best-icon-txt">Others</div>
                                            </button>

                                        </li>
                                    </Slider>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                        aria-labelledby="pills-home-tab">
                                        <CreditCard />
                                    </div>

                                    <div className="tab-pane fade" id="more" role="tabpanel">
                                        <MoreQuery />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        )
    }

}

export default ProductSection