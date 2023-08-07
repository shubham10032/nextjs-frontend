import React, { useState } from 'react';
import {formatNumberAmount} from './../../utils' 

const AmortizationTable = ({ pAmount, duration, interest }) => {
    const intrate = interest / 1200;
    const emi = duration ? Math.round(pAmount * intrate / (1 - (Math.pow(1 / (1 + intrate), duration)))) : 0;
    const totalAmountofCredit = Math.round((emi / intrate) * (1 - Math.pow((1 + intrate), (-duration))));
    const totalAmountofInterest = Math.round(emi * duration - totalAmountofCredit);

    const rows = [];
    // console.log({rows})
    let balance = pAmount;
    let totalInterest = 0;
    let loanPaidTillDate = 0;
    for (let i = 1; i <= duration; i++) {
        const interestPayment = Math.round(balance * intrate);
        const principalPayment = Math.round(emi - interestPayment);
        totalInterest += interestPayment;
        balance -= principalPayment;
        loanPaidTillDate += principalPayment;

        rows.push({
            period: i,
            paymentDate: new Date(Date.now() + i * 30 * 24 * 60 * 60 * 1000).toISOString().substring(0, 10), // assuming monthly payments
            emi,
            principalPayment,
            interestPayment,
            balance,
            loanPaidTillDate,
            loanPaidTillDatePercent: ((loanPaidTillDate / pAmount) * 100).toFixed(2),
        });
    }

    const [collapseYearly, setCollapseYearly] = useState(false);

    const handleCollapse = () => {
        setCollapseYearly(!collapseYearly);
    }

    const getYear = (dateString) => {
        const date = new Date(dateString);
        return date.getFullYear();
    }

    const yearGroups = rows.reduce((result, row) => {
        let dt = new Date(row.paymentDate)
        const year = getYear(row.paymentDate);
        if (!result[year]) {
            result[year] = {
                rows: [],
                totalPrincipal: 0,
                totalInterest: 0,
                totalBalance: 0,
                loanPaidTillDatePercent: 0
            };
        }
        result[year].rows.push(row);
        result[year].totalPrincipal += row.principalPayment;
        result[year].totalInterest += row.interestPayment;
        result[year].totalBalance = row.balance;
        result[year].loanPaidTillDatePercent = row.loanPaidTillDatePercent;
        return result;
    }, {});


    const yearlyTotals = Object.keys(yearGroups).map((year) => ({

        year,
        totalPrincipal: yearGroups[year].totalPrincipal,
        totalInterest: yearGroups[year].totalInterest,
        totalBalance: yearGroups[year].totalBalance,
        loanPaidTillDatePercent: yearGroups[year].loanPaidTillDatePercent,
    }));



    const createMonth = (date) => {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let dt = new Date(date)
        const monthIndex = dt.getMonth()
        return monthNames[monthIndex]
    }

    return (
        <div className="accordion accordion-flush  my-accourdian-table table-responsive" id="accordionFlushExample" >
            <table>
                <thead>
                    <tr className='tr-head'>
                        <th className='year-td col-tb-1'>Year</th>
                        <th className='Total-td col-tb-2'>Total Principal <br />( A )</th>
                        <th className='Intrent-td col-tb-3'>Total Interest <br />( B )</th>
                        <th className='balance-td col-tb-4'>Balance <br />( A + B)</th>
                        <th className='balance-td col-tb-5'>Total Payment </th>
                        <th className='date-td col-tb-6'>Loan Paid Till Date (%)</th>
                    </tr>
                </thead>
                {Object.keys(yearGroups).map((year, index) => (
                    <tbody key={index} className={`accordion-item my-accourdian-section table-accourdian`}  >
                        <tr>
                            <td className='col-tb-1 accordion-header drop-btn' id={'flush-heading' + index} itemProp="name" >
                                <button className="accordion-button collapsed btn-toggle" type="button"
                                    data-bs-toggle="collapse" data-bs-target={'#flush-collapse' + index} aria-expanded="false"
                                    aria-controls={'flush-collapse' + index}> {year}</button>
                            </td>
                            <td className='col-tb-2'>₹ {formatNumberAmount(yearGroups[year].totalPrincipal)}</td>
                            <td className='col-tb-3'>₹ {formatNumberAmount(yearGroups[year].totalInterest)}</td>
                            <td className='col-tb-4'>₹ {formatNumberAmount(yearGroups[year].totalPrincipal + yearGroups[year].totalInterest)}</td>
                            <td className='col-tb-5'>₹ {yearGroups[year].totalBalance<0?0:formatNumberAmount(yearGroups[year].totalBalance)}</td>
                            <td className='col-tb-6'>{yearGroups[year].loanPaidTillDatePercent} %</td>
                            {/* <td></td> */}
                        </tr>
                        <tr>
                            <td colSpan="6" className="p-0 brdr" >
                                <div id={'flush-collapse' + index} className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample" >
                                    <div itemScope={true} itemProp="acceptedAnswer" itemType="https://schema.org/Answer">

                                        <table>
                                            {yearGroups[year].rows.map((row) => (
                                                <tr key={row.period}>
                                                    <td className='col-tb-1'>{createMonth(row.paymentDate)}</td>
                                                    <td className='col-tb-2'>₹ {formatNumberAmount(row.principalPayment)}</td>
                                                    <td className='col-tb-3'>₹ {formatNumberAmount(row.interestPayment)}</td>
                                                    <td className='col-tb-4'>₹ {formatNumberAmount(row.principalPayment + row.interestPayment)}</td>
                                                    <td className='col-tb-5'>₹ {(row.balance)<0?0:formatNumberAmount(row.balance)}</td>
                                                    <td className='col-tb-6'>{row.loanPaidTillDatePercent} %</td>
                                                </tr>
                                            ))}
                                        </table>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>

    )
}

export default AmortizationTable;
