import { useState } from "react";
 
export default  function LoanCalculator() {
    const [loanAmount, setLoanAmount] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [tenure, setTenure] = useState(0);
    const [emi, setEMI] = useState([]);
    const [totalInterest, setTotalInterest] = useState(0);
    const [totalLoanAmount, settotalLoanAmount] = useState(0);
    const [test, setTest] = useState('test');
  
    function calculateEMI() {
      // calculate EMI for each month with reducing interest rate
      let monthlyInterestRate = interestRate / (tenure * 100);
      let emiArr = [];
      let remainingLoanAmount = loanAmount;
      const emiForMonth = tenure ? Math.round(loanAmount * monthlyInterestRate / (1 - (Math.pow(1 / (1 + monthlyInterestRate), tenure)))) : 0;
      for (let i = 0; i < tenure; i++) {
        const interestAmount = remainingLoanAmount * monthlyInterestRate;
        // const emiForMonth = tenure ? Math.round(loanAmount * monthlyInterestRate / (1 - (Math.pow(1 / (1 + monthlyInterestRate), tenure)))) : 0;
        const monthlyPrincipalAmount = remainingLoanAmount / tenure;
        let totalLoanAmount = ((loanAmount/tenure)+interestAmount);
        emiArr.push({
          month: getMonthName(i),
          principalAmount: monthlyPrincipalAmount,
          interestAmount,
          emiForMonth,
          totalLoanAmount,
        });
        remainingLoanAmount -= monthlyPrincipalAmount;
        // update the interest rate for next month
        monthlyInterestRate = (interestRate / (12 * 100)) * (remainingLoanAmount / loanAmount);
      }
  
      // calculate total interest
      const totalInterest = (
        emiArr.reduce((sum, item) => sum + item.interestAmount, 0)
      ).toFixed(2);
  
      setEMI(emiArr); // set array of EMI details
      setTotalInterest(totalInterest);
    }
  
    function getMonthName(monthIndex) {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return monthNames[monthIndex % 12];
    }
    return (
    <>
      <div className="btn-group btn-group-toggle add-check" data-toggle="buttons">
        <label className="btn btn-secondary active" htmlFor='emiadvance'>
          <input type="radio" className='d-none' name="emischeme" id="emiadvance" value="emiadvance" tabIndex="4" autoComplete="off" onClick={(e)=>setTest('test')}  />&nbsp;
          EMI in Advance
        </label>
        <label className="btn btn-secondary" htmlFor='emiarrears'> 
          <input type="radio" className='d-none' name="emischeme" id="emiarrears" value="emiarrears" tabIndex="5" autoComplete="off" checked="checked" onClick={(e)=>setTest('test1')} />&nbsp; 
          EMI in Arrears 
        </label>
      </div>
      <div>
        <h1>Personal Loan Calculator</h1>
        <form>
          <label>
            Loan Amount:
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => {
                setLoanAmount(parseFloat(e.target.value))
                calculateEMI()
              }
            }
            />
          </label>
          <br />
          <label>
            Interest Rate (%):
            <input
              type="range"
              min="0"
              max="30"
              step="0.1"
              value={interestRate}
              onChange={(e) => {
                setInterestRate(parseFloat(e.target.value))
                calculateEMI()}}
            />
            <span>{interestRate}%</span>
          </label>
          <br />
          <label>
            Tenure (months):
            <input
              type="number"
              value={tenure}
              onChange={(e) => {
                setTenure(parseInt(e.target.value))
                calculateEMI()
            }}
            />
          </label>
          <br />
        </form>
        {emi.length > 0 && (
          <div>
            <p>Total Interest: {totalInterest}</p>
            <table className="table_cards_Table mt-3">
                <thead>
                    <tr>
                    <th>Month</th>
                    <th>Principal Amount</th>
                    <th>Interest Amount</th>
                    <th>EMI for Month</th>
                    <th>Total Payment</th>
                    </tr>
                </thead>
                <tbody>
                {emi.map((item, index) => (
                <tr key={index}>
                <td>{item.month}</td>
                <td>{item.principalAmount.toFixed(2)}</td>
                <td>{item.interestAmount.toFixed(2)}</td>
                <td>{item.emiForMonth.toFixed(2)}</td>
                <td>{item.totalLoanAmount.toFixed(2)}</td>
                </tr>
                ))}
        </tbody>
      </table>
    </div>
    
  )}
</div>
</>
);
}
