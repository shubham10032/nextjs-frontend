import Image from 'next/image'
import Link from 'next/link';
const MobileApp = ({status}) => {
    return (
        <section className="mobile-app-section" id="mobileSection">
            {
                status == true && <>
                  <div className="design-shape">
                <div className="shape-1"></div>
                <div className="shape-2"></div>
                <div className="shape-3"></div>
                <div className="shape-4"></div>
                <div className="shape-5"></div>
                <div className="shape-6"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="mobile-content-row">
                            <div className="m-content">
                                <h4>Download the Referloan app now!</h4>
                                <p>Get the free Referloan  app on your phone</p>
                            </div>
                            <div className="app-btn-mobile ap-btn">
                                <div className="feature-four__top-btn-box why-refer-btn">
                                    <Link href="#" >
                                        <a className="thm-btn feature-four__top-btn dow-anchor" type="submit">
                                            <span>
                                                <Image src="/images/icon/apple-logo.webp" alt="Download" width={25} height={25} loading='lazy' />
                                            </span>Download App
                                        </a>
                                    </Link>
                                </div>
                                <div className="feature-four__top-btn-box why-refer-btn">
                                    <Link href="#" >
                                        <a className="thm-btn feature-four__top-btn dow-anchor" type="submit">
                                            <span>
                                                <Image src="/images/icon/playstore.webp" alt="Download" width={25} height={25} loading='lazy' />
                                            </span>Download App
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 mobile-col">
                        <div className="mob-store">
                            <div className="mob-app-st">
                                <div className="app-taxt">
                                    <div className='headh2'>Appstore</div>
                                    <p><span>4.5</span>11k+ Reviews</p>
                                </div>
                                <div className="ap-btn">
                                    <div className="feature-four__top-btn-box why-refer-btn">
                                        <Link href="#">
                                            <a className="thm-btn feature-four__top-btn dow-anchor" type="submit">
                                                <span><Image src="/images/icon/apple-logo.webp" alt="Download" height={25} width={25} loading='lazy' />
                                                </span>Download App</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mob-app-st">
                                <div className="app-taxt">
                                    <div className='headh2'>Playstore</div>
                                    <p><span>4.2</span>10k+ Reviews</p>
                                </div>
                                <div className="ap-btn">
                                    <div className="feature-four__top-btn-box why-refer-btn">

                                        <Link href="#" ><a className="thm-btn feature-four__top-btn dow-anchor" type="submit">
                                            <span>
                                                <Image src="/images/icon/playstore.webp" alt="Download" width={25} height={25} loading='lazy' />
                                            </span>Download App
                                        </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="mobil-img-box">
                            <Link href="#">
                                <a>
                                    <Image
                                        src="/images/mobile-app.webp"
                                        alt="Mobile app Image"
                                        width={225}
                                        height={251}
                                        loading="lazy"
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
                </>
            }
          
        </section>


    )
}

export default MobileApp;