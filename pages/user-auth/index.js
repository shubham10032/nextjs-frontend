import React, { Fragment } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useRouter } from 'next/router';
import Pagination from '@mui/material/Pagination';
import Carousel from 'react-slick';
import Stack from '@mui/material/Stack';
import { useSelector } from "react-redux";
import {
    FacebookShareButton, FacebookIcon, RedditShareButton, RedditIcon, WhatsappShareButton, WhatsappIcon,
    LinkedinShareButton, LinkedinIcon, TwitterIcon, TwitterShareButton
} from 'react-share';
import { useState } from 'react';
import { useEffect } from 'react';
import { getUserProfile, getUserUtm } from '../../utils';
import axios from 'axios';
import Image from 'next/image';

const NextArrow = (props) => (
    <div className="swiper-button-prev" onClick={props.onClick}> <i className="fas fa-chevron-left"></i> </div>
  );
  const PrevArrow = (props) => (
    <div className="swiper-button-next" onClick={props.onClick}><i className="fas fa-chevron-right"></i></div>
  );
  
    
 

const Dashboard = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        touchMove:true,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 3000,
        arrows: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 1310,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };



    const router = useRouter()
    const [utm, setUtm] = useState('')
    const [userId, setUserId] = useState('')
    const [text, setText] = useState("");
    const [isCopied, setIsCopied] = useState(false);
    const [popup, setpopup] = useState(true);
    const [trackbtn, settrackbtn] = useState(false);
    const [user, setUser] = useState(getUserProfile() ? JSON.parse(getUserProfile()) : null)
    const [userInfo, setUserInfo] = useState([])
    const [trackData, setTrackData] = useState()
    const itemsPerPage = 5;
    const [page, setPage] = useState(1);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = userInfo.data && userInfo.data.length > 0 && userInfo.data.slice(startIndex, endIndex);

    const userDetails = useSelector((state) => state.filter.userInfo);

    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };

    const loancount = userInfo.data && userInfo.data.length > 0 && userInfo.data.filter((elem, i) => {
        return elem.categories_id === 2
    })
    const cardCount = userInfo.data && userInfo.data.length > 0 && userInfo.data.filter((elem, i) => {
        return elem.categories_id === 1
    })
    const userInformation = async () => {

        try {
            const res = await axios.post(`${process.env.APIHOST}/api/banks/dashboard`, { id: userDetails.customer_id })
            if (res) {
                
                if(res.data.data && res.data.data.length>0){
                    trackApplication(res.data.data[0].id )
                }
                setUserInfo(res.data)
                setUtm(res.data.user_data.utm_id)
            }
        } catch (error) {
            console.log("Message user info:", error);
        }
    }
    const trackApplication = async (id) => {
        try {
            const result = await axios.post(`${process.env.APIHOST}/api/banks/track-application`, { id })
            if (result) {
                setTrackData(result.data)
                setpopup(true)
            }
        } catch (error) {
            console.log("Message track applications:", error);
        }
    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setUtm(JSON.parse(localStorage.getItem("Utm")));
        }
        
        if (!user) {
            router.push('/')
        }
        if(userDetails.customer_id){
            userInformation()
        }
            
        
        
    }, [userDetails])
    const dateFormate = (data) => {
        const d = new Date(data);
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        return `${`${da}-${mo}-${ye}`}`;
    }

   
    return (
        <>
            <div className='dashboard-user-top-box'>
                <div className="user-detail-box user-info-box">
                    <div className='user-image'>
                        <Image src="/images/profile.webp" alt="Profile" width = {46} height = {46} className="user-profile-image" />
                    </div>
                    <div className='user-name-detail'>
                        <h2 className="user-name">Welcome! <br /><b> {user ? user.full_name : "User"}</b></h2>
                    </div>
                </div>
                <div className='credit-score-box loan-card-box' >
                    <div className='cr-icon card-icont '>
                        <Image src='/images/icon/Cards-feature/card-2-card.webp' height={36} width={36} loading='lazy' alt='cibil score' />
                    </div>
                    <div className='cibil-text-box'>
                        <p>
                            Card
                        </p>
                        <span className='cp'>{cardCount ? cardCount.length : 0}</span>
                    </div>
                </div>
                <div className='credit-score-box card-card-box'>
                    <div className='cr-icon loan-icont'>
                        <Image src='/images/icon/Cards-feature/cashback.webp' height={36} width={36} loading='lazy'  alt='loan' />
                    </div>
                    <div className='cibil-text-box'>

                        <p>
                            Loan
                        </p>
                        <span className='cp'>{loancount ? loancount.length : 0}</span>

                    </div>
                </div>
                <div className='credit-score-box cibil-card-box'>
                    <div className='cr-icon cibil-icont'>
                        <Image src='/images/icon/creditbycard/check-eligiblity.webp' height={36} width={36} loading='lazy' alt='cibil score' />
                    </div>
                    <div className='cibil-text-box'>
                        <p>Cibil Score</p>
                        <span>750</span>
                    </div>
                </div>
            </div>



           {
            currentPageData? <div className="content-row">
                <div className="content-col content-col-50 col-50">
                    <div className="user-detail-container">
                        <div className="user-detail-content">
                            <div className='user-product-box'>
                                <h4 className="your-product">Order History</h4>

                                <div className="tab-content tab-content-product" id="myTabContent">
                                    <div className="tab-pane fade show active" id="user-loan" role="tabpanel" aria-labelledby="loan-tab">
                                        <div className='table-responsive'>
                                            <table className='table table-bordered'>
                                                <thead className='table-secondary'>
                                                    <tr>
                                                        <th>Product Name</th>
                                                        <th>Application</th>
                                                        <th>Applied Date</th>
                                                        <th>Track Application</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {
                                                        userInfo.data && userInfo.data.length > 0 && currentPageData.map((elem, i) => {
                                                            return (
                                                                <Fragment key={i}>
                                                                    <tr>
                                                                        <td>{elem.name}</td>
                                                                        <td>{elem.id}</td>
                                                                        <td>{dateFormate(elem.createdAt)}</td>
                                                                        <td><a className={`track ${trackbtn} `} onClick={() => {
                                                                            trackApplication(elem.id)
                                                                        } 
                                                                        }>Track</a></td>
                                                                    </tr>
                                                                </Fragment>
                                                            )
                                                        })
                                                    }


                                                </tbody>

                                            </table>
                                            <Stack spacing={2}>

                                                <Pagination
                                                    count={Math.ceil(userInfo.data ? userInfo.data.length / itemsPerPage : 0)}
                                                    page={page}
                                                    onChange={(event, value) => {
                                                        setPage(value);
                                                    }}

                                                    variant="outlined" shape="rounded"
                                                />

                                            </Stack>
                                        </div>
                                    </div>
                                    {/* track application popup */}

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="content-col content-col-50 col-50">
                    <div className={`track-popup ${popup} `}>
                        <div className="row header-status">
                            <div className="col-lg-4 col-md-4">
                                <div className="apli-detail">
                                    <p> Application Number</p>
                                    <h4>{trackData ? trackData.user_data[0].id : 'N/A'}</h4>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5">
                                <div className="apli-detail">
                                    <p>Product Name</p>
                                    <h4>{trackData ? trackData.user_data[0].name : 'N/A'}</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="apli-detail">
                                    <p>Application Date</p>
                                    <h4>{trackData ? dateFormate(trackData.user_data[0].createdAt) : 'N/A'}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="status-box">
                            <ul className="status-list">
                                <li className="status-ul active">
                                    <h5>Assigned</h5>
                                    <div className="assign-detail">
                                        <p><b>Name:</b> {trackData ? trackData.user_data[0].assignee : 'N/A'}</p>
                                        <p><b>Date :</b> {trackData ? dateFormate(trackData.user_data[0].createdAt) : 'N/A'}</p>
                                    </div>
                                </li>
                                <li className="status-ul">
                                    <h5>{trackData ? trackData.user_data[0].crm_status : 'N/A'}</h5>
                                </li>
                            </ul>
                        </div>
                    </div> 
                </div>
            </div>:null
           }
           




            <div className='row offer-refer-row'>
                <div className='col-lg-5 col-md-6'>
                    <div className='user-detail refer-and-earn'>

                        <div className='refer-row'>
                            <h5> Refer & Earn</h5>
                            <div className='refer-btm'>
                                <div className='socialWrapper'>
                                    <FacebookShareButton
                                        url={`referloan.in?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=${utm}`} >
                                        <FacebookIcon size={32} round />
                                    </FacebookShareButton>
                                    <WhatsappShareButton
                                        url={`referloan.in?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=${utm}`} >
                                        <WhatsappIcon size={32} round />
                                    </WhatsappShareButton>
                                    <LinkedinShareButton
                                        url={`referloan.in?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=${utm}`} >
                                        <LinkedinIcon size={32} round />
                                    </LinkedinShareButton>
                                    <TwitterShareButton
                                        url={`referloan.in?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=${utm}`} >
                                        <TwitterIcon size={32} round />
                                    </TwitterShareButton>
                                    <RedditShareButton
                                        url={`referloan.in?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=${utm}`} >
                                        <RedditIcon size={32} round />
                                    </RedditShareButton>
                                </div>
                            </div>
                        </div>
                        <div className='inputWrapper'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <label className='share-lable'>Copy URL and Share</label>
                                    <div className='url-input-box'>
                                        <input
                                            type="text"
                                            className='form-control col-50'
                                            readOnly
                                            value={`referloan.in?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=${utm}`}
                                            placeholder="Type some text here"
                                            onChange={(event) => setText(event.target.value)}
                                        />
                                        <CopyToClipboard text={`referloan.in?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=${utm}`} onCopy={onCopyText}>
                                            <div className="copy-area">
                                                {
                                                    isCopied ? <span className={`copy-feedback ${isCopied ? "active" : ""}`}>
                                                        Copied!  </span> : <span>Copy URL</span>
                                                }
                                            </div>
                                        </CopyToClipboard>
                                    </div>
                                </div>

                                <div className='col-12'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-7 col-md-6'>
                    <div className='user-offers-section'>
                        <div className='ofer-heading'>
                            <h3>Offers For You</h3>
                        </div>
                        <div className='user-offer-row'>
                        <Carousel {...settings}>
                            <div className='user-oofer-col'>
                                <div className='offer-card-user home-loan'>

                                    <div className='ofer-card-heading'>
                                        <h4>HDFC Credit Card</h4>
                                    </div>
                                    <div className='roi-ofer'>
                                        <p>Cashback<b>500 &#8360;</b></p>
                                    </div>
                                    <div className='card-btm'>
                                        <a href="#">
                                            <span> Get This Offer</span>
                                            <i className="ri-arrow-right-line"></i>
                                        </a>
                                        <div className='ofer-icon'>
                                            <i className="ri-mastercard-fill"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='user-oofer-col'>
                                <div className='offer-card-user home-loan'>

                                    <div className='ofer-card-heading'>
                                        <h4>Home Loan</h4>
                                    </div>
                                    <div className='roi-ofer'>
                                        <p>R.O.I<b>9% to 9%</b></p>
                                    </div>
                                    <div className='card-btm'>
                                        <a href="#">
                                            <span> Get This Offer</span>
                                            <i className="ri-arrow-right-line"></i>
                                        </a>
                                        <div className='ofer-icon'>
                                            <i className="ri-building-fill"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='user-oofer-col'>
                                <a href="/loans/standard-chartered-home-loan" target='_blank'>
                                    <div className='offer-card-user home-loan'>
                                        <div className='ofer-card-heading'>
                                            <h4>Standard Chartered Home Loan</h4>
                                        </div>
                                        <div className='roi-ofer'>
                                            <p>R.O.I<b>9% to 9%</b></p>
                                        </div>
                                        <div className='card-btm'>
                                            <a href="#">
                                                <span> Get This Offer</span>
                                                <i className="ri-arrow-right-line"></i>
                                            </a>
                                            <div className='ofer-icon'>
                                                <i className="ri-building-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='user-oofer-col'>
                                <div className='offer-card-user home-loan'>

                                    <div className='ofer-card-heading'>
                                        <h4>Home Loan</h4>
                                    </div>
                                    <div className='roi-ofer'>
                                        <p>R.O.I<b>9% to 9%</b></p>
                                    </div>
                                    <div className='card-btm'>
                                        <a href="/loans/standard-chartered-home-loan">
                                            <span> Get This Offer</span>
                                            <i className="ri-arrow-right-line"></i>
                                        </a>
                                        <div className='ofer-icon'>
                                            <i className="ri-building-fill"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard

