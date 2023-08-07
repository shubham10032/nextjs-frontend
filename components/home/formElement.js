
import axios from 'axios';
import * as Yup from "yup";
import { useFormik } from "formik";

import React, { useState, useEffect } from 'react'

import { useRouter } from 'next/router';
const formElement = ({ data }) => {
  const router = useRouter()
  const signupSchema = Yup.object({
    pincode: Yup.string().min(6, 'Invalid pincode').max(6, 'Invalid pincode'),
  });

  const [searchData, setSearchData] = useState({
    "cat_id": '1',
    "product_id": '',
    "employed_type": 'Salaried',
    "salary": "",
    "tenure": "",
    "pincode": "",
  })

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: searchData,
      validationSchema: signupSchema,
      onSubmit: (values, actions) => {

      }
    });

  const searchProduct = async (e) => {
    e.preventDefault()

    let hit;
    try {
      if (values.employed_type == 'Salaried') {
        hit = values.product_id + '/salary/' + values.salary + '/pincode/' + values.pincode + '?ref=web';
       
      }
      else {
        hit = values.product_id + '/turnover/' + values.tenure + '/pincode/' + values.pincode + '?ref=web';
      }
      router.push(hit)
    }

    catch (err) {
      console.log(err)
    }
  }
  return (
    <form onSubmit={searchProduct}>
      <div className="loan-form-area">
        <div className="loanType">
          <select name='product_id' onChange={handleChange} value={values.product_id} required>
            {data.length == '6' ? <option defaultValue='' value=''>Type of Card</option> : <option defaultValue='' value=''>Type of Loan</option>}
            {data && data.map((item, key) => (
              <option key={key} value={item.slug}>{item.name}</option>
            ))}
          </select>
          {errors.product_id && <p style={{ color: 'red' }}>{errors.product_id}</p>}
        </div>
        <div className="loanType" >
          <select onChange={handleChange} name="employed_type" value={values.employed_type} required>
            <option defaultValue='' disabled>Profession Type </option>
            <option value="Salaried">Salaried</option>
            <option value="Self employed">Self employed</option>
          </select>
          {errors.employed_type && <p style={{ color: 'red', fontSize: '12px' }}>{errors.employed_type}</p>}
        </div>

        {values.employed_type &&
          <div className="loanType ">
            {
              values.employed_type === 'Salaried' &&
              <input
                type="number"
                autoComplete="off"
                name="salary"
                id="salary"
                placeholder="Monthly income"
                value={values.salary}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />

            }
            {values.employed_type === 'Self employed' &&

              <input
                type="number"
                autoComplete="off"
                name="tenure"
                id="tenure"
                placeholder="Turn Over"
                value={values.tenure}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />

            }

          </div>}

        <div className="loanType">

          <input
            type="text"
            autoComplete="off"
            name="pincode"
            id="pincode"
            placeholder="Residential Pincode"
            value={values.pincode}
            onChange={handleChange}
            onBlur={handleBlur}
            pattern="[0-9]{6}"
            title="Five digit zip code"
            required
          />
          {errors.pincode && <p style={{ color: 'red', fontSize: '12px' }}>{errors.pincode}</p>}
        </div>
        <div className="search-button">
          <button type="submit" >Continue</button>
        </div>
      </div>
    </form>
  )
}

export default formElement