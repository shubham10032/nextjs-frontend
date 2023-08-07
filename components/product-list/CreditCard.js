import { formatNumber, makeUpperCase } from './../../utils'
import Link from 'next/link';
const CreditCard = ({ products }) => {
    return (
        <>
            {products.length > 0 && products.map((item, key) => (
                <CreditCardListLayout key={key} item={item} />
            ))}
        </>
    )
}

export default CreditCard

export const CreditCardListLayout = ({ item }) => {
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
                                <p className="rew1">Joining Fee</p>
                                <div className="trav">{JSON.parse(item.bankProductInfo)['fee'] ? `Rs. ${JSON.parse(item.bankProductInfo)['fee']} + GST.` : 'N/A'}</div>
                            </div>
                           
                            <div className="xcard-charge-join">
                                <p className="rew1">Minimum Income Required</p>
                                <div className="trav">{JSON.parse(item.bankProductInfo)['min_income_salaried'] ? `Rs. ${JSON.parse(item.bankProductInfo)['min_income_salaried']}` : 'N/A'}</div>
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

                                <li><b>USP</b> : 12 Complimentary domestic and international airport lounge access</li>
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