import React from 'react'
import Carousel from 'react-slick';
import Link from 'next/link';
// Custom arrow icons

const NextArrow = (props) => (
  <div className="swiper-button-prev eligprevbtn" onClick={props.onClick}> <i className="fas fa-chevron-left"></i> </div>
);
const PrevArrow = (props) => (
  <div className="swiper-button-next elignextbtn bg-red" onClick={props.onClick}><i className="fas fa-chevron-right"></i></div>
);

const BestOffers = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const homesettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const businesettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (

    <section className='best-offers-main'>

      <section className='cs-hero-banner best-her'>
        <div className='container'>
          <div className='row'>
            <h2 className='cs-banner-heading'>Best Offers For You</h2>
          </div>
        </div>
      </section>

      {/* credit card offer  */}

      <section className="inner-hero-banner1 credit-slider card-sli">
        <div className="container">

          <div className='row'>
            <div className="offer-heading-box-out box-bottom">
              <div className="offer-heading-box">
                <p className="subhedign">
                  <span className="design-br"></span>
                  <b>Offer on Credit Card</b>
                  <span className="design-br"></span>
                </p>
                <h2 className="heading-offer">Bringing You the Best of Credit Card Offer</h2>
                <p>At ReferLoan, we understand that every Individual calls for a different need. Therefore, we offer you product suggestions that are tailored right according to your need and eligibility.</p>
              </div>
            </div>

          </div>

          <div className="best-refer-text-wrap">
            <Carousel {...settings}>
              <div className='col-md-4'>
                <Link href="/credit-card/hdfc-bank-credit-card">
                  <a>
                    <div className="in-img">
                      <img src="images/bank/hdfcfin.webp" width ={332} height={186} alt="Hdfc Credit Card" loading="lazy" />
                    </div>
                  </a>
                </Link>
              </div>
              <div className='col-md-4'>
                <Link href="/credit-card/yes-bank-credit-card">
                  <a>
                    <div className="in-img">
                      <img src="images/bank/yesfin.webp" loading="lazy" alt="Yes Bank Card" />
                    </div>
                  </a>
                </Link>
              </div>
              <div className='col-md-4'>
                <Link href='/credit-card/indusind-bank-credit-card'>
                  <a>
                    <div className="in-img">
                      <img src="images/bank/indusfin.webp" loading="lazy" alt="Indusind Credit Card" />
                    </div>
                  </a>
                </Link>
              </div>

              <div className='col-md-4'>
                <Link href="/credit-card/hdfc-bank-credit-card">
                  <a>
                    <div className="in-img">
                      <img src="images/bank/hdfcfin.webp" alt="Hdfc Credit Card" loading="lazy" />
                    </div>
                  </a>
                </Link>
              </div>
              <div className='col-md-4'>
                <Link href="/credit-card/yes-bank-credit-card">
                  <a>
                    <div className="in-img">
                      <img src="images/bank/yesfin.webp" loading="lazy" alt="Yes Bank Card" />
                    </div>
                  </a>
                </Link>
              </div>

              <div className='col-md-4'>
                <Link href='/credit-card/indusind-bank-credit-card'>
                  <a >
                    <div className="in-img">
                      <img src="images/bank/indusfin.webp" loading="lazy" alt="Indusind Credit Card" />
                    </div>
                  </a>
                </Link>
              </div>

            </Carousel>
          </div>
        </div>
      </section>

      {/* credit card offer  */}

      <section className="god-sec credit-slider">
        <div className="container">
          <div className='row'>
            <div className="offer-heading-box-out box-bottom">
              <div className="offer-heading-box">
                {/* <p className="subhedign">
                  <span className="design-br"></span>
                  <b></b>
                  <span className="design-br"></span>
                </p> */}
                <h2 className="heading-offer top-offer-head" >Offer on Gold Loan</h2>
              </div>
            </div>

          </div>
          <div className='row'>
            {/* <a href="/apply-gold-loan">
              <div className="gold-sec-wrap">
                <img src="/images/bank/goldfin.png" />
              </div>
            </a> */}
            <div className="col-md-6">
              <div className='per-card my-per-top'>
                <Link href='/apply-gold-loan'>
                  <a>
                    <div className='card-per'>

                      <div className='card-per-text'>
                        <h5>Bring Home Happiness with Gold Loan</h5>
                        <div className='wafe'>Get India Gold Loan with ReferLoan and enjoy <b>1.50% waiver</b> on PF!</div>
                        <div className="loanapply">
                          <div className="feature-four__top-btn-box">
                            <button className="thm-btn feature-four__top-btn" type="submit">Apply Now</button>
                          </div>
                        </div>
                      </div>
                      <div className='card-per-img'><img src="images/bank/indiagold.webp" /></div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-6 my-per-top">
              <div className='per-card'>
                <Link href='/loans/ruptok-gold-loan'>
                  <a>
                    <div className='card-per'>
                      <div className='card-per-text'>
                        <h5>Bring Home Happiness with Gold Loan</h5>
                        <div className='wafe'>Get India Gold Loan with ReferLoan and enjoy <b>1.50% waiver</b> on PF!</div>
                        <div className="loanapply">
                          <div className="feature-four__top-btn-box">
                            <button className="thm-btn feature-four__top-btn" type="submit">Apply Now</button>
                          </div>
                        </div>
                      </div>
                      <div className='card-per-img'><img src="images/bank/ruptak.webp" /></div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* home credit card offer  */}
      <section className="inner-hero-banner1 credit-slider home-loan-sli">
        <div className="container">
          <div className='row'>
            <div className="offer-heading-box-out box-bottom">
              <div className="offer-heading-box">
                {/* <p className="subhedign">
                  <span className="design-br"></span>
                  <b></b>
                  <span className="design-br"></span>
                </p> */}
                <h2 className="heading-offer top-offer-head">Offer on Home Loan</h2>
              </div>
            </div>

          </div>

          <div className="best-refer-text-wrap">
            <Carousel {...homesettings}>
              <div className='col-md-4'>
                <Link href="/loans/hdfc-bank-home-loan"><a>
                    <div className="in-img">
                      <img src="images/bank/hdfc-home-loan.webp" alt="Hdfc Home Loan" loading="lazy" />
                    </div>
                  </a>
                </Link>
              </div>
              <div className='col-md-4'>
                <Link href="/loans/bank-of-india-home-loan"><a>
                    <div className="in-img">
                      <img src="images/bank/home-loan-bank-of-india.webp" loading="lazy" alt="Bank of India Home Loan" />
                    </div>
                  </a>
                </Link>
              </div>
              <div className='col-md-4'>
                <Link href='/loans/kotak-bank-home-loan'><a>
                    <div className="in-img">
                      <img src="images/bank/kotak-home-loan.webp" loading="lazy" alt="Kotak Home Loan" />
                    </div>
                  </a>
                </Link>
              </div>
              <div className='col-md-4'>
                <Link href='/loans/canara-bank-home-loan'><a>
                    <div className="in-img">
                      <img src="images/bank/canara-home-loan.webp" loading="lazy" alt="Canara Home Loan" />
                    </div>
                  </a>
                </Link>
              </div>
              <div className='col-md-4'>
                <Link href="/loans/indian-bank-home-loan">
                  <a>
                    <div className="in-img">
                      <img src="images/bank/indian-bank-home.webp" alt="India Home Loan" loading="lazy" />
                    </div>
                  </a>
                </Link>
              </div>
              <div className='col-md-4'>
                <Link href="/loans/sbi-home-loan">
                  <a>
                    <div className="in-img">
                      <img src="images/bank/SBI.webp" loading="lazy" alt="Bank of India Home Loan" />
                    </div>
                  </a>
                </Link>
              </div>
              <div className='col-md-4'>
                <Link href='/loans/bank-of-maharashtra-home-loan'>
                  <a>
                    <div className="in-img">
                      <img src="images/bank/Bank-of-maharastra.webp" loading="lazy" alt="Bank of maharastra" />
                    </div>
                  </a>
                </Link>
              </div>

            </Carousel>
          </div>
        </div>
      </section>

      {/* home credit card offer  */}


      <section className="personal per-loan-slider">
        <div className='container'>
          <div className='row'>
            <div className="offer-heading-box-out box-bottom">
              <div className="offer-heading-box">
                {/* <p className="subhedign">
                  <span className="design-br"></span>
                  <b></b>
                  <span className="design-br"></span>
                </p> */}
                <h2 className="heading-offer top-offer-head">Offer on Personal Loan</h2>
              </div>
            </div>

          </div>
          <div className='row'>
            <div className="col-lg-4 col-md-6 col-12" >
              <div className='per-card'>
                <Link href='/loans/moneywide-personal-loan'>
                  <a>
                    <div className='card-per'>

                      <div className='card-per-text'>
                        <h5>Processing Fees waiver</h5>
                        <div className='wafe'>Upto lower of <b>10000 or 1% PF</b></div>
                        <div className="loanapply">
                          <div className="feature-four__top-btn-box">
                            <button className="thm-btn feature-four__top-btn" type="submit">Apply Now</button>
                          </div>
                        </div>
                      </div>
                      <div className='card-per-img'><img src="images/PERSONAL LOAN/MONEYWIDE_PERSONAL_LOAN_img.webp" /></div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className='per-card my-per-top'>
                <Link href='/loans/paysense-personal-loan' ><a>
                  <div className='card-per'>
                    <div className='card-per-text'>
                      <h5>Processing Fees waiver</h5>
                      <div className='wafe'>Paysense <b>10000 or 1% PF</b></div>
                      <div className="loanapply">
                        <div className="feature-four__top-btn-box">
                          <button className="thm-btn feature-four__top-btn" type="submit">Apply Now</button>
                        </div>
                      </div>
                    </div>
                    <div className='card-per-img'>
                      <img src="images/PERSONAL LOAN/PAYSENSE_PERSONAL_LOAN_img.WEBP" />
                    </div>
                  </div>
                </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className='per-card my-per-card'>
                <Link href='/personal-loan/werize-personal-loan'>
                  <a>
                    <div className='card-per'>
                      <div className='card-per-text'>
                        <h5>Processing Fees waiver</h5>
                        <div className='wafe'>Lower of <b>10000 or 1% PF</b></div>
                        <div className="loanapply">
                          <div className="feature-four__top-btn-box">
                            <button className="thm-btn feature-four__top-btn" type="submit">Apply Now</button>
                          </div>
                        </div>
                      </div>
                      <div className='card-per-img'><img src="images/PERSONAL LOAN/WERIZE_PERSONAL_LOAN_img.webp" /></div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* loan agains property  */}

      <section className="personal loan-a-pro">
        <div className="container">
          <div className="row">
            <div className="offer-heading-box-out box-bottom">
              <div clasNname="offer-heading-box">
                {/* <p className="subhedign">
                  <span className="design-br" />
                  <b></b>
                  <span className="design-br" />
                </p> */}
                <h2 className="heading-offer top-offer-head">Offer on Loan Against Property</h2>
              </div>
            </div>
          </div>

            <div className="best-refer-text-wrap">
              <Carousel {...businesettings}>
                  <div className="col-md-4">
                  <Link href="/loans/bank-of-india-loan-against-property">
                    <a>
                      <div className="in-img">
                        <img src="images/bank/Loan-Against-BOI.webp" alt="Loan Against BOI" loading="lazy" />
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link href="#">
                    <a>
                      <div className="in-img">
                        <img src="images/bank/Loan-Against-Canara.webp" loading="lazy" alt="Loan Against Canara" />
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link href="#">
                    <a>
                      <div className="in-img">
                        <img src="images/bank/Loan-Against-SBI.webp" loading="lazy" alt="Loan Against SBI" />
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link href="/loans/hdfc-bank-business-loan">
                    <a>
                      <div className="in-img">
                        <img src="images/bank/Loan-Against-HDFC.webp" alt="Loan Against hdfc" loading="lazy" />
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link href="#">
                    <a>
                      <div className="in-img">
                        <img src="images/bank/loan-against-maharastra.webp" loading="lazy" alt="Loan Against Maharastra" />
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link href="#">
                    <a>
                      <div className="in-img">
                        <img src="images/bank/Loan-Against-indian-bank.webp" loading="lazy" alt="Loan Against Indian bank" />
                      </div>
                    </a>
                  </Link>
                  </div>
              </Carousel>
            </div>
          </div>

      </section>


      {/* loan against property  */}

      <section className="personal">
        <div className='container'>
          <div className='row'>
            <div className="offer-heading-box-out box-bottom">
              <div className="offer-heading-box">
                {/* <p className="subhedign">
                  <span className="design-br"></span>
                  <b></b>
                  <span className="design-br"></span>
                </p> */}
                <h2 className="heading-offer top-offer-head">Offer on Business Loan</h2>
              </div>
            </div>

          </div>
          <div className='row'>
            <Link href="/loans/standard-chartered-business-loan">
              <a>
                <div className="in-img-in">
                  <img src="images/bank/buisness.webp" alt="Standard" loading="lazy" />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>

    </section>
  )
}


export default BestOffers