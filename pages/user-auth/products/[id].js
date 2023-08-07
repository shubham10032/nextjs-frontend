import { useState,useEffect } from "react";
import dynamic from 'next/dynamic'
import axios from "axios";
const BankProductsCard = dynamic(() => import('./BankProductCard'))
import { useRouter } from "next/router";
const BankProducts = () => {
  const router = useRouter()
  const [sidebarmenu, setSidebarMenu] = useState([]);
  const getsidebarMenu = async () => {
    try {
      const res = await axios.get(`${process.env.APP_URL}/headermenu`);
      setSidebarMenu(res.data);
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getsidebarMenu()
  }, []);


  return (
    <>
      <div className="content-row-1">
        <div className="content-col">
          <div className="offer-section">
            <h3 className="offer-title">Offer's for you</h3>
            <div className="gx-0 gy-3 row">

              {
                sidebarmenu != null && sidebarmenu.length > 0 && sidebarmenu.slice(0, 2).map((item, i) => (
                  item.product.length > 0 && item.product.map((crl, ind) => (
                    crl.page_id == router.query.id && <BankProductsCard key={ind} data={crl.bank_product} />
                  ))
                ))
              }
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default BankProducts