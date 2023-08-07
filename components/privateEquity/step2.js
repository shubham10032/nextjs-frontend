import React from 'react';

const step2 = ({ formData, onChange }) => {
  // const handleImageUpload1 = (event) => {
  //     const file = event.target.files[0];
  //     onChange('image2', URL.createObjectURL(file));
  // };
  return (
    <div className='second-step privity-form-box'>
      <h2 className=''>Personal Information</h2>
      <div className='row'>
        <div className="EF-form-group Ef-dflex">
          <input type="checkbox" className="form-check-input" name="anyVideo" value={formData.anyVideo} id="anyVideoLink" />
          <label className="form-check-label" htmlFor="anyVideoLink">Any Video Link ?</label></div>
      </div>
      <div className='row'>
        <div className='col-md-4 col-sm-6'>
          <div className='EF-form-group'>
            <label htmlFor='entityType'>Entity Type<span className='require'>*</span></label>
            <select className="cibli-select-input" required="" id="entityType" value={formData.entityType}
              onChange={(event) => onChange('entityType', event.target.value)}
              name="entityType">
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
        <div className='col-md-4 col-sm-6'>
          <div className='EF-form-group'>
            <label htmlFor='teamSize'>Team Size</label>
            <select className="cibli-select-input" required="" id="teamSize" value={formData.teamSize}
              onChange={(event) => onChange('teamSize', event.target.value)}
              name="teamSize">
              <option value="">--Select Team Size--</option>
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
        <div className='col-md-4 col-sm-6'>
          <div className='EF-form-group'>
            <label htmlFor='yearEstab'>Currency<span className='require'>*</span></label>
            <select className="cibli-select-input" required="" id="currencyRs" value={formData.currencyRs}
              onChange={(event) => onChange('currencyRs', event.target.value)}
              name="currencyRs">
              <option value="">--INR - Indian Rs.--</option>
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
      </div>
      <div className="row">
        <div className='equity-ques-head mb-3'>Team</div>
        <div className="col-md-4">
          <div className="EF-form-group">
            <label htmlFor="firstnameEnt">First Name<span className="require">*</span></label>
            <input type="text" autoComplete="off" name="firstnameEnt" id="firstnameEnt"
              placeholder="Enter First Name" value={formData.firstnameEnt}
              onChange={(event) => onChange('firstnameEnt', event.target.value)} />
          </div>
        </div>
        <div className="col-md-4">
          <div className="EF-form-group">
            <label htmlFor='lastnameEnt'>Last Name<span className='require'>*</span></label>
            <input type="text" autocomplete="off" name="lastnameEnt" id="lastnameEnt" placeholder="Enter Last Name"
              value={formData.lastnameEnt} onChange={(event) => onChange('lastnameEnt', event.target.value)} />
          </div>
        </div>
        <div className="col-md-4">
          <div className="EF-form-group">
            <label htmlFor="titleName">Title<span className="require">*</span></label>
            <input type="text" autoComplete="off" name="titleName" id="titleName" placeholder="Enter title"
              value={formData.titleName} onChange={(event) => onChange('titleName', event.target.value)} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className='EF-form-group'>
            <label for="gender">Gender<span className="require">*</span></label>
            <select className="cibli-select-input" id="gender" value={formData.gender}
              onChange={(event) => onChange('gender', event.target.value)} name="gender" required>
              <option value=""> Male </option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="col-md-3">
          <div className="EF-form-group">
            <label htmlFor="linkedIn">LinkedIn<span className="require">*</span></label>
            <input type="text" id="linkedIn" name="linked" placeholder="Enter URL" value={formData.linkedIn}
              onChange={(event) => onChange('linkedIn', event.target.value)} />
          </div>
        </div>
        <div className="col-md-3">
          <div className="EF-form-group">
            <label htmlFor="phoneCode">Phone Number<span className="require">*</span></label>
            {/* <div className="rcflex"> */}
              <div className='coldflex'>
                <input type="text" id="phoneNum" name="phoneNum" placeholder="Phone Number" value={formData.phoneNum}
                  onChange={(event) => onChange('phoneNum', event.target.value)} required />
              </div>
            {/* </div> */}
          </div>
        </div>
        <div className="col-md-3">
          <div className="EF-form-group">
            <label htmlFor="email">Email ID<span className="reuire">*</span></label>
            <input type="text" id="email" name="email" placeholder="Email" value={formData.email}
              onChange={(event) => onChange('email', event.target.value)} required />
          </div>
        </div>
      </div>
    </div >
  );
};

export default step2;
