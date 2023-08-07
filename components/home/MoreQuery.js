import React from "react";
import Image from "next/image";
import Link from 'next/link';


const MoreQuery = () => {
    return (
        <>

            <section>
                <div className="container">
                    <div className="card-fom1">
                        <div class="other-content-box">
                            <span class="title-card-pills-tabcontent">Convenient Bill Payments, Just a Click Away!!</span>
                            <p style={{ "margin": "0" }}>
                                Say goodbye to the those long queues and hours of waiting. 
                                 With ReferLoan's Utility Bill payment services, paying your utility bills are easier than ever.
                            </p>
                        </div>
                        <div className="row more-li-row">
                            <div className="other-utilitu-box">
                                <div className="mor-li">
                                    <Link href="/" >
                                        <a className="more-link">
                                            <Image
                                                src={'/images/icon/loan/eb.png'}
                                                alt="cibil-score"
                                                width={32}
                                                height={32}
                                                loading='lazy'
                                            />
                                            <div className="more-c">
                                                <p>Utility bills</p>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="other-utilitu-box">
                                <div className="mor-li">
                                    <Link href="/" >
                                        <a className="more-link">
                                            <Image
                                                src={'/images/icon/loan/fg.png'}
                                                alt="cibil-score"
                                                width={32}
                                                height={32}
                                                loading='lazy'
                                            />
                                            <div className="more-c">
                                                <p>fast tag</p>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="other-utilitu-box">
                                <div className="mor-li">
                                    <Link href="/equipmentLoan" >
                                        <a className="more-link">
                                            <Image
                                                src={'/images/icon/loan/mr.png'}
                                                alt="cibil-score"
                                                width={32}
                                                height={32}
                                                loading='lazy'
                                            />
                                            <div className="more-c">
                                                <p>Mobile recharge</p>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="other-utilitu-box">
                                <div className="mor-li">
                                    <Link href="/schoolLoan" >
                                        <a className="more-link">
                                            <Image
                                                src={'/images/icon/loan/water-bil.png'}
                                                alt="cibil-score"
                                                width={32}
                                                height={32}
                                                loading='lazy'
                                            />
                                            <div className="more-c">
                                                <p>Water Bill</p>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="other-utilitu-box">
                                <div className="mor-li">
                                    <Link href="/startUpLoan" >
                                        <a className="more-link">
                                            <Image
                                                src={'/images/icon/loan/gas-bill.png'}
                                                alt="cibil-score"
                                                width={32}
                                                height={32}
                                                loading='lazy'
                                            />
                                            <div className="more-c">
                                                <p>Gass bill</p>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MoreQuery
