import React, { useState } from 'react';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    image: null,
    tradeName: '',
    registeredCompanyName: '',
    establishmentYear: '',
    website: '',
    country: '',
    stateSelect: '',
    city: '',
    email: '',
    industryType: '',
    compStage: '',
    sector: '',
    offerYear: '',
    busiModel: '',
    description: '',

    entityType: '',
    teamSize: '',
    currencyRs: '',
    firstnameEnt: '',
    lastnameEnt: '',
    titleName: '',
    gender: '',
    linkedIn: '',
    phoneNum: '',

    fundRequire: '',
    preVal: '',
    message: '',
    messagePro: '',
    messageSol: '',
    compName: '',
    compAdvan: '',
    marketOpp: '',
    equipCategory: '',
    ValueBy: '',
    salesChannel: '',
    marketActivity: '',

    // keyCust: '',
    selectRevenue: '',
    amtEquity: '',
    fundingPast: '',
    heardAbout: '',

  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic (e.g., send data to server)

    // Reset form fields
    setFormData({
      image: null,
      image2: null,
      tradeName: '',
      registeredCompanyName: '',
      establishmentYear: '',
      website: '',
      country: '',
      stateSelect: '',
      city: '',
      email: '',
      industryType: '',
      compStage: '',
      sector: '',
      offerYear: '',
      busiModel: '',
      description: '',
      entityType: '',
      teamSize: '',
      currencyRs: '',
      firstnameEnt: '',
      lastnameEnt: '',
      titleName: '',
      gender: '',
      linkedIn: '',
      phoneNum: '',

      fundRequire: '',
      preVal: '',
      message: '',
      messagePro: '',
      messageSol: '',
      compName: '',
      compAdvan: '',
      marketOpp: '',
      equipCategory: '',
      ValueBy: '',
      salesChannel: '',
      marketActivity: '',

      // keyCust: '',
      selectRevenue: '',
      amtEquity: '',
      fundingPast: '',
  
    });
    setShowSuccess(true);
  };







  const formValidation = (step) => {
    // Form validation
    if (step === 1 && (!formData.image || !formData.tradeName || !formData.registeredCompanyName || !formData.establishmentYear || !formData.website || !formData.country || !formData.city || !formData.stateSelect || !formData.email || !formData.industryType || !formData.compStage || !formData.sector || !formData.offerYear || !formData.busiModel || !formData.description)) {
      alert('Please fill in all the required fields.');
      return false;
    }
    else if (step === 2 && (!formData.entityType || !formData.teamSize || !formData.currencyRs || !formData.firstnameEnt || !formData.lastnameEnt || !formData.titleName || !formData.gender || !formData.linkedIn || !formData.phoneNum || !formData.email)) {
      alert('Please fill in all the required fields.');
      return false;
    }
    else if (step === 3 && (!formData.fundRequire || !formData.preVal || !formData.message || !formData.messagePro || !formData.messageSol || !formData.compName || !formData.compAdvan || !formData.marketOpp || !formData.equipCategory || !formData.ValueBy || !formData.salesChannel || !formData.marketActivity)) {
      alert('Please fill in all the required fields.');
      return false;
    }
    else if (step === 4 && (!formData.selectRevenue || !formData.amtEquity|| !formData.fundingPast || !formData.heardAbout)) {
      alert('Please fill in all the required fields.');
      return false;
    }
    else {
      return true;
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleNextStep = () => {
    const isValid = formValidation(currentStep);
    if (isValid) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Render form based on the current step
  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <Step1 formData={formData} onChange={handleChange} />;
      case 2:
        return <Step2 formData={formData} onChange={handleChange} />;
      case 3:
        return <Step3 formData={formData} onChange={handleChange} />;
      case 4:
        return <Step4 formData={formData} onChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <section className='privity-form-section'>
      <div className='container'>
        {showSuccess ? (
          <div>
            <h2>Form Submitted Successfully!</h2>
            <p>Thank you for your submission.</p>
          </div>
        ) : (

          <form className = "sub_form" onSubmit={handleSubmit}>
            {renderForm()}
            {currentStep > 1 && (
                <button className='thm-btn feature-four__top-btn pre-button' aria-label="submit"
                  type="button" onClick={handlePrevStep}>
                  &#x2190; <span>Previous</span>
                </button>
            )}
            {currentStep < 4 && (
                <button className='thm-btn feature-four__top-btn next-button' type="button" onClick={handleNextStep}>
                  <span>Next</span> &rarr;
                </button>
            )}
            {currentStep === 4 && (
                <button className='thm-btn feature-four__top-btn pre-submit' type="submit">
                  Submit
                </button>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default MultiStepForm;
