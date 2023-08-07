import React, { useState } from 'react'
import { withStyles } from '@material-ui/styles'
import Slider from '@mui/material/Slider';
import { Typography } from '@material-ui/core'
import { Table, TableCell, TableRow, TableHead } from '@material-ui/core'
// import { Chart } from 'react-chartjs-2';
import { styled } from '@mui/material/styles';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
// export const PretoSlider = withStyles({
//   color: { color: "#ff9302", height: 10 },
//   thumb: { height: 20, width: 20, backgroundColor: 'ff9302', marginTop: -1, marginLeft: -9 },
//   track: { height: 20, borderRadius: 4 },
//   rail: { height: 40, color:"red", borderRadius: 4 }
// })(Slider);
import TableDetails from './tableDetails';

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


const mfcalculator = () => {
  const [pAmount, setpAmount] = useState(100000);
  const [interest, setInterest] = useState(12);
  const [duration, setDuration] = useState(10)
  const maxvalue = 100000000;
  const maxint = 20;
  const maxduration = 30;

  var monthlyRate = interest / 12 / 100;
  var months = duration * 12;

  var total_investment = (pAmount);
  var futureValue = Math.round(pAmount * Math.pow((1 + interest / 100), duration));
  var total_interest = futureValue - total_investment;

  function valuetext(value) {
    return `${value} Lac`;
  }
  return (
    <>
      <div className="row cla-form-row">

        <div className="col-lg-8 col-md-12">
          <div className='range-box'>
            <div className="rangeArea">
              <div className="rangeHead">
                <h2>Investment Amount</h2>
                <small>(Up to 1 Crore)</small>
                <div className="outputArea">
                  <input type="text" onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }} value={pAmount} name="loan_amount" id="loan_amount" className="emi_check" onChange={(e) => { setpAmount(e.target.value) }} maxlength="8" /> <span className="emi-icon"> ₹<i className="fa fa-rupee"></i> </span>
                </div>

              </div>

              <PrettoSlider value={pAmount} onChange={(e) => { setpAmount(e.target.value) }} max={maxvalue} getAriaValueText={valuetext}
              ></PrettoSlider>
            </div>
            <div className="rangeArea">
              <div className="rangeHead">
                <h2>Expected Return Rate (p.a)</h2>
                <small>(9.50% to 19.55%)</small>
                <div className="outputArea">
                  <input type="text" onKeyPress={(event) => {
                    if (!/[0-9.]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }} value={interest} name="intrest_rate" id="intrest_rate" className="emi_check" onChange={(e) => { setInterest(e.target.value) }} maxLength="4" /> <span className="emi-icon"> <i className="fa fa-percent" ></i> </span>
                </div>
              </div>
              <PrettoSlider value={interest} aria-label="Default"  onChange={(e, vamt) => { setInterest(vamt) }} max={maxint} ></PrettoSlider>
            </div>
            <div className="rangeArea">
              <div className="rangeHead">
                <h2>Investment Period (in Years)</h2>
                <small>(1 year - 30 years)</small>
                <div className="outputArea">
                  <input type="text" onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }} value={duration} name="tenure" id="tenure" className="emi_check" onChange={(e) => { setDuration(e.target.value) }} maxLength="2" />  <span className="emi-icon" >years
                  </span></div>

              </div>
              <PrettoSlider
                onChange={(e, vdur) => { setDuration(vdur) }} value={duration} max={maxduration}
                
              />
            </div>
          </div>
        </div>


        <div className="col-lg-4 col-md-12">
          <div className="table-responsive">
            <TableRow>
              <TableCell className='ETablecellText'>Interest Rate (%)</TableCell>
              <TableCell className='ETablecellValue'>{interest}<strong> % </strong></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='ETablecellText'>Duration (Years)</TableCell>
              <TableCell className='ETablecellValue'><strong> </strong>{duration}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='ETablecellText'>Invested Amount</TableCell>
              <TableCell className='ETablecellValue'><strong>₹ </strong>{total_investment}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='ETablecellText'>Wealth Gained</TableCell>
              <TableCell className='ETablecellValue'><strong>₹ </strong>{total_interest}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='ETablecellText'>Total Wealth</TableCell>
              <TableCell className='ETablecellValue'><strong>₹ </strong>{futureValue}</TableCell>
            </TableRow>
          </div>
          <div className='pie-chard-box'>
            <Pie className='clChart'
              data={{
                datasets: [{
                  data: [total_interest, total_investment],
                  backgroundColor: ['rgb(0, 121, 106)', 'rgb(255, 147, 2)']
                }],
                labels: ['Total Interest', 'Total Amount']
              }}
              width={180}
              height={180}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>
     

    </>
  )
}

export default mfcalculator