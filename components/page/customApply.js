import { data } from './../constant/data'
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import { useFormik } from 'formik'
import { useState, useEffect } from "react";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useRouter } from 'next/router';
import * as Yup from "yup";
import Thanks from "./thanks";


const CustomApply = (props) => {
  const [step, setStep] = useState(0)
  const [token, setToken] = useState();
  const router = useRouter()
  const [serversideStatus, setServerSideStatus] = useState(false)
  const [serversidemsg, setServerSideMsg] = useState('')
  const [loading, setLoading] = useState(true)
  var initialValues = {};

  const CustomApplyForm = Yup.object({
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


  const { values, errors, touched, setFieldValue, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: CustomApplyForm,
      onSubmit: async (values) => {
        try {
          const formData = new FormData();
          for (const property in values) {
            formData.append(property, values[property])
          }
          const headers = {
            'Authorization': "Bearer " + token.slice(1, -1) + "",
          }
          setLoading(true)
          const res = await axios.post(`${process.env.APIHOST}/api/customers/`, formData, { headers });
          if (res.data.status) {
            setLoading(false)
            setStep(step + 1)
          }
        } catch (error) {
          setServerSideStatus(false)
          setServerSideMsg('Fill the valid information')
          console.log("message", error.message);
        }
      },
    });

  useEffect(() => {
    setLoading(false)
    setServerSideStatus(false)
    setServerSideMsg('')
    if (typeof window !== 'undefined') {
      setToken(window.localStorage.getItem("token"))
    }
    setStep(0)
  }, [token, router])
  return (
    <>
      {!serversideStatus && <p className='form-error'>{serversidemsg}</p>}
      <form onSubmit={(e) => { handleSubmit(e) }} >
        {data && data.slice(step, step + 1).map((item, index) =>
          <>
            <div key={index} className="row custome-form">
              <h3>{item.section_name}</h3>
              {item.forms.map((elem, ind) => (
                <div key={ind} className="col-lg-6 col-md-6 col-12 mt-2">

                  {elem.param_name == 'pan_card' ? initialValues[elem.param_name] = panCard : initialValues[elem.param_name] = ''}

                  {(elem.type == 'text' || elem.type == 'number' || elem.type == 'email') &&
                    <><TextField
                      fullWidth
                      inputProps={elem.patterns != '' ? { pattern: elem.patterns, title: "Please Fill Valid Datails!" } : {}}
                      required={elem.is_required}
                      className={`"mt-2" ${elem.is_visible ? '' : 'd-none'}`}
                      name={elem.param_name}
                      type={elem.type}
                      label={elem.field_name}
                      id={elem.param_name}
                      autoComplete="off"
                      defaultValue=''
                      onChange={handleChange}
                      error={touched[elem.param_name] && errors[elem.param_name] && true}
                    />
                      {errors[elem.param_name] && touched[elem.param_name] ? (
                        <p className="form-error">{errors[elem.param_name]}</p>
                      ) : null}
                    </>
                  }

                  {elem.type == 'file' &&
                    <><TextField
                      fullWidth
                      required={elem.is_required}
                      className={`"mt-2" ${elem.is_visible ? '' : 'd-none'}`}
                      name={elem.param_name}
                      type={elem.type}
                      label={elem.field_name}
                      id={elem.param_name}
                      autoComplete="off"
                      defaultValue=''
                      error={touched[elem.param_name] && errors[elem.param_name] && true}
                      onChange={(event) => {
                        setFieldValue(elem.param_name, event.target.files[0]);
                      }}
                    />
                      {errors[elem.param_name] && touched[elem.param_name] ? (
                        <p className="form-error">{errors[elem.param_name]}</p>
                      ) : null}
                    </>
                  }
                  {elem.type == 'date' &&
                    <> <TextField
                      fullWidth
                      inputProps={elem.patterns != '' ? { pattern: elem.patterns, title: "Please Fill Valid Data!" } : {}}
                      required={elem.is_required}
                      className={`"mt-2" ${elem.is_visible ? '' : 'd-none'}`}
                      name={elem.param_name}
                      label={elem.field_name}
                      id={elem.param_name}
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                      autoComplete="off"
                      error={touched[elem.param_name] && errors[elem.param_name] && true}
                      onChange={handleChange}
                      type={elem.type}

                    />
                      {errors[elem.param_name] && touched[elem.param_name] ? (
                        <p className="form-error">{errors[elem.param_name]}</p>
                      ) : null}
                    </>
                  }
                  {elem.type == 'select' && <SelectField {...elem} values={values} handleChange={handleChange} />}

                  {elem.type == 'checkbox' && <FormControlLabel className={`"mt-2" ${elem.is_visible ? '' : 'd-none'}`} control={<Checkbox />} label={elem.field_name} required />}
                </div>
              ))}

            </div>
            <div className="feature-four__top-btn-box mt-4">
              <button className="thm-btn feature-four__top-btn" type="submit" aria-label = "Save & Next">Save & Next</button>
              </div>
          </>
        )}
        {data.length != 0 && data.length == step ? <Thanks product={props.product} result={'custom'} /> : ""}


      </form>
    </>
  )
}

export default CustomApply

export function SelectField(props) {


  const { name, label, ParamOptions, handleChange } = props
  return (
    <>
      <FormControl variant="standard" fullWidth>

        <InputLabel id="demo-simple-select-standard-label">{props.field_name}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          name={props.param_name}
          label={props.field_name}
          required
          onChange={handleChange}
          defaultValue=""
        >
          {ParamOptions.map((optn, ind) => (
            <MenuItem key={ind} value={optn.value
            }>
              <em>{optn.name}</em>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}