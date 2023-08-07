import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const SubMenu = dynamic(() => import('./subMenu'))
import { useRouter } from 'next/router';
import Image from "next/image";;

import { getUserProfile } from '../../utils';
const MobileMenu = () => {
    const router = useRouter()
    const [user, setUser] = useState(getUserProfile() ? JSON.parse(getUserProfile()) : null)
    let utmData = '';
    const { utm_campaign, utm_id, utm_medium, utm_source } = router.query
    if (!utm_campaign) {
        utmData = `?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=`
    } else {
        utmData = `?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_id=${utm_id}`
    }

    // get menu data from redux 
    const [subMenuStatus, setSubMenuStatus] = useState(false)
    const [showStepthreeMenu, setShowStepthreeMenu] = useState(false)
    const [sidebarmenu, setSidebarMenu] = useState([]);
    const [isHovering, setIsHovering] = useState(false);
    const [active, setActive] = useState('')
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    const getsidebarMenu = async () => {
        try {
            const res = await axios.get(`${process.env.APP_URL}/headermenu`);
            setSidebarMenu(res.data);
        }
        catch (err) {
            console.log(err)
        }
    }
    const handleMouseOut = () => {
        setIsHovering(false);
    };



    useEffect(() => {
        getsidebarMenu()
        if (typeof window !== 'undefined') {
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("full_name");
            window.localStorage.removeItem("pan");
            window.localStorage.removeItem("phone");
        }
    }, []);

    const activeFunction = () => {
        active != '' ? setActive('') : setActive('active')
    }

    const [visible, setVisible] = useState(true);

    const handleToggle = () => {
        setVisible((current) => !current);
    };

    const showSecodStepMenu = () =>{
        setSubMenuStatus(true);
    }
    const showthirdLevelMenu = () =>{
        setShowStepthreeMenu((prevState) => !prevState);
    }
   
    return (
        <>
{/* id="moileheader" */}
            <header  className="d-md-none d-block mobile-menu new-top-header-mobile">
                <div className="container">
                    <div className="mheadWrapper">
                        <div className="mobile-logo">
                            <Link href={'/' + utmData}>
                                <a role="link" aria-label="Logo for home page">
                                    <Image
                                        src={'/images/logo.webp'}
                                        alt="logo"
                                        width="126"
                                        height="28"
                                        className="hero-logo"
                                        loading="lazy"
                                    />
                                </a>
                            </Link>
                        </div>

                        <div className="header_right">
                            {
                                (user !== null) ? <div className="feature-four__top-btn-box logIn-user">

                                    <div className="dropdown main-profile-menu">
                                        <a className="new  profile-user-home" data-bs-toggle="dropdown" aria-expanded="false">
                                            <Image src={'/images/icon/newicon/user-min.webp'} height={32} width={32} alt="user icon" />
                                        </a>

                                        <div className="dropdown-menu auth-drop-home">
                                            <div className="menu-header-content-home">
                                                <div className="d-flex wd-100p">
                                                    <div className="main-img-user-home"><Image src="/images/profile.webp" width={71} height={71} alt="Profile" loading='lazy' />
                                                    </div>

                                                    <div className="ms-3 my-auto">
                                                        {user ? user.full_name : "User"}
                                                    </div>
                                                </div>
                                            </div>
                                            <Link href="#"><a className="dropdown-item py-2" >  <Image src={'/images/icon/newicon/notification-min.webp'} height={20} width={20} alt="Notification icon" /> Notification</a></Link>
                                            <Link href="/user-auth"><a className="dropdown-item py-2" ><Image src={'/images/icon/newicon/dashboard-min.webp'} height={20} width={20} alt="dashboard icon" /> Dashboard</a></Link>
                                            <Link href="/"><a className="dropdown-item py-2" ><Image src={'/images/icon/newicon/logout-min.webp'} height={20} width={20} alt="logout icon" /> Logout</a></Link>
                                        </div>
                                    </div>
                                    <div className="humburger">
                                        <label htmlFor="menuTrigger" onClick={handleToggle} className={`nav_ico`}>
                                            <div id={`nav-icon1`} className={`${active}`}>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </label>
                                        <input id="menuTrigger" onChange={() => { activeFunction() }} type="checkbox"  />
                                        <label htmlFor="menuTrigger" style={{ display: 'none' }}>Menu Trigger</label> {/* Hide this label */}
                                    </div>
                                </div>
                                    :
                                    <div className="logout-user">
                                        <Link href="/auth">
                                            <a className="thm-btn feature-four__top-btn nav-home-btn" role="link" aria-label="Log in btn">
                                                <span>Log In</span>
                                            </a>
                                        </Link>
                                        <div className="humburger">
                                            <label htmlFor="menuTrigger" onClick={handleToggle} className={`nav_ico`}>
                                                <div id={`nav-icon1`} className={`${active}`}>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </label>
                                            <input id="menuTrigger" onChange={() => { activeFunction() }} type="checkbox"  />
                                            <label htmlFor="menuTrigger" style={{ display: 'none' }}>Menu Trigger</label> {/* Hide this label */}
                                        </div>
                                    </div>
                            }
                            <nav id="firstLevelUlMobile" className={`main_nav ${active} `} >
                                <ul className="_firtlevelul mobile-menu-list">
                                    {
                                        sidebarmenu != null && sidebarmenu.length > 0 && typeof (sidebarmenu) != 'string' && sidebarmenu.map((item1, index) => (

                                            item1.hierarchy == 'Product_BankProduct' ? <li onClick={showSecodStepMenu} key={index}>
                                                <Link  href={'/' + item1.slug + utmData}>
                                                    <a>{item1.name}</a>
                                                </Link>


                                                {!item1.bank_product && <i className="fas fa-chevron-down"></i>}
                                                {
                                                    subMenuStatus && <ul className="mobileMegaMenu">
                                                    {
                                                        item1.product && item1.product.map((value1, key) => (

                                                            <li key={key} onClick={showthirdLevelMenu} >
                                                                <Link href={'/' + value1.slug + utmData} >
                                                                <a>{value1.name}</a>
                                                                </Link>
                                                                <i className="fas fa-chevron-down"></i>

                                                               {
                                                                showStepthreeMenu &&  <ul className="thirdLevelUl">
                                                                {value1.bank_product && <SubMenu setVisible={setVisible} setActive={setActive} data={value1.bank_product} />}
                                                            </ul>
                                                               }
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                                }
                                            </li> :
                                                <li key={index}><Link href={'/' + item1.slug + utmData}><a >{item1.name}</a></Link>
                                                    {item1.page && <i className="fas fa-chevron-down"></i>}

                                                    <ul className="thirdLevelUl">
                                                        {
                                                            item1.page && item1.page.map((value1, key) => (
                                                                <li key={key} ><Link href={'/' + value1.slug + utmData}><a>{value1.name}</a></Link>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </li>
                                        ))
                                    }

                                    <li><Link href="/franchise-investment"><a title="Franchise">Partners</a></Link></li>
                                    <li><Link href="/contact"><a title="Contact">Contact</a></Link></li>
                                    <li><Link href="/privateEquity"><a title="Contact">Private Equity</a></Link></li>
                                    <li><Link href="/credit-score"><a title="Contact">Cibil Score</a></Link></li>
                                    <li><Link href="/calculator/emi-calculator"><a title="Contact">EMI Calculator</a></Link></li>
                                    <li><Link href="/best-product"><a title="Contact">Best Product</a></Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

        </>


    )

}

export default MobileMenu