import { event } from 'jquery';
import React from 'react';

const step4 = ({ formData, onChange }) => {
  // const handleImageUpload1 = (event) => {
  //   const file = event.target.files[0];
  //   onChange('image2', URL.createObjectURL(file));
  // };
  return (
    <div className='third-step privity-form-box'>
      <div>FINANCIAL PROJECTIONS</div>
      <div className='row'>
        <div className='col-md-6'>
          <div className='row'>
            <div className='equity-ques-head mb-3'>Revenue</div>
            <div className='col-md-6'>
              <div className="EF-form-group">
                <div className="loanTypebtn equity-check">
                  <div className="loanType Equityy">

                    <label for="selectRevenue">Year of Ending<span className="require">*</span></label>
                    <select className="cibli-select-input" required="" id="selectRevenue" value={formData.selectRevenue}
                      name="selectRevenue" onChange={(event) => onChange('selectRevenue', event.target.value)}>
                      <option value=""> Select Year </option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2020">2017</option>
                      <option value="2019">2016</option>
                      <option value="2018">2015</option>
                    </select>
                    <div className="addremove">
                      <div className="adData"><span> + Add</span> / <span>- Remove</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className="EF-form-group">
                <div className="loanTypebtn equity-check">
                  <div className="loanType Equityy">
                    <label for="amtEquity">Amount in Rs.<span className="require">*</span></label>
                    <select className="cibli-select-input" required="" id="amtEquity" value={formData.amtEquity}
                      name="amtEquity" onChange={(event) => onChange('amtEquity', event.target.value)}>
                      <option value="">10 Crore</option>
                      <option value="100000">1 Lakh</option>
                      <option value="200000">2 Lakhs</option>
                      <option value="500000">5 Lakhs</option>
                      <option value="1000000">10 Lakhs</option>
                      <option value="2000000">20 Lakhs</option>
                      <option value="5000000">50 Lakhs</option>
                      <option value="10000000">1 Crore</option>
                    </select>
                    <div className="addremove">
                      <div className="adData"><span> + Add</span> / <span>- Remove</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='equity-ques-head mb-3'>Expenses</div>
          <div className='row'>
            <div className='col-md-6'>
              <div className="EF-form-group">
                <div className="loanTypebtn equity-check">
                  <div className="loanType Equityy">
                    <label for="selectRevenue">Year of Ending<span className="require">*</span></label>
                    <select className="cibli-select-input" required="" id="selectRevenue" value={formData.selectRevenue}
                      name="selectRevenue" onChange={(event) => onChange('selectRevenue', event.target.value)}>
                      <option value=""> Select Year </option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2020">2017</option>
                      <option value="2019">2016</option>
                      <option value="2018">2015</option>
                    </select>
                    <div className="addremove">
                      <div className="adData"><span> + Add</span> / <span>- Remove</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className="EF-form-group">
                <div className="loanTypebtn equity-check">
                  <div className="loanType Equityy">
                    <label for="amtEquity">Amount in Rs.<span className="require">*</span></label>
                    <select className="cibli-select-input" required="" id="amtEquity" value={formData.amtEquity}
                      name="amtEquity" onChange={(event) => onChange('amtEquity', event.target.value)}>
                      <option value="">10 Crore</option>
                      <option value="100000">1 Lakh</option>
                      <option value="200000">2 Lakhs</option>
                      <option value="500000">5 Lakhs</option>
                      <option value="1000000">10 Lakhs</option>
                      <option value="2000000">20 Lakhs</option>
                      <option value="5000000">50 Lakhs</option>
                      <option value="10000000">1 Crore</option>
                    </select>
                    <div className="addremove">
                      <div className="adData"><span> + Add</span> / <span>- Remove</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <div className='equity-ques-head mb-3'>Profit</div>
          <div className='row'>
            <div className='col-md-6'>
              <div className="EF-form-group">
                <div className="loanTypebtn equity-check">
                  <div className="loanType Equityy">
                    <label for="selectRevenue">Year of Ending<span className="require">*</span></label>
                    <select className="cibli-select-input" required="" id="selectRevenue" value={formData.selectRevenue}
                      name="selectRevenue" onChange={(event) => onChange('selectRevenue', event.target.value)}>
                      <option value=""> Select Year </option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2020">2017</option>
                      <option value="2019">2016</option>
                      <option value="2018">2015</option>
                    </select>
                    <div className="addremove">
                      <div className="adData"><span> + Add</span> / <span>- Remove</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className="EF-form-group">
                <div className="loanTypebtn equity-check">
                  <div className="loanType Equityy">
                    <label for="amtEquity">Amount in Rs.<span className="require">*</span></label>
                    <select className="cibli-select-input" required="" id="amtEquity" value={formData.amtEquity}
                      name="amtEquity" onChange={(event) => onChange('amtEquity', event.target.value)}>
                      <option value="">10 Crore</option>
                      <option value="100000">1 Lakh</option>
                      <option value="200000">2 Lakhs</option>
                      <option value="500000">5 Lakhs</option>
                      <option value="1000000">10 Lakhs</option>
                      <option value="2000000">20 Lakhs</option>
                      <option value="5000000">50 Lakhs</option>
                      <option value="10000000">1 Crore</option>
                    </select>
                    <div className="addremove">
                      <div className="adData"><span> + Add</span> / <span>- Remove</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='step4-acc'>
            <div className="accordion" id="accordionPanelsStayOpenExample11">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne11">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne11" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne11">
                    <div className="">Funding Rounds</div>
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne11" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne11">
                  <div className="accordion-body">
                    <div className="EF-form-group mb-0">
                      <div className='ef-flex'>
                        <label className="form-check-label" htmlFor="fundingPast">Have you raised any funding in the past?
                          <span className='require'>*</span>
                        </label>
                        <input type="checkbox" className="form-check-input" name="fundingPast" value={formData.fundingPast}
                          id="fundingPast" onChange={(event) => onChange('fundingPast', event.target.value)} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo22">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo22" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo22">
                    <div className=''>Refferal</div>
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo22" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo22">
                  <div className="accordion-body">
                    <h2 className='equity-ques-head'>Funding Requirement</h2>
                    <div className="EF-form-group">
                      <div className="loanTypebtn equity-check">
                        <div className="loanType Equityy">
                          <select className="cibli-select-input" required="" id="heardAbout" value={formData.heardAbout}
                            name="heardAbout" onChange={(event) => onChange('heardAbout', event.target.value)}>
                            <option value="online">Online advertisement</option>
                            <option value="word-of-mouth">Word of mouth</option>
                            <option value="social-media">frenchise</option>
                            <option value="social-media">associates</option>
                            <option value="social-media">Friends</option>
                            <option value="social-media">Friends of Friends</option>
                            <option value="other">Other</option>
                          </select>
                          <div className="addremove">
                            <div className="adData"><span> + Add</span> / <span>- Remove</span></div>
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

      </div >
    </div>
  );
};

export default step4;
