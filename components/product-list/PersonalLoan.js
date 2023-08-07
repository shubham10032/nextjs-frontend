import { formatNumber, makeUpperCase } from './../../utils'
import Link from 'next/link';
const PersonalLoan = ({ products }) => {
    return (
        <>
            {products.length > 0 && products.map((item, key) => (

                <PersonalLoanListLayout key={key} item={item} />
            ))}
        </>
    )
}



export default PersonalLoan

export const PersonalLoanListLayout = ({ item }) => {
    return <>
        <div className="money-card-row clearfix">
            <div className="xcard-row xloan-row">
                <div className="row header-row1">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="xloan-info">
                            <div className="xloan-info-name">
                                {item.bankProductName}
                            </div>
                            <div className="xloan--rating">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="xloan-charge-join xloan-charge-join-cibil">
                            <p className="rew"><img src="/images/cibil.png" alt="" /><span>Excellent</span></p>
                            <div className="trav">Approval Chances {item.chance} %</div>
                        </div>
                    </div>
                </div>
                <div className="row main-xloan">
                    <div className="col-lg-10 col-md-12">
                        <div className="xcard-charges x-loan">
                            <div className="xcard-info-img">
                                <img src={`/uploads/prod_banimage/${makeUpperCase(item.bankProductName.trim().toUpperCase(), "_")}_img.webp`} onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src = '/images/default-img.png';
                                }} alt="" />
                            </div>
                            <div className="xcard-charge-join">
                                <p className="rew1">R.O.I</p>
                                <div className="trav">{JSON.parse(item.bankProductInfo)['interest_min']}% to {JSON.parse(item.bankProductInfo)['interest_max']}%</div>
                            </div>
                           
                            <div className="xcard-charge-join">
                                <p className="rew1">Processing Fees</p>   
                                <div className="trav"> 
                                {JSON.parse(item.bankProductInfo)['processing_fee'] === 'fixed' ? `₹ ${JSON.parse(item.bankProductInfo)['fee']}` :JSON.parse(item.bankProductInfo)['processing_fee'] === 'range' ? `${JSON.parse(item.bankProductInfo)['min_fee']}% - ${JSON.parse(item.bankProductInfo)['max_fee']}%` :JSON.parse(item.bankProductInfo)['processing_fee'] === 'rangeFixed' ? `${JSON.parse(item.bankProductInfo)['min_fee']}-${JSON.parse(item.bankProductInfo)['max_fee']}` :'N/A'}</div>
                            </div>                                                                                              
                            
                            <div className="xcard-charge-join">
                                <p className="rew1">Income Required</p>
                                <div className="trav">{JSON.parse(item.bankProductInfo)['net_salary_minimum'] != '' || JSON.parse(item.bankProductInfo)['net_salary_minimum'] != undefined ? `${JSON.parse(item.bankProductInfo)['net_salary_minimum']} /m` : "N/A"} </div>
                            </div>
                            <div className="xcard-charge-join">
                                <p className="rew1">Loan Amount</p>
                                <div className="trav">{formatNumber(JSON.parse(item.bankProductInfo)['loan_amt_minimum'])}-{formatNumber(JSON.parse(item.bankProductInfo)['loan_amt_maximum'])}</div>
                            </div>
                            <div className="xcard-charge-join">
                                <p className="rew1">Cibil Score</p>
                                <div className="trav">{JSON.parse(item.bankProductInfo)['cibil_minimum'] ? JSON.parse(item.bankProductInfo)['cibil_minimum'] : 'N/A'} or above</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 col-md-9">
                        <div className="xloan-ul">
                            <ul>
                                <li><b>USP</b> : Funding to All Profile whether Employee of Proprietorship firm/Partnership firm or Company</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3">
                        <div className="grab-btn">
                            <div className="xcard-applybtn mar1">
                                <Link href={item.slug} ><a className="thm-btn1 tbl-grab">Grab Deal</a></Link><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}