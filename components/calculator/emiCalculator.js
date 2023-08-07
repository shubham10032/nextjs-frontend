import React, { useState } from 'react'

import Slider from '@mui/material/Slider'; 
import { Table } from '@material-ui/core'
import { styled } from '@mui/material/styles';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import AmortizationTable from './AmortizationTable';
ChartJS.register(ArcElement, Tooltip, Legend);
import TableDetails from './tableDetails';
import calculateFlatInterestRate from './emiCalculationFunction'
import { calculateReducingInterestRate } from './emiCalculationFunction'
const PrettoSlider = styled(Slider)({
  color: '#00796a',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#ff9302',
    border: 'none',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#00796a',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    '&.MuiSlider-markActive': {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  },
});

const emiCalculator = ({ roi='8' }) => {
  const [interestype, setInterestType] = useState('reducing')
  const [tenureType, setTenureType] = useState('months')
  const [pAmount, setpAmount] = useState(100000);
  const [interest, setInterest] = useState(roi != '0'?roi:9.50);
  const [duration, setDuration] = useState(12)
  let emi = 0;
  let payableAmt = 0;
  let totalAmountofInterest = 0;
  let maxduration;
  const maxvalue = 100000000000000;
  if (tenureType === 'months') {
    maxduration = 360;
  } else {
    maxduration = 30;
  }

  const maxint = 100;

  if (interestype === 'flat') {
    const result = calculateFlatInterestRate(pAmount, interest, (tenureType === 'years' ? duration : (duration / 12)));
    emi = Math.round(result.monthlyEMI)
    payableAmt = Math.round(result.totalAmount)
    totalAmountofInterest = Math.round(result.totalInterest)
    if (emi === Infinity) {
      emi = 0
    }
  } else {
    const result = calculateReducingInterestRate(pAmount, interest, (tenureType === 'years' ? duration : (duration / 12)));
    emi = Math.round(result.emi)
    payableAmt = Math.round(result.totalAmount)
    totalAmountofInterest = Math.round(result.totalInterest)
    if (emi === Infinity) {
      emi = 0
    }
  }

  const handleChange = event => {
    let { value, max } = event.target;
    value = Math.max(Math.min(Number(max), Number(value)));
    setDuration(value <= 0 ? '' : value);
  };
  return (
    <>
      <div className='row cla-form-row'>

        <div className='col-lg-7 col-md-12'>
          <div className='range-box'>
            <h5>Interest Type</h5>
            <div className="inputGroup  salary-type-box">
              <input type='radio' name="interestType" id="flat" checked={interestype === 'flat'} onChange={() => setInterestType('flat')} />
              <label htmlFor='flat'>Flat</label>
              <input type='radio' name="interestType" id="reducing" checked={interestype === 'reducing'} onChange={() => setInterestType('reducing')} />
              <label htmlFor='reducing'>Reducing</label>
            </div>

            <div className="rangeArea">
              <div className="rangeHead">
                <h2>Loan Amount</h2>

                <div className="outputArea">
                  <input type="text" onKeyPress={(event) => {
                    if (!/[0-9.]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }} value={pAmount} name="loan_amount" id="loan_amount" className="emi_check" onChange={(e) => { setpAmount(e.target.value) }} maxLength="10000000000000" /> <span className="emi-icon"> ₹ </span>
                </div>

              </div>

              <PrettoSlider value={pAmount} aria-label="Default" onChange={(e) => { setpAmount(e.target.value) }} max={maxvalue}
              ></PrettoSlider>
            </div>
            <div className="rangeArea">
              <div className="rangeHead">
                <h2>Interest Rate</h2>
                <div className="outputArea">
                  <input
                    onKeyPress={(event) => {
                      if (!/[0-9.]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    type="number"
                    value={interest !=''?interest:9.5}
                    name="interest_rate"
                    id="interest_rate"
                    min="1"
                    max="100"
                    className="emi_check"
                    onChange={(e) => {
                      let value = parseFloat(e.target.value);
                      if (value < 1) {
                        value = 1;
                      } else if (value > 100) {
                        value = 100;
                      }
                      setInterest(value);
                    }}
                  /> <span className="emi-icon"> % </span>
                </div>
              </div>
              <PrettoSlider value={interest} aria-label="Default" onChange={(e, vamt) => { setInterest(vamt) }} max={maxint} ></PrettoSlider>
            </div>
            <div className="rangeArea">
              <div className="rangeHead">
                <h2>Loan Tenure</h2>
                <div className='tenureType salary-type-box'>
                  <input type='radio' name="tenureType" id="year" checked={tenureType === 'years'} onChange={() => {
                    setDuration(duration / 12)
                    setTenureType('years')
                  }} />
                  <label htmlFor='year'>Years</label>
                  <input type='radio' name="tenureType" id="month" checked={tenureType === 'months'} onChange={() => {
                    setDuration(duration * 12)
                    setTenureType('months')
                  }} />
                  <label htmlFor='month'>Months</label>
                </div>
                <div className="outputArea">
                  <input type="number" onKeyPress={(event) => {
                    if (!/[0-9.]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}

                    max={tenureType === 'months' ? '360' : '30'}
                    value={duration} name="tenure" id="tenure" className="emi_check" onChange={(e) => { handleChange(e) }} /> <span className="emi-icon" >{tenureType === 'months' ? 'Mo' : 'Yr'}
                  </span></div>

              </div>
              <PrettoSlider
                onChange={(e, vdur) => { setDuration(vdur) }} value={duration} max={maxduration}

              />
            </div>
          </div>
        </div>
        <div className='col-lg-5 col-md-12'>
          <div className="mb-1">
            <TableDetails emi={emi} tenureType={tenureType} loanamt={pAmount} interest={interest} tenure={duration} totalIntrest={totalAmountofInterest} tatalpayment={payableAmt} />
          </div>
          <div className='pie-chard-box'>
            <Pie className='clChart'
              data={{

                datasets: [{
                  data: [totalAmountofInterest, pAmount],
                  backgroundColor: ['rgb(0, 121, 106)', 'rgb(255, 147, 2)']
                }],
                labels: ['Total Interest', 'Total Amount']
              }}
              width={150}
              height={150}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>

      <AmortizationTable pAmount={pAmount} duration={tenureType === 'months' ? duration : duration * 12} interest={interest} />

      <div>


      </div>


    </>
  )
}

export default emiCalculator