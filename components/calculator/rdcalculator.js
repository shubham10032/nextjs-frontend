import React, { useState } from 'react'
import Slider from '@mui/material/Slider';
import { Table, TableCell, TableRow, TableHead } from '@material-ui/core'
import { styled } from '@mui/material/styles';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import TableDetails from './tableDetails';
ChartJS.register(ArcElement, Tooltip, Legend);
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

const emiCalculator = () => {
  const [monthlyinvest, setMonthlyInvest] = useState('5000');
  const [interest, setInterest] = useState(9.56);
  const [year, setYear] = useState(2)
  const maxvalue = 10000000;
  const maxint = 20;
  const maxduration = 30;

  const months = year * 12;
  const R = 10000;
  const n = (4 * year);

  const i = interest / 400;
  const totalDeposit = monthlyinvest * months;
  let totalReturns = monthlyinvest * [(Math.pow((1 + i), n)) - 1] / (1 - (Math.pow((1 + i), (-1 / 3))));
  const returnInterest = (totalReturns - totalDeposit);

  function valuetext(value) {
    return `${value} Lac`;
  }
  return (
    <>
      <div className='row cla-form-row'>
      <div className='col-lg-8 col-md-12'>
          <div className='range-box'>
            <div className="rangeArea">
              <div className="rangeHead">
                <h2>Monthly Invest</h2>
                <div className="outputArea">
                  <input type="text" value={monthlyinvest} name="loan_amount" id="loan_amount" className="emi_check outline-none" onChange={(e) => { setMonthlyInvest(e.target.value) }} maxlength="8"
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  /> <span className="emi-icon"> ₹ </span>
                </div>
              </div>

              <PrettoSlider value={monthlyinvest} onChange={(e) => { setMonthlyInvest(e.target.value) }} max={maxvalue} getAriaValueText={valuetext}
              ></PrettoSlider>
            </div>
            <div className="rangeArea">
              <div className="rangeHead">
                <h2>Interest Rate</h2>
                <small>(9.50% to 19.55%)</small>
                <div className="outputArea">
                  <input type="text" onKeyPress={(event) => {
                    if (!/[0-9.]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }} value={interest} name="intrest_rate" id="intrest_rate" className="emi_check" onChange={(e) => { setInterest(e.target.value) }} maxLength='4' /> <span className="emi-icon"> % </span>
                </div>
              </div>
              <PrettoSlider value={interest} aria-label="Default"  onChange={(e, vamt) => { setInterest(vamt) }} max={maxint} ></PrettoSlider>

            </div>
            <div className="rangeArea">
              <div className="rangeHead">
                <h2>Investment Tenure </h2>
                <small>(1 year - 30 years)</small>
                <div className="outputArea">
                  <input type="text" onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }} value={year} name="tenure" id="tenure" className="emi_check" onChange={(e) => { setYear(e.target.value) }} maxLength='2' /> <span className="emi-icon" >Yr
                  </span></div>

              </div>
              <PrettoSlider
                onChange={(e, vdur) => { setYear(vdur) }} value={year} max={maxduration}
                
              />
            </div>
          </div>
        </div>
      <div className='col-lg-4 col-md-12'>
          <Table style={{ width: "100%", border: "none", borderBottom: "none", borderBottom: "none" }} area-lable="sample table" >
            <TableHead>
              <TableRow>
                <TableCell className='ETablecellText'>Invest Amount</TableCell>
                <TableCell className='ETablecellValue'>₹ {totalDeposit.toFixed(0)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='ETablecellText'> Est. returns</TableCell>
                <TableCell className='ETablecellValue'>₹ {returnInterest.toFixed(0)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='ETablecellText'>Total value</TableCell>
                <TableCell className='ETablecellValue'>₹ {totalReturns.toFixed(0)}</TableCell>
              </TableRow>
            </TableHead>
          </Table >
          <div className='pie-chard-box'>
            <Pie className='clChart'
              data={{

                datasets: [{
                  data: [returnInterest, totalDeposit],
                  backgroundColor: ['rgb(0, 121, 106)', 'rgb(255, 147, 2)']
                }],
                labels: ['Total Interest', 'Total Invest']
              }}
              width={200}
              height={200}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>
     
        
      </div>




    </>
  )
}

export default emiCalculator