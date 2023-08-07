import React from 'react';
import {
    Formik,
    Form as FormikForm,
    Field,
    ErrorMessage,
    useFormikContext,
    useField,
    useFormik
} from 'formik';
import Button from '@mui/material/Button';
export function Form(props) {
    return (
        
        <Formik
            {...props}
        >
            <FormikForm className="needs-validation" novalidate="">
                {props.children}
            </FormikForm>
        </Formik>)
}

export function TextField(props) {
console.log(props)
    const {field_name,param_name,type,...rest } = props

    return (
        <>
       {field_name && <label >{field_name}</label>}
            <Field
                className="form-control"
                type={type}
                name={param_name}
                id={param_name}
                placeholder={field_name || ""} 
                {...rest}
            />
            <ErrorMessage name={param_name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
      </>
    )
}

export function SelectField(props) {
    const { name, label, options } = props
    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <Field
                as="select"
                id={name}
                className="form-control"
                // name={name}
            >
                <option value="" >Choose...</option>
                {options.map((optn, index) => <option value={optn.id} label={optn.name || optn.value} />)}
            </Field>
            <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
        </>
    )
}

export function SubmitButton(props){
    const { title, ...rest } = props;
    const { isSubmitting } = useFormikContext();
    
    return (
        <Button variant="contained" type="submit"  {...rest} disabled={isSubmitting}>{title}</Button>
    )
}