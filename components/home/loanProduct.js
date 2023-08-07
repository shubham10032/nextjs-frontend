import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import CreditCard from './filterFormElement/CreditCard'
import { useRouter } from 'next/router';
import Link from 'next/link';
import Slider from 'react-slick';
import { makeUpperCase } from './../../utils'
const PersonalLoan = dynamic(() => import('./filterFormElement/PersonalLoan'))
const BussinessLoan = dynamic(() => import('./filterFormElement/BussinessLoan'))
const LoanAgainstProperty = dynamic(() => import('./filterFormElement/LoanAgainstProperty'))
const HomeLoan = dynamic(() => import('./filterFormElement/HomeLoan'))
const LoanAgianstSecurity = dynamic(() => import('./filterFormElement/LoanAgianstSecurity'))
const AutoLoan = dynamic(() => import('./filterFormElement/AutoLoan'))
const EducationLoan = dynamic(() => import('./filterFormElement/EducationLoan'))
// const MoreQuery = dynamic(() => import('./MoreQuery'))
import Image from 'next/image';

const LoanProduct = ({ status, productName }) => {

    const router = useRouter()

    let utmData = '';
    const { utm_campaign, utm_id, utm_medium, utm_source } = router.query
    if (!utm_campaign) {
        utmData = `?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=`
    } else {
        utmData = `?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_id=${utm_id}`
    }

    let pageUrl = '';
    let url = router.asPath.split('/')
    if (url.length > 2) {
        pageUrl = url[2].split('?')[0];
    } else {
        pageUrl = url[1].split('?')[0];
    }

    let pageName = makeUpperCase(pageUrl, ' ', '-')


    // console.log(pageName)

    const [screenSize, setScreenSize] = useState([0, 0]);
    useEffect(() => {
        function handleResize() {
            setScreenSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    let componentToRender;

    switch (productName) {
      case 'Personal Loan':
        componentToRender =   <PersonalLoan />;
        break;
      case 'Business Loan':
        componentToRender = <BussinessLoan />;
        break;
      case 'Loan Against Property':
        componentToRender = <LoanAgainstProperty />;
        break;
      case 'Home Loan':
        componentToRender =  <HomeLoan />;
        break;
      case 'Loan Against Securitys':
        componentToRender = <LoanAgianstSecurity />;
        break;
      case 'New Car Loan':
        componentToRender =  <AutoLoan />;
        break;
      case 'Education Loan':
        componentToRender =  <EducationLoan />;
        break;
      default:
        componentToRender = <PersonalLoan />;
        break;
      
    }

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200, // Adjust the breakpoint value as per your needs
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 992, // Adjust the breakpoint value as per your needs
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 767, // Adjust the breakpoint value as per your needs
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 500, // Adjust the breakpoint value as per your needs
              settings: {
                slidesToShow: 2,
              }
            } 
          ],
        prevArrow: <button className="slick-prev slick-controls"> </button>,
        nextArrow: <button className="slick-next slick-controls"> </button>,
      };
    return (

        <>
            <section className="best-rel-pro loan-best-rel-pro">
                <div className="container">
                    <div className="row">
                        <div>
                            <div className="best-pro-nav">
                                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                <Slider  {...settings}>
                                    <li className="nav-item" role="presentation"  >
                                        <Link href="/loans/personal-loan" >
                                            <a className={`nav-link ${(productName === "Personal Loan") ? 'active' : ''}`}>
                                                <div className="best-icon-img">
                                                    <div className="color-img">
                                                        <Image src="/images/icon/newicon/personal.webp" height={32} width={32} alt="personal loan" loading='lazy' />
                                                    </div>
                                                    <div className="white-icon" >
                                                        <Image src="/images/icon/newicon/persoanlWhite.webp" alt="personal-loan" height={32} width={32} loading='lazy' />
                                                    </div>
                                                </div>
                                                <div className="best-icon-txt">Personal Loan</div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item" role="presentation" >
                                        <Link href="/loans/business-loan">
                                            <a className={`nav-link ${(productName === "Business Loan") ? 'active' : ''}`}>
                                                <div className="best-icon-img">
                                                    <div className="color-img">
                                                        <Image src="/images/icon/newicon/busines.webp" alt="buisness loan" height={32} width={32} />
                                                    </div>
                                                    <div className="white-icon">
                                                        <Image src="/images/icon/newicon/businesWhite.webp" alt="buisness-loan" height={32} width={32} />
                                                    </div>
                                                </div>
                                                <div className="best-icon-txt">Business Loan</div>

                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item" role="presentation" >
                                        <Link href="/loans/loan-against-property">
                                            <a className={`nav-link ${(productName === "Loan Against Property") ? 'active' : ''}`}>
                                                <div className="best-icon-img">
                                                    <div className="color-img" >
                                                        <Image src="/images/icon/newicon/property.webp" alt="gold loan" height={32} width={32} loading='lazy' />
                                                    </div>
                                                    <div className="white-icon">
                                                        <Image src="/images/icon/newicon/propertywhite.webp" alt="gold loan" height={32} width={32} loading='lazy' />
                                                    </div>
                                                </div>
                                                <div className="best-icon-txt">Loan Against Property</div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item" role="presentation" >
                                        <Link href="/loans/home-loan">
                                            <a className={`nav-link ${(productName === "Home Loan") ? 'active' : ''}`}>
                                                <div className="best-icon-img">
                                                    <div className="color-img">
                                                        <Image src="/images/icon/newicon/home.webp" alt="Home Loan" height={32} width={32} loading='lazy' />
                                                    </div>
                                                    <div className="white-icon">
                                                        <Image src="/images/icon/newicon/homeWhite.webp" alt="Home-Loan" height={32} width={32} loading='lazy' />
                                                    </div>

                                                </div>
                                                <div className="best-icon-txt">Home Loan</div>
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item" role="presentation"  >
                                        <Link href="/loans/loan-against-securitys">
                                            <a className={`nav-link ${(productName === "Loan Against Securitys") ? 'active' : ''}`}>
                                                <div className="best-icon-img">
                                                    <div className="color-img">
                                                        <Image src="/images/icon/newicon/security.webp" height={32} width={32} alt="Loan against Security" loading='lazy' />
                                                    </div>
                                                    <div className="white-icon">
                                                        <Image src="/images/icon/newicon/securityWhite.webp" alt="Loan-against-Security" height={32} width={32} loading='lazy' />
                                                    </div>

                                                </div>
                                                <div className="best-icon-txt">Loan Against Security</div>
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                    <Link href="/loan/new-car-loan">
                                        <a className={`nav-link ${(productName === "New Car Loan") ? 'active' : ''}`}>
                                            <div className="best-icon-img">
                                                <div className="color-img">
                                                    <Image src="/images/icon/newicon/car.webp" alt="Used Card Loan" height={32} width={32} loading='lazy' />
                                                </div>
                                                <div className="white-icon" >
                                                    <Image src="/images/icon/newicon/carWhite.webp" alt="Used Card Loan" height={32} width={32} loading='lazy' />
                                                </div>
                                            </div>

                                            <div className="best-icon-txt">Auto loan</div>
                                        </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item" role="presentation" >
                                    <Link href="/loans/education-loan">
                                        <a className={`nav-link ${(productName === "Education Loan") ? 'active' : ''}`}>
                                            <div className="best-icon-img">
                                                <div className="color-img">
                                                    <Image src="/images/icon/newicon/education.webp" height={32} width={32} alt="Edu Loan" loading='lazy' />
                                                </div>
                                                <div className="white-icon" >
                                                    <Image src="/images/icon/newicon/educationWhite.webp" alt="Edu Loan" height={32} width={32} loading='lazy' />
                                                </div>
                                            </div>
                                            <div className="best-icon-txt">Education Loan</div>
                                        </a>
                                        </Link>
                                    </li>
                                    </Slider>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pl-loan" role="tabpanel">
                                        {componentToRender}
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

export default LoanProduct