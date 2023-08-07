import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
const Menu = dynamic(() => import('./menu'))
export default function Footer() {
    const [status, setStatus] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false)
        }, 4000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [])
    const handleClick = () => {
        setStatus(true)
        const otherButton = document.querySelector('.woot-widget-bubble');

        if (otherButton) {
            otherButton.dispatchEvent(new Event('click'));
        }
    };
    return (
        <>
            <section className="footer">
                {
                    loading === false && <Menu />
                }

                <div className="container middle-container">

                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <div className="about-company">
                                <Link href="/" ><a className="f-logo" aria-label='footer logo'>
                                    <Image
                                        src="/images/hlogo.png"
                                        alt="Footer Logo Missing"
                                        width={180}
                                        height={40}
                                        priority={true}
                                    />
                                </a>
                                </Link>
                
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4">
                            <div className='footer'>
                                <div className="footer-box">
                                
                                <ul className="footer-ul">
                                     <div className="foter-title">Company</div> 
                                    <li className="f-list"><Link href="/about-us" ><a className="f-link">About Us</a></Link></li>
                                    <li className="f-list"><Link href="/contact" ><a className="f-link">Contact Us</a></Link></li>
                                    <li className="f-list"><Link href="/terms-and-conditions" ><a className="f-link">Terms and Conditions</a></Link></li>
                                     <li className="f-list"><Link href="/account-deactivate-request" ><a className="f-link">Deactivate Account</a></Link></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4">
                            <div className="footer-box">
                                <ul className="footer-ul">
                                <div className="foter-title">Link</div> 
                                    <li className="f-list"><Link href="https://partners.referloan.in/login" ><a target='_blank' className="f-link">Partner Login</a></Link></li>
                                    <li className="f-list"><Link href="/privacy-policy" ><a className="f-link">Privacy Policy</a></Link></li>
                                    <li className="f-list"><Link href="/faqs" ><a className="f-link">Faq's</a></Link></li>
                                    <li className="f-list"><Link href="/app-privacy-policy" ><a className="f-link">RL Dialer Privacy Policy</a></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4">
                            {/* <div className="footer-box"> */}
                                <ul className="footer-ul">
                                <div className="foter-title">Contact </div> 
                                    <div className="about-content">
                                    <div className="contact-footer">
                                        <div className="f-mail">
                                            <Link href="mailto:helpdesk@referloan.in">
                                                <a aria-label='ReferLoan HelpDesk Mail Id'><Image src={'/images/icon/newicon/email-min.webp'} height={10} width={15} alt='Email icon' /> helpdesk@referloan.in</a>
                                            </Link>
                                        </div>
                                        <div className="f-mail">
                                            <Link href="tel:0124-4847123"><a aria-label='Contact Number' > <Image src={'/images/icon/newicon/call-min.webp'} height={13} width={15} alt='Call icon' />  0124-4847123</a></Link>
                                        </div>
                                    </div>
                                </div>
                       
                                <div className='helpDesk pt-3'>
                                    <Link href='https://helpdesk.referloan.in/' >
                                        <a target='_blank'>
                                            <Image src='/images/help.webp' width={32} height={28} alt='help desk' loading='lazy' />
                                            <div>Help Desk</div></a>
                                    </Link>
                                </div>
                                </ul>
                        
                            {/* </div> */}
                        </div>
                    </div>

                </div>
                <div className="copy-right">
                    <div className="container">
                        <div className="row">

                            {
                                status == false ?
                                    <div className="chatbot-circle">
                                        <div className="chatbot-circle-in" onClick={handleClick}>
                                        </div>
                                    </div> : <Script src="./chatbot.js" />
                            }

                            <div className = "soc-flex"style={{ textAlign: 'center' }}>
                            <ul className="social-ul">
                                    <li className="socail-icon">
                                        <Link href="https://www.facebook.com/referloan" >
                                            <a target="_blank" className="social-icon" aria-label='facebook'>
                                                <Image src={'/images/icon/newicon/fb-min.webp'} alt="FaceBook Icon" height={32} width={32} />
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="socail-icon">
                                        <Link href="https://www.linkedin.com/company/referloan">
                                            <a target="_blank" className="social-icon" aria-label='linkedIn'>
                                                <Image src={'/images/icon/newicon/linkedin-min.webp'} alt="linkedIn Icon" height={32} width={32} />
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="socail-icon">
                                        <Link href="https://twitter.com/loan_refer" >
                                            <a target="_blank" className="social-icon" aria-label="twitter">
                                                <Image src={'/images/icon/newicon/twiter-min.webp'} alt="twitter Icon" height={32} width={32} />
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="socail-icon">
                                        <Link href="https://www.youtube.com/channel/UClDi-QICJKLCQ4uLTJVsc2A">
                                            <a target="_blank" className="social-icon" aria-label='youtube'>
                                                <Image src={'/images/icon/newicon/youtube-min.webp'} alt="youtube Icon" height={32} width={32} />
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="socail-icon">
                                        <Link href="https://www.instagram.com/referloan.official/">
                                            <a target="_blank" className="social-icon" aria-label='instagram'>
                                                <Image src={'/images/icon/newicon/insta-min.webp'} alt="Instagram Icon" height={32} width={32} />
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                <p>
                                    Copyright 2023 © Referloan.in.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )

}

