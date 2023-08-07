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

const subsidyCalculator = () => {
  const [pAmount, setpAmount] = useState(100000);
  const [interest, setInterest] = useState(9);
  const [duration, setDuration] = useState(12)
  const maxvalue = 600000000;
  const maxint = 20;
  const maxduration = 360;

  const intrate = interest / 1200;
  const emi = duration ? Math.round(pAmount * intrate / (1 - (Math.pow(1 / (1 + intrate), duration)))) : 0;
  const totalAmt = duration * emi;
  const totalAmountofCredit = Math.round((emi / intrate) * (1 - Math.pow((1 + intrate), (-duration))));
  const totalAmountofInterest = Math.round(totalAmt - totalAmountofCredit);
  const payableAmt = pAmount + totalAmountofInterest;
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
                <h2>Loan Amount</h2>
                <small>(Up to 1 Crore)</small>
                <div className="outputArea">
                  <input type="text" value={pAmount} name="loan_amount" id="loan_amount" className="emi_check" onChange={(e) => { setpAmount(e.target.value) }} maxlength="8"
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  /> <span className="emi-icon"> <i className="fa fa-rupee"></i> </span>
                </div>

              </div>

              <PrettoSlider value={pAmount} onChange={(e) => { setpAmount(e.target.value) }} max={maxvalue} getAriaValueText={valuetext}
              ></PrettoSlider>
            </div>

            <div className="rangeArea">
              <div className="rangeHead">
                <h2>Loan Tenure</h2>
                <small>(1 year - 30 years)</small>
                <div className="outputArea">
                  <input type="text" value={duration} name="tenure" id="tenure" className="emi_check" onChange={(e) => { setDuration(e.target.value) }} maxLength='2' onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }} /> <span className="emi-icon" >
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
            <TableDetails emi={emi} loanamt={pAmount} interest={interest} tenure={duration} totalIntrest={totalAmountofInterest} tatalpayment={payableAmt} />
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
              width={200}
              height={200}

              options={{ maintainAspectRatio: false }}

            />
          </div>
        </div>
      </div>




      <div>
        <Table>
          <TableRow>
            <TableCell>
            </TableCell>

            <TableCell>

            </TableCell>
          </TableRow>
        </Table>
      </div>


    </>
  )
}

export default subsidyCalculator