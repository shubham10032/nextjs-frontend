import { useState, useEffect } from "react";
import Image from "next/image";
import LeaveQuestion from "./leaveQuestion";
import Faq from "./faq";
import { useRouter } from 'next/router';
import { makeUpperCase } from './../../utils'
import Calculator from './../calculator/emiCalculator'
import ProductSection from "../home/productSection";
import LoanProduct from "../home/loanProduct";
const midcontent = ({ data, faq, additionalInfo, product_banner, slug }) => {
  const [loading, setLoading] = useState(true);
  const [categoryId, setCategoryId] = useState()

  const router = useRouter()

  let utmData = '';
  const { utm_campaign, utm_id, utm_medium, utm_source } = router.query
  if (!utm_campaign) {
    utmData = `?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=`
  } else {
    utmData = `?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_id=${utm_id}`
  }

  let pageUrl = '';
  let url = router.asPath.split('/')
  if (url.length > 2) {
    pageUrl = url[2].split('?')[0];
  } else {
    pageUrl = url[1].split('?')[0];
  }

  let pageName = makeUpperCase(pageUrl, ' ', '-')
  for (let slugs in slug) {
    additionalInfo[slugs]['slug'] = slug[slugs].slug;
  }

  useEffect(() => {
    setLoading(false)
    setCategoryId(data[0].categories_id)
  });

  // console.log("page name -" + pageName)
  const str = pageName;
  const updatedPageName = str.split("#")[0];
  // console.log("update page name -" + updatedPageName);
  return (
    <>
      {/* {
        (categoryId == 2 || categoryId == 1) && data[0].slug !== 'credit-card' && data[0].slug !== 'loans' && 
        <div dangerouslySetInnerHTML={{ __html: product_banner ? product_banner[0].product_banner : '' }}>
          
        </div>
      } */}
    {
      categoryId == 2 && <LoanProduct productName={updatedPageName} />
    }
    {
      categoryId == 1 && <ProductSection productName={updatedPageName} />
    }
        

      <div className="innerpage_bg">

        <section className="cal-sect-wrap">

          <div className="become-container personal-container container is-builder ui-sortable">
            {
              data[0].categories_id === 2 && data[0].slug !== 'loans' && <div className="bps-top-section my-3">

                <div className="bps-heading-box">
                  <h2 className="bps-heading text-captalize">{data && data[0].name} EMI Calculator</h2>

                  <div className="wdr">
                  </div>
                </div>
              </div>
            }

            <div className="personal-loan-card-box text-center">

            </div>
          </div>

          <div className="container">
            {
              data[0].categories_id === 2 && data[0].slug !== 'loans' && <Calculator />
            }
          </div>

          {
            (data[0].slug !== 'credit-card' && data[0].slug !== 'loans') && <>

              {
                (categoryId == 2 || categoryId == 1) && additionalInfo.length > 0 && <section className="mt-5 become-partner-section" id="product-id-edu">
                  <div className="become-container personal-container container is-builder ui-sortable">
                    <div className="bps-top-section">
                      <div className="title-img"><Image src="/images/icon/meet.png" height={71} width={71} /></div>
                      <div className="bps-heading-box">

                        <h2 className="bps-heading">A Wide Range of <span className="text-captalize">{updatedPageName} </span>
                          To Choose From</h2>
                        <span className="bps-sub-heading pr-bps-sub">
                          No matter what your need or budget is, ReferLoan has an option for everyone
                        </span>
                        <div className="wdr"></div>
                      </div>
                    </div>
                  </div>

                </section>
              }
            </>
          }


          <div className="main-container">
            <div dangerouslySetInnerHTML={{ __html: data[0].description }}></div>
          </div>

          <section className="faq-section">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <LeaveQuestion faq={faq} />
                </div>
                <div className="col-md-6">
                  <Faq faq={faq} />
                </div>
              </div>

            </div>
          </section>
        </section>
      </div>

    </>
  );
};

export default midcontent;





