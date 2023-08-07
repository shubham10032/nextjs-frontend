import { useState } from 'react';
import { useFormik } from 'formik'
import axios from 'axios';
import Link from 'next/link';
import { deactivateAccount } from './../utils'
import { toast, ToastContainer } from 'react-toastify';
const BestProduct = () => {
    const [status, setStatus] = useState(false)
    const [initialValuess, setInitialValuess] = useState({
        name: '',
        email: '',
        phone: '',
        reason: '',
        term: false,
    })

    const { values, handleBlur, setFieldValue, handleChange, handleSubmit, errors, touched, setFieldTouched } =
        useFormik({
            initialValues: initialValuess,
            validationSchema: deactivateAccount,
            onSubmit: async (values, actions) => {
                try {
                    const res = await axios.post(`${process.env.APIHOST}/api/profile/deactivate-account`, values);

                    if(res.data.status == true) {
                        setStatus(true)
                    }else{
                        toast.error(res.data.message, {
                            position: 'top-right',
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'light',
                        });
                    }
                } catch (error) {
                    toast.error(`Something went wrong`, {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                    console.log('Message', error)
                }
            },
        });

    return (
        <>
        <ToastContainer />

            {
                status ? <div className='container toastcont'><div className='card'><div className="card-body"><div className="jumbotron text-center mb-5">
                    <h1 className="display-3">Thank You!</h1>
                    <p className="lead">Your Account deactivation request accept successfuly. </p>

                    <p>
                        Your account will be deactivated within 24 hours
                    </p>
                    <p className="lead">
                        <Link href={'/'}><a className="btn btn-bg " role="button">Continue to homepage</a></Link>
                    </p>
                </div> 
                </div>
                </div>
                </div>:
                    <div className='container toastcont'>
                        <div className='best-pro-box d-flex mb-4'>
                            <h2 className='mx-auto'>
                                Account deactivate request application.
                            </h2>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }}>
                                    <div className="row">
                                        <div className="col">
                                            <div className="question-box-cibil">
                                                <label htmlFor="name">Full Name</label>
                                                <div className="Cibil">
                                                    <input type="text" className='ps-2' id='name' placeholder="Full Name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} required />
                                                    {errors.name && touched.name ? (
                                                        <p className="accvalidation">{errors.name}</p>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="question-box-cibil">
                                                <label htmlFor="email">Email address</label>
                                                <div className="Cibil">
                                                    <input type="text" className='ps-2' id='email' placeholder="Email Address" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} required />
                                                    {errors.email && touched.email ? (
                                                        <p className="accvalidation">{errors.email}</p>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="question-box-cibil">
                                                <label htmlFor="phone">Phone Number</label>
                                                <div className="Cibil">
                                                    <input type="text" id="phone" className="ps-2 shadow-none" name="phone" placeholder="Mobile Number" value={values.phone} onChange={handleChange} onBlur={handleBlur} required />
                                                    {errors.phone && touched.phone ? (
                                                        <p className="accvalidation">{errors.phone}</p>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <div className="question-box-cibil">
                                                <label htmlFor="reason">Reason</label>
                                                <div className="Cibil">
                                                    <textarea name='reason' className="form-control shadow-none" id="reason" rows="3" value={values.reason} onChange={handleChange} onBlur={handleBlur} required></textarea>
                                                    {errors.reason && touched.reason ? (
                                                        <p className="accvalidation">{errors.reason}</p>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row loantype-extra ">
                                        <div className="loanTypebtn mt-3">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" name="term" id="flexCheckChecked" required /><label className="form-check-label" htmlFor="flexCheckChecked">&nbsp;If you delete your account, it’ll permanently delete every sub-account and all its data, including all personal details. This can’t be reversed.
                                                    We Understand &nbsp;if you don’t want to continue with our services, although we would like to know the reason so we could work on it.
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feature-four__top-btn-box financial-br mt-4">
                                        <button tipe="submit" className="thm-btn feature-four__top-btn" type="submit">DELETE ACCOUNT</button>
                                    </div>
                                </form>

                                <div>
                                    <h5 className='mt-5'>Note:</h5>
                                    <ol>
                                        <li>By Data, we here refer to all your saved personal information, account details, documents, images, files, etc.</li>

                                        <li>Once you delete your account all your data will be permanently removed from our database after 90 days.</li>
                                        <li>If the Applicant is willing to remove a partial or any specific data, they can raise a request for the same.
                                        The reason of the data removal should be clearly mentioned.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                    </div>
            }

        </>
    )
}

export default BestProduct

