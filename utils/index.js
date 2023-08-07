import * as Yup from 'yup' 
import Router from 'next/router';
export const makeUpperCase = (data,seprator, split) =>{
  const mySentence = data.trim();
  let productName = ''
  if(split){
     productName = mySentence.split(split);
  }else{
    productName = mySentence.split(" ");
  }

  const newProductName = productName.map((word) => {
   if(!word){
    return ''
   }
    return word[0].toUpperCase() + word.substring(1);
  }).join(seprator);
  return newProductName;
}
export const makeyearmonth = (data,seprator, split) =>{
  const mySentence = data.trim();
  let productName = ''
  if(split){
     productName = mySentence.split(split);
  }else{
    productName = mySentence.split(" ");
  }

  const newProductName = productName.map((word) => {
   if(!word){
    return ''
   }
    return word[0].toLowerCase() + word.substring(1);
  }).join(seprator);
  return newProductName;
}

export const setCustomerAccessToken = async (token)=>{
  if (typeof window !== 'undefined') {
    localStorage.setItem("customertoken", JSON.stringify(token));
  }
}

export const getCustomerAccessToken = ()=>{
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem("customertoken")
  }
  return true
}

export const setAccessToken = async (token)=>{
  if (typeof window !== 'undefined') {
    localStorage.setItem("token", JSON.stringify(token));
  }
}


export const getAccessToken = ()=>{
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem("token")
  }
  return true
}

export const logoutUser =  () =>{
  if (typeof window !== 'undefined') {
    window.localStorage.clear()
    window.localStorage.removeItem("customertoken");
    window.localStorage.removeItem("RfUser");
  }
  Router.push('/');
  return true
}


export const setUserProfile = (user) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem("RfUser", JSON.stringify(user));
  }
}
export const setUserUtm = (utm) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem("RfUtm", JSON.stringify(utm));
  }
}

export const getUserUtm = () => {
  if (typeof window !== 'undefined') {
    localStorage.getItem("RfUtm");
  }
}
export const getUserProfile = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem("RfUser")
  }
}

export const formatNumber = (value) => {
  if(value<=0){
    return 0
  }
  if (value >= 10000000) {
    // convert to crore
    return (value/10000000).toFixed(2) + ' cr';
  } else if (value >= 100000) {
    // convert to lakh
    return (value/100000).toFixed(2) + ' lakhs';
  } else if (value >= 1000) {
    // convert to thousand
    return (value/1000).toFixed(2) + ' k';
  } else if (value >= 1000000) {
    // convert to million
    return (value/1000000).toFixed(2) + ' million';
  } else {
    // return the original value
    return value;
  }
}




export const generateOtpSchema = Yup.object({
  full_name: Yup.string().min(2, 'Invalid name').required("Please enter your name "),
  phone_no: Yup.string().min(10, 'Invalid phone number').max(10, 'Invalid phone number').required("Please enter your phone number").matches(/^\+?[6-9][0-9]{1,10}$/, "Invalid phone number"),
});
export const verifyOtpSchema = Yup.object({
  otp: Yup.string().min(4, 'Invalid OTP').required("Please enter OTP "),
 
});

export const CustomApplyForm = Yup.object({
  title: Yup.string().min(2).required("Please select title"),
  full_name: Yup.string().min(2).required("Please enter your name "),
  phone_number: Yup.string().min(10).max(10).required("Please enter your phone number").matches(/^\+?[6-9][0-9]{7,14}$/, "Invalid phone number"),
  email: Yup.string().email().required('Please enter email'),
  gender: Yup.string().required('Please select gender'),
  marital_status: Yup.string().required('Please select marital status'),
  pan: Yup.string().min(10).max(10).required("Please fill the pan card").matches(/([A-Z]){5}([0-9]){4}([A-Z]){1}$/, "Invalid Pancard"),
  residence_type: Yup.string().required('Please select residence type'),
  residence_pincode: Yup.string().min(6).max(6).required('Please enter pincode').matches(/^[0-9]+$/, "Must be only digits"),
  qualification: Yup.string().required('Please select residence type'),
  occupation: Yup.string().required('Please select occupation'),
});

export const signupSchema = Yup.object({
  full_name: Yup.string().min(2).required("Please enter your name "),
  phone_no: Yup.string().min(10).max(10).required("Please enter your phone number").matches(/^\+?[6-9][0-9]{1,10}$/, "Invalid phone number"),
  pancard: Yup.string().min(10).max(10).required("Please fill the pan card").matches(/([A-Z]){5}([0-9]){4}([A-Z]){1}$/, "Invalid Pancard"),
  pincode: Yup.string().min(6).max(6).required('Please enter pincode').matches(/^[0-9]+$/, "Must be only digits"),
  dob: Yup.date().required('Please select date'),
});

// added by sanoj filter form validation schema start here

export const CreditCardSchema = Yup.object({
  employee_type: Yup.string().required(),
  // cibil: Yup.string().required(),
  // pincode: Yup.string().required(),
  age: Yup
  .mixed()
  .when('employee_type', {
    is: (employeeType) => employeeType === 'salaried',
    then: Yup.mixed()
      .test('is-of-age', 'You must be at least 18 to 75 years old', function (value) {
        const minAge = 18;
        const maxAge = 75;
        if (!value) {
          return true;
        }

        const birthYear = new Date(value).getFullYear();
        const age = new Date().getFullYear() - birthYear;

        return age >= minAge && age <= maxAge;
      }),
    otherwise: Yup.mixed().when('firm_employee', {
      is: (firm_employee) => firm_employee === 'Proprietorship',
      then: Yup.mixed()
        .test('is-of-age', 'You must be at least 18 to 75 years old', function (value) {
          const minAge = 18;
          const maxAge = 75;
          if (!value) {
            return true;
          }
  
          const birthYear = new Date(value).getFullYear();
          const age = new Date().getFullYear() - birthYear;
  
          return age >= minAge && age <= maxAge;
        }),
      
      })
  }),
  // salary: Yup.string().when('employee_type', {
  //   is: (employeeType, alreadyCreditCard) => employeeType === 'salaried' && alreadyCreditCard ==='',
  //   then: Yup.string().required('Please enter your salary'),
  //   otherwise: Yup.string()
  // }),
  // turnover: Yup.string().when('employee_type', {
  //   is: 'self_employee',
  //   then: Yup.string().required('Please enter your turnover')
  // }),
  // employer_type: Yup.string().when('employee_type', {
  //   is: 'salaried',
  //   then: Yup.string().required('Please select employer type')
  // }),
  // itr: Yup.string().when('employee_type', {
  //   is: 'self_employee',
  //   then: Yup.string().required('Please select ITR')
  // }),
  // firm_employee: Yup.string().when('employee_type', {
  //   is: 'self_employee',
  //   then: Yup.string().required('Please select firm type')
  // }),

});

export const personalLoanSchema = Yup.object({
  salary:Yup.string().required('Please enter your salary'),
  employer_type:Yup.string().required("Select employer type. "),
  pincode:Yup.string().min(6).required('Enter pincode'),
  age: Yup
    .mixed()
    .test('is-of-age', 'You must be at least 18 to 75 years old', function (value) {
      const minAge = 18;
      const maxAge = 75;
      if (!value) {
        return true;
      }

      const birthYear = new Date(value).getFullYear();
      const age = new Date().getFullYear() - birthYear;

      return age >= minAge && age <= maxAge;
    }),
  cibil:Yup.string().required('Select cibil'),
})

export const bussinessLoanSchema = Yup.object({
  turnover:Yup.string().required('Please enter your turnover'),
  pincode:Yup.string().min(6).required('Enter pincode'),
  age: Yup
    .mixed()
    .test('is-of-age', 'You must be at least 18 to 75 years old', function (value) {
      const minAge = 18;
      const maxAge = 75;
      if (!value) {
        return true;
      }

      const birthYear = new Date(value).getFullYear();
      const age = new Date().getFullYear() - birthYear;

      return age >= minAge && age <= maxAge;
    }),
  cibil:Yup.string().required('Select cibil'),
  firm_type:Yup.string().required('Select firm type'),
  itr:Yup.string().required('Select itr type')
})


export const loanAgainstPropertySchema =Yup.object({
  employee_type: Yup.string().required('Employee type is required'),
  cibil:Yup.string().required(),
  pincode:Yup.string().required(),
  property_value:Yup.string().required('Property value is required'),
  property_type:Yup.string().required('Property type is required'),
  age: Yup
    .mixed()
    .test('is-of-age', 'You must be at least 18 to 75 years old', function (value) {
      const minAge = 18;
      const maxAge = 75;
      if (!value) {
        return true;
      }

      const birthYear = new Date(value).getFullYear();
      const age = new Date().getFullYear() - birthYear;

      return age >= minAge && age <= maxAge;
    }),
  salary: Yup.string().when('employee_type', {
    is: 'salaried',
    then: Yup.string().required('Please enter your salary')
  }),
  turnover: Yup.string().when('employee_type', {
    is: 'self_employee',
    then: Yup.string().required('Please enter your turnover')
  }),


});


export const homeLoanSchema =Yup.object({
  employee_type: Yup.string().required(),
  cibil:Yup.string().required(),
  pincode:Yup.string().required(),
  loan_amt:Yup.string().required('Please enter Loan Amount'),
  age: Yup
    .mixed()
    .test('is-of-age', 'You must be at least 18 to 75 years old', function (value) {
      const minAge = 18;
      const maxAge = 75;
      if (!value) {
        return true;
      }

      const birthYear = new Date(value).getFullYear();
      const age = new Date().getFullYear() - birthYear;

      return age >= minAge && age <= maxAge;
    }),
  salary: Yup.string().when('employee_type', {
    is: 'salaried',
    then: Yup.string().required('Please enter your salary')
  }),
  employer_type: Yup.string().when('employee_type', {
    is: 'salaried',
    then: Yup.string().required('Please select employer type')
  }),
  turnover: Yup.string().when('employee_type', {
    is: 'self_employee',
    then: Yup.string().required('Please enter your turnover')
  }),
  bussiness_start_year: Yup.string().when('employee_type', {
    is: 'self_employee',
    then: Yup.string().required('Please select option')
  }),


});

// added by shubham form validation schema starts here 


    export const educationLoanSchema = Yup.object({
      education_type: Yup.string().required(),
      course:Yup.string().required('Select your course'),
      course_duration:Yup.string().required('Enter your course-duration'),
      college_name:Yup.string().required("Enter your institution name "),
      cibil:Yup.string().required(),
      age: Yup
          .mixed()
          .test('is-of-age', 'You must be at least 10 to 75 years old', function (value) {
            const minAge = 10;
            const maxAge = 75;
            if (!value) {
              return true;
            }
      
            const birthYear = new Date(value).getFullYear();
            const age = new Date().getFullYear() - birthYear;
      
            return age >= minAge && age <= maxAge;
          }),
        
          pincode: Yup.string().when('education_type', {
          is: 'domestic',
          then: Yup.string().required('Enter pincode')
        }),
        country: Yup.string().when('education_type', {
          is: 'international',
          then: Yup.string().required('select country')
        }),
      
      
    });

export const loanAgainstSecuritySchema =Yup.object({
  assets: Yup.string().required(),
  
  age: Yup
  .mixed()
  .test('is-of-age', 'You must be at least 18 to 75 years old', function (value) {
    const minAge = 18;
    const maxAge = 75;
    if (!value) {
      return true;
    }

    const birthYear = new Date(value).getFullYear();
    const age = new Date().getFullYear() - birthYear;

    return age >= minAge && age <= maxAge;
  }),
  
  gold_weight: Yup.string().when('assets', {
    is: 'gold',
    then: Yup.string().required('Enter quantity')
  }),
  gold_value: Yup.string().when('assets', {
    is: 'gold',
    then: Yup.string().required('Enter gold value')
  }),
  pincode: Yup.string().when('assets', {
    is: 'gold',
    then: Yup.string().required('Enter pincode')
  }),
  
  cibil: Yup.string().when('assets', {
    is: 'gold',
    then: Yup.string().required('Enter cibil')
  }),
  fd_amt: Yup.string().when('assets', {
    is: 'fd',
    then: Yup.string().required('Enter amount')
  }),
  tenure: Yup.string().when('assets', {
    is: 'fd',
    then: Yup.string().required('Enter tenure')
  }),
  pincode: Yup.string().when('assets', {
    is: 'fd',
    then: Yup.string().required('Enter pincode')
  }),

  cibil: Yup.string().when('assets', {
    is: 'fd',
    then: Yup.string().required('Enter cibil')
  }),
  // mutual_fund_quantity: Yup.string().when('demate_account', {
  //   is: 'yes',
  //   then: Yup.string().required('Enter quantity')
  // }),
  // mutul_fund: Yup.string().when('demate_account', {
  //   is: 'yes',
  //   then: Yup.string().required('Enter value')
  // }),
  pincode: Yup.string().when('demate_account', {
    is: 'yes',
    then: Yup.string().required('Enter pincode')
  }),

  cibil: Yup.string().when('demate_account', {
    is: 'yes',
    then: Yup.string().required('Enter cibil')
  }),

  yessecurity: Yup.string().when('demate_account', {
    is: 'yes',
    then: Yup.string().required('Select first')
  }),

  nosecurity: Yup.string().when('demate_account', {
    is: 'no',
    then: Yup.string().required('Select first')
  }),

});



export const autoLoanSchema = Yup.object({
    employee_type: Yup.string().required(),
    car_type: Yup.string().required('Car type is required'),
    cibil:Yup.string().required(), 
    pincode:Yup.string().required(),
    vehicle_type: Yup.string().required('Please select vehicle type'),
    brand_name:Yup.string().required('brand name is required'),
    age: Yup
      .mixed()
      .test('is-of-age', 'You must be at least 18 to 75 years old', function (value) {
        const minAge = 18;
        const maxAge = 75;
        if (!value) {
          return true;
        }
  
        const birthYear = new Date(value).getFullYear();
        const age = new Date().getFullYear() - birthYear;
  
        return age >= minAge && age <= maxAge;
      }),


    salary: Yup.string().when('employee_type', {
      is: 'salaried',
      then: Yup.string().required('Please enter your salary')
    }),
    turnover: Yup.string().when('employee_type', {
      is: 'self_employee',
      then: Yup.string().required('Please enter your turnover')
    }),
    new: Yup.string().when('car_type', {
      is: 'self_employee',
      then: Yup.string().required('Please enter your turnover')
    }),
    used: Yup.string().when('employee_type', {
      is: 'self_employee',
      then: Yup.string().required('Please enter your turnover')
    }),
    modal_year:Yup.string().when('car_type',{
      is: 'used',
      then: Yup.string().required('Enter model Year')
    })  
})

export const formatNumberAmount = inputNumber => {
  let formetedNumber=(Number(inputNumber)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  let splitArray=formetedNumber.split('.');
  if(splitArray.length>1){
    formetedNumber=splitArray[0];
  }
  return(formetedNumber);
};

export const deactivateAccount = Yup.object({
  name: Yup.string().min(2).required("Please enter your name "),
  phone: Yup.string().min(10).max(10).required("Please enter your phone number").matches(/^\+?[6-9][0-9]{7,14}$/, "Invalid phone number"),
  email: Yup.string().email().required('Please enter email'),
  reason: Yup.string().required('Please enter reason'),
});


// added by shubham filter form validation schema end here

// added by sanoj filter form validation schema end here