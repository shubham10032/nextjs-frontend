import React, { useEffect } from 'react'
import { useState } from 'react'
import { getUserProfile } from '../../utils';
import { useDispatch, useSelector } from 'react-redux'
import { loginStatus, userInfo } from '../../store/slices/filterSlice';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Profile from '../../pages/user-auth/profile'
const Navbar = ({ collapse, setCollaspe }) => {
    const router = useRouter()
    const [user, setUser] = useState(getUserProfile() ? JSON.parse(getUserProfile()) : null)
    const dispatch = useDispatch()
    const filterData = useSelector((state) => state.filter.status);
    const logoutUser = () => {
        if (typeof window !== 'undefined') {
            window.localStorage.clear()
        }
        dispatch(loginStatus({ status: false }))
        dispatch(userInfo({}))
        setUser(null)
        router.push('/')
    }

    useEffect(() => {
        setUser(getUserProfile() ? JSON.parse(getUserProfile()) : null)
    }, [filterData])
    return (
        <header className="header">
            <div className="top-search-box">

                <a id="btn-toggle" className="sidebar-toggler break-point-lg" onClick={() => setCollaspe(collapse == 'off' ? '' : 'off')}>
                    <i className="ri-menu-line ri-xl"></i>
                </a>
                <div className="search-box">
                            <button className="search-btn">
                                <i className="ri-search-line"></i>
                            </button>
                            <input type="text" id="search" placeholder="search" />
                        </div>
            </div>

            <div className='user-Dashboard-h'>
                <div className='notification'> 
                    <Link  href="#">
                        <a className="dropdown-item py-2"><i className="ri-notification-4-fill"></i> Notification</a>
                    </Link>
                </div>
                <div className="user-auth my-auth">
                    <li className="dropdown main-profile-menu dash-main-profile-menu">
                       <Link  href="#">
                        <a className="new  profile-user" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-user-fill"></i></a>
                    </Link>

                        <div className="dropdown-menu auth-drop">
                            <div className="menu-header-content">
                                <div className="d-flex wd-100p">
                                    <div className="main-img-user">
                                        <Image src="/images/profile.webp" alt="Profile-class" className="" width = {36} layout="responsive"  loading='lazy' height = {32}/>
                                    </div>
                                    <div className="ms-3 my-auto">
                                        {user ? user.full_name : "User"}
                                    </div>
                                </div>
                            </div>
                            <Link href="/user-auth/profile">
                            <a className="dropdown-item py-2" ><i className="far fa-user-circle"></i>Profile</a>
                            </Link>
                            
                         
                            <span onClick={logoutUser}>  
                                <Link  href="#">
                                <a className="dropdown-item py-2"><i className="far fa-arrow-alt-circle-left"></i>Logout</a>
                                </Link>
                             </span>
                        </div>
                    </li>
                </div>
            </div>
        </header>
    )
}

export default Navbar