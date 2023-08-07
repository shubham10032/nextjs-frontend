
const AmountInput = ({ cobrower='', name, handleChange, customHandleChange, values, handleBlur, setFieldValue, label }) => {

    return (
        <div>

            <div className=" ">
                <div className='amout-title'>
                    <label style = {{marginBottom:'0'}}  htmlFor={`co-${label} `}>{cobrower} Annual Turnover</label>
                    <div className='rupay-box'>
                        {/* <div> */}
                            {
                                values.employee_type == 'salaried' && <><input role="button"  id={`Thousand-${label}`}  checked={values.turnover_unit === 'thousand'} onChange={() => setFieldValue("turnover_unit", 'thousand')} type='radio' name='rupay' />
                                    <label  htmlFor={`Thousand-${label}`}>Thousand /</label> </>
                            }
                        {/* </div>
                        <div> */}
                            <input role="button" id={`Lakh-${label}`} checked={values.turnover_unit === 'lakh'} onChange={() => setFieldValue("turnover_unit", 'lakh')} type='radio' name='rupay' />
                            <label htmlFor={`Lakh-${label}`}>Lakh {values.employee_type != 'salaried' ? '/' : ''}</label>
                        {/* </div>
                        <div> */}
                            {
                                values.employee_type != 'salaried' && <> <input role="button" checked={values.turnover_unit === 'cr'} id={`cr-${label}`} onChange={() => setFieldValue("turnover_unit", 'cr')} type='radio' name='rupay' /> <label htmlFor={`cr -${label}`}>cr</label></>
                            }
                        {/* </div> */}
                    </div>


                </div>
                <div className="input-amount">
                    <input type='text'  id={`co-${label}`} required name={name} onChange={(e) => {
                        // customHandleChange(e)
                        handleChange(e)
                    }} onBlur={handleBlur} value={values[name]} />
                   <span className="unit"> {values.turnover_unit} </span>
                    
                </div>

            </div>
        </div>

    )
}

export default AmountInput