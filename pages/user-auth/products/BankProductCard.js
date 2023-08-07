import Link from 'next/link';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const BankProductCard = ({ data=[] }) => {
const [utm,setUtm] = useState('');

useEffect(()=>{
  if (typeof window !== 'undefined') {
    setUtm(JSON.parse(localStorage.getItem("Utm")));
}
},[])

  return (
    data.length>0 && data.map((child, index) => (
      <div key={index} className=" col-md-4 ">
        <Link href={`/${child.slug}?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=${utm}`}>
        <div className="offer-card card-offer">
          <a href="#">
            <div className="offer-content">
              <div className='offer-in-card'>
                <div className='image-pro'>
                  <img src={`/uploads/prod_banimage/${child.name.trim().toUpperCase().replace(/\s/g, '_')}_img.webp`} alt=''onError={() => {}}/>
                </div>
                <p>{child.name}</p>
              </div>
            </div>
            <span className="lock"><i className="fas fa-long-arrow-alt-right"></i></span>
          </a>
        </div>
        </Link>
      </div>
    ))
  )
}

export default BankProductCard