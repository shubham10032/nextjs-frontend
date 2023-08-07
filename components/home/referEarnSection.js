import Typed from 'react-typed';
import Image from 'next/image';
import Link from 'next/link';
const referEarn = ({status}) => {
    return (


        <section className="refer-earn-section" id='referErnSection'>
           
                <div className="design-shape">
                <div className="shape-1"></div>
                <div className="shape-2"></div>
                <div className="shape-3"></div>
                <div className="shape-4"></div>
                <div className="shape-5"></div>
                <div className="shape-6"></div>
            </div>
            <div className="container">
                <div className="refer-container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className="refer-content">
                                <div className="refer-content-in">
                                    <div className="center">
                                        <div className="type-text">
                                            <div>
                                                <Typed
                                                    strings={[
                                                        "Don't Keep Us a Secret! Refer and Earn Rewards",
                                                        "Spread Some Love With ReferLoan Refer and Earn Rewards",
                                                        "Spread Some Love With ReferLoan Refer and Earn Rewards",
                                                        "Why Keep the Benefits to Yourself? Refer and Earn",
                                                        "Refer a Friend, Earn a Reward", "Sharing is a Win-Win With ReferLoan"]}
                                                    typeSpeed={40}
                                                    backSpeed={50}
                                                    smartBackspace
                                                    showCursor
                                                    cursorChar="|"
                                                    span="placeholder"
                                                    loop >
                                                     <span className="type refer-heading">Don't Keep Us a Secret! Refer and Earn Rewards</span>
                                                </Typed>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-content">
                                        <p>
                                           Refer and Earn by ReferLoan is an exciting Referral Program that can 
                                           help you earn some extra income, every month. All you need to do is just
                                           referring the Products and Services of ReferLoan to your family, friends, 
                                           and social contacts.
                                        </p>
                                        <p>
                                        The More Your Refer…  <br/> The more you earn.
                                        </p>
                                    </div>
                                    <div className="btn-dis">
                                        <div className="refer-btn-box">
                                            <div className="feature-four__top-btn-box refer-btn-br">
                                                <Link href="#">
                                                    <a className="thm-btn feature-four__top-btn refer-btn" aria-label='Download App'
                                                    type="submit">Download App</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="refer-earn-img">
                                <Image
                                    src={'/images/referEarn.webp'}
                                    alt="refer loan specification image"
                                    width={640} 
                                    height={504}
                                    loading='lazy'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
        </section>
    )
}
export default referEarn;