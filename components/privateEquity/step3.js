import React from 'react';

const step3 = ({ formData, onChange }) => {
  const handleImageUpload1 = (event) => {
    const file = event.target.files[0];
    onChange('image2', URL.createObjectURL(file));
  };
  return (
    <div className='second-step privity-form-box'>
      <h2 className='equity-ques-head'>Funding Requirement</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className='col-md-12'>
              <div Name="EF-form-group">
                <label htmlFor="fundRequire">
                  Total Funding Requirement<span className="require">*</span></label>
                <span className="unit unitSelect">INR </span>
                <select className="cibli-select-input fund-req" id="fundRequire" value={formData.comptition}
                  name="fundRequire" onChange={(event) => onChange('fundRequire', event.target.value)}>
                  <option value=""> &nbsp; &nbsp;   1 Lakh   </option>
                  <option value="FundReq1">10 Lakh</option>
                  <option value="FundReq2">10-20Lakh</option>
                  <option value="FundReq3">30-40lakh</option>
                  <option value="FundReq4">40-50lakh</option>
                  <option value="FundReq5">50-60lakh</option>
                  <option value="FundReq6">60-70lakh</option>
                  <option value="FundReq7">Enter amount</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="EF-form-group">
                <label for="preVal">Valuation (Pre-money valuation)<span className="require">*</span></label>
                <span className="unit unitSelect">INR </span>
                <select className="cibli-select-input fund-req" id="preVal" value={formData.preval}
                  name="preVal" onChange={(event) => onChange('preVal', event.target.value)} >
                  <option value=""> &nbsp; &nbsp;    1 Lakh  </option>
                  <option value="preValue1">10Lakh</option>
                  <option value="preValue2">10-20Lakh</option>
                  <option value="preValue3">30-40lakh</option>
                  <option value="preValue4">40-50lakh</option>
                  <option value="preValue5">50-60lakh</option>
                  <option value="preValue6">60-70lakh</option>
                  <option value="preValue7">Enter amount</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="EF-form-group">
            <div><label htmlFor="message">Use of Funds<span className="require">*</span></label></div>
            <div className="textFund"><textarea id="message" name="message" rows="6" cols="50"
              value={formData.message} onChange={(event) => onChange('message', event.target.value)}
              placeholder='Briefly talk about what the primary uses of the funding.'></textarea></div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-6'>
          <div className='form_accordion'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item acc-it">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button className="accordion-button equity-ques-head " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                    <div>Opportunity</div>
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                  <div className="accordion-body">
                    {/* <div className="row">
                    <div className="col-md-6"> */}
                    <div className="EF-form-group">
                      <div><label htmlFor="messagePro">Problem<span className="require">*</span></label></div>
                      <div className="textFund"><textarea id="messagePro" name="messagePro" rows="6" cols="50"
                        value={formData.messagePro} onChange={(event) => onChange('messagePro', event.target.value)}
                        placeholder='Provide a brief description of the problem you'></textarea></div>
                    </div>
                    {/* </div>
                    <div className="col-md-6"> */}
                    <div className="EF-form-group">
                      <div><label htmlFor="messageSol">Solution<span className="require">*</span></label></div>
                      <div className="textFund"><textarea id="messageSol" name="messageSol" rows="6" cols="50"
                        value={formData.messageSol} onChange={(event) => onChange('messageSol', event.target.value)}
                        placeholder='Provide a brief description of your solution to the problem described above'></textarea></div>
                    </div>
                  </div>
                </div>
                {/* </div>
              </div> */}
              </div>
              <div className="accordion-item acc-it">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    <div className="">Competition</div>
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div className="accordion-body">
                    <div className="EF-form-group">
                      <div className="loanTypebtn equity-check">
                        <div className="loanType Equityy">
                          <label for="compName">Competitor Name<span className="require">*</span></label>
                          <select className="cibli-select-input" required="" id="compName" value={formData.compHead}
                            name="compName" onChange={(event) => onChange('compName', event.target.value)}>
                            <option value="">comptition 1</option>
                            <option value="comptition1">comptition 2</option>
                            <option value="comptition2">comptition 3</option>
                            <option value="comptition3">comptition 4</option>
                            <option value="comptition4">comptition 5</option>
                            <option value="comptition5">comptition 6</option>
                            <option value="comptition6">comptition 7</option>
                            <option value="comptition7">comptition 8</option>
                          </select>
                          <div className="addremove">
                            <div className="adData"><span> + Add</span> / <span>- Remove</span></div>
                          </div>
                        </div>
                        <div className="equity-funding">
                          <div className="EF-form-group">
                            <label htmlFor="compAdvan">Our Competitive Advantage<span className="require">*</span></label>
                            <input type="text" autoComplete="off" name="compAdvan" id="compAdvan" placeholder=""
                              value={formData.compAdvan} onChange={(event) => onChange('compAdvan', event.target.value)} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="equity-funding">
                      <div className="EF-form-group">
                        <label for="marketOpp">Total Market opportunity</label>
                        <div className="range-input-box input-amount">
                          <input type="text" inputmode="decimal" id="marketOpp"
                            name="marketOpp" placeholder="Check to Enter Amount" data-number-to-fixed="2"
                            data-number-stepfactor="100" value={formData.marketOpp} required
                            onChange={(event) => onChange('marketOpp', event.target.value)} />
                          <span className="unit unitSelect">INR </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='form_accordion '>
            <div className="accordion" id="accordionPanelsStayOpenExample1">
              <div className="accordion-item acc-it ">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne1">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne1" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne1">
                    <div className="">Go to Market</div>
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne1" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne1">
                  <div className="accordion-body">
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className="EF-form-group">
                          <label htmlFor="salesChannel">Sales Channels<span className="require">*</span></label>
                          <input type="text" autocomplete="off" name="salesChannel" id="salesChannel" placeholder="Takes Sales channels & hit Enter"
                            value={formData.salesChannel} onChange={(event) => onChange('salesChannel', event.target.value)} />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className="EF-form-group">
                          <label htmlFor="marketActivity">Marketing Activities<span className="require">*</span></label>
                          <input type="text" autoComplete="off" name="marketActivity" id="marketActivity" placeholder="Type marketing activity & hit Enter"
                            value={formData.marketActivity} onChange={(event) => onChange('marketActivity', event.target.value)} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item acc-it">
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    <div className="">Target Market Categories</div>
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div className="accordion-body">
                    <div className="EF-form-group">
                      <div className="loanTypebtn equity-check">
                        <div className="loanType Equityy">
                          <label for="equipCategory">Category<span className="require">*</span></label>
                          <select className="cibli-select-input" id="equipCategory" value={formData.equipCategory} required
                            name="equipCategory" onChange={(event) => onChange('equipCategory', event.target.value)}>
                            <option value="">--Categary 1--</option>
                            <option value="Equip-categaory1">Categary 2</option>
                            <option value="Equip-categaory2">Categary 3</option>
                            <option value="Equip-categaory3">Categary 4</option>
                            <option value="Equip-categaory4">Categary 5</option>
                            <option value="Equip-categaory5">Categary 6</option>
                            <option value="Equip-categaory6">Categary 7</option>
                            <option value="Equip-categaory7">category 8</option>
                          </select>
                          <div className="addremove">
                            <div className="adData"><span> + Add</span> / <span>- Remove</span></div>
                          </div>
                        </div>
                        {/* <div className="equity-funding"> */}
                        <div className="EF-form-group">
                          <label for="valueBy">Value by Rs.</label>
                          <div className="range-input-box input-amount">
                            <input type="text" inputmode="decimal" id="valueBy"
                              name="valueBy" placeholder="Click to Enter Value" data-number-to-fixed="2"
                              data-number-stepfactor="100" value={formData.ValueBy} onChange={(event) => onChange('ValueBy', event.target.value)} />
                            <span className="unit unitSelect">INR </span>
                          </div>
                        </div>
                        {/* </div> */}
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className='upload-image-box'>
                        {formData.image ?
                          <div className='preivew-image' >
                            <img src={formData.image} alt="Uploaded" className='perview-img uploaded-image' />
                          </div>

                          : <div className='preivew-image'>
                            <img src='/image/camera.png' alt="Uploaded" className='perview-img demo-image' height={50} />
                            <div className='image-content'>
                              <p className='uplogo'>Company Logo</p>
                              <button className='btn btn-custom'> <img src='/image/upload.png' /> Upload </button>
                              <p className='uplogo'>or Drag & Drop</p>
                            </div>
                          </div>}
                        <label className='upload-lable'>
                          <input type="file" accept="image/*" onChange={handleImageUpload1} />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default step3;
