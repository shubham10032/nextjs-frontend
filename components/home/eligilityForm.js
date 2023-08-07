import FormElement from './formElement'
import { useState } from 'react'
const eligilityForm = ({ loanProduct, creditProduct }) => {
  const [activeTab, setActiveTab] = useState('loan');
  return (
    <>
      <div className="header-form-area">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#loan" data-id="2" value="2"
              type="button" role="tab" aria-selected="true" onClick={()=>{setActiveTab('loan')}}>Loan</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-9get="#creditCard" data-id="1" value="1"
              type="button" role="tab" aria-selected="false" onClick={()=>{setActiveTab('credit')}}>Credit
              Card</button>
          </li>

          {/* onClick={setSearchData({cat_id:1})} */}

        </ul>
        <div className="tab-content" id="">
          <div className="tab-pane fade show active" id="loan" role="tabpanel" aria-labelledby="home-tab">
            {activeTab == 'loan'? <FormElement data={loanProduct} />:<FormElement data={creditProduct} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default eligilityForm