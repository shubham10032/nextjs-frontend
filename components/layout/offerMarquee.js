import React from 'react'
import Link from 'next/link';
import Marquee from "react-fast-marquee";
const OfferMarquee = () => {
    return (
        <>
            <div className="offer-header" >
                <div className="container offer-marquee-container">

                    <Marquee pauseOnHover={true}>
                        <div>

                            <h3 className="ofer-content">
                                <Link href="loans/bank-of-india-home-loan?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=">
                                    <a>
                                        &nbsp;&nbsp; Now you can transfer your existing Home Loan to  <span>Bank Of India</span>  with <span>ReferLoan <b>@8.45%</b></span>
                                    </a>
                                </Link>
                                &nbsp; &nbsp;|&nbsp; &nbsp;{/* Single pipe separator */}
                                <Link href="loans/hdfc-bank-home-loan">
                                    <a>
                                        Transfer your existing Home Loan to  <span>HDFC Bank</span>&nbsp;&nbsp;with&nbsp;&nbsp;<span>at lowest ROI <b> @8.40%</b> and No processing fees With <b>ReferLoan</b></span>
                                    </a>
                                </Link>
                                &nbsp; &nbsp;|&nbsp; &nbsp;
                            </h3>
                        </div>
                    </Marquee>

                </div>
            </div>
        </>
    )
}

export default OfferMarquee