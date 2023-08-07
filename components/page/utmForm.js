import axios from "axios";
import { useFormik } from 'formik'
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useRouter } from "next/router";

const UtmForm = ({utmData,token,data}) => {
  const [error, setError] = useState(false)
  const [empType, setEmpType] = useState()
  const [inputValue, setInputValue] = useState("")
  const [active, setActive] = useState()
  const router = useRouter();
  const [searchData, setSearchData] = useState({
    "employed_type": 'Salaried',
    "salary": "",
    "turnover": "",
    "pincode": "",
    "pan": "",
    "bank_product_id" : ""
  })

  const handleChange = (e) => {

    if (e.target.value == "Salaried") {
      setFieldValue(e.target.name,e.target.value)
      setSearchData({ ...searchData, [searchData.employed_type]: 'Salaried' })
    } else if (e.target.value == "Self employed") {
     
      setSearchData({ ...searchData, [searchData.employed_type]: 'TurnOver' })
    }
    setFieldValue(e.target.name,e.target.value)
    setSearchData({ ...searchData, [e.target.name]: e.target.value })
  }

  const utmFormSchema = Yup.object({
    pan: Yup.string().min(10).max(10).required("Please fill the pan card").matches(/([A-Z]){5}([0-9]){4}([A-Z]){1}$/, "Invalid Pancard"),
    pincode: Yup.string().min(6).max(6).required('Please enter pincode').matches(/^[0-9]+$/, "Must be only digits"),
  });

  const { values, errors, touched, setFieldValue, handleBlur, handleSubmit } =
    useFormik({
      initialValues: searchData,
      validationSchema: utmFormSchema,
      onSubmit: async (values, action) => {
        try {
          const data = new FormData();
          for (const property in values) {
            data.append(property, values[property])
          }
          
          const headers = {
            'Authorization': "Bearer " + token.slice(1, -1) + ""
          }
          
          const res = await axios.post(`${process.env.APIHOST}/api/customers/`, data, { headers });
          if (res.data.status) {
            setTimeout(() => {
              router.push('/')
            }, 2000);
            const newWindow = window.open(utmData.live_default, '_blank', 'noopener,noreferrer')
            if (newWindow) newWindow.opener = null

          }

        } catch (error) {
         
          console.log("Message : ", error.message)
        }
      }
    });

    useEffect(() => {
      setFieldValue('bank_product_id',data.bank_product_id)
    }, [])

  return (
    <form onSubmit={(e) => { e.preventDefault(), handleSubmit() }}>
      <div className="input-wrappers mb-3">

        <div className="inputRow mb-2 mt-2">
          <label>Profession Type</label>
          <select className="form-control shadow-none" name="employed_type" aria-label="Type of loan " onChange={handleChange} defaultValue={searchData.employed_type} required>
            <option defaultValue='' value=''>Profession Type </option>
            <option selected value="Salaried">Salaried</option>
            <option value="Self employed">Self employed</option>
          </select>
        </div>

        {
          searchData.employed_type === 'Salaried' &&
          <div className="inputRow mb-2 mt-2">
            <label>Salary</label>
            <input type="number"
              autoComplete="off"
              name="salary"
              id="salary"
              
              placeholder="Monthly income"
              defaultValue={searchData.salary}
              onChange={handleChange}
              className="form-control shadow-none"
              required />
          </div>
        }
        {
          searchData.employed_type === 'Self employed' &&
          <div className="inputRow mb-2 mt-2">
            <label>Turn Over</label>
            <input type="number"
              autoComplete="off"
              name="tenure"
              id="tenure"
              placeholder="Turn Over"
              defaultValue={searchData.turnover}
              onChange={handleChange}
              className="form-control shadow-none"
              required />
          </div>
        }

        <div className="inputRow mb-2 mt-2">
          <label>Pan Number </label>
          <input type="text"
            autoComplete="off"
            name="pan"
            id="pan"
            placeholder="Pan Number"
            defaultValue={searchData.pan}
            onChange={handleChange}
            className="form-control shadow-none"
            required />
          {touched.pan && errors.pan && <p style={{ color: 'red', fontSize: '12px' }}>{errors.pan}</p>}
        </div>

        <div className="inputRow mb-2 mt-2">
          <label>Pincode</label>
          <input type="number"
          className="form-control shadow-none"
            autoComplete="off"
            name="pincode"
            id="pincode"
            placeholder="Residential Pincode"
            defaultValue={searchData.pincode}
            onChange={handleChange}
            required />
          {touched.pincode && errors.pincode && <p style={{ color: 'red', fontSize: '12px' }}>{errors.pincode}</p>}
        </div>
      </div>

      <div className="search-button">
        <button className="my-2" type="submit">Submit</button>
      </div>

    </form>
  )
}

export default UtmForm