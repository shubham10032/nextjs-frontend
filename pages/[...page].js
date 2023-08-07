import { db } from './../config/db'
import { useRouter } from 'next/router'
import axios from 'axios';
import dynamic from 'next/dynamic'

const ProductBankList = dynamic(() => import('../components/page/product_bank_list'))
const Apply = dynamic(() => import('../components/page/apply'))
const ContentPage = dynamic(() => import('../components/page/content_page'))
const Error = dynamic(() => import('../components/page/error'))
import { useState, useEffect } from 'react';

function contentPage({ ip, url, refer, Component, data, form_schema, specification, faq, ratingg,additionalInfo,product_banner,slug }) {
  const [visitorId, setVisitorId] = useState('')
  const router = useRouter()
  let utmId = '';
  const { utm_campaign, utm_id, utm_medium, utm_source } = router.query
  if (utm_id === undefined) {
    utmId = utm_campaign
  } else {
    utmId = utm_id;
  }

  const addVisitor = async () => {
    if (!visitorId) {


      const jsonData = {
        utm_campaign, utm_id, utm_medium, utm_source, utmId, ip, bank_product_id: data.length > 0?data[0].bank_product_id:''
      }
      try {
        const res = await axios.post(`${process.env.APIHOST}/api/add-visitors`, jsonData);
        if (res.data.status) {
          if (typeof window !== 'undefined') {
            localStorage.setItem("visitorId", ip);
          }
          setVisitorId(window.localStorage.getItem("visitorId"))
        }
      } catch (error) {
        console.log("Message : ", error.message)
      }
    }
  }

  useEffect(() => {
    if (!window.localStorage.getItem("visitorId")) {
      addVisitor()
    }
  }, [visitorId])

  return (
    <>
      {Component == 'ContentPage' && <ContentPage {...{ data, faq,additionalInfo,product_banner,slug }} />}
      {Component == 'ProductBankList' && <ProductBankList url={url} refer={refer} data={data} />}
      {Component == 'Apply' && <Apply additionalInfo={additionalInfo} data={data} form_schema={form_schema} specification={specification} faq={faq} ratingg={ratingg} />}
      {Component == 'Error' && <Error data={data} />}
    </>
  )
}

export async function getServerSideProps(context) {
  const { query } = context;
  let url = query.page;
  let ref = query.ref;
  let refer = '';
  let data;
  let Component = 'blank';

  // Content Page
  let faq = '1';

  // Apply Page
  let specification = '1';
  let ratingg = 1;

  // Product Bank Page
  let bank_product_id;
  let form_schema = '1';
  let ip = null;
  let additionalInfo = '';
  let product_banner = '';
  let slug = '';
  let addition_res = '';

  url = url.join("/");

  const res = await db.query("SELECT * FROM `pages` WHERE `slug` = ?", [url]);
  
  if (res.length !== 0) {
    bank_product_id = res[0].bank_product_id;
    const pageId = res[0].id;

    if (bank_product_id != null) {
      try {
        form_schema = (await axios.get(`${process.env.APIHOST}/api/sections/form/${bank_product_id}`)).data;
        const [apply_response, content_response, rating_response, addition_res] = await Promise.all([
          db.query("SELECT * FROM `product_bank_specifications` WHERE product_bank_specifications.bank_product_id = ?", [bank_product_id]),
          db.query("SELECT * FROM `faqs` WHERE faqs.page_id = ? ORDER BY `order`", [pageId]),
          db.query("SELECT * FROM `view_rating` WHERE `bank_product_id` = ?", [bank_product_id]),
          db.query("SELECT additional_info FROM view_bank_product WHERE `page_id` = ?", [pageId])
        ]);

        specification = JSON.parse(JSON.stringify(apply_response));
        faq = JSON.parse(JSON.stringify(content_response));
        ratingg = JSON.parse(JSON.stringify(rating_response));
        additionalInfo = JSON.parse(JSON.stringify(addition_res));
      } catch (error) {
        console.log('bank product id missing - can not call apply page - Message:', error.message);
      }

      Component = 'Apply';
    } else {
      try {
        const [content_response, productId, productBanner, productSlug, addition_res] = await Promise.all([
          db.query("SELECT * FROM `faqs` WHERE faqs.page_id = ? ORDER BY `order`", [pageId]),
          db.query("SELECT id from view_product WHERE `page_id` = ?", [pageId]),
          db.query("SELECT product_banner from products WHERE id = (SELECT id from view_product WHERE `page_id` = ?)", [pageId]),
          db.query("SELECT slug from view_bank_product WHERE product_id = (SELECT id from view_product WHERE `page_id` = ?)", [pageId]),
          db.query("SELECT * from bank_products WHERE `products_id` = (SELECT id from view_product WHERE `page_id` = ?)", [pageId])
        ]);
        faq = JSON.parse(JSON.stringify(content_response));
        product_banner = JSON.parse(JSON.stringify(productBanner));
        slug = JSON.parse(JSON.stringify(productSlug));
        additionalInfo = JSON.parse(JSON.stringify(addition_res));
      } catch (error) {
        console.log('page id missing - can not call content page - Message:', error.message);
      }

      Component = 'ContentPage';
    }
  } else {
    if (ref) {
      refer = ref;
      Component = 'ProductBankList';
    } else {
      Component = 'Error';
    }
  }

  const { req } = context;

  if (req.headers["x-forwarded-for"]) {
    ip = req.headers["x-forwarded-for"].split(',')[0];
  } else if (req.headers["x-real-ip"]) {
    ip = req.connection.remoteAddress;
  } else {
    ip = req.connection.remoteAddress;
  }

  data = JSON.parse(JSON.stringify(res));
  context.res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600,stale-while-revalidate=59');

  return {
    props: {
      url,
      refer,
      Component,
      ip,
      data,
      form_schema,
      specification,
      faq,
      ratingg,
      additionalInfo,
      product_banner,
      slug
    }
  };
}


export default contentPage

