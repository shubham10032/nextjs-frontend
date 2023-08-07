import React, { useEffect, useState, Fragment } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useSelector } from "react-redux";
import { makeUpperCase, makeyearmonth } from "./../../utils/index";
import { useDispatch } from "react-redux";
import { updateFilter, checkboxData } from "./../../store/slices/filterSlice";
import { useRouter } from "next/router";

const ProductFilter = ({ data, product_id }) => {
    const allFilterData = useSelector((state) => state.filter.allFilterData);
    const checkboxDatas = useSelector((state) => state.filter.checkboxData);
    const [formData, setFormData] = useState([]);
    const router = useRouter();
    const dispatch = useDispatch();
    let paramName;
    let flag;
    let flag1;
    let checkExistingCard;
    let initialValues = {};


    const filterFormData = async () => {
        try {
            const data = {
                product_id,
            };
            const res = await axios.post(
                `${process.env.APIHOST}/api/banks/filter`,
                data
            );
            if (res.data.status) {
                setFormData(res.data.data);
            }
        } catch (error) {
            console.log("Message", error);
        }
    };

    const {
        values,
        handleBlur,
        setFieldValue,
        handleChange,
        handleSubmit,
        errors,
        touched,
        setFieldTouched,
    } = useFormik({
        initialValues,
        validationSchema: "",
        onSubmit: async (values, actions) => {
            dispatch(updateFilter(values));
            let allData = { ...values, ...allFilterData, ...checkboxDatas };
       
            const queryParams = Object.keys(allData)
                .map(
                    (key) =>
                        `${encodeURIComponent(key)}=${encodeURIComponent(allData[key])}`
                )
                .join("&");
            router.push(`product-list?${queryParams}`);
        },
    });

    function customHandleChange(e) {
        const { name, value, type } = e.target;
        setFieldValue(name, value);
        dispatch(
            checkboxData({
                key: name,
                value:
                    type === "checkbox"
                        ? checkboxDatas[name] === "yes"
                            ? ""
                            : "yes"
                        : value,
            })
        );
    }

    useEffect(() => {
        
        
        const timeoutId = setTimeout(() => {
           
            filterFormData();
        }, 500);
        return () => {
            clearTimeout(timeoutId);
        };

    }, [allFilterData]);
    
    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(e);
                }}
            >
                <div className="sidebar-box">
                    <div className="-sidebar-box-row">
                        {formData.map((elem, ind) => {
                            if (elem.type == "checkbox") {
                                initialValues[elem.name] = false;
                            } else {
                                initialValues[elem.name] = "";
                            }
                            paramName = elem.name.trim();
                            flag = false;
                            flag1 = false;
                            if (elem.dependOn == "do_you_have_any_credit_card") {
                                flag1 = true;
                            }
                            if (elem.dependOn == "") {
                                flag = false;
                            } else if (elem.dependOn == "salaried") {
                                flag = true;
                            } else if (elem.dependOn == "self_employed") {
                                flag = true;
                            } else {
                                flag = false;
                            }

                            if (allFilterData.already_credit_card === "yes") {
                                checkExistingCard = true;
                            }

                            return (
                                <Fragment key={ind}>
                                    {elem.name != "professional_quaification" ? (
                                        <div
                                            className={`sidebar-input-box 
                                        
                                        ${checkExistingCard != true
                                                    ? flag
                                                        ? allFilterData.employee_type ==
                                                            elem.dependOn
                                                            ? ""
                                                            : "d-none"
                                                        : flag1 == true
                                                            ? "d-none"
                                                            : null
                                                    : flag1
                                                        ? filterData.already_credit_card ===
                                                            "yes"
                                                            ? ""
                                                            : "d-none"
                                                        : "d-none"
                                                } `}
                                        >
                                            {(elem.type === "text" || elem.type === "number") &&
                                                elem.is_visible === "1" ? (
                                                <>
                                                    <div className="loanType-side-filter">
                                                        {elem.name != "current_pincode" ? (
                                                            <>
                                                                <label>
                                                                    {makeUpperCase(elem.name, " ", "_")}
                                                                    {elem.optionsBy != "" ? (
                                                                        <small> ({elem.optionsBy})</small>
                                                                    ) : null}
                                                                </label>

                                                                <input
                                                                    type={elem.type}
                                                                    autoComplete="off"
                                                                    onChange={(e) => {
                                                                        handleChange(e);
                                                                    }}
                                                                    name={elem.name}
                                                                    value={values.paramName}
                                                                    onBlur={handleBlur}
                                                                />
                                                            </>
                                                        ) : (
                                                            <>
                                                                <label>
                                                                    {makeUpperCase(elem.name, " ", "_")}
                                                                </label>
                                                                <input
                                                                    type={elem.type}
                                                                    autoComplete="off"
                                                                    onChange={(e) => {
                                                                        handleChange(e);
                                                                    }}
                                                                    name={elem.name}
                                                                    value={values.paramName}
                                                                    onBlur={handleBlur}
                                                                />
                                                            </>
                                                        )}
                                                    </div>
                                                </>
                                            ) : (
                                                ""
                                            )}

                                            {elem.type == "date" && elem.is_visible === "1" && (
                                                <>
                                                    {" "}
                                                    <div className="loanType">
                                                        <label>{makeUpperCase(elem.name, " ", "_")}</label>
                                                        <input
                                                            type="date"
                                                            className="form-check-input"
                                                            autoComplete="off"
                                                            onChange={(e) => {
                                                                handleChange(e);
                                                            }}
                                                            name={elem.name}
                                                            value={values.paramName}
                                                        />
                                                    </div>
                                                </>
                                            )}

                                            {elem.type == "select" && elem.is_visible === "1" && (
                                                <SelectField
                                                    customHandleChange={customHandleChange}
                                                    {...elem}
                                                    values={values}
                                                    handleChange={handleChange}
                                                />
                                            )}
                                            {elem.type == "range" && elem.is_visible === "1" && (
                                                <RangeField
                                                    customHandleChange={customHandleChange}
                                                    {...elem}
                                                    values={values}
                                                    handleChange={handleChange}
                                                />
                                            )}
                                            {elem.type == "dropdown" && elem.is_visible === "1" && (
                                                <DropDownField
                                                    customHandleChange={customHandleChange}
                                                    {...elem}
                                                    values={values}
                                                    handleChange={handleChange}
                                                />
                                            )}
                                            {elem.type == "checkbox" && elem.is_visible === "1" && (
                                                <div className="loanType form-check">
                                                    <input
                                                        type="checkbox"
                                                        checked={
                                                            checkboxDatas[paramName]
                                                                ? checkboxDatas[paramName] == "yes"
                                                                : null
                                                        }
                                                        name={elem.name}
                                                        id={elem.name}
                                                        className="form-check-input"
                                                        onChange={(e) => {
                                                            
                                                          
                                                            customHandleChange(e);
                                                        }}
                                                        value={values.paramName}
                                                    />
                                                    <label htmlFor={elem.name}>
                                                        {makeUpperCase(elem.name, " ", "_")}
                                                    </label>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div
                                            className={`${values.applicant_quaification === "Professional Degree"
                                                    ? ""
                                                    : "d-none"
                                                } sidebar-input-box`}
                                        >
                                            <SelectField
                                                customHandleChange={customHandleChange}
                                                {...elem}
                                                data={data}
                                                values={values}
                                                handleChange={handleChange}
                                            />
                                        </div>
                                    )}
                                </Fragment>
                            );
                        })}
                    </div>
                </div>
                {formData.length > 0 && (
                    <div className="feature-four__top-btn-box d-flex justify-content-center mt-4">
                        <button className="thm-btn feature-four__top-btn" type="submit">
                            Apply Filter
                        </button>
                    </div>
                )}
            </form>
        </>
    );
};

export default ProductFilter;

export function SelectField(props) {
    const {
        values,
        name,
        optionsBy,
        options,
        customHandleChange,
        handleChange,
        dependency,
        dependency_value,
        is_required,
        data
    } = props;

    return (
        <>
            {name && (
                <label htmlFor={name}>
                    {makeUpperCase(name, " ", "_")}
                    {optionsBy != "" ? <small> ({optionsBy})</small> : null}
                </label>
            )}

            <select
                className="form-select form-select-xm"
                aria-label=".form-select-xm "
                name={name}
                value={values[name]}
                onChange={(e) => {
                    handleChange(e);
                }}
            >
                {options.length > 0 &&
                    options.map((optn, key) => (
                        <option key={key} value={optn}>
                            {optn}
                        </option>
                    ))}
            </select>
        </>
    );
}

export function RangeField(props) {
    const {
        values,
        name,
        optionsBy,
        options,
        customHandleChange,
        handleChange,
        dependency,
        dependency_value,
        is_required,
    } = props;

    return (
        <>
            {name && (
                <label className="range-lable" htmlFor={name}>
                    <span>{makeUpperCase(name, " ", "_")}</span>
                    {optionsBy != "" ? (
                        <small>
                            {" "}
                            [
                            {`${values[name] === undefined ? options[0] : values[name]}` +
                                optionsBy}
                            ]
                        </small>
                    ) : null}
                </label>
            )}

            <input
                type="range"
                name={name}
                onChange={(e) => {
                    handleChange(e);
                }}
                value={values.name}
                defaultValue={options[0]}
                min={options[0]}
                max={options[1]}
            />
        </>
    );
}

export function DropDownField(props) {
    const {
        values,
        name,
        optionsBy,
        options,
        customHandleChange,
        handleChange,
        dependency,
        dependency_value,
        is_required,
    } = props;

    return (
        <>
            {name && (
                <label className="range-lable" htmlFor={name}>
                    {makeUpperCase(name, " ", "_")}
                </label>
            )}

            <div className="dropdown-year">
                <select
                    name={makeyearmonth(name + "_year", "_", "_")}
                    value={values[makeyearmonth(name + "_year", "_", "_")]}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                >
                    <option value={""}>Years</option>

                    {[...Array(31)].map((elementInArray, index) => (
                        <option key={index} value={index}>
                            {index}
                        </option>
                    ))}
                </select>
                <select
                    name={makeyearmonth(name + "_month", "_", "_")}
                    value={values[makeyearmonth(name + "_month", "_", "_")]}
                    onChange={(e) => {
                        handleChange(e);
                    }}
                >
                    <option value={""}>Month</option>
                    {[...Array(12)].map((elementInArray, index) => (
                        <option key={index} value={index}>
                            {index}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}
