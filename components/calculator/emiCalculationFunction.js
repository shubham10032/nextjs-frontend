export default function calculateFlatInterestRate(principal, interestRate, tenure) {
  
    const totalInterest = (principal * interestRate * tenure) / 100;
    
    const totalAmount = Number(principal) + Number(totalInterest);
   
    const monthlyEMI = totalAmount / (tenure * 12);
   
    return {
      totalInterest: totalInterest,
      totalAmount: totalAmount,
      monthlyEMI: monthlyEMI
    };
  }

  export function calculateReducingInterestRate(principal, rate, years) {
    const monthlyRate = rate / (100 * 12);
    const totalMonths = years * 12;
    const numerator = principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths);
    const denominator = Math.pow(1 + monthlyRate, totalMonths) - 1;
    const emi = numerator / denominator;
    const totalInterest = emi * totalMonths - principal;
    const totalAmount = emi * totalMonths;
    return { emi, totalInterest, totalAmount };
  }