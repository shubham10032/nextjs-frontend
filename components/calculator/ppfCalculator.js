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
import TablePpfDetails from './tablePpfDetails';

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

const ppfCalculator = () => {
  const [pAmount, setpAmount] = useState(500);
  const [interest, setInterest] = useState(7.1);
  const [duration, setDuration] = useState(15)
  const maxvalue = 150000;
  const maxint = 20;
  const maxduration = 50;

  var monthlyRate = interest / 12 / 100;
  var months = duration * 12;
  var maturityAmount = 0;
  var total_investment = (pAmount * months);

  maturityAmount = Math.round(pAmount * (1 + monthlyRate) * ((Math.pow((1 + monthlyRate), months)) - 1) / monthlyRate);
  var total_interest = (maturityAmount - total_investment);

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
                <h2>Monthly Deposit Amount </h2>
                <small>(Up to 150000)</small>
                <div className="outputArea">
                  <input type="text" value={pAmount} name="loan_amount" id="loan_amount" className="ppf_check" onChange={(e) => { setpAmount(e.target.value) }} maxlength="6" onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }} /> <span className="emi-icon"> ₹<i className="fa fa-rupee"></i> </span>
                </div>

              </div>

              <PrettoSlider value={pAmount} onChange={(e) => { setpAmount(e.target.value) }} max={maxvalue} getAriaValueText={valuetext}
              ></PrettoSlider>
            </div>
            <div className="rangeArea">
              <div className="rangeHead">
                <h2>Current Interest Rate</h2>
                <small>(7.1%)</small>
                <div className="outputArea">
                  <input type="text" value={interest} name="intrest_rate" maxLength='4' id="intrest_rate" className="intrest_check" onChange={(e) => { setInterest(e.target.value) }}
                    onKeyPress={(event) => {
                      if (!/[0-9.]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  /> <span className="emi-icon"> <i className="fa fa-percent" ></i> </span>
                </div>
              </div>
              <PrettoSlider value={interest} aria-label="Default"  onChange={(e, vamt) => { setInterest(vamt) }} max={maxint} ></PrettoSlider>
            </div>
            <div className="rangeArea">
              <div className="rangeHead">
                <h2>Duration of investment (in years)</h2>
                <small>(1 year - 30 years)</small>
                <div className="outputArea">
                  <input type="number" value={duration} name="tenure" id="tenure" maxLength='3' className="tenure_check" onChange={(e) => { setDuration(e.target.value) }}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  /> <span className="emi-icon" > Years
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
          <TablePpfDetails maturityAmount={maturityAmount} interest={interest} duration={duration} total_investment={total_investment} total_interest={total_interest} />
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

export default ppfCalculator