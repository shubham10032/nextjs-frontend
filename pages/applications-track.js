import React,{useState} from 'react'
import dynamic from 'next/dynamic';
import axios from 'axios';
const Faq = dynamic(() => import('../components/page/faq'))
const LeaveQuestion = dynamic(() => import('../components/page/leaveQuestion') )

const ApplicationTrack = () => {
    const [aplicationNumber, setApplicationNumber] = useState('')
    const [trackData, setTrackData] = useState()
    const [defaulttrack, setdefaulttrack] = useState(false)
    const trackApplication = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.post(`${process.env.APIHOST}/api/banks/track-application`, { id: aplicationNumber })
            if (result.data.status === 200) {
                if (result.data.user_data == "" || result.data.user_data == null) {
                    setdefaulttrack(true)
                }
                setdefaulttrack(false)
                setTrackData(result.data)
            }
            else {
                setdefaulttrack(true)
            }

        }
        catch (error) {
            setTrackData("")
            setdefaulttrack(true)
            console.log("Message Track Application", error)
        }
    }
    const dateFormate = (data) => {
        const d = new Date(data);
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        return `${`${da}-${mo}-${ye}`}`;
    }
    return (
        <>
            <section className='cs-hero-banner track-application-section'>

                <div className='container'>
                    <div className='track-application'>
                        <h2 className='track-headign'>
                            Track Your Application
                        </h2>
                        <div className='track-form-box'>
                            <form className='track-form' onSubmit={trackApplication}>
                                <div className=''>
                                    <div className="salary-type-box">
                                        <div className="form-group salayried">
                                            <span>Application Number</span>
                                        </div>

                                    </div>

                                    <div className='form-tract application-tract'>
                                        <div className='form-input'>
                                            <div className='cs-input-box'>
                                                <input type='number' placeholder='Application Number' onChange={(e) => setApplicationNumber(e.target.value)} />
                                            </div>
                                            <div className="feature-four__top-btn-box track-btn-box">
                                                <button className="thm-btn feature-four__top-btn track-btn" type="submit"   >Track Application</button>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>

            {
                trackData ? <section className='status-section'>
                    <div className='container'>
                        <div className='row header-status'>
                            <div className='col-lg-2 col-md-6'>
                                <div className='apli-detail'>
                                    <p>Product Name</p>
                                    <h4>{trackData ? trackData.user_data[0].name : null}</h4>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-6'>
                                <div className='apli-detail'>
                                    <p> Application Number</p>
                                    <h4>{trackData ? trackData.user_data[0].application_no : null}</h4>
                                </div>
                            </div>
                            {/* <div className='col-lg-2 col-md-6'>
                <div className='apli-detail'>
                    <p>Product</p>
                    <h4>Personal Loan</h4>
                </div>
            </div> */}


                            <div className='col-lg-2 col-md-6'>
                                <div className='apli-detail'>
                                    <p>Mobile Number</p>
                                    <h4>{trackData ? trackData.user_data[0].phone_no : null}</h4>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-6'>
                                <div className='apli-detail'>
                                    <p>Application Date</p>
                                    <h4>{trackData ? dateFormate(trackData.user_data[0].createdAt) : 'N/A'}</h4>
                                </div>
                            </div>
                        </div>
                        <div className='status-box'>
                            <ul className='status-list'>
                                <li className='status-ul active'>
                                    <h5>Assigned</h5>
                                    <div className='assign-detail'>

                                        <p><b>Name:</b> {trackData ? trackData.user_data[0].assignee : 'N/A'}</p>
                                        <p><b>Date :</b> {trackData ? dateFormate(trackData.user_data[0].createdAt) : 'N/A'}</p>
                                    </div>
                                </li>
                                <li className='status-ul'>
                                    <h5>Document Pending</h5>
                                    <div className='assign-detail'>
                                        {
                                            <p>{trackData ? trackData.user_data[0].crm_status : 'N/A'}</p>
                                        }
                                        {/* <p>Adhar Card</p>|
                        <p>PAN Card </p>|
                        <p>3 month salary slip</p>| */}
                                    </div>
                                </li>
                                {/* <li className='status-ul'>
                    <h5>In process</h5>
                </li>
                <li className='status-ul'>
                    <h5>Disbursed</h5>
                </li> */}
                            </ul>
                        </div>
                    </div>
                </section>
                    : null
            }

            {
                defaulttrack ? <div className='record-not-found container'>
                    <div className='header-status'>
                        <h3>Sorry!</h3>
                        <span>Record not found</span>
                    </div>
                </div>
                    :
                    null
            }
            <section className="faq-section track-faq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <LeaveQuestion />
                        </div>
                        <div className="col-md-12">

                            {/* {props.faq != '' ? <Faq faq={props.faq} /> : null} */}

                            <div className="col-md-12">
                                <div className="faqSetion cs-faq">
                                    <div className="faq_row">
                                        <div className="accordion faqAccordion" id="accordionExample">
                                            <div className="accordion-item my-accourdian-section ">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Why is a PAN card needed in order to check your credit score?
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        The PAN card is necessary to appropriately calculate the person's credit score.
                                                        The credit score can also be obtained by using other valid Proof of Identity (PoI)
                                                        in place of the PAN card. The PoI helps in identifying individuals in the database.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item my-accourdian-section ">
                                                <h2 className="accordion-header" id="headingtwo">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwo" aria-expanded="true" aria-controls="collapseOne">
                                                        Can inquiries on credit scores impact the score?
                                                    </button>
                                                </h2>
                                                <div id="collapsetwo" className="accordion-collapse collapse" aria-labelledby="headingtwo" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        No, the inquiry won't have an impact on your credit score. Your credit score may be
                                                        slightly impacted when you apply for a loan or credit card, but not when you check your credit score.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item my-accourdian-section ">
                                                <h2 className="accordion-header" id="heading3">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapseOne">
                                                        Is there a limitation on how many times you can access your credit score?
                                                    </button>
                                                </h2>
                                                <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        The ability to check your credit score is not restricted. You are free to check your credit score as much as time you wish.
                                                        The credit score inquiry is regarded as a soft check because only hard checks have the power to lower your credit score.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item my-accourdian-section ">
                                                <h2 className="accordion-header" id="heading4">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapseOne">
                                                        How do credit scores change?
                                                    </button>
                                                </h2>
                                                <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        The credit score is influenced by changes to the credit report; if and when these changes are made,
                                                        the credit score will change based on whether they have a positive or negative effect.
                                                        For instance, your credit record and score will be impacted, when you apply for
                                                        a credit card or loan and make payments on the credit.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item my-accourdian-section ">
                                                <h2 className="accordion-header" id="heading5">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapseOne">
                                                        Is there any charge to use ReferLoan’s Credit Score Calculator?
                                                    </button>
                                                </h2>
                                                <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        No, you won’t have to pay any charges to use ReferLoan’s Credit Score Calculator
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ApplicationTrack