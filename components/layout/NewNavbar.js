import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserProfile } from './../../utils';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { loginStatus, userInfo } from '../../store/slices/filterSlice';
import OfferMarquee from "./offerMarquee";
// import OfferPopup from "./offerPopup";
import { useRouter } from 'next/router';
import Image from "next/image";

const NewNavbar = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const filterData = useSelector((state) => state.filter.status);
    const [user, setUser] = useState(getUserProfile() ? JSON.parse(getUserProfile()) : null);
    const [customerToken, setCustomerToken] = useState((typeof window !== 'undefined') ?
        window.localStorage.getItem("customertoken")
        : null);

    const logoutUser = () => {
        if (typeof window !== 'undefined') {
            window.localStorage.clear();
        }
        dispatch(loginStatus({ status: false }));
        dispatch(userInfo({}));
        setUser(null);
    };
    const [isScrolled, setIsScrolled] = useState(false);
    
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    useEffect(() => {
        setUser(getUserProfile() ? JSON.parse(getUserProfile()) : null);
        setCustomerToken((typeof window !== 'undefined') ?
            window.localStorage.getItem("customertoken")
            : null);
    }, [filterData]);

    return (
        <>
            {/* {router.pathname === '/' && <OfferMarquee />} */}
            <OfferMarquee />
            <section className={isScrolled ? 'header d-menu new-top-header new-top-header-fixed' : 'header new-top-header d-menu'}>
                <nav>
                    <div className="menu-container container">
                        <div className="nav-container">
                            <Link href="/" className="logo">
                                <a role="link" aria-label="Logo for home page">
                                    <Image src="/images/logo.webp" alt="logo" className="hero-logo" width={180} height={40} loading="lazy"/>
                                </a>
                            </Link>
                            <div className="ul-list-nav">
                                <ul className="nav-ul">
                                    <li className="nav-item">
                                        <Link href="/credit-score">
                                            <a className="nav-link">
                                                <Image
                                                    src={'/images/icon/newicon/Cibil.webp'}
                                                    alt="cibil-score"
                                                    width={36}
                                                    height={36}
                                                    loading='lazy'
                                                />
                                                <div className="link-c">
                                                    <p>Cibil Score</p>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/calculator/emi-calculator">
                                            <a className="nav-link">
                                                <Image
                                                    src={'/images/icon/newicon/caculator.webp'}
                                                    alt="emi-cal"
                                                    width={32}
                                                    height={32}
                                                    loading='lazy'
                                                />
                                                <div className="link-c">
                                                    <p>EMI Calculator</p>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/best-product">
                                            <a className="nav-link">
                                                <Image
                                                    src={'/images/icon/newicon/gift.webp'}
                                                    alt="best-pro"
                                                    width={32}
                                                    height={32}
                                                    loading='lazy'
                                                />
                                                <div className="link-c">
                                                    <p>Best Product</p>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="auth-new-box">
                                    <Link href="/applications-track">
                                        <a className="track">
                                            <Image src={'/images/icon/newicon/track.webp'}
                                                alt="track"
                                                width={32}
                                                height={32} />
                                            <span className="">Track Application</span>
                                        </a>
                                    </Link>
                                    <div className="feature-four__top-btn-box">
                                        {user != null && user && customerToken ? (
                                            <div className="dropdown main-profile-menu">
                                                <a className="new  profile-user-home" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <Image src={'/images/icon/newicon/user-min.webp'} height={32} width={32} alt="user icon" />
                                                </a>
                                                <div className="dropdown-menu auth-drop-home">
                                                    <div className="menu-header-content-home">
                                                        <div className="d-flex wd-100p">
                                                            <div className="main-img-user-home">
                                                                <Image src={'/images/profile.webp'} alt="profile" height={48} width={48} className="" loading="lazy" />
                                                            </div>
                                                            <div className="ms-3 my-auto">
                                                                {user ? user.full_name : "User"}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link href="/"><a className="dropdown-item py-2" >
                                                        <Image src={'/images/icon/newicon/notification-min.webp'} height={20} width={20} alt="Notification icon" />
                                                        Notification
                                                    </a></Link>
                                                    <Link href="/user-auth"><a className="dropdown-item py-2" >
                                                        <Image src={'/images/icon/newicon/dashboard-min.webp'} height={20} width={20} alt="dashboard icon" />
                                                        Dashboard
                                                    </a></Link>
                                                    <span onClick={logoutUser}>
                                                        <a className="dropdown-item py-2" href="#">
                                                            <Image src={'/images/icon/newicon/logout-min.webp'} height={20} width={20} alt="logout icon" />
                                                            Logout
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                        ) : (
                                            <Link href="/auth">
                                                <a  className="thm-btn feature-four__top-btn nav-home-btn">
                                                    <span>Log In</span>
                                                </a>
                                            </Link>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>
                   
                        
                        {/* <div className="ul-list-nav-menu">
                                <ul className="nav-ul">
                                    <li className="nav-item">
                                        <Link href="/privateEquity">
                                            <a className="nav-link">
                                                <div className="link-c">
                                                    <p>Private Equity</p>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/calculator/emi-calculator">
                                            <a className="nav-link">
                                                <div className="link-c">
                                                    <p>Insurance</p>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/best-product">
                                            <a className="nav-link">
                                                <div className="link-c">
                                                    <p>Investment</p>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                        </div> */}


                    </div>
                </nav>
            </section>
        </>
    );
};

export default NewNavbar;
