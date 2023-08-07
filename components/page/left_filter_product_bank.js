import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/router';
const leftfilter = ({ content, ProductByCat }) => {
  const router = useRouter()
  const [empType, setEmpType] = useState()
  const [searchData, setSearchData] = useState({
    "cat_id": '1',
    "product_id": '',
    "employed_type": 'Salaried',
    "salary": "",
    "turnover": "",
    "pincode": "",
  })

  const handleChange = (e) => {

    if (e.target.value == "Salaried") {
      setEmpType("Salary")
    } else if (e.target.value == "Self employed") {
      setEmpType("TurnOver")
    }
    setSearchData({ ...searchData, [e.target.name]: e.target.value })
  }

  const searchBankProduct = async (e) => {
    e.preventDefault()
    let hit;
    try {
      if(searchData. employed_type=='Salaried')
      {
        hit = searchData.product_id + '/salary/' + searchData.salary + '/pincode/' + searchData.pincode + '?ref=web';
        await router.push(hit)
      }
      else
      {
        hit = searchData.product_id + '/turnover/' + searchData.tenure + '/pincode/' + searchData.pincode + '?ref=web';
        await router.push(hit)
      }
      // console.log(hit);
    }
    catch (err) {
      console.log(err)
    }
  }



  useEffect(() => {

    setSearchData({ ...searchData, salary: content.salary, pincode: content.pincode, product_id: content.product_slug, turnover: content.tenure })
    setEmpType(content.label)
  }, [content])

  return (
    <>
      <form onSubmit={searchBankProduct}>
        <div className="filterArea">
          <div className="inputRow">
            <label>Choose Product</label>
            <select className="form-select" aria-label="Type of loan " name='product_id' onChange={handleChange}>

              {ProductByCat.map((item, key) => (
                <option defaultValue='' selected={content.p_name == item.name} key={key} value={item.slug}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className="inputRow">
            <label>Profession Type</label>
            <select className="form-select" name="employed_type" aria-label="Type of loan " onChange={handleChange} required>
              <option defaultValue='' value=''>Profession Type </option>
              <option selected value="Salaried">Salaried</option>
              <option value="Self employed">Self employed</option>
            </select>
          </div>

          {
            empType === 'Salary' &&
            <div className="inputRow">
              <label>Salary</label>
              <input type="number"
                autoComplete="off"
                name="salary"
                id="salary"
                placeholder="Monthly income"
                defaultValue={searchData.salary}
                onChange={handleChange}

                required />
            </div>
          }
          {
            empType === 'TurnOver' &&
            <div className="inputRow">
              <label>Turn Over</label>
              <input type="number"
                autoComplete="off"
                name="tenure"
                id="tenure"
                placeholder="Turn Over"
                defaultValue={searchData.turnover}

                onChange={handleChange}

                required />
            </div>
          }

          <div className="inputRow">
            <label>Pincode</label>
            <input type="number"
              autoComplete="off"
              name="pincode"
              id="pincode"
              placeholder="Residential Pincode"
              defaultValue={searchData.pincode}
              onChange={handleChange}

              required />
          </div>
          <button className="applyBtn" id="myBtn" title="Apply Filter" type="submit">Apply Filter</button>
        </div>
      </form>
    </>

  )
}

export default leftfilter