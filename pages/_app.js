import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../components/layout'))
const AuthLayout = dynamic(() => import('../components/authLayout'))
import { useEffect, useState } from "react";
const Loader = dynamic(() => import('../components/page/loader'))
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "../store";
import Script from "next/script";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

function MyApp({ Component, pageProps, data }) {
  const router = useRouter();
  const persistor = persistStore(store);
  const [status, setStatus] = useState(true)
  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");

    var debounceTimer = setTimeout(() => {
      setStatus(false);
    }, 1000);
   
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    return () => {
      clearTimeout(debounceTimer);
    }

  }, [router]);


  let url = router.asPath.split("/");

  if (url[1] === "user-auth") {
    return (
      <>
        {status && <Loader />}
        <style jsx global>{`
        body {
          background: #F8F8F8};
        }
      `}</style>
        <Provider store={store}>
          <AuthLayout {...Component}>
            <Component {...pageProps} />
          </AuthLayout>
        </Provider>
      </>
    );
  } else {
    return (
      <>
        <Provider store={store}>
          <Layout {...Component}>
            <Component {...pageProps} />
          </Layout>
        </Provider>
          {process.env.SITEHOST == "referloan.in" ? (
          <>
            <Script>
              {` window.dataLayer = window.dataLayer || [];
                function gtag() {
                    dataLayer.push(arguments)
                }
                gtag('js', new Date());
                gtag('config', 'AW-513485835');
            `}
            </Script>

            <Script src="https://www.googletagmanager.com/gtag/js?id=UA-226709847-1"></Script>
            <Script>
              {` window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments)
            }
            gtag('js', new Date());
            gtag('config', 'UA-226709847-1');
        `}
            </Script>
          </>
        ) : (
          ""
        )}

        <Script type="application/ld+json">
          {`
        {
        "@context":"https://schema.org",
        "@type":"LoanOrCredit",
        "name":"paysense personal loan",
        "loanTerm":{
            "@type":"QuantitativeValue",
            "name": "Repayment terms",
          "minValue":"3",
            "maxValue":"60",
            "unitCode": "MON"
        },
        "annualPercentageRate":[
          {
            "@type":"QuantitativeValue",
            "name": "variable interest rates",
            "minValue":"16",
            "maxValue":"36"
          },
          {
            "@type":"QuantitativeValue",
            "name": "reducing interest rates",
            "minValue":"14",
            "maxValue":"24"
          }
          ],
        "amount":[
          {
            "@type": "MonetaryAmount",
            "name":"Personal loan upto ",
            "minValue":"5000",
            "maxValue":"1000000",
            "currency":"INR"
          }
        
          ]
        }
        `}{" "}
        </Script>
          </>
      
    );
  }
}

export default MyApp;
