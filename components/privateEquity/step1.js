import React from 'react';

const step1 = ({ formData, onChange }) => {
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        onChange('image', URL.createObjectURL(file));
    };

    return (
        <div className='first-step privity-form-box'>
            <div className='col-12'>
                <div className='upload-image-box'>
                    {formData.image ?
                        <div className='preivew-image' >
                            <img src={formData.image} alt="Uploaded" className='perview-img uploaded-image' />
                        </div>

                        : <div className='preivew-image'>
                            <img src='/images/camera.png' alt="Uploaded" className='perview-img demo-image' height={50} />
                            <div className='image-content'>
                                <p className='uplogo'>Company Logo</p>
                                <button className='btn btn-custom'> <img src='/images/upload.png' /> Upload </button>
                                <p className='uplogo'>or Drag & Drop</p>
                            </div>
                        </div>}

                    <label className='upload-lable'>
                        <input type="file" accept="images/*" onChange={handleImageUpload} />
                    </label>
                </div>

            </div>
            <div className='row'>
                <div className='col-md-3 colsm-6'>
                    <div className='EF-form-group'>
                        <label>Trade Name (Doing Business as) <span className='require'>*</span></label>
                        <input
                            type="text"
                            name="tradeName"
                            value={formData.tradeName}
                            onChange={(event) => onChange('tradeName', event.target.value)}
                            placeholder="Trade Name"
                            required
                        />

                    </div>
                </div>
                <div className='col-md-3 colsm-6'>
                    <div className='EF-form-group'>
                        <label>Registered Company Name <span className='require'>*</span></label>
                        <input
                            type="text"
                            name="registeredCompanyName"
                            value={formData.registeredCompanyName}
                            onChange={(event) => onChange('registeredCompanyName', event.target.value)}
                            placeholder="Registered Company Name"
                            required
                        />
                    </div>
                </div>
                <div className='col-md-3 col-sm-6'>
                    <div className='EF-form-group'>
                        <label htmlFor='yearEstab'>Establishment Year <span className='require'>*</span></label>
                        <select class="cibli-select-input" required="" id="yearEstab" value={formData.establishmentYear}
                            onChange={(event) => onChange('establishmentYear', event.target.value)}
                            name="establishmentYear">
                            <option value="">--Select Year--</option>
                            <option value="yearEnd1">2002</option>
                            <option value="yearEnd2">2003</option>
                            <option value="yearEnd3">2004</option>
                            <option value="yearEnd4">2005</option>
                            <option value="yearEnd5">2006</option>
                            <option value="yearEnd6">2007</option>
                            <option value="yearEnd7">2008</option>
                        </select>

                    </div>
                </div>
                <div className='col-md-3 colsm-6'>
                    <div className='EF-form-group'>
                        <label>website URL <span className='require'>*</span> </label>
                        <input
                            type="text"
                            name="website"
                            value={formData.website}
                            onChange={(event) => onChange('website', event.target.value)}
                            placeholder="Website"
                            required
                        />
                    </div>
                </div>
                <div className='col-md-3 colsm-6'>
                    <div className='EF-form-group'>
                        <label htmlFor='country'>Country<span className='require'>*</span></label>
                        <select class="cibli-select-input" required="" id="country" value={formData.countrySelect}
                            onChange={(event) => onChange('country', event.target.value)}
                            name="country">
                            <option value="">--Select Country--</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Åland Islands">Åland Islands</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antarctica">Antarctica</option>
                        </select>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6'>
                    <div className='EF-form-group'>
                        <label htmlFor='stateSelect'>State<span className='require'>*</span></label>
                        <select class="cibli-select-input" required="" id="stateSelect" value={formData.state}
                            onChange={(event) => onChange('stateSelect', event.target.value)}
                            name="stateSelect">
                            <option value="">--Select State--</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Åland Islands">Åland Islands</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antarctica">Antarctica</option>
                        </select>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6'>
                    <div className='EF-form-group'>
                        <label htmlFor='city' >City<span className='require'>*</span></label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={(event) => onChange('city', event.target.value)}
                            placeholder="city"
                            required
                        />
                    </div>
                </div>
                <div className='col-md-3 col-sm-6'>
                <div className='EF-form-group'>
                        <label htmlFor='email'>Email<span className='require'>*</span></label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={(event) => onChange('email', event.target.value)}
                            placeholder="Email"
                            required
                        />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-3 col-sm-6'>
                    <div class="EF-form-group">
                        <label htmlFor="industryType">Industry<span className="require">*</span></label>
                        <select class="cibli-select-input" id="industryType" value={formData.industryType}
                            name="industryType" onChange={(event) => onChange('industryType', event.target.value)} required >
                            <option value="">Select Industry Type</option>
                            <option value="IT">IT</option>
                            <option value="Finance">Finance</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Education">Education</option>
                            <option value="Retail">Retail</option>
                            <option value="Hospitality">Hospitality</option>
                            <option value="Automotive">Automotive</option>
                            <option value="Construction">Construction</option>
                            <option value="Media">Media</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Real Estate">Real Estate</option>
                            <option value="Telecommunications">Telecommunications</option>
                            <option value="Manufacturing">Manufacturing</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Energy">Energy</option>
                            <option value="Food and Beverage">Food and Beverage</option>
                            <option value="Consulting">Consulting</option>
                            <option value="Transportation">Transportation</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div class="EF-form-group">
                        <label htmlFor="compStage">Company Stage<span className="require">*</span></label>
                        <select class="cibli-select-input" id="compStage" value={formData.compStage}
                            name="compStage" onChange={(event) => onChange('compStage', event.target.value)} required >
                            <option value="">Select Company Stage</option>
                            <option value="Startup">Startup</option>
                            <option value="Early Stage Startup">Early Stage Startup</option>
                            <option value="Growth Startup">Growth Startup</option>
                            <option value="Seed Stage">Seed Stage</option>
                            <option value="Series A">Series A</option>
                            <option value="Series B">Series B</option>
                            <option value="Series C">Series C</option>
                            <option value="Expansion Stage">Expansion Stage</option>
                            <option value="Mature">Mature</option>
                            <option value="Established">Established</option>
                        </select>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6'>
                    <div className="EF-form-group">
                        <label htmlFor="sector">Sector<span className="require">*</span></label>
                        <input type="text" id="sector" name="sector" placeholder="Type Business Sector and hit Enter" value={formData.sector}
                            onChange={(event) => onChange('sector', event.target.value)} required />
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='EF-form-group'>
                        <label htmlFor="offerYear">Offering<span className="require">*</span></label>
                        <select class="cibli-select-input" id="offerYear" value={formData.offerYear}
                            name="offerYear" onChange={(event) => onChange('offerYear', event.target.value)} required >
                            <option value="">--Select Your Offering--</option>
                            <option value="offeryear1">Offering1</option>
                            <option value="offeryear2">Offering2</option>
                            <option value="offeryear3">Offering3</option>
                            <option value="offeryear4">Offering4</option>
                            <option value="offeryear5">Offering5</option>
                            <option value="offeryear6">Offering6</option>
                            <option value="offeryear7">Offering7</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-3'>
                    <div class="EF-form-group">
                        <label htmlFor="busiModel">Business Model<span className="require">*</span></label>
                        <input type="text" id="busiModel" name="busiModel" placeholder="Type Business Model(S) and hit Enter"
                            value={formData.busiModel} onChange={(event) => onChange('busiModel', event.target.value)} required />
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="EF-form-group">
                        <label htmlFor="description">Description<span className="require">*</span></label>
                        <div class="textFund">
                            <textarea id="description" name="description" placeholder="Share More about your Company" value={formData.description}
                                rows="4" cols="50" onChange={(event) => onChange('description', event.target.value)} ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default step1;
