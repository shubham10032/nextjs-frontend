import Home from './../components/home'
import { db } from './../config/db'
import { useState, useEffect } from "react";

import { useDispatch } from 'react-redux';
const index = ({ partner, testimonial, loanProduct, creditProduct }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    
    setLoading(false)
  }, [])
  return (
    <>
      {/* {loading && <Loader loading={loading} />} */}
      <Home partner={partner} testimonial={testimonial} loanProduct={loanProduct} creditProduct={creditProduct} />
    </>
  )
}


export async function getServerSideProps(context) {
 
  const testimonialPromise = await db.query("SELECT client_pic,client_name,client_message FROM `testimonials` WHERE `is_active` = '1' limit 3");
  
  const testimonial = JSON.parse(JSON.stringify(testimonialPromise));
  context.res.setHeader('Cache-Control', 'public, max-age=36000, s-maxage=36000,stale-while-revalidate=59');
  return { props: { testimonial } }
}

export default index