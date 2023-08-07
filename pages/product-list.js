import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import('../components/page/loader'));
const PersonalLoanform = dynamic(() => import('../components/home/filterFormElement/PersonalLoan'));
const BussinessLoanform = dynamic(() => import('../components/home/filterFormElement/BussinessLoan'));
const AutoLoanform = dynamic(() => import('../components/home/filterFormElement/AutoLoan'));
const EducationLoanform = dynamic(() => import('../components/home/filterFormElement/EducationLoan'));
const HomeLoanform = dynamic(() => import('../components/home/filterFormElement/HomeLoan'));
const CreditCardform = dynamic(() => import('../components/home/filterFormElement/CreditCard'));
const LoanAgainstPropertyform = dynamic(() => import('../components/home/filterFormElement/LoanAgainstProperty'));
const LoanAgianstSecurityform = dynamic(() => import('../components/home/filterFormElement/LoanAgianstSecurity'));

import PersonalLoan from "../components/product-list/PersonalLoan";
import BusinessLoan from "../components/product-list/BusinessLoan";
import CreditCard from "../components/product-list/CreditCard";
import HomeLoan from "./../components/product-list/HomeLoan";
import Lap from "../components/product-list/Lap";
import EducationLoan from "./../components/product-list/EducationLoan";
import CarLoan from "./../components/product-list/CarLoan";
import ProductFilter from "../components/product-list/ProductFilter";
import LoanAgainstSecurity from "../components/product-list/LoanAgainstSecurity";
import { allFilterData } from './../store/slices/filterSlice';
import Pagination from '@mui/material/Pagination';
import { useDispatch } from 'react-redux'
const productList = ({ Productdata }) => {
  const router = useRouter();
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState(true)
  const [isClicked, setIsClicked] = useState("");
  const [perPage, setPerPage] = useState(5)
  const [Page, setPage] = useState(1);
  const filterData = useSelector((state) => state.filter.allFilterData);
  const { salary, product_id, cibil } = router.query

  let utmData = "";
  const { utm_campaign, utm_id, utm_medium, utm_source } = router.query;
  if (!utm_campaign) {
    utmData = `?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=`;
  } else {
    utmData = `?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_id=${utm_id}`;
  }



  useEffect(() => {
    dispatch(allFilterData(router.query))
    setLoading(false)
  }, [router.query]);

  const startIndex = (Page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const sliceData = Productdata.status == true ? (Productdata.data).slice(startIndex, endIndex) : [];
  
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      {loading && <Loader />}

      {
        product_id == 7 && <Head>
          <meta name={'description'} content={`Apply Personal Online for Salary ${salary} and Cibil ${cibil}. Check Eligibility, Interest Rate, Processing Fee.`} />
          <title>{`Apply Personal loan online - Salary ${salary} ,Cibil ${cibil} `}</title>
        </Head>
      }

      <section className="product-list-header">
        <div className="container">

          <div className="row">
            <div className="col-md-12">

              {(Productdata.status == true && Productdata.product_id !== 'undefined') ? (
                <>
                  {+Productdata.product_id === 7 && (
                    <PersonalLoanform filterData={router.query} filterStatus={filterStatus} />
                  )}
                  {+Productdata.product_id === 8 && (
                    <BussinessLoanform filterData={router.query} filterStatus={filterStatus} />
                  )}
                  {+Productdata.product_id === 15 && (

                    <CreditCardform filterData={router.query} filterStatus={filterStatus} />
                  )}
                  {+Productdata.product_id === 6 && (
                    <HomeLoanform filterData={router.query} filterStatus={filterStatus} />
                  )}
                  {+Productdata.product_id === 10 && <LoanAgainstPropertyform filterData={router.query} filterStatus={filterStatus} />}
                  {+Productdata.product_id === 18 && (
                    <EducationLoanform filterData={router.query} filterStatus={filterStatus} />
                  )}
                  {+Productdata.product_id === 28 && (
                    <LoanAgianstSecurityform filterData={router.query} filterStatus={filterStatus} />
                  )}
                  {+Productdata.product_id === 17 && (
                    <AutoLoanform filterData={router.query} filterStatus={filterStatus} />
                  )}
                </>
              ) : (
                <p>Data not found</p>
              )}
            </div>
          </div>

        </div>
      </section>
      <section className="become-partner-section xloan-part">
        <div
          className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="filter-btn-box">
                <button className="filter-btn" onClick={() => setIsClicked(isClicked == 'open' ? '' : 'open')}><i className="fas fa-sort-amount-up-alt"></i> <span>Filter</span></button>
              </div>
              <div className={`xloan-form-wrap yup-row ${isClicked}`}>
                <ProductFilter data={router.query} product_id={filterData ? filterData.product_id : null} />
              </div>
            </div>
            <div className="col-lg-9 col-md-12">
              {Productdata.status == true && Productdata.data.length > 0 ? (
                <>
                  {+Productdata.product_id === 7 && (
                    <PersonalLoan products={sliceData} />
                  )}
                  {+Productdata.product_id === 8 && (
                    <BusinessLoan products={sliceData} />
                  )}
                  {+Productdata.product_id === 15 && (
                    <CreditCard products={sliceData} />
                  )}
                  {+Productdata.product_id === 6 && (
                    <HomeLoan products={sliceData} />
                  )}
                  {+Productdata.product_id === 10 && <Lap products={sliceData} />}
                  {+Productdata.product_id === 18 && (
                    <EducationLoan products={sliceData} />
                  )}
                  {+Productdata.product_id === 17 && (
                    <CarLoan products={sliceData} />
                  )}
                  {+Productdata.product_id === 28 && (
                    <LoanAgainstSecurity products={sliceData} />
                  )}
                  <div className='pagination-container mt-3 mx-5 mb-3'>
                    <Pagination
                      count={Math.ceil((Productdata.data).length / perPage)}
                      onChange={handlePageChange}
                      shape="rounded"
                      color="primary"
                      size="large"
                      variant="outlined"
                      className='pagination'
                    />
                  </div>
                </>
              ) : (
                <div id="mf-box ">
                  <div className="row middile-row bg-white" id="opps-box">
                    <div className="opps-no-mf">
                      <h3>Oops!</h3>
                      <h5>Product not found</h5>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export async function getServerSideProps(context) {
  let Productdata = null;
  try {
    if (Object.keys(context.query).length > 0) {
      const { data } = await axios.post(
        `${process.env.APIHOST}/api/banks/`,
        context.query
      );
      if (Object.keys(data).length > 0) {
        Productdata = data
      }
    }

  } catch (error) {
    console.log(error);

  }

  context.res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600,stale-while-revalidate=59');
  return {
    props: {
      Productdata
    }
  }
}
export default productList;
