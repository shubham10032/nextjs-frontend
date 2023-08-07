
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Loader from "./loader";
import Head from "next/head";
import { useRouter } from 'next/router';
import LeftFilterProductBank from '../page/left_filter_product_bank'
import { useSelector } from 'react-redux'
const midcontent = ({ url }) => {
  const router = useRouter()
  const [products, setProducts] = useState([])
  const [content, setContent] = useState([])
  const [ProductByCat, setProductByCat] = useState([])
  const [loading, setLoading] = useState(true);
  const [catid, setCatid] = useState()
  const jsonData = useSelector((state) => state.filter.jsonData)
  const deleteSession = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("full_name");
      window.localStorage.removeItem("pan");
      window.localStorage.removeItem("phone");
    }
  }
  const searchProduct = async () => {


    try {
      const split = await url.split("/");

      let slug;
      let salary;
      let label;
      let pincode;
      if (split[1] == 'salary' || split[1] == 'turnover') {
        slug = split[0];
        salary = split[2];
        pincode = split[4];

        if (split[1] == 'salary') { label = 'Salary' } if (split[1] == 'turnover') { label = 'TurnOver' }
      }
      else {
        slug = split[0] + '/' + split[1];
        salary = split[3];
        pincode = split[5];

        if (split[2] == 'salary') { label = 'Salary' } if (split[2] == 'turnover') { label = 'TurnOver' }
      }

      const response1 = await axios.get(`${process.env.APP_URL}/get_product_by_slug/` + slug);
      const data1 = await response1.data;

      let content_data = data1[0];

      let product_slug = content_data.slug;
      let product_id = content_data.id;
      let p_name = content_data.name;
      let cat_id = content_data.cat_id;
      setCatid(cat_id)

      const finaldata = { product_id, salary, pincode, label };

      const response2 = await axios.post(`${process.env.APIHOST}/api/banks/`, finaldata);
      if (response2) {
        const data2 = await response2.data;
        setContent({ product_slug, p_name, salary, pincode, label })
        setProducts(data2.data)

      } else {

      }

      const response3 = await axios.get(`${process.env.APP_URL}/get_product_by_catid/` + cat_id);
      const data3 = await response3.data;
      setProductByCat(data3)
    }
    catch (error) {

      setLoading(false)
    }
  }


  let utmData = '';
  const { utm_campaign, utm_id, utm_medium, utm_source } = router.query
  if (!utm_campaign) {
    utmData = `?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=`
  } else {
    utmData = `?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_id=${utm_id}`
  }

  useEffect(() => {
    searchProduct()
    setLoading(false)

  }, [router]);
  const datas = url.split("/");
  const bankProduct = datas[1].split('-')
  let label = '';
  bankProduct.map((item, key) => (
    label += ' ' + item.charAt(0).toUpperCase() + item.substring(1)
  ))

  let meta_title = 'Apply' + label + ' Online | Pincode : ' + datas[5] + ' | Salary INR ' + datas[3];
  let description = 'Apply' + label + ' Online at Area Pincode : ' + datas[5] + ', Minimum Salary Required : ' + datas[3] + '. Minimal Documentation, Fast Process'
  let keyword = label + ', Apply' + label + ' at Pincode : ' + datas[5] + ',' + label + ' at ' + datas[3] + " Salary"

  return (
    <>
      <Head>
        <title>{meta_title}</title>
        <meta name={'description'} content={description} />
        <meta name={'keywords'} content={keyword} />
      </Head>
      {loading && <Loader />}
      <section className="grabDeal_header">
        <div className="container">
          <div className="headingArea">
            {content.p_name} | {content.label} : {content.salary} | Pincode : {content.pincode}
          </div>
        </div>
      </section>
      <div className="container">
        <section className="cardOffer_area">

          <LeftFilterProductBank content={content} ProductByCat={ProductByCat} />

          <div className="cardlist-Pnl">
            {products.map((item, key) => (
              <div className="lstRow" key={key}>
                <div className="topPnl">
                  <div className="cardImg">
                    <img src={'/uploads/product_bank/' + item.bankProductName.replace(/\s/g, '_') + '.webp'} height="214" width="340"
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = '/uploads/product_bank/' + catid + '.webp';
                      }}
                    />

                  </div>
                  <div className="cardDtl_pnl">
                    <div className="headingBar">
                      <h2>{item.bankProductName}</h2>
                      <div className="cibilBox">
                        <h3><img src="/images/cibil-meter.webp" alt="" />Excellent</h3>
                        <p>Approval Chances {item.chance} %</p>
                      </div>
                    </div>

                    {JSON.parse(item.bankProductInfo)['interest_min'] == 0 ? <div className="benefitRow">
                      <ul>
                        <li>
                          <span>Processing Fees</span>{JSON.parse(item.bankProductInfo)['processing_fee']}
                        </li>
                      </ul>
                    </div> : <div className="benefitRow">
                      <ul>
                        <li>
                          <span>Min Interest</span>{JSON.parse(item.bankProductInfo)['interest_min']} %
                        </li>
                        <li>
                          <span>Max Interest</span>{JSON.parse(item.bankProductInfo)['interest_max']} %
                        </li>
                        <li>
                          <span>Processing Fees</span>{JSON.parse(item.bankProductInfo)['processing_fee']}
                        </li>
                        <li>
                          <span>Fees</span>{JSON.parse(item.bankProductInfo)['fee']} {JSON.parse(item.bankProductInfo)['processing_fee'] == 'fixed' ? " %" : ""}
                        </li>
                      </ul>
                    </div>}

                  </div>
                </div>

                <div className="actionPnl">
                  <div className="actBtnArea">
                    <Link href={item.slug + utmData}><a className="grabDeal" onClick={deleteSession}>Grab Deal</a></Link>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </section>
      </div>

    </>

  )
}

export default midcontent