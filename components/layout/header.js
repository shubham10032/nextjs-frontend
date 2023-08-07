import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
export default function Header(children) {
  const router = useRouter();
  const [status, setStatus] = useState(false);
  let meta_description = '';
  let meta_keyword = '';
  let meta_title = '';
  let slug = '';
  if (children.children.props.data !== undefined) {
    if (children.children.props.data.length != 0) {
      meta_description = children.children.props.data[0].meta_description;
      meta_keyword = children.children.props.data[0].meta_keyword;
      meta_title = children.children.props.data[0].meta_title;
      slug = children.children.props.data[0].slug;
    }
  }
  const currentDate = new Date();
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const formatter = new Intl.DateTimeFormat('en-UK', options);
  const formattedDate = formatter.format(currentDate);
  const titles = (meta_title || `Apply Personal Loan, Gold Loan, Home Loan, Business Loan, Education Loan Online India. - ReferLoan`);
  const description = meta_description || `We provide wide range of services like loans, Credit Card, Insurance and Investment. ${formattedDate} We aim to bring a stronghold in the market and aim to build a satisfied community that reaches out to us anytime and everytime they need.`;
  const keywords = meta_keyword || 'Apply for Loans, Apply for credit card, Apply for Insurance, Loans Apply';
  const path = slug ? 'https://referloan.in/' + slug : 'https://referloan.in';

  useEffect(() => {
    const currentDate = new Date();
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formatter = new Intl.DateTimeFormat('en-UK', options);
    const formattedDate = formatter.format(currentDate);
    document.title = `${titles} - ${formattedDate}`;
    const metaKeywordsTag = document.querySelector('meta[name="keywords"]');
    if (metaKeywordsTag) {
      metaKeywordsTag.setAttribute('content', `${keywords}, ${currentDate}`);
    }
  }, [titles, keywords, description]);
  useEffect(() => {
    var debounceTimer = setTimeout(() => {
      setStatus(false);
      
    }, 500);
    return () => clearTimeout(debounceTimer);
  }, [])
  return (
    <>
      <Head>
        <meta name="viewport"  content="width=device-width, initial-scale=1.0" content-type = "text/html"/>
        <meta name="google-site-verification" content="A-2wTKInJgPeZBUQnYLPGAffZ_YmNF-ARQxpu3twdGw" />
        <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" /> 
        <title>{`${titles} - ${new Date().toLocaleDateString('en-UK', { day: '2-digit', month: 'short', year: 'numeric' })}`}</title>
        <meta name={'description'} content={description} />
        <meta name={'keywords'} content={`${keywords}  ${new Date().toLocaleDateString('en-UK', { day: '2-digit', month: 'short', year: 'numeric' })}`} />
        <link rel={'canonical'} href={path} />
        <meta property={'og:title'} content={`${titles}  ${new Date().toLocaleDateString('en-UK', { day: '2-digit', month: 'short', year: 'numeric' })}`} />
        <meta property={'og:description'} content={`${description}  ${new Date().toLocaleDateString('en-UK', { day: '2-digit', month: 'short', year: 'numeric' })}`} />
        <meta property={'og:url'} content={path} />
        <meta property={'og:type'} content={'website'} />
        <meta name={'author'} content="Referloan" />
        <meta name={'subject'} content="Finance Company" />
        <meta name={'owner'} content="Referloan" />
        <meta name={'coverage'} content="India" />
        <meta name={'Geography'} content={'1/25, 1rd floor, Lalita Park, Laxmi Nagar, (Land mark near Gurudawara)110092 Delhi, India'} />
        <meta name={'Language'} content={'English'} />
        <meta httpEquiv={'CACHE-CONTROL'} content={'PUBLIC'} />
        <meta name={'distribution'} content={'Global'} />
        <meta name={'audience'} content={'All'} />
        {process.env.SITEHOST === 'referloan.in' ? (
          <>
            <meta name="revisit-after" content="3 days" />
            <meta name="robots" content="index,follow" />
          </>
        ) : (
          <meta name="robots" content="noindex,nofollow" />
        )}
        <meta name={'country'} content={'India'} />
        {/* Favicon */}
        <link href={'/favicon.ico'} rel={'icon'} type={'image/x-icon'} />
        {/* core Custom css */}
      
        {
           router.pathname=="/"?
           <>
             
                
                <link href={'/css/global.css'} rel={'stylesheet'}   preload="true" />
                <link href={'/css/styles.css'} rel={'stylesheet'}   preload="true" />
                <link rel="stylesheet" href="/css/slick.css" />
                {/* <link href={'/css/menu.css'} rel={'stylesheet'}   preload="true" /> */}
                <link rel="stylesheet" href="/css/custom.css" as="style" preload="true"/>
                <link href={'/css/new_style.css'} rel={'stylesheet'} media="all" preload="true" />
                <link href={'/css/home.css'} rel={'stylesheet'} />
                <link href={'/css/user-dashboard.css'} rel={'stylesheet'} />
               
              <link href={'/css/innerPages.css'} rel={'stylesheet'}  preload="true" />
             
              <link href={'/css/tophome.css'} rel={'stylesheet'} preload = "true" />
              
              {/* <link href={'/css/font/lato.css'} rel={'stylesheet'} /> */}
           </>:<>
           <link href={'/css/global.css'} rel={'stylesheet'}   preload="true" />
              <link href={'/css/styles.css'} rel={'stylesheet'}   preload="true" />
              <link rel="stylesheet" href="/css/slick.css" />
              {/* <link href={'/css/menu.css'} rel={'stylesheet'}   preload="true" /> */}
              <link rel="stylesheet" href="/css/custom.css" as="style" preload="true"/>
              <link href={'/css/new_style.css'} rel={'stylesheet'} media="all" preload="true" />
              {/* <link href={'/css/font/lato.css'} rel={'stylesheet'} /> */}
             <link href={'/css/user-dashboard.css'} rel={'stylesheet'} />
             <link href={'/css/innerPages.css'} rel={'stylesheet'}  preload="true" />
             <link href={'/css/tophome.css'} rel={'stylesheet'} preload = "true" />
             <link href={'/css/home.css'} rel={'stylesheet'} />
           </>

        }
      </Head>

    </>
  )
}
