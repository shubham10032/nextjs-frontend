import CallbackForm from "../components/page/callbackForm"
import Map from './../components/page/map'
import Image from "next/image"
const Franchisemap = () => {

  return (
    <>

      <div className="franchise-banner">
        <Image src="/images/fran-banner.jpg" alt="" height={250} width={1660} />
      </div>
      <h1 className="text-center"> Our Franchise Maps</h1>
      <div className="container-fluid mb-4 px-4">
        <div className="row map_container">
          <div className="col-md-6">
            <Map />
          </div>
          <div className="col-md-6 franchise_listing_area ">
            <div className="heading">Let's start something big together.</div>
            <p>ReferLoan introduced a franchise model which allows you to grow your business at zero investment and
              risk-free life.</p>
            <div className="feature_area">
              <h3>ReferLoan - A leading fintech company</h3>
              <ul>
                <li>
                  <span className="icon_box">345+</span>
                  <h2>Financial Products</h2>
                </li>
                <li>
                  <span className="icon_box">175+</span>
                  <h2>Banks/NBFCs tie-ups</h2>
                </li>
                <li>
                  <span className="icon_box">40+</span>
                  <h2>Franchise Openings</h2>
                </li>
              </ul>
            </div>
            <CallbackForm />
          </div>
        </div>
      </div>
    </>

  )
}

export default Franchisemap