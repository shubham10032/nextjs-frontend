import React, { useState } from 'react'
import { withStyles } from '@material-ui/styles'
import Slider from '@mui/material/Slider';
import { Typography } from '@material-ui/core'
import { Table, TableCell, TableRow } from '@material-ui/core'
import { styled } from '@mui/material/styles';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
import TableDetails from './tableDetails';
import TableSipDetails from './tableSipDetails';

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

const sipCalculator = () => {
  const [pAmount, setpAmount] = useState(100000);
  const [interest, setInterest] = useState(9.56);
  const [duration, setDuration] = useState(12)
  const maxvalue = 10000000;
  const maxint = 20;
  const maxduration = 30;

  var monthlyRate = interest / 12 / 100;
  var months = duration * 12;
  var futureValue = 0;
  var total_investment = (pAmount * months);
  futureValue = Math.round(pAmount * (1 + monthlyRate) * ((Math.pow((1 + monthlyRate), months)) - 1) / monthlyRate);

  var total_interest = ((futureValue - total_investment));

  function valuetext(value) {
    return `${value} Lac`;
  }
  return (
    <>

      <div className="row cla-form-row">

        <div className="col-lg-8 col-md-12">
          <div className='range-box'>
            <div className="rangeArea  range-card range-card-1">
              <div className="rangeHead">
                <h2>Monthly SIP Amount</h2>
                <small>(Up to 1 Crore)</small>
                <div className="outputArea">
                  <input type="text" value={pAmount} name="loan_amount" id="loan_amount" className="emi_check" onChange={(e) => { setpAmount(e.target.value) }} maxlength="8" /> <span className="emi-icon"> ₹<i className="fa fa-rupee"></i> </span>
                </div>

              </div>

              <PrettoSlider value={pAmount} onChange={(e) => { setpAmount(e.target.value) }} max={maxvalue} getAriaValueText={valuetext}
              ></PrettoSlider>
            </div>
            <div className="rangeArea range-card range-card-1">
              <div className="rangeHead">
                <h2>Expected Return Rate (p.a)</h2>
                <small>(9.50% to 19.55%)</small>
                <div className="outputArea">
                  <input type="text" onKeyPress={(event) => {
                    if (!/[0-9.]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }} maxLength='4' value={interest} name="intrest_rate" id="intrest_rate" className="emi_check" onChange={(e) => { setInterest(e.target.value) }} /> <span className="emi-icon"> <i className="fa fa-percent" ></i> </span>
                </div>
              </div>
              <PrettoSlider value={interest} aria-label="Default"  onChange={(e, vamt) => { setInterest(vamt) }} max={maxint} ></PrettoSlider>
            </div>
            <div className="rangeArea range-card range-card-1">
              <div className="rangeHead">
                <h2>SIP Period</h2>
                <small>(1 year - 30 years)</small>
                <div className="outputArea">
                  <input type="text" onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }} maxLength='2' value={duration} name="tenure" id="tenure" className="emi_check" onChange={(e) => { setDuration(e.target.value) }} /> <span className="emi-icon" > Years
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


            <TableSipDetails total_amount={futureValue} interest={interest} duration={duration} total_investment={total_investment} total_interest={total_interest} />

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

      </div>

    </>
  )
}

export default sipCalculator